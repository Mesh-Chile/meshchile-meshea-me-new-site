---
title: ¿Qué es LoRa?
description: LoRa (Long Range) es la tecnología de radio que permite comunicación a kilómetros de distancia con consumo de energía mínimo.
---

LoRa (Long Range) es una técnica de modulación de radio diseñada para transmitir datos a largas distancias con el mínimo consumo de energía posible. No es un protocolo ni un estándar completo — es la capa física de radio sobre la que se construyen protocolos como Meshtastic o MeshCore.

## Cómo funciona

LoRa usa **Chirp Spread Spectrum (CSS)**: en vez de transmitir en una frecuencia fija, esparce la señal a lo largo de un rango de frecuencias mediante una señal que sube o baja de tono continuamente (chirp). Esto hace que la señal sea extremadamente resistente al ruido y a la interferencia, y permite recibirla incluso cuando está varios decibeles por debajo del piso de ruido.

Los parámetros clave que determinan el comportamiento de un enlace LoRa son:

| Parámetro | Qué hace | Chile (Meshtastic) | Chile (MeshCore) |
|---|---|---|---|
| **Frecuencia** | Canal de radio | 919.875 MHz | 927.875 MHz |
| **Spreading Factor (SF)** | Mayor SF = más alcance, menos velocidad | SF11 (LongFast) | SF8 |
| **Bandwidth (BW)** | Mayor BW = más velocidad, menos alcance | 250 kHz | 62.5 kHz |
| **Coding Rate (CR)** | Corrección de errores | 4/5 | 4/5 |

## Banda en Chile

Chile usa la banda **AU/NZ 915–928 MHz** (ISM, libre de licencia). Esta banda está regulada por SUBTEL y permite operación sin licencia dentro de los límites de potencia establecidos. Ver [Regulación Chile](/docs/regulacion-chile) para los detalles legales.

## LoRa vs otras tecnologías

| | LoRa | WiFi | Bluetooth | Celular |
|---|---|---|---|---|
| **Alcance** | 1–15 km | 50–100 m | 10–100 m | depende cobertura |
| **Velocidad** | 0.3–27 kbps | hasta Gbps | hasta 3 Mbps | hasta Gbps |
| **Consumo** | muy bajo | alto | bajo | alto |
| **Infraestructura** | ninguna | router | ninguna | antenas/torres |
| **Costo** | bajo | bajo | bajo | suscripción |

LoRa no compite con WiFi o el celular — es complementario. Sirve para casos donde el alcance y la autonomía importan más que la velocidad: mensajería de emergencia, tracking, telemetría de sensores remotos.

## El chip

El hardware LoRa más usado en la comunidad chilena está basado en los chips **Semtech SX1276/SX1262**. Están integrados en los módulos que usa el hardware compatible: Heltec, T-Beam, RAK WisBlock y otros.

## LoRaWAN vs LoRa

LoRaWAN es una red de IoT centralizada (gateways, servidores de red, dispositivos de un solo salto). **No es lo mismo que Meshtastic o MeshCore**, que son redes mesh peer-to-peer sin infraestructura central. Ambos usan LoRa como capa de radio, pero la arquitectura de red es completamente distinta.
