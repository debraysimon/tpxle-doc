# Compact tracker
The Abeeway compact tracker is a multi-mode tracker with large battery for long battery lifetime. It combines **GPS**, **Low Power-GPS (LP-GPS)**, **Wi-Fi**, **LoRaWAN®** and **BLE** radios with embedded sensors to support accurate **outdoor** and **indoor** geolocation.<br/>
This tracker is equipped with the rugged casing which is designed to withstand harsh surroundings enabling seamless asset tracking and management in any industrial environment – whether it is for heavy duty assets, inventory or livestock.
<img src="./images/CompactTrackerPlacement_594x286.png" border="0" />
## Key product features
The Abeeway compact tracker provides you with the flexibility you need to adapt your tracker's behavior to your use case, selecting the right operating mode and geolocation technology.
### Reed switch<br/>
The compact tracker is equipped with reed switch  (see figure above on the placement of reed switch on the tracker) which requires the end user to place a magnet next to the tracker to exit the shipping mode and trigger the LoRaWAN join procedure.<br/>

#### Key precautions when handling the reed switch<br/>
* Do not use reed switches in proximity of strong magnetic fields (ie, magnetic mounts)
* Provide a suitably chosen magnet type for reed switch operation by users. Example magnet that has been tested with the reed switch can be purchased from [here](https://market.thingpark.com/abeeway-compact-tracker-magnets-reed-switch.html)

#### Magnet sequence to activate the compact tracker<br/>
For MCU FW 2.2 and above, you need to carry out the following sequence with the magnet next to the reed switch:

**Note: You should always start the sequence with the magnet far away from the tracker to avoid false detection of the reed switch**
* A long activation of the reed switch (between 3 to 6 seconds)
* A long time without activation of the reed switch (between 3 to 6 seconds)
* A long activation of the reed switch (between 3 to 6 seconds)

The example video below demonstrates the operation.
<html><iframe type="text/html" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/2t8zI3cbfys?" height="150px" width="300px"/></html>

### Multiple operating modes

* **Motion tracking** : Tracker reports real-time position only when motion is detected. This is the default configuration that you can discover applying instructions given in this guide.
* **Permanent tracking** : Tracker reports periodic real time positions.
* **Start/End motion tracking** : Tracker reports positions only at the start and end events of the motion.
* **Position on-demand** : Tracker sends its position only when requested from the end-user (very low power operating mode). The position request can be made from the geolocation backend platform.
* **Activity tracking** : Monitor activity rate with embedded sensors.
* **Standby** : The tracker sends periodically short LoRaWAN® messages, called heartbeat, at the configured interval. The tracker positions can be obtained in this mode by using the side operations features. For more information, see [Abeeway Trackers Reference Guide](/D-Reference/DocLibrary_R/#TrackersRefGuide). During shipping, the tracker is set to standby mode, which is also recommended when not in testing to avoid unnecessary drain of the battery.

### Geolocation technologies
* **GPS** : For **precise outdoor** positioning
* **Low Power-GPS (LP-GPS)** : For **power-efficient outdoor** and **daylight indoor** positioning
LP-GPS is an Actility proprietary technology based on GPS. Enabling Fast Time to First Fix, it results in **improved battery lifetime**.
* **Wi-Fi** : For **indoor** and **outdoor** location services in **urban areas**
It leverages the Wi-Fi access point scanning capabilities of the compact tracker.

### Other features
* **Temperature** monitoring
* **LoRaWAN® Class A radio**
* Dust-proof and powerful water jets ( **IP65** )

### Standards and certifications
* LoRa Alliance: EU868, US915, AS923
* Radio: EC, FCC, IC, TELEC ATEX
* The latest information on certification can be found [here](/D-Reference/DocLibrary_R/#abeeway-trackers-certifications).
Abeeway power consumption estimation tool can be found [here](/D-Reference/DocLibrary_R/#abeeway-trackers) to estimate the battery lifetime in different environments.
::: warning WARNING
 The tracker is resistant to water but must never be placed either fully/partially submerged in water or under the influence of high pressure water spray jets for significantly long periods of time. To avoid water entering in the casing, the tracker must not be placed upside down. The warranty of the tracker is avoid if used incorrectly.
:::
