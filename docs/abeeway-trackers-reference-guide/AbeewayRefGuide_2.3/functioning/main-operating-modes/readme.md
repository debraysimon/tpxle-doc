# Main operating modes

|  Operating mode |     Trackers|User Interface needed|
|----------------------|-----------------|-------------------------|
|**OFF <sup>(1)</sup>**   |Micro, smart badge and compact trackers|button or reed switch acting like a button|
|**Standby**  |   All|                                             |
|**Motion tracking**  |     All|                                   |
|**Permanent tracking**|     All|								   |
|**Motion start/end**|     All|									   |
|**Activity mode**  |     All|							 	 	   |

:::tip Note

 <sup>(1)</sup> Can be forbidden using *config_flags* parameter bit 1 and bit 15
 (Refer to the section [Miscellaneous parameters](../../downlink-messages/parameters-configuration/#miscellaneous-parameters) for more details)
 :::

## Overview

 The tracker supports up to six different operational modes: Off,
 Standby, Motion tracking, Permanent tracking, Start/End motion tracking and
 activity tracking.

 The operational mode is configurable using the configuration
 parameters.

 For more details, please refer to [Parameters for operational modes](../../downlink-messages/parameters-configuration/#parameters-for-operational-modes)

 Alongside the main operating mode, the tracker can perform extra
 operations known as side operations. All the side operations can be
 concatenated together and executed alongside main operation modes.

:::tip Notes

1.  The LoRaWAN™ transmission periods may not be respected due to the duty cycle network constraint.

2.  Event messages can also be sent depending on the configuration of bits 6, 8 and 9 of the *config_flags* parameter. (Refer to [Event message](../../uplink-messages/event/readme.md) for more information)
:::

## OFF mode

The tracker is in deep low power mode. No LoRaWAN™ uplinks are sent.

A press<sup>(1)</sup> is required to wake up the device. There are three different ways to enter this mode:

-   User action (long button press<sup>(2)</sup> , if the device is allowed for by setting bit 1 and clearing bit 15 of the *config_flags* parameter, and if the tracker is not in SOS).

-   Low battery level.

-   LoRaWAN™ downlink request.

In each case, a shutdown message is sent via LoRaWAN™ uplink, with the
cause. Refer to the section [Shutdown message](../../uplink-messages/shutdown/readme.md) for more details.

:::tip Note
<sup>(1)</sup> The button press duration is defined by the firmware paramter, *button_mapping*.

<sup>(2)</sup> The long press duration is button press duration + 3 seconds. Please refer to [User Interface](../user-interfaces) section for more details on different button sequences.
:::

## Standby mode

The tracker sends periodically short LoRaWAN™ messages, called heartbeat, at the configured frequency (*lora_period*). The device positions can be obtained in this mode by using the side operations features (Refer to [Side operations](../side-operations/readme.md) for more details).

## Motion tracking mode

The tracker provides positions at the *ul_period* frequency only when the device is moving. The positions are given by the geolocation strategy defined by *geoloc_sensor* parameter.
When the device is not moving, the position message is replaced by the heartbeat message transmitted at the *lora_period* frequency.

The end of motion is detected when the device has not moved during a *motion_duration* delay. After this delay, if the parameter *motion_nb_pos* is set, some additional positions are sent.

## Permanent tracking mode

The device reports its positions at the *ul_period* frequency regardless of the motion. It uses the *geoloc_sensor* parameter for geolocation technology. Heartbeat messages are sent if there are no uplink messages during *lora_period* seconds.

:::tip Note
Regular positions can also be obtained using standby mode plus the side operation periodic position.
:::

## Motion Start/End tracking mode

This mode is used when only the beginning and the end of a motion are the points of interest. The tracker provides its position when it starts and stops moving. The technology used is defined by the *geoloc_sensor* parameter.

In this mode, (*motion_nb_pos*+1) positions messages (due to a start or an end) are reported and are spaced in time by the parameter *ul_period*.

If either **geoloc_start** or the **motion_start** message is selected, the first LoRaWAN™ position message will be sent once the position has been acquired. For more details, please refer to the section [Position message scheduling](../../geolocation-strategy-modes/geolocation-technology/readme.md).

The end of the motion is detected when there is no movement during *motion_duration* seconds. Heartbeat messages are sent if there are no uplink message during *lora_period* seconds.

:::tip Note

In case of too short motion, the parameter *motion_nb_pos* may be not respected.
:::

## Activity mode

This mode sends an activity report instead of positions by counting the number of motions with the accelerometer.
Each motion detection increases a counter (if 3 motion events are detected during a 2 seconds period interval) and the counter value is reported at the *ul_period* frequency.
Heartbeat messages are sent if there are no other uplink messages during *lora_period* seconds.

:::tip Notes

1.  *motion_sensitivity* parameter should have a value between 100 and 200 
2.  The counter is reset when:
    -   Any downlink message is received
    -   The tracker is turned on
3.  The number of transmissions of activity payload is given by the
    *transmit_strat* parameter (and *transmit_strat_custom* parameter if configured), with the following behavior:
	-   Double transmission case:
    	-   Activity messages are sent twice spaced by the *ul_period*.
    	-   If the counter is incremented during the *ul_period*, the new value is sent otherwise the previous one is reported.
    	-   If the tracker is moving while the payload is created, the uplink applies the double transmission
	-   Single transmission case:
    	-   Activity messages are sent three times spaced by the *ul_period*. If the counter is incremented during this period, the counter value is updated.
:::
