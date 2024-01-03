# Customizing the JoinEUI/AppEUI

If you are configuring the device on a standalone private LoRa Network Server (LNS) without support for the LoRa Alliance back-end interface (for roaming or remote Join server access), usually the LNS will accept any JoinEUI (formerly called AppEUI) and will use the embedded Join Server function to validate the device's Join Request. This works with the default Abeeway JoinEUI provisionned in factory.

If your LNS provider supports the back-end interface (for example it is connected to ThingPark Exchange peering hub), then it will try to process the Join Request with the Join Server associated to the JoinEUI, and this will also work if you have previously claimed your device on Abeeway's Join Server. This also allows to configure your device from a simple QR code scan using the standard LoRa Alliance QR code printed on any Abeeway device. Refer to this video if you are not familiar with the benefits of the LoRa Alliance QR code).

If you want to use your own Join Server instead, or change the default JoinEUI, you can build a custom .cfg file with parameters **appeui_low** and **appeui_high**.

**appeui_low:** lower 4 bytes for device APPEUI, this value overwrites the value provided during
provisioning. Factory: 0x00000000. Range: [0x00000000..0xFFFFFFFF]

**appeui_high:** high 4 bytes for device APPEUI, this value overwrites the value provided during provisioning. Factory: 0x00000000. Range: [0x00000000..0xFFFFFFFF]

Example: to use APPEUI=0x20635F000300000F, you need to input the following elements in the config file:
```
appeui_low = 0x0300000F
appeui_high = 0x20635F00
```
The config file can be flashed into the tracker using [Firmware Update](/troubleshooting-support/firmware-update-overview/index.md).
