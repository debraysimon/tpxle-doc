# Event message

| Common header              | Data            | Data                |
| -------------------------- | --------------- | ------------------- |
| Byte 0-4                   | Byte 5          | Byte 6-12           |
| Header with **Type**\=0x0A | **Event Value** | **Additional data** |

It notifies generic events.

## Event Value

-   0x00: **geolocation start** message: If activated (bit 6 of *config_flags* set), the event message is sent when the tracker begins a geolocation.
-   0x01: **motion_start** message: If activated (bit 8 of *config_flags* set), the event message is sent when the tracker begins a motion.
-   0x02: **motion_end** message: If activated (bit 9 of *config_flags* set), the event message is sent when the end. of a motion is detected.
-   0x03: **BLE connected**: Sent when a tracker is bonded and BLE connected to a mobile or a tablet
-   0x04: **BLE disconnected**: Sent when a tracker is bonded and BLE disconnected to a mobile or a tablet
-   0x05: **Temperature information** message: if the temperature monitoring is activated (the parameter *temperature_high* or *temperature_low* is set), this event message is sent when there is a state change in the temperature (normal to alert or alert to normal) or it can be sent instead of a geolocation message if the geolocation is cancelled due to *temperature_action* parameter. (Refer to the section [Temperature monitoring](../../functioning/temperature-monitoring/readme.md) for more details)
-   0x06: **BLE bond deleted**: Sent when the bond is deleted on the tracker (it is sent even if the tracker was not bonded before the command to remove BLE bond was sent to the tracker)
-   0x07: **SOS start** message: The tracker enters in SOS
-   0x08: **SOS stop** message: The tracker leaves the SOS
-   0x09: **Angle detection** event
-   0x0A: **BLE geozoning** event

## Additional data

### Motion_end message:

Provide the gravity vector, which can be used for the device  
orientation. Vector components can be negative.

 Refer to the section [Two's complement Encoding](../../downlink-messages/two-complement-encoding/readme.md) for the
 encoding.

**Additional data with Event value=0x02**

| Byte 6-7   | Byte 8-9   | Byte 10-11 | Byte 13 |
| ---------- | ---------- | ---------- | ------- |
| **X axis** | **Y axis** | **Z axis** | **MDP** |

**X axis**: X axis accelerometer value in mG  
**Y axis**: Y axis accelerometer value in mG  
**Z axis**: Z axis accelerometer value in mG  
**MDP**: Motion Duration Percentage (Motion Duty Cycle). It stores the %duration of tracker movement since the last reset of the tracker or by resetting it with [Clear motion percentage downlink](../../downlink-messages/clear-motion-percentage/). Its value ranges from 0 to 100%

### Temperature alert message:

Provides data about the measured temperature.

**Additional data with Event value=0x05**

| Byte 6        | Byte 7              | Byte 8              | Byte 9-10        | Byte 11-12      |
| ------------- | ------------------- | ------------------- | ---------------- | --------------- |
| **State** ≠ 3 | **Max temperature** | **Min Temperature** | **High counter** | **Low counter** |
| **State** = 3 | reserved            | reserved            | reserved         | reserved        |

**State:**

- 0: Normal temperature
- 1: High temperature
- 2: Low temperature
- 3: Feature not activated

**Max Temperature**: Maximum temperature measured by the device.

**Min Temperature**: Minimum temperature measured by the device.

**High counter**: From the time a high temperature event is sent, this counter is incremented every 10 minutes (can be used to calculate the over temperature time).

**Low counter**: From the time a low temperature event is sent, this counter is incremented every 10 minutes (can be used to calculate the under temperature time).

:::tip Notes

If the feature is not activated, values in the additional data part are not valid.

The counters never reset.  
:::

### Angle detection:

Provide states and gravity vectors Additional data with Event  
value=0x09  
**Additional data with Event value=0x09**

| Byte 6    | Byte 7-8 | Byte 9-10         | Byte 11-12        | Byte 13-14        | Byte 15-16             | Byte 17-18             | Byte 19-20             | Byte 21   |
| --------- | -------- | ----------------- | ----------------- | ----------------- | ---------------------- | ---------------------- | ---------------------- | --------- |
| **Flags** | **Age**  | **Ref Vector**: X | **Ref Vector**: Y | **Ref Vector**: Z | **Critical Vector**: X | **Critical Vector**: Y | **Critical Vector**: Z | **angle** |

**Flags**: provides a status and report reason, coded as:

| Bit     | Type                          | Explanation                                                       |
| ------- | ----------------------------- | ----------------------------------------------------------------- |
| Bit 7-5 | **Transition between states** | 0: learning to normal                                             |
| &nbsp;       | &nbsp;                             | 1: normal to learning                                             |
| &nbsp;       | &nbsp;                             | 2: normal to critical                                             |
| &nbsp;       | &nbsp;                             | 3: critical to normal                                             |
| &nbsp;       | &nbsp;                             | 4: critical to learning                                           |
| Bit 4-3 | **Trigger type**              | 0: Critical angle reporting                                       |
| &nbsp;       | &nbsp;                             | 1: Angle deviation reporting                                      |
| &nbsp;       | &nbsp;                             | 2: Shock trigger                                                  |
| &nbsp;       | &nbsp;                             | 3: RFU                                                            |
| Bit 2-0 | **Repetition Counter**        | Range \[0..7\]. A new transition report cycle resets this counter |

**Age**: Age of the measure, expressed in seconds. The value is in big  
endian (MSB first).

**Ref Vector X**: X axis accelerometer value in mG, used for the reference vector

**Ref Vector Y**: Y axis accelerometer value in mG, used for the reference vector

**Ref Vector Z**: Z axis accelerometer value in mG, used for the reference vector

**Critical Vector X**: X axis accelerometer value in mG, it is the last measurement value

**Critical Vector Y**: Y axis accelerometer value in mG, it is the last measurement value

**Critical Vector Z**: Z axis accelerometer value in mG, it is the last measurement value

**Angle**: Angle in degree between the reference vector and the last  
measurement

:::tip Notes
1.  Signed 16 bit value on each axis, refer to the section [Two's complement Encoding](../../downlink-messages/two-complement-encoding/readme.md) for information for the encoding
2.  G is the terrestrial gravity, mG means milli G.
3.  For more details refer to the application note [AN_010_Angle Detection](../../../../documentation-library/abeeway-trackers-documentation#application-notes).  
:::

### BLE geozoning message:

**Additional data with Event value=0x0A**

| Byte 6     | Byte 7-9      |
| ---------- | ------------- |
| **Status** | **Beacon Id** |

#### Status

| Bit     | Type                  | &nbsp;           |
| ------- | --------------------- | ----------- |
| Bit 7-4 | **Beacon type**       | 0: short Id |
| Bit 3-0 | **Notification type** | 0: Safe     |
| &nbsp;       | &nbsp;                     | 1: Entry    |
| &nbsp;       | &nbsp;                     | 2: Exit     |
| &nbsp;       | &nbsp;                     | 3: Hazard   |

**Beacon Id:** beacon identifier of the detected beacon

:::tip Note  
Please refer to the dedicated application note [AN-011_BLE geozoning](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details.  
:::

## BLE Connection messages:

These messages are sent when the tracker is interacting over Bluetooth with the [Abeeway tracking app](/C-Procedure-Topics/GetStartedMobileApp_T/) installed on the smart phone.

|  BLE Connection status                |  Message      |
|-------------------------------------------|-----------------------|
|  New BLE connection (if the tracker is also bonded)    |  **BLE connected**    |
|  End of BLE connection (if the tracker is also bonded) |  **BLE disconnected** |
|  BLE bond is deleted on the tracker       |  **BLE bond deleted** |
