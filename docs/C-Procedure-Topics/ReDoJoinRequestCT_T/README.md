
# Reset the tracker and re-join the LoRaWAN network

Your tracker is a LoRaWAN® OTAA device that needs to do a join request to attach the LoRaWAN® network and get a join accept from it.

If necessary, you can force a new join request for a tracker that is already joined for example to attach it to a new network. You can also use this procedure to troubleshoot and reset the tracker. 

## Resetting the tracker with the magnet

The compact tracker is equipped with a magnet-activated reed switch (see figure below on the placement of reed switch on the tracker) which requires the end user to place and remove a magnet (with a specific sequence), next to the Compact tracker arrow to exit the shipping mode and trigger the LoRaWAN Join procedure. Once, the tracker is has joined the LoRaWAN network, the same sequence can also be used to reset the tracker. 

However, it requires that the value of **firmware parameter reed_switch_configuration=1**, before the sequence below is carried out to reset the tracker. For more information, please refer to [Abeeway trackers Reference Guide](https://docs.thingpark.com/thingpark-location/D-Reference/DocLibrary_R/#reference-guides-and-tools), Section: Reed Switch Interface.

<img src="../../B-Feature-Topics/CompactTracker_C/images/CompactTrackerPlacement.jpg" border="0" />

#### Key precautions for activation of the Compact tracker with a magnet
* Do not attempt to activate the Compact tracker when in proximity of strong magnetic fields (ie, magnetic mounts)
* Use a strong enough magnet, and make sure you know where are the poles. A magnet that has been successfully tested with the reed switch can be purchased from [here](https://market.thingpark.com/abeeway-compact-tracker-magnets-reed-switch.html)
* You should always start the sequence with the magnet far away from the tracker to avoid false detection of the reed switch

#### Magnet sequence to activate the compact tracker
::: warning WARNING
* The sequence below can be carried out multiple times without any interruption. However, each time the sequence is successful, the device will undergo a reset.
* You can check whether the sequence is successful by scanning the device with any Bluetooth scanning application, such as [Bluetooth Scanner](https://play.google.com/store/apps/details?id=com.pzolee.bluetoothscanner&hl=fr&gl=US) or Abeeway tracking app. The tracker will advertise itself as ABWXXXXXXX (Where XXXXXXXXX are the last 9 digits of LoRaWAN DevEUI). The Bluetooth advertisement of the device is about 10 minutes (default configuration) if the tracker is not Bluetooth bonded.
:::

For MCU FW 2.2 and above, you need to carry out the following sequence with the magnet next to the reed switch:

* A long activation of the reed switch (between 3 to 6 seconds)
* A long time without activation of the reed switch (between 3 to 6 seconds)
* A long activation of the reed switch (between 3 to 6 seconds)

The example video below demonstrates the operation.
<html><iframe type="text/html" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/2t8zI3cbfys?" height="150px" width="300px"/></html>

## Resetting the tracker with LoRaWAN downlink

For more information on resetting the device with downlink, visit [Abeeway trackers Reference Guide](https://docs.thingpark.com/thingpark-location/D-Reference/DocLibrary_R/#reference-guides-and-tools), Section: Reset the device.

If you wish to reset the tracker with LoRaWAN downlink, there are three options:

1. **Reset the device (keeping the current configuration):** Send the downlink **ff010100** on LoRaWAN port=2 
2. **Reset the device (revert to the original config file that was flashed in the tracker):** Send the downlink **ff010101** on LoRaWAN port=2
3. **Reset the device (revert to the original config file that was flashed in the tracker and also remove Bluetooth bond):** Send the downlink **ff010102** on LoRaWAN port=2

## Resetting the tracker to factory default configuration

The above button sequences only reset the tracker to the configuration that was saved in the tracker. The factory default configuration can be found in the [Abeeway trackers Reference Guide](https://docs.thingpark.com/thingpark-location/D-Reference/DocLibrary_R/#reference-guides-and-tools), Chapter: Factory default Configuration.

<html>
<p>
<a href="../../D-Reference/AbeewayFirmwareUpdate_R/" style="color:teal">Abeeway Updater</a> can be used to reset the tracker to factory default if the MCU firmware update is carried out <b>without the config file</b>. The tracker is reset to factory default settings. 
</p>
</html>

<img src="../../C-Procedure-Topics/ReDoJoinRequestSB_T/images/abw_updater_factory_reset.png" width="700" border="0" />