# Request device configuration

| Byte 0 | Byte 1  | Byte 2-21                        |
| ------ | ------- | -------------------------------- |
| 0x03   | **ACK** | **Parameter ID list** (otpional) |

**ACK**: Acknowledge token. Refer to the section [Acknowledge token](/AbeewayRefGuide/downlink-messages/ack-token/readme.md) **Max value is 0x0F** .

**Parameter ID list**: List of requested parameters identifiers.

- Each single byte contains a single identifier.
- Parameter IDs are the one used to configure the device (Refer to the section [Configuration message](/AbeewayRefGuide/uplink-messages/configuration/readme.md)).
- Special parameters (described below) can be requested.
- The list can be empty. In this case, all parameters are requested.

## Special parameter ID

Tracker orientation:

- 0xFA: get the X axis accelerometer value in mG
- 0xFB: get the Y axis accelerometer value in mG
- 0xFC: get the Z axis accelerometer value in mG provides the orientation of the tracker on each axis. The orientation can be negative, refer to the section [Two's complement Encoding](/AbeewayRefGuide/downlink-messages/two-complement-encoding/readme.md) for information for the encoding

Firmware version:

- 0xFD: get the BLE firmware version.
- 0xFE: get the MCU application firmware version.

Operating mode (0xF9):

- 0- Standby
- 1- Motion tracking
- 2- Permanent tracking
- 3- Motion start/end tracking
- 4- Activity tracking

Power consumption (0xF7): send the power consumption in mAh

BLE bond state (0xF8)

- 0: the tracker is not bonded
- 1: the tracker is bonded
- 2: unknown bond state

Dynamic profile configuration(0xF6):

- 0- None
- 1- Sleep
- 2- Economic
- 3- Intensive

:::tip Notes

1.  The tracker answers this request with a Configuration uplink message (section [Configuration message](/AbeewayRefGuide/uplink-messages/configuration/readme.md)).
2.  Each uplink can contain up to 5 parameters.
3.  If the number of parameters is greater than 5, the tracker will send the needed number of uplinks to fulfill the request.  
    :::
