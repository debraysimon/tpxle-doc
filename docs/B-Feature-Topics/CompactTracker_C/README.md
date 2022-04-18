# Compact tracker
The Abeeway compact tracker is a multi-mode tracker that uses 3 replaceable AA format batteries for long battery lifetime and easy replacement. It combines **GPS**, **Low Power-GPS (LP-GPS)** ([an ultra-low power assisted GPS patented by Abeeway](https://www.abeeway.com/technology/) that also optimizes Time-to-First Fix in difficult conditions), **Wi-Fi**, **LoRaWAN®** and **BLE** radios with embedded sensors to support accurate **outdoor** and **indoor** geolocation.
This tracker is equipped with a rugged waterproof casing which is designed to withstand harsh surroundings enabling seamless asset tracking and management in any industrial environment – whether it is for heavy duty assets, inventory or livestock.

<img src="./images/CompactTrackerPlacement.jpg" border="0" />

## Key product features
The Abeeway compact tracker provides you with the flexibility you need to adapt your tracker's behavior to your use case, selecting the right operating mode and geolocation technology.

### Reed switch
The compact tracker is equipped with a magnet-activated reed switch (see figure above on the placement of reed switch on the tracker) which requires the end user to place and remove a magnet (in a specific sequence), next to the Compact tracker arrow to exit the shipping mode and trigger the LoRaWAN Join procedure.

#### Key precautions for activation of the Compact tracker with a magnet
* Do not attempt to activate the Compact tracker when in proximity of strong magnetic fields (ie, magnetic mounts)
* Use a strong enough magnet, and make sure you know where are the poles. A magnet that has been successfully tested with the reed switch can be purchased from [ThingPark Market](https://market.thingpark.com/abeeway-compact-tracker-magnets-reed-switch.html)
* You should always start the sequence with the magnet far away from the tracker to avoid false detection of the reed switch

#### Magnet sequence to activate the compact tracker
For MCU FW 2.2 and above, you need to carry out the following sequence with the magnet next to the reed switch:
::: warning WARNING
* The sequence below can be carried out multiple times without any interruption
:::

* A long activation of the reed switch (between 3 to 6 seconds)
* A long time without activation of the reed switch (between 3 to 6 seconds)
* A long activation of the reed switch (between 3 to 6 seconds)

The example video below demonstrates the operation.
<html><iframe type="text/html" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/2t8zI3cbfys?" height="150px" width="300px"/></html>

### Multiple operating modes

* **Shipping**: The tracker is set to Shipping mode when leaving the factory, for safe transport and minimum power consumption. You need to activate it before first use as outlined above.
* **Motion tracking** : Tracker reports real-time position only when motion is detected. This is the default configuration that you can discover applying instructions given in this guide.
* **Permanent tracking** : Tracker reports periodic real time positions.
* **Start/End motion tracking** : Tracker reports positions only at the start and end events of the motion.
* **Position on-demand** : Tracker sends its position only when requested from the end-user (very low power operating mode). The position request can be made from the geolocation backend platform.
* **Activity tracking** : Monitor activity rate with embedded sensors.
* **Standby** : The tracker sends periodically short LoRaWAN® messages, called heartbeat, at the configured interval. This provides periodic slots during which it is possible to send LoRaWAN commands to the tracker, such as configuration commands or on-demand positions (using the configuration set for "side operations").

::: warning WARNING
* For more information on the battery lifetime of the tracker, visit [here](../../D-Reference/PowerConsumption_R)
* For more information on tracker documentation, visit [here](../../D-Reference/DocLibrary_R/#TrackersRefGuide).
:::

### Geolocation technologies
* **GPS** : For **precise outdoor** positioning
* **Low Power-GPS (LP-GPS)** : For **power-efficient outdoor** and **daylight indoor** positioning
LP-GPS is an assisted-GPS technology optimized specifically for LPWAN networks, patented by Abeeway. It dramatically reduces Time to First Fix, even in poor radio conditions, and results in much **improved battery lifetime**, particularly for indoor/outdoor mixed use cases when the GPS frequently gets out of sync or operates in low SNR conditions.
* **Wi-Fi** : For **indoor** and **outdoor** location services in **urban areas**
It leverages the Wi-Fi access point scanning capabilities of the compact tracker.
* **BLE** : For indoor location, for example as complement to WiFi to precisely spot specific locations, for coarse location in a building (to identify rooms or danger/forbidden zones) or as main indoor location technology using server-side triangulation (provided by ThingPark X Location Engine)

### Other features
* **Temperature** monitoring
* **LoRaWAN® Class A radio**
* Dust-proof and waterproof ( **IP65** )

### Standards and certifications

* LoRa Alliance: EU868, US915, AS923
* Radio: EC, FCC, IC, TELEC
* ATEX zone 2 (ordering option).

::: warning WARNING
*  The latest information on certification can be found [here](/D-Reference/DocLibrary_R/#certifications).
* The tracker is resistant to water but must never be placed either fully/partially submerged in water or under the influence of high pressure water spray jets for significantly long periods of time. To avoid water entering in the casing, the tracker must not be placed upside down. 
* **The warranty of the tracker is avoid if used incorrectly**.
:::
