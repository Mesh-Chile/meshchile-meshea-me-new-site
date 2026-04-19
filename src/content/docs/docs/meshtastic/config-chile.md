---
title: Configuración Chile — Meshtastic
description: Parámetros exactos para conectarse a la red Meshtastic chilena. Región AU/NZ, LongFast slot 20, 919.875 MHz.
---

Para conectarte a la red Meshtastic de Chile debes configurar los parámetros de radio correctos. Sin esta configuración, tu nodo no escuchará ni será escuchado por los demás nodos del país.

## Parámetros de radio

| Parámetro | Valor Chile |
|---|---|
| **Región** | `AU_NZ` (915–928 MHz) |
| **Modem preset** | `LongFast` |
| **Slot** | `20` |
| **Frecuencia central** | `919.875 MHz` |
| **Spreading Factor** | SF11 (definido por LongFast) |
| **Bandwidth** | 250 kHz (definido por LongFast) |
| **Coding Rate** | 4/5 (definido por LongFast) |

:::caution[Región correcta]
Chile no usa la región `US` (902–928 MHz) a pesar de compartir parte del rango. Usa siempre `AU_NZ`. Si tu dispositivo está configurado en otra región, no verás los nodos chilenos aunque estés físicamente en Chile.
:::

## Configurar desde la app

### Desde Android/iOS

1. Conecta tu dispositivo por Bluetooth
2. Ve a **Config → Radio → LoRa**
3. Configura:
   - **Region**: `AU_NZ`
   - **Modem Preset**: `LongFast`
4. Guarda los cambios — el dispositivo se reinicia

El slot 20 y la frecuencia 919.875 MHz son consecuencia de seleccionar `AU_NZ` + `LongFast`. No necesitas ingresarlos manualmente.

### Desde la interfaz web

Conecta tu dispositivo por USB o WiFi y accede a [client.meshtastic.org](https://client.meshtastic.org). La configuración es equivalente a la app.

## Configuración de red recomendada

| Parámetro | Valor recomendado | Por qué |
|---|---|---|
| **Hop limit** | 3 | Evita congestión de canal |
| **Role** | `CLIENT` en ciudad, `ROUTER` en altura | Ver [¿Qué es una red mesh?](/docs/mesh) |
| **Bluetooth** | Activado | Necesario para conectar con la app |
| **Transmit power** | Por defecto | No aumentar — no mejora el alcance significativamente |

## Verificar que estás en la red

Una vez configurado, ve a la pantalla de nodos en la app. Si hay nodos visibles cerca de tu ubicación, estás en la red correcta. También puedes revisar el mapa en [mapa.meshea.me](https://mapa.meshea.me) para ver si tu nodo aparece (puede tardar algunos minutos).

## MQTT

Para conectar tu nodo al broker MQTT comunitario y aparecer en los mapas aunque no tengas nodos vecinos, ve a [MQTT comunitario](/docs/meshtastic/mqtt).
