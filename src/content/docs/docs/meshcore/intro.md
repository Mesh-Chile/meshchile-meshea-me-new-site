---
title: Introducción a MeshCore
description: MeshCore es un protocolo de red mesh LoRa alternativo, con enfoque en repeaters dedicados y eficiencia de espectro.
---

MeshCore es un protocolo de red mesh sobre LoRa desarrollado de forma independiente a Meshtastic. Comparte el mismo hardware — placas ESP32/nRF52 con chip SX1262 — pero tiene una arquitectura de red y un protocolo de radio distintos.

:::caution[Estado exploratorio]
MeshCore está en evaluación activa por la comunidad chilena. La información de esta página puede quedar desactualizada a medida que el proyecto evoluciona. Consulta siempre [meshcore.co.uk](https://meshcore.co.uk) y el [foro](https://foro.meshchile.cl) para el estado actual.
:::

## Diferencias con Meshtastic

| | Meshtastic | MeshCore |
|---|---|---|
| **Routing** | Flooding con deduplicación | Orientado a repeaters dedicados |
| **App móvil** | Oficial (Android/iOS) | En desarrollo |
| **Madurez** | Consolidado | Exploración activa |
| **Config Chile** | LongFast / 919.875 MHz | SF8 / 927.875 MHz |
| **Comunidad global** | Grande | Pequeña pero activa |
| **Hardware** | ESP32, nRF52 | ESP32, nRF52 |

## Ventajas que explora la comunidad

- **Repeaters dedicados**: MeshCore distingue explícitamente entre clientes y repeaters, lo que permite optimizar la red de forma más granular
- **Parámetros de radio**: el preset chileno (SF8, BW 62.5 kHz) prioriza menor latencia y mayor capacidad de canal a costa de algo de alcance
- **Protocolo abierto**: el protocolo está documentado, lo que facilita implementaciones alternativas

## Estado en Chile

La comunidad chilena tiene un grupo activo evaluando MeshCore. Los parámetros de configuración regional están definidos — ver [Config Chile MeshCore](/docs/meshcore/config-chile) — y hay nodos desplegados en modo prueba.

## Siguientes pasos

- [Flashear firmware MeshCore](/docs/meshcore/flasheo)
- [Configurar para Chile](/docs/meshcore/config-chile)
- [Entender los repeaters](/docs/meshcore/repeaters)
