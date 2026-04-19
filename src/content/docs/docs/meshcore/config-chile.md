---
title: Configuración Chile — MeshCore
description: Parámetros de radio para la red MeshCore chilena. 927.875 MHz, SF8, BW 62.5 kHz.
---

La configuración de radio para MeshCore en Chile es distinta a Meshtastic — usan frecuencias y parámetros diferentes, lo que significa que ambas redes coexisten sin interferirse.

## Parámetros de radio

| Parámetro | Valor Chile |
|---|---|
| **Frecuencia** | `927.875 MHz` |
| **Bandwidth** | `62.5 kHz` |
| **Coding Rate** | `5` (4/5) |
| **Spreading Factor** | `8` |
| **Banda** | AU/NZ 915–928 MHz |

## Comparación con Meshtastic

| | Meshtastic Chile | MeshCore Chile |
|---|---|---|
| **Frecuencia** | 919.875 MHz | 927.875 MHz |
| **SF** | 11 | 8 |
| **BW** | 250 kHz | 62.5 kHz |
| **Velocidad de datos** | ~5 kbps | ~1.5 kbps |
| **Alcance relativo** | Mayor | Similar (SF menor, BW menor) |

El SF más bajo de MeshCore significa mensajes más rápidos y menor tiempo de ocupación del canal, a costa de algo de sensibilidad. El BW más estrecho compensa parcialmente esta diferencia.

## Configurar el dispositivo

La configuración se realiza desde la app MeshCore o por interfaz serial. Consulta la documentación oficial en [meshcore.co.uk](https://meshcore.co.uk) para el proceso específico de tu versión de firmware.

Los valores a ingresar son exactamente los de la tabla de arriba. No existe un "preset Chile" automático — debes ingresar cada parámetro manualmente.

## Verificar conectividad

Para confirmar que estás en la frecuencia correcta, busca otros nodos MeshCore en tu área a través del [foro.meshchile.cl](https://foro.meshchile.cl). La comunidad puede ayudarte a verificar que tu configuración es correcta con una prueba de enlace.
