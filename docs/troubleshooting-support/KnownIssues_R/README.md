# Known Issues

## Issue #1: Using Abeeway updater to upgrade MCU Firmware 2.5+ 
**Affected Trackers: Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2, Industrial Manageable ATEX Beacon**<br/>
**Affected Firmware versions: MCU FW 2.5 and above**<br/>
When upgrading to MCU FW 2.5+, it is important to use [Abeeway updater V2.3.5](https://github.com/Abeeway/Abeeway-updater). Any other version of Abeeway updater will result in failed upgrade of the tracker.

## Issue #2: Compact/Industrial tracker shut down with Downlink
**Affected Trackers: Compact Tracker, Industrial Tracker V2, Industrial Manageable ATEX Beacon**<br/>
**Affected Firmware versions: MCU FW 2.3.x - 2.4.1**<br/>
There was a known issue in the firmware config files where bit 15 in [config_flags](/AbeewayRefGuide/Parameters-default-configuration/firmware-parameters.md#miscellaneous-parameters) was set to 0. This resulted in the Compact/Industrial tracker being switched OFF when the downlink was sent to change the [mode](/AbeewayRefGuide/Parameters-default-configuration/firmware-parameters.html#parameters-for-operational-modes) of tracker to OFF. If the tracker is switched off, then the casing must be opened to press the button on the PCB to turn on the tracker.
The updated [config files](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#firmware-update) have been modified to reflect the updated value of bit15=1 in *config_flags* for Compact/Industrial tracker. However, if you are running the above MCU Firmware versions with older config files, please enable bit 15 in *config_flags* to true or avoid sending downlink to set the mode = OFF. The recommended low power mode for Compact tracker/Industrial tracker is to set mode = STANDBY.

## Issue #3: Constructing motion_sensitivity downlink using Abeeway driver
**Affected Trackers: Micro Tracker V2/V3, Smart Badge, Compact Tracker, Industrial Tracker V1/V2, Industrial Manageable ATEX Beacon**<br/>
**Affected Firmware versions: MCU FW 2.3.x and below**<br/>
The *motion_sensitivity* firmware parameter data structure has changed since MCU Firmware 2.4.x. Hence, for MCU Firmware versions 2.3.x and below, the Abeeway driver should not be used to construct downlink payloads. Instead, the downlink payload should be constructed using the message format described in the [Abeeway Asset Tracker Reference guide](/AbeewayRefGuide/introduction/) that corresponds to the MCU firmware version installed on the tracker.
