# Common message header


| Common header | Common header | Common header | Common header | Common header |Data |
|-------------------|----------|----------|----------|----------|----------|
|  Byte 0 |  Byte 1 |  Byte 2 |  Byte 3 |  Byte 4 | Variable      |
| **Type** | **Status** | **Battery** |  **Temperature** | **ACK/Opt** |  **Information** |

 **Type**: refer to [Message types](/uplink-messages/)

**Status:**

|Bit     | Status                  |
|------------|-----------------------------|
|  **Bit7-5**|  Operating mode: 0- Standby/ 1-	Motion tracking / 2-	Permanent tracking / 3-	Motion start/end tracking/ 4- Activity tracking / 5- OFF(2)|
|  **Bit 4** |  Set if the user alert/SOS has been entered         |
|  **Bit 3** |  Reserved bit                                       |
|  **Bit 2** |  Set if the tracker is in motion state since the last payload is sent(1)|
|  **Bit 1** |  Set for a periodic position message  |
|  **Bit 0** |  Set for a position on demand message |

:::tip Notes

(1) The tracker in in motion state until the expiration of *motion_duration* period. The **motion bit** setting can be pictured as follow:

![](./images/image14.png)

(2) In shutdown payload, the operating mode is always OFF.
:::

 **Battery**: battery percentage (non encoded form)
-   0x00: the battery is charging (rechargeable devices only)
-   0x01 to 0x64: Battery percentage:
    -   Trackers with a rechargeable battery: the percentage reflects the actual value.
    -   Trackers with primary battery: the percentage is estimated based on the tracker usage.
-   0xFF: Error in measurement (rechargeable devices only)

 **Temperature**: Temperature measured in the device, expressed in degree Celsius. [Encoded form](/uplink-messages/encoded-form/readme.md) using **lo**= - 44, **hi**= 85, **nbits**= 8, **nresv**= 0. It is given  with a step of 0.5°C

**ACK/Opt:**
|  Bit |  Parameter | Explanation   |
|----------|----------|-------------------------------------------|
|  Bit 7-4 |  **ACK** |  Acknowledge token. Refer the section Acknowledge token for more details|
|  Bit 3-0 |  **Opt** |  Optional data (depending on message type. Currently used only for position messages)|

 **Information**: Variable part depending on the message type.