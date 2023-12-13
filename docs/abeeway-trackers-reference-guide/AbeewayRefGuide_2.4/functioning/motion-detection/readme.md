# Motion detection

 This feature is supported by all Abeeway trackers.

:::tip Note
- Please refer to [AN-018_Motion_and_shock_detection](/documentation-library/abeeway-trackers-documentation.md#application-notes) application note for more details.
- Please visit [here](../../Parameters-default-configuration/firmware-parameters.md#accelerometer-parameters) for the motion detection parameters.
:::


## Overview

The tracker embeds a three axes accelerometer, which detects accelerations and triggers motion events. It is configurable with three parameters:

-   *motion_sensitivity*: Allow a fine tuning of the acceleration intensity to trigger a motion event.
-   *motion_debounce*: Minimum duration of a movement to be detected (applicable if *motion_sensitivity* parameter is set to a value between 1 and 99).
-   *motion_duration*: Define the delay needed without any motion detection to generate a motion end event.

 The accelerometer is always active except in OFF mode.

 ## Motion Duty Cycle Percentage
 
 The tracker stores the % of time tracker had been moving since the last reset of the tracker or when then counter is reset using [Clear motion percentage downlink](../../downlink-messages/clear-motion-percentage/). Motion Duty Cycle percentage (MDP) is reported in [motion end uplinks](../../uplink-messages/event/readme.md#event-message).

## Device orientation

The acceleration values from the three axes are available within the **motion end** event messages or by sending a specific downlink (Refer to [Request device configuration](../../downlink-messages/request-device-configuration/readme.md) for more details). This allows the application to determine the tracker orientation. Please refer to [AN-005_device_orientation](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#application-notes) for more details on computing device orientation from accelerometer data.
