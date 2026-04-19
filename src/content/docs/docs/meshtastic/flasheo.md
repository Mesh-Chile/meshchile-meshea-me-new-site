---
title: Flashear firmware Meshtastic
description: Cómo instalar el firmware Meshtastic en tu placa por primera vez, usando el flasher web oficial.
---

Flashear es el proceso de instalar el firmware Meshtastic en la placa. Para la mayoría de los dispositivos basados en ESP32, no necesitas instalar ningún software — el proceso se hace desde el navegador.

## Requisitos

- Cable USB-C (o micro-USB según el modelo) que transmita datos (no solo carga)
- Navegador Chrome, Edge o cualquier navegador basado en Chromium (Firefox no soporta WebSerial)
- La placa sin usar — no es necesario borrar nada previamente

## Flashear desde el navegador (método recomendado)

1. Conecta la placa al computador por USB
2. Abre [flasher.meshtastic.org](https://flasher.meshtastic.org) en Chrome o Edge
3. Selecciona tu modelo de placa en el menú desplegable
4. Selecciona la versión del firmware (usa siempre la versión estable más reciente)
5. Haz clic en **Flash**
6. El navegador pedirá permiso para acceder al puerto serial — selecciona el puerto que corresponde a tu placa
7. Espera a que el proceso termine (1–3 minutos)

:::tip[¿No aparece el puerto?]
En Linux puede ser necesario agregar tu usuario al grupo `dialout`:
```bash
sudo usermod -a -G dialout $USER
```
Luego cierra sesión y vuelve a entrar.

En Windows, algunos chips CH340 (comunes en clones baratos de Heltec) requieren instalar el driver CH340 manualmente.
:::

## Verificar que funcionó

Después de flashear, la placa debería reiniciarse y mostrar en pantalla (si tiene) el logo de Meshtastic y luego una pantalla con información del nodo. Si no hay pantalla, el LED debería parpadear.

Abre la app Meshtastic en tu teléfono, activa Bluetooth y busca el dispositivo. Debería aparecer con un nombre como `Meshtastic_XXXX`.

## Plataformas sin soporte WebSerial

Para placas basadas en **nRF52** (T-Echo, RAK WisBlock con RAK4631), el proceso es diferente:

1. Descarga el archivo `.uf2` correspondiente a tu placa desde [github.com/meshtastic/firmware/releases](https://github.com/meshtastic/firmware/releases)
2. Conecta la placa por USB
3. Haz doble clic en el botón reset — la placa debería aparecer como unidad USB en el explorador de archivos
4. Arrastra y suelta el archivo `.uf2` en esa unidad
5. La placa se reinicia automáticamente con el firmware nuevo

## Actualizar firmware

El proceso de actualización es idéntico al de instalación inicial. La configuración existente se preserva en la mayoría de los casos, pero es recomendable anotar la configuración antes de actualizar versiones mayores.
