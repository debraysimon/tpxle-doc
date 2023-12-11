# Status Request

|  Byte 0 |  Byte 1  |  Byte2      |
|---------|----------|-------------|
|  0x09   |  **ACK** |  **Action (optional)** |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token.](../ack-token/readme.md) **Max value is 0x0F**.

**Action**:

-   0: Energy status request
-   1: Health status request
-   2: BLE MAC address request
 If **action** byte is omitted, the health status uplink is sent
