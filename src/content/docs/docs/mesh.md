---
title: ¿Qué es una red mesh?
description: Una red mesh es una topología donde cada nodo puede retransmitir mensajes de otros, creando una red distribuida sin punto central de falla.
---

En una red mesh, **todos los nodos son iguales**: cualquiera puede enviar, recibir y retransmitir mensajes. No hay un servidor central, no hay un punto de falla único. Si un nodo deja de funcionar, los demás buscan rutas alternativas.

Esto contrasta con las redes tradicionales (WiFi, celular) donde existe una infraestructura central — router, antena, torre — sin la cual la red deja de funcionar.

## Cómo se propaga un mensaje

Cuando un nodo envía un mensaje, ocurre lo siguiente:

1. El nodo transmite el mensaje por radio
2. Todos los nodos que lo escuchan lo reenvían (con un pequeño retardo aleatorio para evitar colisiones)
3. Cada nodo que reenvía decrementa un contador llamado **hop limit**
4. Cuando el hop limit llega a cero, el mensaje deja de propagarse

Este mecanismo se llama **flooding** y garantiza que el mensaje llegue a toda la red sin necesidad de conocer la topología de antemano.

## Hop limit en Chile

El hop limit por defecto recomendado en Chile es **3**. Esto significa que un mensaje puede atravesar hasta 3 nodos intermedios. Valores más altos saturan el canal de radio con retransmisiones innecesarias.

:::caution[En ciudad usa modo Cliente]
En zonas urbanas con muchos nodos, configura tu dispositivo en modo **CLIENT** o **CLIENT_MUTE**. Los roles ROUTER y ROUTER_LATE son para nodos fijos en altura. Usar ROUTER en ciudad congestiona el canal sin agregar cobertura útil.
:::

## Roles de los nodos (Meshtastic)

| Rol | BT/WiFi | Retransmite | Descripción | Dónde usarlo |
|---|---|---|---|---|
| **CLIENT** | ✅ | ✅ | Rol por defecto. Conecta con app, reenvía paquetes. | Ciudad, uso personal |
| **CLIENT_MUTE** | ✅ | ❌ | No retransmite — ahorra batería y no consume ancho de banda. | Dispositivo portátil, batería limitada |
| **CLIENT_HIDDEN** | ✅ | ✅ | No aparece en la lista de nodos de otros. | Privacidad, operaciones discretas |
| **CLIENT_BASE** | ✅ | ✅ (prioritario) | Nodo fijo "home". Prioriza routing hacia nodos favoritos configurados. | Techo de casa, nodo fijo personal |
| **ROUTER** | ❌ | ✅ (rápido) | Sin Bluetooth ni pantalla. Máxima velocidad de retransmisión. | Torres, cerros, infraestructura fija |
| **ROUTER_LATE** | ❌ | ✅ (retardado) | Retransmisión retardada para llenar huecos de cobertura detrás de obstáculos. | Valles, zonas tapadas por cerros |
| **TRACKER** | ✅ | Solo activo | Duerme entre actualizaciones GPS para ahorrar batería. | Vehículos, excursiones, tracking |
| **SENSOR** | ✅ | Solo activo | Transmite telemetría de sensores y duerme. | Sensores remotos de temperatura, humedad, etc. |
| **LOST_AND_FOUND** | ✅ | ✅ | Transmite su ubicación regularmente para localizar equipos perdidos. | Activos de alto valor, equipamiento |

:::note[El rol REPEATER fue eliminado]
El rol `REPEATER` (Repetidor) fue deprecado y ya no existe en el firmware actual. Su función quedó absorbida por `ROUTER`. Si ves documentación antigua que lo menciona, ignórala.
:::

## Tipos de firmware MeshCore

En MeshCore el concepto es distinto: en vez de configurar un rol en el mismo firmware, se **flashea un firmware diferente** según la función del dispositivo.

| Firmware | Conectividad | Descripción | Dónde usarlo |
|---|---|---|---|
| **BLE Companion** | Bluetooth | Cliente que se conecta a la app Android (iOS próximamente) via BLE. | Uso personal, portátil |
| **USB Serial Companion** | USB | Cliente que se conecta a la app web o escritorio por USB serial. | Estación fija con computador |
| **Repeater** | Solo LoRa | Reenvía paquetes hacia el destino — no hace flooding indiscriminado. Administrable remotamente con contraseña. | Infraestructura fija, cerros |
| **Room Server** | Solo LoRa | Servidor BBS simple: almacena los últimos 16 mensajes no vistos por canal. Puede combinarse con rol Repeater. | Punto de encuentro comunitario |

:::tip[Room Server + Repeater]
Un Room Server puede activar también la función de Repeater con el comando `set repeat on`. Así un solo nodo fijo actúa como punto de almacenamiento de mensajes y como repetidor de cobertura.
:::

## Alcance y cobertura

El alcance entre dos nodos depende de:

- **Altura**: un nodo en un cerro puede conectarse con nodos a 10–15 km de distancia
- **Antena**: una antena externa bien orientada multiplica el alcance
- **Entorno**: en ciudad los obstáculos reducen el alcance a 1–3 km; en campo abierto puede superar los 10 km
- **Parámetros de radio**: SF y BW determinan el tradeoff alcance/velocidad

## La red chilena

La red mesh chilena es una suma de nodos individuales operados de forma voluntaria. Nadie "administra" la red — crece orgánicamente a medida que más personas instalan nodos. Puedes ver la topología actual en [malla.meshea.me](https://malla.meshea.me) y los nodos activos en [mapa.meshea.me](https://mapa.meshea.me).
