# Short message service (SMS) message

This uplink message carries the payload of [SMS](../../functioning/short-message-service/).


The SMS uplink message uses the 2 first bytes of the usual AT2 payload, i.e. the message type
and the ack token.


|Common header     |Common header|DID|Variable|
|----------------------|-----------------|-----------------| ------|
|  Byte 0              |  Byte 1      |  Byte 2         | Variable | 
| **Type**=0x0D       |**ACK Token**|**Destination identifier**| Message |


- **Type**: 0x0D
- **ACK Token**: Acknowledge token. Refer the section [Acknowledge token](../../downlink-messages/ack-token/) for more details
- **DID**: Destination identifier (recipient of the SMS)
- **Message**: SMS message
