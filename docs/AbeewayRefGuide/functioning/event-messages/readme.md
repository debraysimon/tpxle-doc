# Event Messages

 Event messages are supported by all Abeeway trackers.

These messages are notifications sent by the tracker informing theserver about specific events Based on the configuration, events can be:
-   **Geolocation start**: Sent when the tracker begins a geolocation.
-   **Motion start**: Sent when the tracker begins a motion.
-   **Motion end**: Sent when the end of a motion is detected. (After motion_duration delay).
-   **Temperature information**: Sent if the measured temperature is below or above the configured thresholds.
-   **Start SOS**: Sent when the tracker enters the SOS.
-   **Stop SOS**: Sent when the tracker leaves the SOS.
-   **BLE connect**: Sent when a tracker is bonded and BLE connected to a mobile or a tablet.
-   **BLE disconnected**: Sent when a tracker is bonded and BLE disconnected to a mobile or a tablet.
-   **BLE bond deleted**: Sent when the bond is deleted on the tracker.
-   **Angle detection event**: Sent when the angle state (learning, normal, critical) of the tracker is updated.
-   **BLE geozoning**: Sent when the tracker enters or exits a geozoning zone.

Refer to [Event message](/uplink-messages/event/readme.md) for the format of the uplinks.

The sending of **Geolocation start**, **Motion start**, **and Motion end** event messages depend on the operational mode as well as of the *config_flags* (bits 6, 8 and 9). See subsections below for more data.

## In Standby operating mode

|config flag bits   |Bit 6 geaolocation start|Bit 8 Motion start|Bit 9 Motion end| Message |
|----------------------|-----------------|-------------------------|-------------------|-------------------------|
|**Beginning of motion**    |Don't care|1|Don't care|**Motion Start** event |
|**End of motion**          |Don't care|Don't care|1|**Motion End** event|


## In Motion tracking operating mode

|config flag bits    |Bit 6 geaolocation start|Bit 8 Motion start|Bit 9 Motion end| Message |
|----------------------|-----------------|-------------------------|-------------------|-------------------------|
|**Beginning of motion**    |0|0|Don't care|**Geoloc start** event |
|**Beginning of motion**    |Don't care|1|Don't care|**Motion Start** event |
|**Beginning of motion**    |1|0|Don't care|WIFI position |
|**End of motion**          |Don't care|Don't care|1|**Motion End** event|


## In permanent tracking operating mode


|config flag bits   |Bit 6 geaolocation start|Bit 8 Motion start|Bit 9 Motion end| Message |
|----------------------|-----------------|-------------------------|-------------------|-------------------------|
|**Entering of the mode**    |0|Don't care|Don't care|**Geoloc start** event |
|**Entering of the mode**    |1|0|Don't care|**Motion Start** event |
|**Beginning of motion**    |Don't care|1|Don't care|WIFI position |
|**End of motion**          |Don't care|Don't care|1|**Motion End** event|

## In activity tracking operating mode

|config flag bits   |Bit 6 geaolocation start|Bit 8 Motion start|Bit 9 Motion end| Message |
|----------------------|-----------------|-------------------------|-------------------|-------------------------|
|**Beginning of motion**    |Don't care|1|Don't care|**Motion Start** event |
|**End of motion**          |Don't care|Don't care|1|**Motion End** event|

## In start / end tracking operating mode

|config flag bits   |Bit 6 geaolocation start|Bit 8 Motion start|Bit 9 Motion end|Message |
|----------------------|-----------------|-------------------------|-------------------|-------------------------|
|**Beginning of motion**    |0|0|Don't care|**Geoloc start** event |
|**Beginning of motion**    |Don't care|1|Don't care|**Motion Start** event |
|**Beginning of motion**    |1|0|Don't care|WIFI position |
|**End of motion**          |0|Don't care|0|**Geoloc start** event|
|**End of motion**          |Don't care|Don't care|1|**Motion Start** event|
|**End of motion**          |1|Don't care|0|WIFI position|


## Temperature event (all operating modes)

|                      |temperature_high 0x1D|temperature_low 0x1E|Message|
|----------------------|-----------------|-------------------------|-------------------|
|**Temperature > temperature_high**    |Configured(1)|NA (3)|**High temperature** event (byte 6=0x01)|
|**After a high temperature event: Temperature < temperature_high-5°C**|Configured(1)|NA(3)|**Normal temperature** event (byte 6=0x00)|
|**Temperature > temperature_high**|Not configured (2)|NA (3)|No event message|
|**Temperature < temperature_low** |NA(3)|Configured (1)|**Low temperature** event (byte 6=0x00)|
|**After a low temperature event: Temperature > temperature_low+5°C**|NA(3)|Configured (1)|**Normal temperature** event (byte 6=0x00)|
|**Temperature < temperature_low** |NA(3)|Configured (1)|No event message|       

Refer to [Temperature monitoring](/functioning/temperature-monitoring/readme.md) for more details.

:::tip Notes

1.  Configured means not set to 255 (0xFF) but to a temperature value
2.  Not configured: value= 255(0xFF)
3.  NA: The parameter can be configured or not configured
:::

## SOS events (all operating modes)

|                              |  Message        |
|------------------------------|----------------------|
|  The tracker enters in SOS  |  **Start SOS** event  |
|  The tracker leaves the SOS |  **Stop SOS** event   |

Refer to the section [SOS](/functioning/sos/readme.md) for more details.

## Angle detection (all operating modes)

When the angle detection feature is enabled, the following event messages can be set based on the *angle_report_mode* parameter:
-   learning to normal: Sent upon transition from learning to normal state
-   normal to learning: Sent upon transition from normal to learning state
-   normal to critical: Sent upon transition from normal to critical state (1)
-   critical to normal: Sent upon transition from critical to normal state
-   critical to learning: Sent upon transition from critical to learning state

**Critical state**: the critical orientation of the tracker has been reached.
**Learning state**: The tracker learns a new reference position.
**Normal state**: the reference orientation has been determined in learning step. The current orientation is normal.

:::tip Note

(1)  Each time a normal-to-critical angle is detected, the tracker performs a position and sends it as an extended position payload.
:::

## BLE geozoning (all operating modes)

|                             |  byte 6 |  Message |
|-----------------------------|--------|------------------|
|  The badge moved from hazardous to a safe area      |  0 |  **Safe area** event |
|  The badge moved from a non monitored area to a monitored area|  1 |  **Entry** event     |
|  The badge moved from a monitored to a non monitored area     |  2 |  **Exit** event      |
|  End of motion: the badge moved to a hazardous area   |  3 |  **Hazard** event    |

## BLE communication events (all operating modes)

|  BLE Connection status                |  Message          |
|-------------------------------------------|-----------------------|
|  New BLE connection (if the tracker is also bonded)    |  **BLE connected**    |
|  End of BLE connection (if the tracker is also bonded) |  **BLE disconnected** |
|  BLE bond is deleted on the tracker       |  **BLE bond deleted** |
