# Debug commands

 Debug downlink commands allow to trigger specific behavior.

|  Byte 0 |  Byte 1 |  Byte 2   | Bytes 3-4 |
|-------------|-------------|---------------|----------------|
|  0xFF       |  ACK        |  Debug CMD ID |  (optional)    |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token.](../ack-token) **Max value is 0x0F**. 

**Debug CMD ID:**
-   **0x01 Reset the device**
-   0x02 Delete the BLE bond<sup>(1)</sup>
-   **0x03 Plays a melody**
-   0x04 Send the current error code with the LoRa debug uplink
-   0x05 Trigger a heartbeat message<sup>(1)</sup>
-   0x06 Trigger a TX power debug uplink<sup>(1)</sup>
-   0x07 Write New TX Power Index
-   0x08 Entering in BLE bootloader<sup>(1)</sup>
-   0x09: Firmware Specific parameters request
-   0x0A Configure Startup modes
-   **0x0B Start and stop BLE advertisement**
-   0x0C requests Angle Detection debug information
-   0xF1 Trigger an error, Ack token value as error data<sup>(1)</sup>

 **Note:**

 <sup>(1)</sup> No optional data is required for this **debug CMD ID**

 Only bold commands are described below.

## Resetting the device

|  **Byte 0** |  **Byte 1** |  **Byte 2**   |  **Bytes 3-4** |
|-------------|-------------|---------------|----------------|
|  0xFF       |  ACK        |  0x01         |**Action** (optional)    |

 **Action**: this byte can be used when Debug CMD ID=0x01
-   None or 0x00: Reset the device
-   0x01: Reset the Device +go back to initial configuration of the tracker
-   0x02: Reset the Device +go back to initial configuration of the tracker + delete the bond (if it exists)

**Note**

 The initial configuration is the one used the last time the MCU application firmware was flashed. If a default profile is set in this initial configuration, the configuration will be used.

## Playing a melody

|  **Byte 0** |  **Byte 1** |  **Byte 2**   |  **Byte 3** |  **Byte 4** |
|-------------|-------------|---------------|-------------|----------------|
|  0xFF       |  ACK        |  0x03         |**Melody ID** (optional)| **Duration** (optional) |

 **Melody ID**: this byte can be used when **Debug CMD ID=0x03** 
 The melody can be chosen in the list of the melodies (see the list below). 
 Depending on the melody, the duration can also be set.

**Notes**

1.  If no **melody ID** is selected, the **melody ID** 3 is playedduring 60 seconds.
2.  If a not supported value of **melody ID** is used, the defaultmelody (**melody ID**=3) is used.
 **Duration**: this byte can be used to choose the duration of the melody when **Debug CMD ID=0x03** and
 **melody ID** value is 3, 4, 7,11, or13 (see the table below).

 It can be set between 0 to 60 seconds. If it is set to 0, a duration of 10 seconds is used.

|  **Melody ID** |  **Melody(1)** |  **Melody Name (2)**   |  **Duration selection** |
|----------------|----------------|------------------------|-------------------------|
|  0          |  A3, A4, A5, A6           |Switch on                  ||
|  1          |  A5, A4, A3           |Switch off                  ||
|  2          |  C5, C4, C5, C4, C3       |Low battery                  |YES<sup>(3)</sup>|
|  3 (default)|C4, C5, E4, E5, G4, G5, C5, C6|BLE geozoning alert                  |YES<sup>(3)</sup>|
|  4         |E6, F6, E6, F6|SOS                 ||
|  5          |F4, G4, A4, B4|SOS stop                ||
|  6          |Falling frequency sweep (From E7 to A4)|Device reset||
|  7          |C5, G4, D5|BLE advertising|YES(<sup>(3)</sup>|
|  8         | E6, G6, A6, E7|BLE bond success||
|  9          |E7, A6, G6, E6|BLE bond failure or deleted||
|  10         |high pitch beeps at 3200Hz, 2900Hz|BLE Link Loss/Alert||
|  11          |beeps at 1340 Hz|Proximity warning|YES<sup>(3)</sup>|
|  12          |1 beep at 1340 Hz|proximity warning reminder||
|  13          |D4, C4, D4, E5, E5, E5|Proximity alert|YES<sup>(3)</sup>|
|  14          |2 beeps at 1340 Hz|proximity alert reminder||

**Notes**:

<sup>(1)</sup> Reference: https://en.wikipedia.org/wiki/Musical_note

<sup>(2)</sup> If the melody is used in the MCU applicative firmware V2.3

<sup>(3)</sup> If Duration byte is not set, a duration of 10 seconds is used

## Starting and stopping BLE Advertisement

 This downlink is used to start and stop the BLE advertisement with a given **duration**.

|  **Byte 0** |  **Byte 1** |  **Byte 2** |  **Byte 3-4** |
|-------------|-------------|-------------|---------------|
|  0xFF       |  **ACK**    |  0x0B       |  **duration** |

 **Duration**: duration in seconds of the advertisement coded on 2 bytes (big endian: MSB first). The value 0 stops the advertisement.
