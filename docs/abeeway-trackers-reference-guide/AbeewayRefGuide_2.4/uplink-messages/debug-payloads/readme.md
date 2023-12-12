# Debug payloads

| Common header  | Common header         | Common header | Debug information data |
| -------------- | --------------------- | ------------- | ---------------------- |
| Byte 0-        | Byte 1-3              | Byte 4        | Byte 5+                |
| **Type**\=0x0F | **Status/Batt/Temp.** | **ACK/Opt**   | **debug data**         |

**Opt:**

- 0x00 = Debug crash information (internal use)
- 0x01 = **TX Power index value**
- 0x02 = **Uplink Length Error**
- 0x03 = **Generic Error**
- 0x04 = Provisioned internal firmware parameters (internal use)
- 0x05 = Angle Detection debug information

## TX power index value

| Common header                                      | debug data         |
| -------------------------------------------------- | ------------------ |
| Byte 0-4                                           | Byte 5             |
| **Header** with \*\*Type=\*\*0x0F and **Opt**\=0x1 | **Tx power index** |

**Tx power index:** TX Power index used by the device, value in the range (0-5)

## Uplink Length Error

When long payloads are sent and transmit strategy is not well chosen, too long payload could not be transmitted. In this case, after 5 discarded uplinks, the tracker sends the following error message:

| Common header                                      | Debug data               |
| -------------------------------------------------- | ------------------------ |
| Byte 0-4                                           | Byte 5-6                 |
| **Header** with \*\*Type=\*\*0x0F and **Opt**\=0x2 | **Length Error counter** |

Length Error counter: Number of payloads discarded due to uplink length error

:::tip Note  
The data rate and the transmit strategy must be adapted to the payload size, or the payload will be rejected by the LoRaWAN MAC, and won't be sent. Refer to the application note [AN-002_LoRa_Transmission_strategy](../../../documentation-library/abeeway-trackers-documentation.md#application-notes) for more data.  
:::

## Generic error

| Common header                                      | Debug information data |
| -------------------------------------------------- | ---------------------- |
| Byte 0-4                                           | Byte 5                 |
| **Header** with \*\*Type=\*\*0x0F and **Opt**\=0x3 | **Error code**         |

**Error code:**

- 0x00: Invalid geolocation sensor
- 0x01: Invalid geolocation configuration
