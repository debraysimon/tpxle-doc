# Shutdown message

|  Common header |  Data          |
|--------------------|---------------------|
|  Byte 0-4          |  Byte 5             |
|Header with **Type**=0x09|  **Shutdown cause** |

## Shutdown cause:
-   0: User action: a very long button press or a long reed switch contact
-   1: Low battery
-   2: Downlink request
-   3: BLE request

:::tip Notes
1.  In shutdown payload, the operating mode is always OFF.
2.  Depending on *config_flags* value, off mode can be forbidden.
3.  This LoRaWAN message is sent even if the tracker is BLE connected.
:::