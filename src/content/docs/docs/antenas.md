---
title: Antenas y deployment
description: La antena y la ubicación del nodo son los factores que más impactan el alcance. Una buena instalación puede multiplicar la cobertura por 10.
---

En redes LoRa mesh, **la antena y la altura son más importantes que la potencia de transmisión**. Subir la potencia de TX 3 dB equivale a doblar la potencia, pero instalar la antena 10 metros más arriba puede darte 20–30 dB más de enlace. Siempre optimiza la ubicación antes de tocar la potencia.

## Tipos de antena

### Antena flexible (incluida)

La mayoría de las placas vienen con una antena flexible de 915 MHz. Sirve para empezar, pero su rendimiento es limitado y muy sensible a la orientación.

- **Ganancia**: ~2 dBi
- **Uso recomendado**: interior, testing, primer nodo

### Antena rígida omnidireccional

El upgrade más común. Antena de ¼ o ½ onda con conector SMA, normalmente de 3–5 dBi. Cobertura en todas las direcciones horizontales.

- **Ganancia**: 3–5 dBi
- **Uso recomendado**: nodo fijo, ventana, balcón
- **Conectores**: verificar que sea SMA-RP macho (el más común en placas LoRa)

### Antena de alta ganancia (omnidireccional vertical)

Antenas de 5–8 dBi para instalaciones en techo o mástil. Tienen mayor ganancia pero también mayor "squint" (la cobertura vertical se comprime, lo que es deseable en instalaciones elevadas).

- **Ganancia**: 5–8 dBi
- **Uso recomendado**: nodo en techo, cerro, mástil

### Antena directiva (Yagi)

Para enlaces punto a punto de larga distancia. No sirve para nodos de malla general — reduce la cobertura a un cono estrecho.

- **Ganancia**: 10–15 dBi
- **Uso recomendado**: enlace fijo entre dos puntos alejados

## Cable y conectores

El cable coaxial atenúa la señal. Usa el cable más corto posible y de buena calidad:

| Cable | Pérdida a 900 MHz |
|---|---|
| RG174 (fino, flexible) | ~2 dB/m — evitar en runs largos |
| RG58 | ~0.5 dB/m |
| LMR-200 | ~0.3 dB/m |
| LMR-400 | ~0.15 dB/m — para runs largos |

:::tip
Con RG58, un cable de 5 metros ya te come 2.5 dB de señal — equivale a casi desactivar media antena. Si el cable va a ser largo, usa LMR-200 o LMR-400.
:::

## Deployment: nodo fijo en techo

El escenario más común para un nodo de cobertura:

1. **Placa** en interior (caja impermeable si hay humedad), conectada por cable a la antena exterior
2. **Antena** en el punto más alto posible: techo, chimenea, mástil corto
3. **Alimentación**: USB desde interior, o panel solar + batería para ubicaciones sin acceso a red eléctrica
4. **Cable**: lo más corto posible, LMR-200 si supera los 3–4 metros

## Deployment: nodo solar en cerro

Para nodos autónomos en altura:

- **Panel solar**: 5–20W dependiendo del consumo de la placa y la latitud
- **Batería**: LiPo o 18650. Para zonas con varios días nublados, dimensionar para 3–5 días de autonomía
- **Caja**: IP65 o superior, orientada para evitar condensación
- **Antena**: omnidireccional de 5–8 dBi, bien vertical, sin obstrucciones
- **Pararrayos**: en cerros con tormentas eléctricas, considera un arrestador de rayos en la línea de antena

## Altura vs alcance

Como referencia aproximada para la banda 915 MHz en terreno semiplano:

| Altura del nodo | Alcance típico |
|---|---|
| Ventana 2° piso (6 m) | 1–3 km en ciudad |
| Techo edificio (20 m) | 5–8 km |
| Cerro 500 m s.n.m. | 15–30 km |
| Cerro 1000+ m s.n.m. | 30–60 km (con visibilidad) |

Estos son valores orientativos — el terreno, los obstáculos y la antena del nodo receptor influyen tanto como la altura del emisor.
