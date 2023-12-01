# Position on demand

 Whatever the state, a position can be requested from the tracker using the message:

|  Byte 0 |  Byte 1  |
|---------|----------|
|  0x01   |  **ACK** |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](../../downlink-messages/ack-token/readme.md) **Max value is 0x0F**.

**Example** Position on demand message with ack token of 2: **0x0102**. The tracker will answer with a position message.