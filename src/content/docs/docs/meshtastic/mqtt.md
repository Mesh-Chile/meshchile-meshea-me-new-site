---
title: MQTT comunitario — Meshtastic
description: El broker MQTT mqtt.meshchile.cl permite ver y conectar nodos en el mapa aunque no tengan vecinos RF cercanos.
---

MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería que permite a los nodos Meshtastic con conexión a internet compartir sus datos con el resto de la red aunque no tengan vecinos de radio cercanos.

Un nodo con MQTT activado publica sus mensajes y posición al broker, que los redistribuye a todos los demás nodos MQTT conectados. Esto hace posible ver en el mapa nodos de todo Chile, no solo los que están en rango de radio.

## Broker comunitario

| Parámetro | Valor |
|---|---|
| **Host** | `mqtt.meshchile.cl` |
| **Puerto** | `1883` (sin TLS) |
| **Usuario** | `mshcl2025` |
| **Contraseña** | `meshtastic.cl` |
| **Root topic** | `msh/CL` |
| **TLS** | No |

## Configurar MQTT en la app

1. Conecta tu dispositivo a la app Meshtastic
2. Ve a **Config → Module → MQTT**
3. Activa **MQTT Enabled**
4. Ingresa los datos del broker:
   - **Address**: `mqtt.meshchile.cl`
   - **Username**: `mshcl2025`
   - **Password**: `meshtastic.cl`
   - **Root topic**: `msh/CL`
5. Activa **Map Reporting** si quieres aparecer en los mapas públicos
6. Guarda — el dispositivo se reinicia

Tu nodo necesita conexión a internet (WiFi o mediante el teléfono como proxy) para conectarse al broker.

## ¿Cuándo usar MQTT?

- **Nodo en zona sin cobertura RF**: si no tienes vecinos en rango, MQTT te conecta a la red completa por internet
- **Mapas públicos**: MQTT alimenta [mapa.meshea.me](https://mapa.meshea.me) y herramientas similares
- **Nodo fijo con WiFi**: un nodo fijo con WiFi y MQTT actúa como puente entre la red RF local y la red global

## ¿Cuándo NO usar MQTT?

- **Nodo móvil personal**: si ya tienes vecinos de radio, MQTT agrega tráfico innecesario al broker
- **Sin WiFi disponible**: MQTT requiere conexión a internet, ya sea directa (el dispositivo con WiFi) o a través del teléfono

:::tip[Modo uplink/downlink]
En la configuración de MQTT puedes activar solo **uplink** (el nodo publica al broker pero no recibe del broker) o ambos. Para aparecer en el mapa, basta con uplink activado.
:::

## Ver tu nodo en el mapa

Después de activar MQTT y Map Reporting, tu nodo debería aparecer en [mapa.meshea.me](https://mapa.meshea.me) dentro de unos minutos. Si no aparece, verifica:

1. El nodo tiene WiFi o proxy de teléfono activo
2. Los datos del broker están correctos (sin espacios extra)
3. MQTT Enabled está activado (no solo configurado)
