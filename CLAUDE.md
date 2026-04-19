# meshea.me - Meshtastic Chile

Sitio de la comunidad. Migración desde meshtasticame.cl (SPA Firebase que muere).

## Contexto del código viejo
- Repo viejo en /reference/meshtasticame-old (READ-ONLY, solo referencia)
- Stack viejo: [completalo vos — React/Vue/etc + Firebase + Cloudinary]
- Screenshots del sitio renderizado en /reference/screenshots/

## Qué migrar desde el código viejo
- Textos de todas las páginas públicas
- Assets de Cloudinary: extraer URLs de los componentes,
  bajar a /src/assets/ las imágenes que SÍ usamos en el nuevo
  (no bajar todo, curar)
- Datos de config del footer (región, frecuencia, MQTT) → van como
  constantes en src/config/meshtastic-chile.ts

## Qué NO migrar desde el código viejo
- Firebase Auth, Firestore, Realtime DB — nada de eso
- Rutas: /dashboard, /admin, /register, /login, /mi-panel
- Cloudinary API calls dinámicas — solo referenciamos URLs estáticas
- Componentes de UI del viejo — rehacer en Astro idiomático
- NO copiar CSS/Tailwind del viejo tal cual — rediseñar

## Stack nuevo
- Astro 4.x + Starlight
- Tailwind (integración oficial Astro)
- Deploy: Cloudflare Pages
- Islands: Preact + Leaflet para /mapa

## Rutas del sitio nuevo
- /              → landing (layout custom, NO usa layout de Starlight docs)
- /mapa          → mapa de nodos (con island de Leaflet)
- /noticias/*    → content collection
- /docs/*        → Starlight nativo (configuración, hardware, red Chile, FAQ)
- /comunidad     → redirects a foro.meshchile.cl y enlaces sociales

## Convenciones
- Español chileno
- Frecuencia Chile: 919.875 MHz, Región AU/NZ 915-928, LongFast slot 20
- MQTT público: mqtt.meshchile.cl, usuario mshcl2025, root topic msh/CL
- Footer con: Telegram, Discord, WhatsApp, Instagram, Email
- Link cruzado permanente a foro.meshchile.cl

## Qué NO hacer
- NO agregar CMS en fase 1 (evaluar Keystatic en fase 2)
- NO meter Firebase ni servicios propietarios
- NO arrastrar decisiones del código viejo sin cuestionarlas

