# Getting the first GPS position

This section describes step by step procedure to get the first GPS fix on the tracker. 

::: warning Note
We highly recommend ThingPark Location for the first usage of the tracker for the following reasons:
- **Support for Low-Power GPS (LP-GPS) feature which allows faster GNSS fix with much lower power consumption on the tracker.**
- Support for averaging and filtering of positions in the backend to remove outliers.
- Visualizations of positions in the map with various filtering options using [Abeeway Device Manager](/B-Feature-Topics/AbeewayDeviceManager_C/).
- Easily change the tracker's configuration with pre-configured templates using [Abeeway Device Manager](/C-Procedure-Topics/ChangeTrackerConfiguration_T/).
:::

We assume that the tracker is already connected to LoRaWAN network and is functional.

## Ensure the tracker is running the correct MCU/BLE Firmware version
We recommend to use MCU FW 2.4.x and BLE FW 3.3.4 as there have been numerous fixes to the GPS/LP-GPS feature. </br>
You can find the currently installed MCU and BLE Firmware version from [here](/D-Reference/IdentifyInstalledFirmware/).</br>
If the installed firmware is older than the firmware versions above, please upgrade the firmware by following the instructions from [here](/D-Reference/FirmwareUpdateOverview_R/).

## Set the pre-configured template
You can use one of the pre-configured DEFAULT template in [Abeeway Device Manager](/C-Procedure-Topics/ChangeTrackerConfiguration_T/)

<img src="./images/ADMDeviceConfiration.png" width="800" border="1" />

::: warning Note
- **Even if you are not using ThingPark Location with the tracker, you can still use Abeeway Device Manager to get the configuration payloads which must be sent on LoRaWAN Fport=2**. 
- The tracker will respond with uplink to indicate the new device configuration if the downlink was received correctly on the tracker. 
- It is a must that these uplinks are received to ensure the tracker's configuration is set correctly. In case of failure, the downlinks need to be sent again to the tracker.
:::

## Making the first test
The first test on the tracker must be made in an open sky. If the tracker is missing information such as Ephemeris/Almanac, the first GNSS fix will take a little more time. The fix time should be not more than 15 minutes in an open sky with at least 3 satellites in view with high C/N.

## Optimizing the GPS/LP-GPS parameters
The optimization of GPS/LP-GPS parameters can be done by following the [AN-016_GPS_LPGPS](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes) application note. Please refer to the section on **Tuning the GNSS algorithm** or **Tuning the LP-GPS algorithm** depending if you are using GPS only mode or LP-GPS mode of the tracker.

We recommend to use **Balanced Configuration** for the first usage of the tracker as its a good compromise between power consumption, accuracy and time to get a GPS fix.

## Troubleshooting the GPS/LP-GPS positioning
If you think the tracker is already configured correctly with the steps above, then please do the following steps for troubleshooting:

1. Place the tracker in an open sky connected to the **data USB cable** to a computer using serial application like Tera Term for **at least 30 minutes**. For more information on using Command Line Interface (CLI), see [here](/D-Reference/UsingCLI_R/).

During the acquisition of GNSS, the tracker will print information on CLI traces as shown in example below:

```
00:07:55.832641 (GEO) GPS tracking - 2 sat.(25,28) (17,22)
```

In the example above, it means tracker sees two GPS satellites:</br>
- the sat 1 has a svid 25 and carrier to noise ratio with a value 28.</br>
- the sat 2 has a svid 17 and a carrier to noise ratio with a value 22.</br>


::: warning Warning
- If you do not see GNSS satellites in your traces, it means you are in poor GNSS coverage and need to find another location to make the test.
:::


2. Ensure that the tracker logs are captured in a trace file with the absolute timestamp of your PC or UTC. This is required to correlate the traces from the tracker to those of LoRaWAN uplinks. The timestamps from Tera term can be enabled as shown in the image below.
<img src="./images/TeraTermTimestampLogs.png" width="800" border="1" />

3.  You can run the following command on CLI at the end of your test to get the Almanac information from the tracker.

```
gnss read gps
gnss read beidou
```
The tracker will respond with a similar trace.

```
user> gnss show gps
GPS almanac validity. Last read: 00:01:04 (00:00:17 before now)
 Satellite      Week           Acquisition
 0              0              ---
 1              0              ---
 2              181            2022/09/25
 3              181            2022/09/25
 4              181            2022/09/25
 5              181            2022/09/25
 6              181            2022/09/25
 7              181            2022/09/25
 8              181            2022/09/25
 9              181            2022/09/25
 10             0              ---
 11             0              ---
 12             0              ---
 13             0              ---
 14             0              ---
 15             0              ---
 16             0              ---
 17             0              ---
 18             0              ---
 19             0              ---
 20             0              ---
 21             0              ---
 22             0              ---
 23             0              ---
 24             0              ---
 25             181            2022/09/25
 26             181            2022/09/25
 27             181            2022/09/25
 28             0              ---
 29             181            2022/09/25
 30             181            2022/09/25
 31             181            2022/09/25
OK
```
::: warning Note
- The Acquisition column indicates the date when the almanac was acquired and stored in GNSS chip. **The Almanac entry expires 3 months after this date**.
- The presence of valid Almanac in the tracker ensures faster GNSS fix.
:::

4. Please ensure to run the following additional commands before sending the tracker logs to us.

```
system info
ble info
config show
```