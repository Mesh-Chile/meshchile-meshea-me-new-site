# Migración meshea.me

Hub documental y puerta de entrada de las redes mesh LoRa comunitarias de Chile.

## Qué es este sitio

- Documentación canónica y punto de entrada para recién llegados
- **Directorio de operadores** de la red chilena (la capa humana, no la técnica)
- **Technology-agnostic**: soporta Meshtastic (consolidado) y MeshCore (exploración), abierto a lo que venga
- **NO es** un monitor de red ni un catastro de nodos — eso vive en mapa/malla/vista
- **NO es** una app con auth ni moderación custom — identidad vive en foro.meshchile.cl
- meshea.me se vuelve fuente de verdad de identidad humana; los subdominios técnicos pueden consumir ese JSON para enriquecer sus vistas

## Ecosistema meshea.me / meshchile.cl

Los dos dominios apuntan a la misma infraestructura con identidades visuales distintas. Servicios existentes a los que meshea.me linkea:

- **foro.meshchile.cl** — conversación comunitaria (Discourse)
- **mapa.meshea.me** — mapa geográfico de nodos
- **malla.meshea.me** — topología de la red
- **vista.meshea.me** — timeline / actividad

## Stack técnico

- Astro 4.x + Starlight
- Tailwind (integración oficial de Astro)
- Deploy: Cloudflare Pages (free tier es sobrado)
- Islands puntuales en Preact si hace falta interactividad
- Sin CMS en fase 1 (evaluar Keystatic en fase 2 si hay colaboradores no-técnicos)
- Sin auth, sin backend, sin Firebase

## Decisiones arquitectónicas (locked)

- Contenido en Git, moderación vía PR review
- "Edit on GitHub" visible en todas las páginas
- Español chileno (no rioplatense)
- Assets al repo (no dependencia de Cloudinary)
- HTML estático puro servido por CDN

## Qué se descarta del sitio viejo

- `/register`, `/login`, `/dashboard`, `/admin`, `/mi-panel`
- Auth completo (Google/Microsoft/OTP) → identidad vive en el foro
- Firebase, Firestore, IndexedDB, service workers
- Gestión de nodos con ubicación → ya está en mapa/malla/vista
- Moderación custom de noticias → reemplazada por PR review
- Noticias del sitio viejo → no tienen valor rescatable, se descartan
- Soporte offline → innecesario para sitio estático

## Qué se migra del sitio viejo (contenido, no código)

- Copy del hero y secciones del home
- Textos de "¿Qué es Meshtastic?"
- Datos de configuración regional (footer viejo: 915-928 MHz, LongFast slot 20, 919.875 MHz, MQTT)
- Assets visuales relevantes: logo, foto LoRa/Heltec del hero

## Estructura de docs (tres niveles)

**Nivel 1 - Agnóstico al framework** (arriba)
- ¿Qué es LoRa?
- ¿Qué es una red mesh?
- Regulación Chile (915 MHz ISM, SUBTEL, potencias)
- Hardware compatible (Heltec, T-Beam, RAK — mismo hardware, distinto firmware)
- Antenas, RF, deployment (solar, mástil, etc.)

**Nivel 2 - Por framework** (secciones paralelas)
- `/docs/meshtastic/` — introducción, flasheo, configuración Chile, MQTT
- `/docs/meshcore/` — introducción, flasheo, configuración Chile, repeaters

**Nivel 3 - Comparativas** (para ayudar a elegir)
- Tabla objetiva: routing, telemetría, apps, hop limit, madurez
- Guía por caso de uso (emergencia urbana, cordillera, grupo móvil, red fija)

## Estructura del home

```
Hero: "Comunicación sin límites con redes mesh"
  ↓
¿Qué es una red mesh LoRa? (link a docs)
  ↓
Redes activas en Chile:
  [Card Meshtastic — consolidado] [Card MeshCore — exploratorio]
    → mapa.meshea.me                → herramientas cuando existan
    → malla.meshea.me
    → vista.meshea.me
    → docs específicas              → docs específicas
  ↓
Cómo sumarte:
  1. Elegí hardware compatible
  2. Elegí framework (Meshtastic o MeshCore)
  3. Sumate al foro
  ↓
Footer: config regional + sociales + links cruzados
```

## Fases de ejecución

### Fase 1 — Fundaciones ✅
- [x] Bootstrap Starlight + Tailwind
- [x] Paleta y tipografía extraídas de screenshots del sitio viejo
- [x] Layout del home (custom, no usa layout de docs de Starlight)
- [x] Footer común con datos Chile + sociales + links a mapa/malla/vista/foro

### Fase 2 — Landing ✅
- [x] Hero con foto LoRa/Heltec (split layout, imagen optimizada con astro:assets)
- [x] Sección "¿Qué es una red mesh LoRa?" con foto T-Echo
- [x] Sección "Redes activas en Chile" con cards Meshtastic y MeshCore
- [x] Sección "Cómo sumarte" con 3 pasos y foto de hardware

### Fase 3 — Docs nivel 1 agnóstico ✅
- [x] Estructura sidebar Starlight con los tres niveles
- [x] LoRa y mesh (conceptos)
- [x] Regulación Chile (915 MHz ISM, SUBTEL)
- [x] Hardware compatible (inventario de placas)
- [x] Deployment (antenas, mástil, solar)

### Fase 4 — Docs nivel 2 específicas ✅
- [x] `/meshtastic/` → intro, flasheo, config Chile, MQTT broker comunitario
- [x] `/meshcore/` → intro, flasheo, config Chile, repeaters

### Fase 5 — Docs nivel 3 comparativa ✅
- [x] Tabla comparativa Meshtastic vs MeshCore
- [x] Guía "¿cuál elegir?" por caso de uso

### Fase 6 — Directorio de operadores
- [ ] Schema Zod para content collection `operators` (ver OPERATORS.md)
- [ ] Crear 3-5 perfiles semilla (grupo de coordinación nacional)
- [ ] Página `/comunidad` con grid filtrable (región, framework, rol)
- [ ] Página `/comunidad/[slug]` individual por operador
- [ ] Página `/comunidad/mapa` con Leaflet respetando `precision`
- [ ] Página `/comunidad/agregar` con form que genera PR pre-llenado
- [ ] Endpoint `/api/operators.json` para consumo cruzado desde mapa/malla/vista

### Fase 7 — Deploy
- [ ] GitHub Actions build
- [ ] Cloudflare Pages + dominio meshea.me
- [ ] Redirect meshtasticame.cl → meshea.me mientras el dominio viejo viva

### Fase 8 — Opcional (si se justifica)
- [ ] i18n (inglés) para atraer colaboradores globales
- [ ] Keystatic si hay colaboradores no-técnicos pidiendo UI
- [ ] PWA si hay demanda real de offline
- [ ] Enriquecimiento cruzado: pulls info de mapa.meshea.me para mostrar stats en home
- [ ] Blog o bitácora comunitaria si alguna vez surge la necesidad real

## Principios de diseño

- Cero backend, cero auth, cero servicios propietarios
- Cero duplicación de features que ya viven en subdominios hermanos
- Technology-agnostic en tono y estructura — ningún framework se presenta como "el oficial"
- Honestidad sobre madurez: Meshtastic está consolidado, MeshCore es exploratorio
- Linkea afuera sin complejos (foro, mapa, malla, vista, meshtastic.org, meshcore.co)
- Contenido compartido entre frameworks vive una sola vez (nivel 1) y se referencia
- **Privacidad granular**: cada operador decide qué expone (precisión de ubicación, canales de contacto, etc.) vía frontmatter

## Criterios de éxito

- Un recién llegado entiende en 30 segundos qué es esto y cómo sumarse
- Un coordinador puede mergear un PR de contenido en 2 minutos
- Un colaborador nuevo puede hacer su primer PR sin leer el README completo
- Si MeshCore gana tracción (o aparece otro framework), agregar soporte es trivial
- Si Meshtastic se estanca o cambia radicalmente, la marca y el sitio sobreviven

## Qué NO hacer (guardarrailes)

- No reintroducir auth en fase alguna
- No copiar código del sitio viejo (solo contenido)
- No agregar dependencias de SaaS pagos
- No meter JavaScript innecesario en páginas estáticas
- No asumir Meshtastic como default en tono/copy general
- No duplicar contenido entre niveles de docs (referenciar siempre al nivel 1 cuando se pueda)
