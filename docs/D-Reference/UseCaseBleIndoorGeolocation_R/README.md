# Setting up indoor geoloocation using Bluetooth beacons

This section describes the step by step procedure to use Bluetooth beacons with Abeeway trackers and ThingPark Location Engine.


We assume that the tracker is already connected to LoRaWAN network server and the LoRaWAN uplinks are routed to ThingPark Location (refer to the [here](/C-Procedure-Topics/ProvisionTrackerOverview_T/).


## Tracker Placement
It is important that the tracker is placed without any obstructions (for ex. human body, metallic objects, etc) blocking the Bluetooth antenna. The tracker placement instructions are below:
1. [Micro Tracker](/B-Feature-Topics/MicroTrackerPlacement_C/)
2. [Smart Badge](/B-Feature-Topics/SmartBadgePlacement_C/)
3. [Industrial Tracker](/B-Feature-Topics/IndusTrackerPlacement_C/)
4. [Compact Tracker](/B-Feature-Topics/CompactTrackerPlacement_C/)

## Tracker Firmware versions
We highly recommend to update the tracker to the latest [MCU and BLE Firmware version](/D-Reference/IdentifyTrackerModel/). The firmware update instructions are [here](/D-Reference/FirmwareUpdateOverview_R/).

## Configuring the tracker using Abeeway Device Manager (ADM)

The next step is to configure the tracker with the right parameters using Abeeway Device Manager (ADM). 

<img src="./images/ADAConfiguration_1.png" width="800" border="1" />

Here are the steps:

1. Goto Device Configuration tab.
2. Select the **BLE positioning** template.
3. Enable all the firmware parameters.
4. Apply the necessary BLE positioning filters. We recommend to apply these filters so the tracker will pick up only the beacons configured for your use case. For more information on applying the BLE positioning filters, see [BLE Position Filtering training](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#abeeway-firmware-trainings) and [AN-006_Position_BLE_filtering](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes)
5. Get the LoRaWAN configuration payloads that can be sent on LoRaWAN port = 2 with the network server. This step is not required when using Abeeway Device manager to send LoRaWAN downlinks.
6. Apply the tracker configuration which will result in multiple downlinks.
7. Ensure the tracker configuration is applied correctly. The tracker will send the uplinks to indicate its tracker configuration which will be visible in Abeeway Device Manager.

::: warning Note
Even if you plan to use your own location solver, we recommend to use ThingPark X Location Engine (TPX-LE) when preparing your tracker for first use for the following reasons:
- **Support for Low-Power GPS (LP-GPS) feature which allows faster GNSS fix with much lower power consumption on the tracker.**
- Support for averaging and filtering of positions with mtultiple geolocation technologies (GPS/LP-GPS/WiFi/Bluetooth) in the backend to remove outliers.
- Visualizations of positions in the map with various filtering options using [Abeeway Device Manager](/B-Feature-Topics/AbeewayDeviceManager_C/).
- Easily change the tracker's configuration with pre-configured templates using [Abeeway Device Manager](/C-Procedure-Topics/ChangeTrackerConfiguration_T/). 
- The tracker configuration can also be changed using [ThingPark Location APIs (Downlink tracker command)](https://dx-api.thingpark.io/location-trackercommand/latest/doc/index.html). Note: The URL is for ThingPark Location on Community platform. For other platforms, see [here](/D-Reference/ThingParkLocationURLs/).
:::

## Upload the Geojson file in Abeeway Device Manager
Once the tracker configuration is applied correctly, you cna upload the Geojson file which contains the coordinates of the BLE beacons inside the building. 

<img src="./images/ADAConfiguration_2.png" width="800" border="1" />

Here are the steps:

1. Goto the Map tab of Abeeway Device Manager
2. Upload the geojson file in ThingPark X Location Engine. The geojson file exmaple can be retrieved from [ThingPark Location APIs (Alarm Config Module)](https://dx-api.thingpark.io/location-alarm-config/latest/swagger-ui/index.html?shortUrl=tpdx-location-alarm-config-api-contract.json#/Bluetooth%20map/post_bluetoothMap). Note: The URL is for ThingPark Location on Community platform. For other platforms, see [here](/D-Reference/ThingParkLocationURLs/). The geojson file can also be uploaded using this endpoint.

<img src="./images/GeojsonFile.png" width="800" border="1" />

3. Once the file is uploaded, you should see it in the map tab of Abeeway Device manager.

## Visualization of tracker location
Once the tracker starts to send uplinks with Bluetooth beacon IDs, you can see the location of the tracker in the map view.

## Configure ThingPark Location to send uplinks to external application server
[ThingPark Location Connector module](https://dx-api.thingpark.io/location-connector/latest/doc/index.html) can be used to send the locations to the external application server.

<img src="./images/TPXLEpushConnector.png" width="800" border="1" />