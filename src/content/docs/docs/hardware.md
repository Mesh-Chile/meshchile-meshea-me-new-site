---
title: Hardware compatible
description: Inventario de placas LoRa compatibles con Meshtastic y MeshCore. El mismo hardware sirve para ambos firmwares.
---

Una ventaja importante de este ecosistema es que **el hardware es agnóstico al firmware**: la mayoría de las placas que corren Meshtastic también pueden correr MeshCore, y viceversa. Elegir el hardware es independiente de elegir el framework.

Todas las placas listadas acá usan chips LoRa de la familia Semtech SX1276 o SX1262 y microcontroladores ESP32 o nRF52.

## Placas más usadas en Chile

### Heltec WiFi LoRa 32 V3

La placa más común en la comunidad chilena. Compacta, con pantalla OLED integrada y USB-C.

| | |
|---|---|
| **MCU** | ESP32-S3 |
| **Chip LoRa** | SX1262 |
| **Pantalla** | OLED 0.96" integrada |
| **GPS** | No (requiere módulo externo) |
| **Batería** | Conector JST, carga por USB-C |
| **Precio aprox.** | USD 15–20 |
| **Ideal para** | Nodo fijo, primer dispositivo |

---

### LilyGo T-Beam (v1.1 / Supreme)

Placa con GPS integrado, ideal para tracking y nodos móviles.

| | |
|---|---|
| **MCU** | ESP32 |
| **Chip LoRa** | SX1276 (v1.1) / SX1262 (Supreme) |
| **Pantalla** | Opcional (OLED add-on) |
| **GPS** | Integrado (u-blox NEO-6M / M10) |
| **Batería** | Soporte 18650, carga integrada |
| **Precio aprox.** | USD 25–35 |
| **Ideal para** | Tracker GPS, nodo móvil |

---

### LilyGo T-Echo

Dispositivo todo-en-uno con pantalla E-Ink, GPS y carcasa. El más compacto y autónomo.

| | |
|---|---|
| **MCU** | nRF52840 |
| **Chip LoRa** | SX1262 |
| **Pantalla** | E-Ink 1.54" |
| **GPS** | Integrado |
| **Batería** | Integrada, excelente autonomía |
| **Precio aprox.** | USD 40–55 |
| **Ideal para** | Uso personal diario, excursiones |

---

### RAK WisBlock Meshtastic Starter Kit

Plataforma modular: placa base + módulos intercambiables (GPS, sensores, display). Más orientado a makers que quieren personalizar.

| | |
|---|---|
| **MCU** | nRF52840 (RAK4631) |
| **Chip LoRa** | SX1262 |
| **Pantalla** | Módulo opcional |
| **GPS** | Módulo opcional |
| **Batería** | Soporte LiPo |
| **Precio aprox.** | USD 40–70 (kit base) |
| **Ideal para** | Makers, nodos con sensores |

---

### Seeed SenseCAP T1000-E

Tracker industrial con carcasa robusta y batería de larga duración.

| | |
|---|---|
| **MCU** | nRF52840 |
| **Chip LoRa** | LR1110 |
| **Pantalla** | No |
| **GPS** | Integrado (GNSS) |
| **Batería** | Integrada, gran capacidad |
| **Precio aprox.** | USD 50–65 |
| **Ideal para** | Tracking de vehículos, activos |

---

## Compatibilidad con firmwares

| Placa | Meshtastic | MeshCore |
|---|---|---|
| Heltec V3 | ✅ | ✅ |
| T-Beam v1.1 | ✅ | ✅ |
| T-Beam Supreme | ✅ | ✅ |
| T-Echo | ✅ | ⚠️ verificar versión |
| RAK WisBlock | ✅ | ✅ |
| SenseCAP T1000-E | ✅ | ❌ |

## ¿Cuál comprar?

- **Primera vez**: Heltec V3 — económico, pantalla integrada, fácil de flashear
- **Salir al campo o excursiones**: T-Echo o T-Beam — tienen GPS integrado
- **Nodo fijo en techo o cerro**: Heltec V3 o RAK WisBlock + antena externa
- **Tracking de vehículo**: T-Beam o SenseCAP T1000-E

## Dónde comprar en Chile

El hardware se consigue principalmente a través de:

- **AliExpress** — precio más bajo, demora 3–6 semanas
- **Amazon** — más rápido, precio algo mayor
- **Mercado Libre Chile** — algunos vendedores locales, precios variables
- **Foro comunitario** — a veces hay reventas entre miembros en [foro.meshchile.cl](https://foro.meshchile.cl)
