# BLE MAC address message

 This message is sent in answer to the DL [Status request](/downlink-messages/status-request/readme.md). It reports the BLE MAC address of the tracker.

|  Common header        |  Data |    Data         |
|---------------------------|-----------|----------------------|
|  Byte 0-4                 |  Byte 5   |  Byte 6-11           |
|  Header with **Type**=0x07|  **0x05** |  **BLE MAC Address** |

 **Example:** uplink received: 070464901005e604413dc504 for MAC address: e6 04 41 3d c5 04