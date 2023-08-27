# Clear motion duty cycle
This downlink is used to reset the motion duty cycle counter inside the tracker. This counter resets to 0 every time there is reset on the tracker or this downlink is received by the tracker.

| Byte 0 | Byte 1  |
| ------ | ------- |
| 0x0C   | **ACK** |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](../../downlink-messages/ack-token/readme.md) **Max value is 0x0F**.
