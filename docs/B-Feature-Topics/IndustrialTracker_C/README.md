
# Industrial tracker
The Abeeway industrial tracker is a multi-mode tracker with large battery for long battery lifetime. It combines **GPS**, **Low Power-GPS (LP-GPS)**, **Wi-Fi**, **LoRaWAN®** and **BLE** radios with embedded sensors to support accurate **outdoor** and **indoor** geolocation.<br/>
This tracker is equipped with the rugged casing which is designed to withstand harsh surroundings enabling seamless asset tracking and management in any industrial environment – whether it is for heavy duty assets, inventory or livestock.
<img src="./images/Industrial-Tracker-980x1024_466x486.png" border="0" />
## Key product features
Abeeway industrial tracker provides you with the flexibility you need to adapt your tracker's behavior to your use case, selecting the right operating mode and geolocation technology.
### Multiple operating modes

* **Motion tracking** : Tracker reports real-time position only when motion is detected. This is the default configuration that you can discover applying instructions given in this guide.
* **Permanent tracking** : Tracker reports periodic real time positions.
* **Start/End motion tracking** : Tracker reports positions only at the start and end events of the motion.
* **Position on-demand** : Tracker sends its position only when requested from the end-user (very low power operating mode). The position request can be made from the geolocation backend platform.
* **Activity tracking** : Monitor activity rate with embedded sensors.
* **Standby** : The tracker sends periodically short LoRaWAN® messages, called heartbeat, at the configured interval. The tracker positions can be obtained in this mode by using the side operations features. For more information, see [Trackers documentation](../D-Reference/TrackersDoc_R.htm). Once the tracker has joined the LoRaWAN® network, the tracker is set to standby mode to save battery. We recommend to put the tracker in standby mode when not in testing.

### Geolocation technologies
* **GPS** : For **precise outdoor** positioning
* **Low Power-GPS (LP-GPS)** : For **power-efficient outdoor** and **daylight indoor** positioning
LP-GPS is an Actility proprietary technology based on GPS. Enabling Fast Time to First Fix, it results in **improved battery lifetime**.
* **Wi-Fi** : For **indoor** and **outdoor** location services in **urban areas**
It leverages the Wi-Fi access point scanning capabilities of the industrial tracker.

### Other features
* **Temperature** monitoring
* **LoRaWAN® Class A radio**
* Dust-proof and powerful water jets ( **IP65** )

### Standards and Certifications
* LoRa Alliance: EU868, US915, AS923
* Radio: EC, FCC, IC, TELEC ATEX
* The latest information on certification can be found [here](/D-Reference/DocLibrary_R/#abeeway-trackers-certifications).
Abeeway power consumption estimation tool can be found [here](/D-Reference/DocLibrary_R/#abeeway-trackers) to estimate the battery lifetime in different environments.
::: warning WARNING
 The tracker is resistant to water but must never be placed either fully/partially submerged in water or under the influence of high pressure water spray jets for significantly long periods of time. To avoid water entering in the casing, the tracker must not be placed upside down. The warranty of the tracker is avoid if used incorrectly.
:::
