# SOS setup

 Turn on SOS of the tracker:

|  Byte 0 |  Byte 1  |
|---------|----------|
|  0x04   |  **ACK** |

 Turn off SOS of the tracker:

|  Byte 0 |  Byte 1  |
|---------|----------|
|  0x05   |  **ACK** |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token.](../../downlink-messages/ack-token/readme.md) **Max value is 0x0F**.

 Refer to the section [SOS](../../functioning/sos/) to have more information about the SOS behavior.