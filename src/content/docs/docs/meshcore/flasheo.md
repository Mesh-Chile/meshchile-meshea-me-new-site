---
title: Flashear firmware MeshCore
description: Cómo instalar el firmware MeshCore en hardware compatible.
---

:::caution[Documentación en evolución]
MeshCore está en desarrollo activo. Verifica siempre la documentación oficial en [meshcore.co.uk](https://meshcore.co.uk) para el proceso más actualizado.
:::

## Hardware compatible

MeshCore corre en placas ESP32 y nRF52 con chip SX1262. Las más probadas por la comunidad chilena son:

- Heltec WiFi LoRa 32 V3
- LilyGo T-Beam Supreme
- RAK WisBlock (RAK4631 + RAK13300)

## Obtener el firmware

Descarga el binario correspondiente a tu placa desde el repositorio oficial de MeshCore. Consulta [meshcore.co.uk](https://meshcore.co.uk) o el canal del proyecto en GitHub para el release más reciente.

## Flashear en ESP32 (Heltec, T-Beam)

### Opción A: Web flasher (si está disponible)

Algunos releases de MeshCore incluyen un web flasher similar al de Meshtastic. Si está disponible, el proceso es idéntico: conecta la placa, abre el flasher en Chrome, selecciona el firmware y haz clic en Flash.

### Opción B: esptool (línea de comandos)

```bash
pip install esptool

esptool.py --port /dev/ttyUSB0 --baud 921600 \
  write_flash 0x0 meshcore-heltec-v3-vX.X.X.bin
```

Reemplaza `/dev/ttyUSB0` con el puerto correspondiente (`COM3`, `COM4`, etc. en Windows) y el nombre del archivo con el que descargaste.

Para entrar en modo bootloader en el Heltec V3, mantén presionado el botón BOOT mientras conectas el USB.

## Flashear en nRF52

El proceso usa el sistema de arrastre UF2, igual que Meshtastic:

1. Descarga el archivo `.uf2` para tu placa
2. Conecta por USB y haz doble clic en reset
3. Arrastra el `.uf2` a la unidad USB que aparece

## Después de flashear

Sigue con [Configurar MeshCore para Chile](/docs/meshcore/config-chile) para conectarte a la red chilena.
