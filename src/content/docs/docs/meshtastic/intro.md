---
title: Introducción a Meshtastic
description: Meshtastic es un proyecto open source que convierte hardware LoRa económico en una red mesh de mensajería descentralizada.
---

Meshtastic es un proyecto open source que convierte placas LoRa económicas en dispositivos de comunicación mesh. Sin internet, sin celular, sin suscripción. Solo radio.

## Qué puede hacer

- **Mensajería de texto**: canal público o mensajes privados cifrados entre nodos
- **Ubicación GPS**: compartir posición en tiempo real con otros nodos de la red
- **Telemetría**: temperatura, humedad, presión, voltaje de batería — según los sensores del dispositivo
- **Canales cifrados**: grupos privados con clave compartida

## App móvil

El dispositivo se conecta al teléfono por Bluetooth o WiFi. Las apps oficiales están disponibles para:

- [Android (Google Play)](https://play.google.com/store/apps/details?id=com.geeksville.mesh)
- [iOS (App Store)](https://apps.apple.com/app/meshtastic/id1586432531)
- [Web (browser)](https://client.meshtastic.org)

La app muestra el mapa de nodos, los mensajes del canal y permite configurar el dispositivo sin necesidad de un ordenador.

## Estado del proyecto

Meshtastic es el framework **consolidado** de la comunidad chilena. Tiene:

- Firmware activamente mantenido con releases frecuentes
- App móvil oficial para Android e iOS
- Comunidad global con miles de nodos activos
- Documentación extensa en [meshtastic.org](https://meshtastic.org)

## Arquitectura de red

Cada dispositivo Meshtastic opera en uno de varios [roles de nodo](/docs/mesh#roles-de-los-nodos). La red no tiene servidor central — los mensajes se propagan por flooding entre nodos vecinos hasta que el hop limit se agota.

El firmware maneja automáticamente la deduplicación de mensajes, de modo que aunque un mensaje llegue por múltiples rutas, solo se procesa una vez.

## Cifrado

Meshtastic cifra los mensajes por canal usando AES-256. El canal público predeterminado usa una clave conocida (no es privado). Para comunicaciones privadas, configura un canal con una clave propia compartida solo entre los participantes.

## Siguientes pasos

- [Flashear firmware Meshtastic](/docs/meshtastic/flasheo)
- [Configurar para Chile](/docs/meshtastic/config-chile)
- [Conectar al MQTT comunitario](/docs/meshtastic/mqtt)
