# Parameters configuration

Any parameter can be remotely modified with a downlink LoRaWAN message. Such messages are built according to the following format:

| Byte 0 | Byte 1  | Byte2            | Byte 3-6                |
| ------ | ------- | ---------------- | ----------------------- |
| 0x0B   | **ACK** | **Parameter ID** | **New value** \[31-00\] |

It is possible to modify up to 5 parameters in the same message by using the following format:

|        |         | Parameter 1        | Parameter 1               | Parameter 2        | Parameter 2               |
| ------ | ------- | ------------------ | ------------------------- | ------------------ | ------------------------- |
| Byte 0 | Byte 1  | Byte 2             | Byte 3-6                  | Byte 7             | Byte 8-11                 |
| 0x0B   | **ACK** | **Parameter ID 1** | **New value 1** \[31-00\] | **Parameter ID 1** | **New value 1** \[31-00\] |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](../../downlink-messages/ack-token/readme.md) **Max value is 0x0F**.

For details on available parameters, their identifiers and their values, please visit [here](../../Parameters-default-configuration/firmware-parameters/).

**Persistence**: This configuration is initially modified in the device RAM in order to minimize number of flash writes in case of multiple concatenated commands. After 5 seconds, the last RAM configuration (including any other changes from remote or CLI commands) is saved to flash and will be used if the device resets.

