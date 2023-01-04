# Abeeway trackers reference guide overview

This document describes in detail the usage of Asset tracker **MCU application Firmware 2.4** that runs on Abeeway trackers: Micro tracker, Compact tracker, Industrial tracker and Smart badge.

::: warning WARNING
- You must ensure that the MCU Firmware reference Guide matches the MCU Firmware version running on the tracker. Please refer to [Idetifiying tracker firmware](../../D-Reference/IdentifyInstalledFirmware/) to know the MCU and BLE firmware running on the tracker.
- Please ensure that the MCU and BLE Firmware version is compatible with each other and with the tracker model. You can find this information from [here](../../D-Reference/IdentifyTrackerModel/)
- For older versions of MCU Firmware Reference guides, see [here](https://actilitysa.sharepoint.com/:f:/t/aby/Ep4-XPaCPlpDkUrSP2_Iao0BLcCjcPyL_wiSe1aak0MzOg?e=5yPIEM)
- The **MCU application Firmware 2.4** does not support the **proximity detection** feature anymore. Please refer to MCU FW 2.3 and below for the proximity feature.
:::

- [Features](../introduction/features/readme.md), [Devices characteristics](../devices-characteristics/readme.md) and [Functioning](../functioning/readme.md) topics are related to the main functionalities of the device.
- The [Geolocation startegy modes](../geolocation-strategy-modes/readme.md) topic describes the geolocation strategies.
- [BLE Communication Interface](../ble-communication-interface/readme.md) introduces BLE communication interface to the user.
- [Uplink messages](../uplink-messages/readme.md) and [Downlink messages](../downlink-messages/readme.md) topics give more details regarding uplink and downlink messages of the trackers.
- The [Command Line Interpreter](../cli-interface) topic introduces the CLI interface.
- [Default configuration delivered with micro tracker and smart badge](../Parameters-default-configuration/default-delivered-mt-sb), [Default delivered compact and industrial tracker configuration](../Parameters-default-configuration/default-delivered-ci.md) and [Factory default 
configuration](../Parameters-default-configuration/factory-default.md) provide the basic default configuration of the trackers and the factory values for all parameters.
- [Tracker reset](../tracker-reset/readme.md) provides the relevant sequence of actions to be performed by the user.

This document is reserved for the support team, distributors, and integrator teams to give a deeper knowledge of all the possible settings. We do reserve the right to modify the contents in future releases.
