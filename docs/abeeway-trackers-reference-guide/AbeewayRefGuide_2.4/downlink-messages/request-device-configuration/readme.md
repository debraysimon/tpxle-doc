# Request device configuration


|  Byte 0 |  Byte 1  |  Byte 2-21             |
|---------|----------|------------------------|
|  0x03   |  **ACK** |  **Parameter ID list** (otpional)|

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token](../ack-token/readme.md) **Max value is 0x0F** .

 **Parameter ID list**: List of requested parameters identifiers.
-   Each byte contains a single identifier.
-   Parameter IDs are the ones used to configure the device (Refer to the section [Firmware Parameters](../../Parameters-default-configuration/firmware-parameters.md)).
-   If the list is empty, all the parameters are requested.

:::tip Notes
1.  The tracker answers this request with a Configuration uplink message (section [Configuration message](../../uplink-messages/configuration/readme.md)).
2.  Each uplink can contain up to 5 parameters.
3.  If the number of parameters is greater than 5, the tracker will send the needed number of uplinks to fulfill the request.
:::
