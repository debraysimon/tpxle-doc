# Downlink messages

These messages are sent from the server to the tracker through the  
LoRaWAN™ network. They are used to either configure or manage the  
tracker. Each message contains a header including:

- A message type
- An acknowledgement token

The remaining of the message depends on the message type described in  
the following table.

| Message type            | ID   | Description                                     |
| ----------------------- | ---- | ----------------------------------------------- |
| POD                     | 0x01 | Position on demand                              |
| Set mode                | 0x02 | Change the tracker operational mode             |
| Request configuration   | 0x03 | Request the actual configuration of the tracker |
| Start SOS               | 0x04 | Turn on SOS                                     |
| Stop SOS                | 0x05 | Turn off SOS                                    |
| Proximity control       | 0x07 | Control and monitor proximity feature (1)       |
| Angle detection command | 0x08 | Control the angle detection feature (2)         |
| Status request          | 0x09 | Requests the tracker status                     |
| Set parameter           | 0x0B | Modify parameter(s)                             |
| Clear motion percentage | 0x0C | Clear the motion percentage                     |
| Debug command           | 0xFF | Reset the tracker                               |
| Debug command           | 0xFF | Plays a melody                                  |
| Debug command           | 0xFF | Trigger a heartbeat                             |
| Debug command           | 0xFF | message Entering in BLE                         |
| Debug command           | 0xFF | bootloader                                      |

:::tip Table notes  
(1) Please refer to the dedicated application note [AN-007_proximity_feature](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes) for more details.

(2) Please refer to the dedicated application note [AN-010_Angle_Detection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes) for more details.  
:::

:::tip Notes
1.  Any unexpected message (unknown message type, bad length, etc) is discarded. However, the ack token is updated even if the message is discarded (if the payload is at least 2 bytes long).
2.  The **LoRaWAN™** port to be used for downlink is **2**.  
:::
