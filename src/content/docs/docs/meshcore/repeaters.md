---
title: Repeaters en MeshCore
description: MeshCore distingue explícitamente los repeaters como nodos dedicados a reenviar tráfico, separando ese rol del cliente.
---

Una de las diferencias de diseño más notables de MeshCore respecto a Meshtastic es su tratamiento explícito de los **repeaters**: nodos cuya función exclusiva es retransmitir tráfico de otros nodos para extender el alcance de la red.

## Rol de repeater vs cliente

En MeshCore, la distinción entre cliente y repeater es más clara que en Meshtastic:

| | Cliente | Repeater |
|---|---|---|
| **Función** | Envía y recibe mensajes del usuario | Solo retransmite tráfico ajeno |
| **App requerida** | Sí | No (opera autónomo) |
| **Ubicación ideal** | Con el usuario | Punto elevado fijo |
| **Consumo** | Variable | Constante (siempre escuchando) |

## Por qué repeaters dedicados

En una red mesh con flooding, cada nodo retransmite mensajes independientemente de su rol. Esto es simple pero puede generar congestión cuando hay muchos nodos. MeshCore propone optimizar la red con repeaters dedicados en ubicaciones estratégicas, reduciendo el número de retransmisiones innecesarias en zonas densas.

La hipótesis que la comunidad chilena está evaluando es si esta arquitectura escala mejor en redes medianas (decenas de nodos) que el flooding irrestricto.

## Instalar un repeater

Un repeater MeshCore es simplemente una placa compatible flasheada en modo repeater. No necesita pantalla, app ni interacción continua. Necesita:

- **Hardware**: Heltec V3, RAK WisBlock u otra placa compatible
- **Firmware**: MeshCore en modo repeater
- **Alimentación**: USB fijo, batería con solar, o cualquier fuente estable
- **Ubicación**: punto elevado con buena visibilidad RF — techo, cerro, torre

Para el firmware y la configuración exacta de modo repeater, consulta [meshcore.co.uk](https://meshcore.co.uk) y el canal MeshCore en [foro.meshchile.cl](https://foro.meshchile.cl).

## Estado en Chile

La comunidad chilena tiene repeaters MeshCore de prueba desplegados. Si quieres coordinar la instalación de un repeater en tu zona o reportar uno existente, el foro es el lugar indicado.
