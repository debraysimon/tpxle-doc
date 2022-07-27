# Shock detection

This feature is supported by all Abeeway trackers.

## Overview

This feature enables the reporting of the shocks detected by the tracker. The configuration is flexible enough to detect a shock either globally or belonging to a given direction.

## Configuration

The configuration of the shock detection is based on a single parameter called *shock_detection*. This parameter gives the accelerometer sensitivity used to trigger the shock events.

The intensity of the shock is configured via the parameter *shock_detection*, for which the following formula applies:
- intensity (in g) = 1 + *shock_detection* \* 0.063g

Said differently, a shock with at least an intensity **I** is detected if the configured value is:
- *shock_detection* value = (**I** - 1)/0.063.
with a range of 1 to 111, the shock detection threshold can be configured between 1,063 and 7,993g. 

Note that the 1 in the equation has been introduced to remove the terrestrial gravity.

:::tip Note
The sensitivity configured via the *shock_detection* parameter must be lower than the one configured with the *motion_sensitivity parameter*, otherwise all motions events are considered as shocks. Refer to [Accelerometer parameters](/downlink-messages/parameters-configuration/#accelerometer-parameters) for more details about this parameter.
:::

### Examples

1.  Configuring the shock detection intensity to 2g, the value to configure will be: (2 - 1)/0.063 = 15.873 rounded to 16.
2.  Configuring the shock detection intensity to 8g (max value), the value to configure will be: (8 - 1)/0.063 = 111.111 rounded to 111.

## Shock detection message

Upon the detection of a shock event, the tracker triggers a LoRaWAN&trade; message as follows: 
The first message is sent immediately with the actual acceleration values.

The next ones are delayed by two minutes. In this case the reported value will be the highest shock that occurred during this fixed period. If no shock is detected during the two minutes period, no more payload is sent.