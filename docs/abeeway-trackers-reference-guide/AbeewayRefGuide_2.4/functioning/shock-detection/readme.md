# Shock detection

This feature is supported by all Abeeway trackers.

:::tip Note
- Please refer to [AN-018_Motion_and_shock_detection](../../../../documentation-library/abeeway-trackers-documentation.md#application-notes) application note for more details.
- Please visit [here](../../parameters-default-configuration/firmware-parameters.md#accelerometer-parameters) for the motion detection parameters.
:::


## Overview

The mechanical definition of a shock is a strong acceleration intensity during a short period. It can be seen as a pulse. Once a shock has been detected, a [shock detection event message](../../uplink-messages/shock-detection/readme.md#accelerometer-shock-data) is sent via LoRaWAN, which will contain a measurement for the intensity of the shock.
Note
•	The shock detection embeds a debounce timer (fixed value of 1 second) to avoid sending multiple LoRa event messages for the same shock.
•	The shock detection requires the high sensitivity mode (Octet 0 of motion_sensitivity must be in the range [1..99]).

## The Gadd index
From AT2 R2.4, the shock detection has been enhanced with the calculation of the GADD index. The Gadd index seeks to measure the effects of a shock on the body, and considers both the intensity of acceleration and the duration, as it was found during experiments that body damage increases with the duration of the shock and acceleration to the power 2.5. This enhancement is only available with trackers embedding the LIS2DW12 accelerometer.

## Configuration

The configuration of the shock detection is based on a single parameter called *shock_detection*. This parameter gives the accelerometer sensitivity used to trigger the shock events.

## Shock detection message

Upon the detection of a shock event, the tracker triggers a [shock detection LoRaWAN message](../../uplink-messages/shock-detection/readme.md#shock-detection-messages) as follows. 
The first message is sent immediately with the actual acceleration values.

The next ones are delayed by two minutes. In this case the reported value will be the highest shock that occurred during this fixed period. If no shock is detected during the two minutes period, no more payload is sent.
