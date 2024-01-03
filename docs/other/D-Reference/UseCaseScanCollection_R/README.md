# Setting up Scan Collection using Bluetooth beacons

This section describes the step by step procedure to use scan collection feature using Bluetooth beacons with Abeeway trackers and ThingPark Location Engine.

We assume that the tracker is already connected to LoRaWAN network server and the LoRaWAN uplinks are routed to ThingPark Location (see [here](/getting-started/provisioning-your-trackers-on-lorawan-networks/index.md) for more details).

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
1. [Micro Tracker](/trackers-overview/micro-tracker/micro-tracker-best-placement.md)
2. [Smart Badge](/trackers-overview/smart-badge/smart-badge-best-placement.md)
3. [Industrial Tracker](/trackers-overview/industrial-tracker/index.md)
4. [Compact Tracker](/trackers-overview/compact-tracker/compact-tracker-best-placement.md)
5. [Industrial Manageable ATEX Beacon](/trackers-overview/industrial-manageable-atex-beacon/beacon-best-placement.md)

## Tracker Firmware versions
We highly recommend to update the tracker to the latest [MCU and BLE Firmware version](/troubleshooting-support/identify-tracker-model.md). The firmware update instructions are [here](/troubleshooting-support/firmware-update-overview/index.md).

## Configuring the tracker using Abeeway Device Manager (ADM)

The next step is to configure the tracker with the right parameters using Abeeway Device Manager (ADM). 
