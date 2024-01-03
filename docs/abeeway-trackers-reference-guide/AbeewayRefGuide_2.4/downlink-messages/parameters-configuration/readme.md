# Parameters configuration

Any parameter can be remotely modified with a downlink LoRaWAN message. Such messages are built according to the following format:

| Byte 0 | Byte 1  | Byte2            | Byte 3-6                |
| ------ | ------- | ---------------- | ----------------------- |
| 0x0B   | **ACK** | **Parameter ID** | **New value** \[31-00\] |

It is possible to modify up to 5 parameters in the same message by using the following format:

| &nbsp;      | &nbsp;       | Parameter 1        | Parameter 1               | Parameter 2        | Parameter 2               |
| ------ | ------- | ------------------ | ------------------------- | ------------------ | ------------------------- |
| Byte 0 | Byte 1  | Byte 2             | Byte 3-6                  | Byte 7             | Byte 8-11                 |
| 0x0B   | **ACK** | **Parameter ID 1** | **New value 1** \[31-00\] | **Parameter ID 1** | **New value 1** \[31-00\] |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](../ack-token/readme.md) **Max value is 0x0F**.

For details on available parameters, their identifiers and their values, please visit [here](../../parameters-default-configuration/firmware-parameters/).
