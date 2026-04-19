---
title: Regulación Chile (SUBTEL)
description: La banda 915–928 MHz es de uso libre en Chile sin licencia, regulada por SUBTEL bajo la categoría ISM.
---

En Chile, la operación de dispositivos LoRa (Meshtastic, MeshCore y similares) es **legal y no requiere licencia de radioaficionado** siempre que se opere dentro de los límites establecidos por SUBTEL para la banda ISM.

## La banda 915–928 MHz

Esta banda corresponde a la región AU/NZ del estándar LoRa, adoptada en Chile. Es una banda **ISM (Industrial, Scientific and Medical)** de uso libre, lo que significa que cualquier persona puede operar dispositivos que cumplan los límites técnicos sin necesidad de solicitar una concesión o licencia individual.

La misma banda es usada en Argentina, Brasil, Australia, Nueva Zelanda y varios países más.

## Límites de potencia

SUBTEL regula la potencia máxima de emisión en esta banda. Los módulos LoRa comerciales (Heltec, T-Beam, RAK) operan bien por debajo de estos límites con su configuración por defecto.

:::tip
La configuración por defecto de Meshtastic para Chile (LongFast, SF11, 250 kHz) ya respeta los límites de potencia. No es necesario ni recomendable subir la potencia de transmisión — aumenta el consumo sin mejorar significativamente el alcance.
:::

## Lo que sí está regulado

Aunque no se necesita licencia, debes cumplir con:

- **Potencia máxima de transmisión**: el límite para 915–928 MHz en Chile
- **Uso no interferente**: no puedes causar interferencias a otros servicios primarios que operen en frecuencias adyacentes
- **Restricciones de uso**: la banda ISM no puede usarse para servicios de telecomunicaciones comerciales

## Radioaficionados

Si tienes licencia de radioaficionado (otorgada por SUBTEL), puedes operar en rangos de frecuencia más amplios y con mayor potencia. Sin embargo, para redes mesh LoRa, la banda ISM es suficiente y no requiere ninguna habilitación adicional.

## Uso responsable

Más allá de la legalidad, hay convenciones de uso responsable que la comunidad chilena sigue:

- **Modo Cliente en ciudad**: no uses ROUTER ni ROUTER_LATE en zonas urbanas con nodos cercanos — genera congestión de canal. Esos roles son para infraestructura fija en altura.
- **Hop limit máximo 3**: valores mayores saturan la red
- **No modificar la potencia de TX**: la potencia por defecto es la correcta para uso en red comunitaria
- **Antenas correctas**: usar una antena incorrecta puede aumentar emisiones no deseadas

## Referencias

- [SUBTEL — Bandas de uso libre](https://www.subtel.gob.cl)
- [Meshtastic — Configuración de región](https://meshtastic.org/docs/configuration/radio/lora/)
