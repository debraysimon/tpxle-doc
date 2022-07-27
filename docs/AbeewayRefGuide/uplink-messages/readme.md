# Uplink messages

 This section describes the payload messages supported by the tracker.

 Unless otherwise specified, all values are transmitted in network byte order (MSB first). Each message is composed of two parts:
-   A common header
-   A specific data part

 The LoraWAN&trade; port used for the uplinks is the 18.

 The tracker supports different types of uplink messages, that are described in the following sections:

|  Message type      | Uplink  |   Content          |
|------------------------|-------------|------------------------|
|**Frame pending**|**0x00**|This uplink message is sent to trigger the sending. (and speed up the configuration of the tracker) if downlink messages areavailable on gateway and no other uplink message is on the queue|
|**Position**          |  **0x03**    |GPS, low power GPS, WIFI or BLE position data|
|**status**            |  **0x04**    |It replaces the old energy status payload provides a power and health status of the tracker|
|**Heartbeat**         |  **0x05**    |Notify the server that the tracker is operational and under LoRaWANTM coverage|
|**Activity Status(1)**|  **0x07**  |Reports the activity counter. Used only by the activity tracking operating mode|
|**Configuration(1)**  |  **0x07**  |Reports the partial or whole configuration of the trackers|
|**Shock detection(1)**|  **0x07**  |Reports the accelerometer vector (X, Y, Z) of the detected shock|
|**BLE MAC address**     |  **0x07**  |Reports the BLE MAC address of the tracker|
|**Shutdown**          |  **0x09**    |Sent when the tracker is set off|
|**Event(2)**       |  **0x0A**    |Sends event information about tracker|
|**Collection scan**   |  **0x0B**    |WIFI or BLE collection scan data|
|**Proximity**         |  **0x0C**    |Proximity feature messages (detailed in the application note [AN-007_proximity_feature](https://actilitysa.sharepoint.com/:f:/t/aby/EgbhcfgQ-bZPrkYbQ7isqYYBPZkOHvKjhwmED46IDtiimA?e=m0AYsd))|
|**Extended Position(3)** |  **0x0E**|GPS, low power GPS, WIFI or BLE position data with accurate data|
|**Debug**             |  **0x0F**    |Internal use only|

:::tip Notes

(1) Activity status message, configuration message and shock detection message share the same identifier. They are differentiated by the value of byte 5 of the payload.

(2) Configurable via the *config_flags* parameter
:::