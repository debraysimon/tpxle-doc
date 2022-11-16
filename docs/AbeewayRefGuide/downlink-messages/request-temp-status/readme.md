# Request temperature status

| Byte 0 | Byte 1  | Byte2       |
| ------ | ------- | ----------- |
| 0x06   | **ACK** | **Opt CMD** |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](/AbeewayRefGuide/downlink-messages/ack-token/readme.md) **Max value is 0x0F**.

**Opt CMD**:

- None or 0x00: The tracker answers this request with a temperature event message.
- 0x01: Reset counters only
- 0x02: Reset temperatures only
- 0x03: Reset all (counters and temperature)
