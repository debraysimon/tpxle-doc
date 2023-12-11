# Operational mode configuration

The operating mode can be remotely configured with a downlink LoRaWAN&trade; message built as follow:

|  Byte 0 |  Byte 1  |  Byte 2   |
|---------|---------|------------|
|  0x02   |  **ACK** |  **Mode** |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token](../ack-token/readme.md) **Max value is 0x0F.**

 **Mode**: operating modes. Acceptable values are:
-   0- Standby
-   1- Motion tracking
-   2- Permanent tracking
-   3- Motion start/end tracking
-   4- Activity tracking
-   5- Off mode

**Persistence**

This configuration is initially modified in the device RAM in order to minimize number of flash writes in case of multiple concatenated commands. After 5 seconds, the last RAM configuration (including any other changes from remote or CLI commands) is saved to flash and will be used if the device resets.

**Example**

 Changing the operating mode to "motion track" (01) with an ack token of 3: 0x020301.

:::tip Notes
1.  There is an additional way to update the operational mode based on a special configuration parameter. See [here](../../downlink-messages/parameters-configuration/#parameters-for-operational-modes) for more details
2.  **Off** mode is not supported by all trackers (refer to section [Main operating modes](../../functioning/main-operating-modes/readme.md) to check if this mode is supported). **If Off mode is requested via downlink but not supported, the tracker moves to standby mode.**
:::
