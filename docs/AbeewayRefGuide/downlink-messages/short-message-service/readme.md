# Short message service

This downlink message carries the payload of [SMS](../../functioning/short-message-service/).

|Byte 0| Byte 1 | Byte 2-4 | variable |
|------|--------|----------|----------|
| Type | ACK Token| SID | Message (ASCII) |


- **Type**: 0x0D
- **ACK Token**: Acknowledge token. Refer the section [Acknowledge token](../../downlink-messages/ack-token/) for more details 
- **SID**: Sender identifier
- **Message**: SMS message