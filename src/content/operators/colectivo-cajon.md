---
displayName: "Colectivo Mesh Cajón"
alias: ["cajon-mesh"]
location:
  region: "Metropolitana"
  commune: "San José de Maipo"
  precision: "commune"
frameworks: ["meshtastic", "meshcore"]
role: ["operator", "contributor"]
nodes:
  - shortName: "CJ01"
    longName: "Las Melosas Relay"
    hardware: "Heltec V3"
    role: "repeater"
    framework: "meshtastic"
    active: true
  - shortName: "CJ02"
    longName: "Embalse El Yeso"
    hardware: "Heltec V3"
    role: "router"
    framework: "meshtastic"
    active: false
contact:
  telegram: "@mesh_cajon"
  foro: "colectivo-cajon"
availability:
  dmOpen: false
  helpsNewcomers: false
  covers: ["Cajón del Maipo", "San José de Maipo", "Embalse El Yeso"]
joinedAt: "2024-11"
tags: ["cordillera", "emergencia", "solar", "montaña"]
---

Colectivo de radiooperadores del Cajón del Maipo. La red nació como respuesta a la falta de cobertura celular en la zona alta del cajón. Operamos nodos con panel solar en puntos estratégicos para dar cobertura en emergencias de montaña.
