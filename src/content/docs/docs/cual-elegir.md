---
title: ¿Cuál elegir?
description: Guía por caso de uso para elegir entre Meshtastic y MeshCore según tu situación concreta.
---

No hay una respuesta única. Depende de para qué lo quieres usar y con quién quieres interoperar. Esta guía cubre los casos más comunes en Chile.

## "Quiero empezar, no sé nada"

**Elige Meshtastic.**

Tiene app oficial, documentación extensa, comunidad grande y es lo que usa la mayoría de la red chilena hoy. Puedes comprar un Heltec V3, flashearlo en 10 minutos y estar en la red. Si después quieres explorar MeshCore, el mismo hardware te sirve.

## "Quiero comunicarme con otros en Chile"

**Elige Meshtastic.**

La mayor parte de los nodos activos en Chile corren Meshtastic. El broker MQTT comunitario alimenta los mapas. Si el objetivo es interoperar con la red existente, Meshtastic es la opción con más cobertura hoy.

## "Voy de excursión a la cordillera o zona sin cobertura celular"

**Meshtastic**, con un dispositivo que tenga GPS.

El T-Echo o T-Beam son los más usados para esto. Tienes app móvil oficial, mensajería, posición GPS compartida con tu grupo, y puedes usar canales cifrados para comunicación privada. La red en zonas remotas dependerá de si hay nodos fijos en los cerros — consulta el mapa antes de salir.

## "Quiero instalar un nodo fijo en un cerro para dar cobertura"

**Meshtastic** si quieres integración inmediata con la red chilena.  
**MeshCore** si quieres experimentar con repeaters dedicados y estás dispuesto a coordinar con el grupo de evaluación.

En ambos casos, revisa [Antenas y deployment](/docs/antenas) para la parte de instalación.

## "Me interesa la parte técnica y quiero explorar alternativas"

**Prueba MeshCore.**

Si tienes experiencia técnica y quieres participar en la evaluación de una arquitectura de red distinta, MeshCore es el espacio para eso. La comunidad chilena tiene un grupo activo y cualquier aporte — nodos de prueba, feedback, documentación — es bienvenido.

## "Quiero tracking de vehículos o activos"

**Meshtastic** con T-Beam o SenseCAP T1000-E.

Meshtastic tiene modo Tracker dedicado y el mapa comunitario muestra posiciones en tiempo real. Para tracking de flota con requisitos más serios, considera si una solución LoRaWAN (no mesh) se adapta mejor — el alcance nodo a nodo de LoRa puede ser más predecible en configuración estrella.

## "Quiero comunicación de emergencia en zona urbana"

**Meshtastic**, configurado en modo **Cliente** (nunca Router en ciudad).

La red mesh es útil para coordinación en emergencias donde la infraestructura celular está saturada o caída. Para esto es importante que la red tenga suficientes nodos fijos con buena ubicación — si aún no los hay en tu zona, considera instalar uno.

## "Tengo hardware nRF52 (T-Echo, RAK WisBlock)"

**Meshtastic** es la opción más segura — ambas plataformas tienen soporte estable para nRF52.  
**MeshCore** en nRF52 está en desarrollo — verifica compatibilidad antes de invertir tiempo.

## ¿Se puede tener ambos?

Sí. Si tienes dos dispositivos, puedes correr uno con cada firmware. No interoperan entre sí directamente, pero puedes participar en ambas redes de forma independiente. Algunos miembros de la comunidad hacen exactamente esto para comparar comportamiento en las mismas condiciones.

---

¿Tienes dudas que esta guía no cubre? El [foro.meshchile.cl](https://foro.meshchile.cl) es el lugar para preguntar.
