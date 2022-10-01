# Frame pending messages

|  Byte 0        |  Byte 1  |
|----------------|----------|
|  **Type**=0x00 |  **ACK** |

 When additional messages are available on a LoRaWAN gateway, this uplink message is sent to trigger the gateway to send downlinks that are queued (if no other messages are pending).

 **ACK**: Acknowledge token. Refer the section [Acknowledge token](/AbeewayRefGuide/downlink-messages/ack-token/readme.md) for more details.

:::tip Notes
1. To shorten the payload, this message is only 2 Bytes long (no common header).
2. Some network operators may not support the **downlink available** indication in LoRaWAN downlinks.
:::