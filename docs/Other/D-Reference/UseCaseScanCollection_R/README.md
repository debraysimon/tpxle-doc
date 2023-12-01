# Setting up Scan Collection using Bluetooth beacons

This section describes the step by step procedure to use scan collection feature using Bluetooth beacons with Abeeway trackers and ThingPark Location Engine.

We assume that the tracker is already connected to LoRaWAN network server and the LoRaWAN uplinks are routed to ThingPark Location (see [here](/C-Procedure-Topics/ProvisionTrackerOverview_T/) for more details).

## Use Case

The main use case of this feature is to track the equipment and the usage efficiency of tools. The Bluetooth beacons are placed on the tools and Abeeway tracker sniff the beacons along with the report of the tracker's position. The main advantages of this feature are:

- Locate the lost equipment
- access to an inventory of all assets
- measure the utilization rate of assets
- control the proper delivery of equipment
- data from connected objects provides real-time information in order to improve production processes, site management and, more broadly,
management control.

## Tracker Placement
It is important that the tracker is placed without any obstructions (for ex. human body, metallic objects, etc) blocking the Bluetooth antenna. The tracker placement instructions are below:
1. [Micro Tracker](/B-Feature-Topics/MicroTrackerPlacement_C/)
2. [Smart Badge](/B-Feature-Topics/SmartBadgePlacement_C/)
3. [Industrial Tracker](/B-Feature-Topics/IndusTrackerPlacement_C/)
4. [Compact Tracker](/B-Feature-Topics/CompactTrackerPlacement_C/)
5. [Industrial Manageable ATEX Beacon](/B-Feature-Topics/IndustrialManageableATEXBeaconPlacement_C/)

## Tracker Firmware versions
We highly recommend to update the tracker to the latest [MCU and BLE Firmware version](/D-Reference/IdentifyTrackerModel/). The firmware update instructions are [here](/D-Reference/FirmwareUpdateOverview_R/).

## Configuring the tracker using Abeeway Device Manager (ADM)

The next step is to configure the tracker with the right parameters using Abeeway Device Manager (ADM). 
