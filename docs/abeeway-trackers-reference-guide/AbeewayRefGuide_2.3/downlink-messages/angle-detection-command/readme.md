# Angle detection command

|  Byte 0 |  Byte 1  |  Byte2      |
|---------|----------|-------------|
|  0x08   |  **ACK** |  **Action** |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token.](../ack-token/readme.md) **Max value is 0x0F**.

**Action**:

-   None or 0x00: Stop Angle Detection and reset the **Ref Vector** (Refer to the section [Angle detection event](../../functioning/event-messages/readme.md#angle-detection-all-operating-modes)).
-   0x01: Start Angle Detection/Relearn
-   0xFE: request the last payload sent (for debug purpose)
