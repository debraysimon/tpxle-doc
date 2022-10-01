# SOS

|Activation mode    |Trackers|User Interface needed|
|----------------------|-----------------|-------------------------|
|**Using a button** (button press type, configured in *button_mapping* parameter)|Micro Tracker, Smart Badge         |          Button             |
|                                                  |Compact tracker              |Reed switch acting like a button|
|**Using a downlink**            |All              |          -              |

 This capability forces the device in a specific tracking mode tagged
 as SOS, for instance when the tracker's owner needs help.

 Once this feature is activated, the behavior is the following:

-   The tracker sends a **start SOS** event payload.
-   The tracker continuously sends its position at a configurable period using *sos_period* parameter.
-   The tracker uses the geolocation strategy: *geoloc_sensor*.
-   The LoRaWAN™ position messages are tagged with an alert flag in the common header. (Refer to [Common message header](/AbeewayRefGuide/uplink-messages/common-message-header/readme.md) for more details)
-   The tracker's red LED is blinking.
-   The tracker plays a melody (if the bit 16 of the *config_flags* parameter is set).

The tracker can enter this mode by either the button sequence (see [User Interface](/AbeewayRefGuide/functioning/user-interfaces/)) or receiving a **SOS start** LoRaWAN™ downlink.

This mode is disabled by the same button sequence that triggered **SoS start**, or a **SOS stop** LoRaWAN™ downlink. When it is deactivated, a **stop SOS** event payload is sent, and the tracker stops blinking.

Refer to the [Timing diagram](/AbeewayRefGuide/geolocation-strategy-modes/geolocation-technology/readme.md) section for more details about position messages scheduling.

:::tip Notes

1.  **The button press(es) to activate the SOS is given in the parameter *button_mapping*.**
2.  While the tracker is in SOS:
    -   The operating mode reported in the payloads is the one before entering the SOS.
    -   The **alert** bit is set. (Refer to [Common message header](/AbeewayRefGuide/uplink-messages/common-message-header/readme.md) for more details)
    -   All downlinks are accepted except position on demand request and change the operating mode to OFF. With the following limitations:
        -   The mode change requests are applied after leaving SOS
        -   The parameter changes impacting the geolocation are applied at the next geolocation cycle
    -   **Between 2 button sequences, a delay of 20 seconds must be respected. If this delay is not respected the second sequence won't be considered.**
    -   During SoS, **the LoRa duty cycle is deactivated**
:::