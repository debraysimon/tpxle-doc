d # Configuration messages

This message reports the parameter values configured in the trackers. If the complete list is requested, several UL messages will be transmitted.

|Common header | Data |  Data |  Data |  Data | Data | Data|
|--------|--------|--------|--------|--------|--------|--------|
| Byte 0-4 |  Byte 5 |  Byte 6-10 |  Byte 11-15 |  Byte 16-20 |  Byte 21-25 |  Byte 26-30 |
| Header with **Type**=0x07 |**0x02**|**Parameter 1**|**Parameter 2**|**Parameter 3**|**Parameter 4**|**Parameter 5**|

 **Parameter x**: Configuration of the parameter x, encoded on 5 bytes as follow:

|  Parameter x   |    Parameter x*               |
|--------------------|-----------------------------------|
|  Byte (5\***x**+1) |  Byte (5\***x**+2) - (5\***x**+5) |
|  **Parameter ID**  |  **Parameter value**              |

## Parameter ID:
For details on available parameters, their identifiers and their values, please visit [here](../../Parameters-default-configuration/firmware-parameters).

**Parameter value**: Unsigned 32 bits value in big endian format (MSB first).

## Special parameters

**Firmware version** (Parameter ID equals to 0xFD or 0xFE) should be read as follows:

|  Parameter x   |  Parameter ID  |  Parameter value |
|--------------------|--------------------|----------------------|
|  Byte 5\*x+1     | 0xFD or 0xFE       |                      |
|  Byte 5\*x+2     |                    |  0x00                |
|  Byte 5\*x+3     |                    |  Firmware version    |
|  Byte 5\*x+4     |                    |  Firmware revision   |
|  Byte 5\*x+5     |                    |  Firmware iteration  |


**Example**

 Parameter=0xfe00010881, Firmware version=0x01, Firmware revision=0x08, Firmware iteration= 0x81

-   **Tracker orientation** (Parameters ID equals to 0xFA, 0xFB or 0xFC) can be negative.

|  Parameter x          |  Parameter ID  |  Parameter value|
|---------------------------|--------------------|----------------------|
|  Byte 5\*x+1              | 0xFA, 0xFB or 0xFC |                      |
|  Byte 5\*x+2 - 5\*x+5     |                    |  X, Y or Z Axis      |

 **X, Y or Z Axis**: Value measured on axis X, Y or Z of the accelerometer, it is expressed in mG. Refer to the section [Two's complement Encoding](../../downlink-messages/two-complement-encoding/readme.md) for information for the encoding

-   **Mode** (Parameter ID equals to 0xF9): Unsigned 32 bits value in big endian format (MSB first).
    -   0- Standby
    -   1- Motion tracking
    -   2- Permanent tracking
    -   3- Motion start/end tracking
    -   4- Activity tracking

-   **profile** configuration (Parameter ID equals to 0xF6): provides the dynamic profile of the tracker.
    -   0: No profile
    -   1: Profile sleep
    -   2: Profile economic
    -   3: Profile intensive

-   **consumption** (Parameter ID equals to 0xF7): provides the power consumption of the tracker in mA

-   **ble_bond_info** (Parameter ID equals to 0xF8): Unsigned 32 bits value in big endian format (MSB first).
    -   0: the tracker is not bonded
    -   1: the tracker is bonded
    -   2: unknown state
