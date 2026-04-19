# Directorio de operadores (Fase 6)

El directorio de operadores es la **capa humana** de la red chilena.
No es un catastro de nodos (eso está en mapa/malla/vista) sino un
directorio de las personas/colectivos que operan la red.

## Filosofía

- Un operador ≠ un nodo. Un operador puede tener varios nodos,
  cambiarlos, mudarse — el perfil sobrevive.
- Registrarse es una decisión activa (PR), no pasiva (estar online).
- Privacidad granular: el operador decide qué expone.
- meshea.me es fuente de verdad; mapa/malla/vista pueden consumir
  el JSON para enriquecer sus vistas con identidad humana.

## Ubicación

```
src/content/operators/
├── n3v1l.md
├── jperez-valpo.md
├── colectivo-cajon.md
└── ...
```

## Schema Zod (src/content/config.ts)

```typescript
import { defineCollection, z } from 'astro:content';

const operators = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    displayName: z.string(),
    alias: z.array(z.string()).optional(),

    location: z.object({
      region: z.string(),           // "Metropolitana", "Valparaíso", etc.
      commune: z.string().optional(),
      precision: z.enum(['exact', 'approximate', 'commune', 'region']),
      coords: z.tuple([z.number(), z.number()]).optional(),
    }).refine(
      (l) => l.precision === 'region' || l.precision === 'commune' || l.coords !== undefined,
      { message: 'coords requerido si precision es exact o approximate' }
    ),

    frameworks: z.array(z.enum(['meshtastic', 'meshcore'])),

    role: z.array(z.enum(['operator', 'coordinator', 'contributor'])).default(['operator']),

    nodes: z.array(z.object({
      shortName: z.string().max(4),
      longName: z.string(),
      hardware: z.string(),
      role: z.enum(['client', 'router', 'repeater', 'router_late', 'tracker']),
      framework: z.enum(['meshtastic', 'meshcore']),
      active: z.boolean().default(true),
    })).optional(),

    contact: z.object({
      telegram: z.string().nullable().optional(),
      foro: z.string().nullable().optional(),      // handle en foro.meshchile.cl
      email: z.string().email().nullable().optional(),
      website: z.string().url().nullable().optional(),
      discord: z.string().nullable().optional(),
    }).default({}),

    availability: z.object({
      dmOpen: z.boolean().default(false),
      helpsNewcomers: z.boolean().default(false),
      covers: z.array(z.string()).optional(),       // zonas donde da cobertura
    }).default({}),

    joinedAt: z.string(),                            // "2024-09" o ISO date
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { operators };
```

## Ejemplo de archivo válido

```markdown
---
slug: n3v1l
displayName: "Giovanni (n3v1l)"
alias: ["n3v1l", "RFGC"]
location:
  region: "Metropolitana"
  commune: "Cajón del Maipo"
  precision: "commune"
frameworks: ["meshtastic", "meshcore"]
role: ["operator", "coordinator"]
nodes:
  - shortName: "RFGC"
    longName: "Refugio Cajón"
    hardware: "Heltec V3"
    role: "router"
    framework: "meshtastic"
    active: true
contact:
  telegram: "@n3v1l"
  foro: "n3v1l"
  website: "https://a2d.cl"
availability:
  dmOpen: true
  helpsNewcomers: true
  covers: ["Santiago sur-oriente", "Cordillera RM"]
joinedAt: "2024-09"
tags: ["cordillera", "solar", "devops"]
---

Operador mesh en zona cordillerana. Me involucré en 2024 explorando
Meshtastic para un proyecto off-grid en el Cajón del Maipo. Actualmente
explorando MeshCore también. Abierto a colaborar con deployments en
la RM sur-oriente.
```

## Páginas a generar

### `/comunidad`
Grid de operadores con filtros:
- Por región
- Por framework (Meshtastic / MeshCore / ambos)
- Por rol (coordinador / operador / contribuidor)
- Por tag
- Checkbox "solo los que ayudan a recién llegados"

### `/comunidad/[slug]`
Página individual con toda la info del frontmatter + bio + nodos listados.
Link a perfil del foro si existe. Mapa chico si precision permite.

### `/comunidad/mapa`
Island de Leaflet con todos los operadores que tienen precision en
`exact` o `approximate`. Los de `commune` o `region` aparecen en la
lista lateral pero sin pin.

### `/comunidad/agregar`
Formulario HTML puro que construye el YAML en vivo.
Al final, botón que abre GitHub con el archivo pre-llenado:

```
https://github.com/meshchile/meshea/new/main/src/content/operators/
  ?filename=<slug>.md
  &value=<yaml-url-encoded>
```

### `/api/operators.json`
Astro endpoint dinámico en build time que serializa todos los
operadores (filtrando campos privados según `precision` y `contact`)
a JSON público. Para que mapa.meshea.me, malla.meshea.me, vista.meshea.me
puedan cruzar identidad con nodos.

**Importante**: este JSON **NO** expone `coords` si precision es `region`
o `commune`. La privacidad se respeta incluso en el API.

## Convenciones de privacidad

- `precision` es la verdad. Si es `commune`, ninguna vista (UI o API)
  muestra coords, aunque estén en el frontmatter.
- Campos de contacto `null` u omitidos no se exponen en ningún lado.
- El operador es dueño de su archivo y puede editarlo cuando quiera
  vía PR.
- Un operador puede pedir eliminar su perfil en cualquier momento:
  borrás el archivo, se borra del sitio en el próximo build.

## Cross-referencing con nodos reales

Si en el futuro mapa/malla/vista quieren mostrar "quién opera este
nodo", consumen `/api/operators.json` y buscan por `shortName` en el
array `nodes` de cada operador. Match → muestran el link al perfil.
No match → nodo anónimo (está ok, no todos quieren exponerse).

## Escala

Content collections cubren cómodo hasta ~1000 operadores.
Si algún día pasamos eso (improbable para Chile), se migra
a fetch en build desde una BD. El schema ya es compatible.
