---
title: Meshtastic vs MeshCore
description: Tabla comparativa objetiva entre Meshtastic y MeshCore en las dimensiones que importan para elegir framework.
---

Esta tabla busca ser objetiva. Ninguno de los dos frameworks es "el oficial" de esta comunidad — son alternativas con tradeoffs distintos y la comunidad chilena opera ambos.

## Comparativa general

| | Meshtastic | MeshCore |
|---|---|---|
| **Madurez** | Consolidado, años de desarrollo | En desarrollo activo, más joven |
| **App móvil** | Oficial para Android e iOS | En desarrollo |
| **Interfaz web** | client.meshtastic.org | En desarrollo |
| **Documentación** | Extensa en meshtastic.org | Parcial, en evolución |
| **Comunidad global** | Grande (miles de nodos) | Pequeña pero creciente |
| **Comunidad Chile** | Mayoría de nodos activos | Grupo de evaluación activo |

## Radio y protocolo

| | Meshtastic | MeshCore |
|---|---|---|
| **Frecuencia Chile** | 919.875 MHz | 927.875 MHz |
| **Spreading Factor** | SF11 (LongFast) | SF8 |
| **Bandwidth** | 250 kHz | 62.5 kHz |
| **Coding Rate** | 4/5 | 4/5 |
| **Velocidad aprox.** | ~5 kbps | ~1.5 kbps |
| **Routing** | Flooding con deduplicación | Repeaters dedicados + flooding |
| **Hop limit por defecto** | 3 | configurable |
| **Interferencia entre sí** | No (frecuencias distintas) | No |

## Funcionalidades

| | Meshtastic | MeshCore |
|---|---|---|
| **Mensajería texto** | ✅ | ✅ |
| **GPS / posición** | ✅ | ✅ |
| **Canales cifrados** | ✅ AES-256 | ✅ |
| **Telemetría sensores** | ✅ (temperatura, batería, etc.) | Parcial |
| **MQTT bridge** | ✅ (broker comunitario en Chile) | En desarrollo |
| **Mensajes privados** | ✅ | ✅ |
| **Trackers dedicados** | ✅ (modo Tracker) | ✅ |
| **Nodos de infraestructura** | ✅ (roles ROUTER y ROUTER_LATE diferenciados) | ✅ (repeater dedicado) |

## Hardware

| | Meshtastic | MeshCore |
|---|---|---|
| **ESP32** | ✅ | ✅ |
| **nRF52** | ✅ | ✅ |
| **Heltec V3** | ✅ | ✅ |
| **T-Beam** | ✅ | ✅ |
| **T-Echo** | ✅ | ⚠️ verificar |
| **RAK WisBlock** | ✅ | ✅ |
| **SenseCAP T1000-E** | ✅ | ❌ |

El mismo hardware puede cambiar de firmware — no es una decisión permanente.

## Interoperabilidad

Meshtastic y MeshCore **no son interoperables**: usan frecuencias, protocolos y formatos de mensaje distintos. Un nodo Meshtastic no puede comunicarse directamente con un nodo MeshCore, aunque ambos usen LoRa en la banda 915–928 MHz. Al usar frecuencias distintas (919 vs 927 MHz), coexisten sin interferirse.

## Honestidad sobre el estado actual en Chile

- **Si quieres unirte a la red chilena hoy y ver nodos en el mapa**: Meshtastic tiene más cobertura y el broker MQTT funcionando.
- **Si quieres participar en la exploración técnica de una alternativa**: MeshCore tiene un grupo activo y es bienvenida la colaboración.

Para decidir según tu caso de uso específico, ve a [¿Cuál elegir?](/docs/cual-elegir).
