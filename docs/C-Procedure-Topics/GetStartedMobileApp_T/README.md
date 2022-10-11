# Getting started with Abeeway tracking app

Abeeway tracking app is a mobile app that runs on smartphones which can interact with Abeeway trackers. It can be used to track pets, keys, objects, etc. It is native mobile APP for iOS and Android and it interacts with the tracker over Bluetooth. For more features of Abeeway tracking app, see [here](https://actilitysa.sharepoint.com/:f:/t/aby/Ep7oeKyEGeZIolF4avQrmf8BBsOOJoFQhjon7jacL4Koig?e=j7iObl)).

Here are the high-level features of the mobile app:
1.	Visualization of the current locations of multiple devices on a map
2.	Visualization of the location history of a device on a map
3.	Device localization on demand (to find a device on a map)
4.	Location sharing with friends, co-workers
5.	Page a device and make it beep (to find a device connected via Bluetooth)
6.	Geofencing
7.	Alarms (SOS, Motion, Leaving/entering geofenced zones)
8.	Airplane mode (ability to shutdown the tracker)
9.	Firmware update
10.	Developer mode features


## Prerequisites
To complete this getting started guide, you need:
* Abeeway trackers compatible with the mobile app. The app is compatible with the following tracker models.
  - Micro tracker V3.x
  - Smart Badge
  - Compact tracker
  - Industrial tracker V2

* Minimum Firmware Version
  - MCU Firmware 2.2.1 (**For App version 1.0.2 and below**)
  - MCU Firmware >= 2.3.x (**For App version 1.0.3 and above**)
  - BLE Firmware >= 3.3.x (**For all the App versions**)

  The mobile app version can be found on the home screen (See below) from the app store where the mobile app was downloaded.
  <img src="./images/AppVersion.png" width="300px" border="1" />

* Tracker Configuration. We recommend that before the tracker is added to the mobile app. It is flashed with the default configuration files. Before adding the tracker to the mobile app, it is important that the trackers are flashed with minimum MCU FW: 2.2.0 and BLE FW: 3.3.0 respectively. 
  - The update of the MCU Firmware can be carried out by the [Abeeway updater](../../D-Reference/AbeewayFirmwareUpdate_R/)
  - The MCU Firmware binary & config files are available [here](https://actilitysa.sharepoint.com/:w:/t/aby/EcuMNrIEoB9HvcIkCTXu2TkBTQQ49cYaQA2y1Wa6TmFmNg?e=Z1nEYc)

| Tracker Type | MCU Firmware Config file|
| --------------------- | ----- |
| Micro Tracker V3.0    | ProdMicro\_EU\_IN\_YYYYMMDD<sup>(1)</sup>  (Region: EU868) </br> ProdMicro\_US\_YYYYMMDD<sup>(1)</sup>  (Region: US915) </br> ProdMicro\_AS\_AU\_YYYYMMDD<sup>(1)</sup> (Region: AS923/AU915) |
| Smart Badge           | ProdSmartBadge\_EU\_IN\_YYYYMMDD<sup>(1)</sup>  (Region: EU868) </br> ProdSmartBadge\_US\_YYYYMMDD<sup>(1)</sup>  (Region: US915) </br> ProdSmartBadge\_AS\_AU\_YYYYMMDD<sup>(1)</sup>  (Region: AS923/AU915) |
| Compact Tracker       | ProdCompact\_EU\_IN\_YYYYMMDD<sup>(1)</sup>  (Region: EU868) </br> ProdCompact\_US\_YYYYMMDD<sup>(1)</sup>   (Region: US915) </br> ProdCompact\_AS\_AU\_YYYYMMDD<sup>(1)</sup>  (Region: AS923/AU915) |
| Industrial Tracker V2 | ProdIndustrial\_EU\_IN\_YYYYMMDD<sup>(1)</sup>  (Region: EU868) </br> ProdIndustrial\_US\_YYYYMMDD<sup>(1)</sup>  (Region: US915) </br> ProdIndustrial\_AS\_AU\_YYYYMMDD<sup>(1)</sup> (Region: AS923/AU915) |

* Downloading the app
  - Android: [here](https://play.google.com/store/apps/details?id=com.abeeway.mobile&hl=en_US&gl=US)
  - iOS: [here](https://apps.apple.com/au/app/abeeway-wifi-gps-tracking/id1572268239)
  
::: warning Notes
<sup>(1)</sup> YYYYMMDD corresponds to the date when the config files were generated
:::

  - The update of the BLE Firmware can be carried out using the nRFconnect application on smart phone. Please refer to [AN-001_ble-update](https://actilitysa.sharepoint.com/:f:/t/aby/Evqx0qp6AQ1OqrI7-2DoIxsB1wKjLBjykfPh2p7Lo8mP7g?e=VrNdaS) for more details

## User Profiles
There are two types of user roles in the mobile app:

*	**End user** – User that owns the trackers and wants to use them (By default, any new mobile app account is end user)</br>
*	**Admin** – Technical user to detect and solve problems (These users are typically operations team, distributors, and System Integrators. This profile enables advanced functionality in the app and is useful for debugging the tracker over Bluetooth in developer mode and it can be also be used to update the firmware of the trackers over Bluetooth without adding them to the mobile app account.</br>

Please ask [Abeeway support](https://thingpark.page.link/AbeewaySupport) to enable your Mobile app account as an admin user. 

## ThingPark X Location Engine use cases
ThingPark X location engine has two main use cases:
 - **B2B Use Case:** In this use case, the customer is using ThingPark X Location engine to manage a fleet of trackers. To be in this use case, the tracker uplinks are sent to [ThingPark Location Application server](../../D-Reference/ThingParkLocationURLs/) and visualize fleet of trackers in [Abeeway Device Manager](../../B-Feature-Topics/AbeewayDeviceManager_C/).
 - **B2C Use Case:** In this use case, the customer is using Abeeway Mobile app and all the trackers within a specific “Distributor” when logging to the mobile app are in a specific realm/subscriber. To visualize the mobile app trackers in Abeeway Device Manager, it requires logging into ADM with subscriber credentials associated to the realm/Distributor where mobile app end user account exists. For example, to visualize all the trackers in “Abeeway – Ecosystem” distributor, it requires login to ADM as a subscriber that is associated with “Abeeway – Ecosystem” realm. **The subscriber accounts for Abeeway distributors in the mobile app are restricted to Abeeway Operations team.**

::: warning Warning
**The LoRaWAN routing profile for B2B Use case and B2C Use case should never be set at the same time on the same tracker towards to the same ThingPark Location platform. This is not supported and will result in errors for both the use cases. The tracker can be only in one of the use cases above but NOT both at the same time.**
:::

## Tracker behaviour when bluetooth securely connected to the mobile app
Once the tracker is securely bluetooth connected to the mobile app, the following functionality in the tracker is disabled:
1. LoRaWAN communication
2. GPS/WiFi/BLE beacon scanning

During the time the tracker is bluetooth connected to the app, it sends the phone position and other Bluetooth events (motion, SoS) to the backend on behalf of the tracker.
Once the tracker is disconnected over Bluetooth, it resumes its functionality over LoRaWAN

## Distributor Selection
There are three distributors (realms) that are currently configured in the mobile app. It allows you to connect to different mobile app backends.

<img src="./images/appDistributor.png" width="300px" border="1" />
Here are the general guidelines when selecting the mobile app distributor when creating the account.

| Platform to Choose </br> (Mobile App Distributor) | Purpose|
| --------------------- | ----- |
|Abeeway - PREVIEW	| If you are involved in Beta testing of Abeeway Mobile App|
|Abeeway - ECOSYSTEM |	If you bought the trackers from the [Actility Marketplace](https://market.thingpark.com) |
|Abeeway - EUROPE |	If you have a large deployment of Abeeway trackers which are connected to public LoRaWAN networks |
|Abeeway - US |	Not deployed yet |
|Abeeway - APAC |	Not deployed yet |


## Provisioning the trackers
Abeeway tracker should be provisioned and functioning in the [LoRaWAN network server](../../C-Procedure-Topics/ProvisionTrackerOverview_T/). You will also need an operational access to ThingPark Enterprise user portal: [ThingPark Community](https://community.thingpark.io/tpe/). The tracker uplinks must be routed to the following ThingPark Location Application server.

|   | Information | 
| - | ----------- | 
| **Name** |  ThingPark Location - Mobile app | 
| **URL** | [here](https://abeeway-eu-eco.thingpark.com:50540/?TPXLE_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjM3NzY0NzcsInN1YiI6IjEwMDAxMjg4MyJ9.aAANx1rnybAAiCvYQLmEtPIoWVa7cyxsEVo2JfCHh3o) | 
| **Content Type** |  XML | 
| **Tunnel Interface Authentication Key** |  e8959e26fd9bce52700605a9cfe74d53 | 


::: warning Notes
* The instructions in this section are for trackers 
provisioned in [ThingPark Community](http://community.thingpark.org/) platform and using **Abeeway - Ecosystem** as the distributor realm when creating the mobile app account.  For using other ThingPark platforms with the mobile app, please visit [AN-017_Mobile APP Getting Started Guide](../../D-Reference/DocLibrary_R/#application-notes)
* **When using the mobile app, it is important to not route the uplinks from the tracker towards other ThingPark Location application servers in the same platorm.**
:::

## Prepare the trackers

* **Remove the Bluetooth bond on the phone**: You can search for Abeeway trackers in your phone’s Bluetooth settings and you should not see Abeeway device matching your DEVEUI in your phone’s Bluetooth settings. If the Abeeway device is present, then you can click “FORGET” to remove the Bluetooth bond on the phone for this device. The name of Abeeway trackers in phone's bluetooth settings is ABW followed by 9 last digits of DEVEUI. In the example below, the DEVEUI of Abeeway tracker is 20635F017100000B.
 
<img src="../../D-Reference/FirmwareUpdateMobileApp_R/images/forgetBluetoothbond.png" border="1" />

* **Remove the Bluetooth bond on the tracker**: When you restart the tracker, you should hear the [Bluetooth advertisement melody](https://actilitysa.sharepoint.com/:u:/t/aby/EWdjoLPV12BGiHsZptjIOrABxRdVpqTLLJM72K795IUQsg?e=rngKdO) for 15 seconds and the tracker will continue to advertise for 10 minutes<sup>(1)</sup>. After 10 minutes, you must restart the tracker again for it to advertise if it’s not bonded. If you do not hear this melody, and you flashed the tracker correctly with the right firmware and config files, then you need to remove the Bluetooth bond on the tracker in either one of the following ways:
   * **[With the button sequence](../../D-Reference/MicroTrackerCommands_R)** (This is applicable only to Micro Tracker/Smart Badge): 
      * **MCU FW 2.2.x and below:** Ensure the device is switched off with long press, followed by the sequence <1 long press , 6 short press, 1 long press> and then restart the device with long press. If the bond removal was successful, you will hear the following BLE advertisement melody.

      * **MCU FW 2.3.x and above:** Hold the button for more than 14 sec to enter ESC sequence. The tracker will play melody indicating the fact that special sequence can be started. Once inside the special sequence, do the following: 1 click, triple click or more, 1x press (between 1 - 4 sec). If the sequence is successful, the tracker will play Bluetooth advertisement melody indicating the Bluetooth bond is removed for about 10 minutes (which is the default configuration).
   * **Sending the LoRaWAN downlink ff0202** on downlink port = 2 to the Abeeway tracker (This is applicable to ALL the trackers. It requires access to the LoRaWAN account where the tracker is provisioned.)
   * **Reed Switch Sequence<sup>(2)</sup>**. The special magnet sequence can be used to activate Bluetooth on the compact tracker if there is no Bluetooth bond on the tracker. 
   * **Using CLI with the tracker connected over USB port**. The tracker can be connected to USB port and then communicate it with serial tool like Tera term. Once connected to Tera term, enter the password **123** as this is the default password to interact with the tracker. Then type **ble clear** to clear the BLE bond on the tracker. For more information, please refer to [AN-013_CLI_Description](../../D-Reference/DocLibrary_R/#application-notes). (This is applicable to ALL the trackers)

::: warning Note
<sup>(1)</sup> The Bluetooth advertisement duration can be configured by modifying the value of firmware parameter, *ble_cnx_adv_duration* (Parameter ID:0x6F). Please visit [here](../../AbeewayRefGuide/downlink-messages/parameters-configuration/#ble-communication-parameters) for more details.

<sup>(2)</sup> The compact trackers are shipped with default value of *reed_switch_configuration=3*. For more information on reed switch sequence, visit [here](../../AbeewayRefGuide/functioning/user-interfaces/#reed-switch-interface). The video showing this procedure is [here](../../B-Feature-Topics/CompactTracker_C/)
:::

## Creating an account in the mobile app
The first step to use the mobile app is to create an account. 
<img src="./images/appLogin.png" width="300px" border="1" />

When creating an account, please select "Abeeway - Ecosystem" from the distributor dropdown list.
<img src="./images/appDistributorSelect.png" width="300px" border="1" />

Click the **Register** button to create the account
<img src="./images/appCreateAccount.png" width="300px" border="1" />

The following screen will prompt you to enter your personal details to complete the account creation process.
<img src="./images/appRegisterPersonalDetails.png" width="300px" border="1" />

## Adding the tracker to the mobile app account

Once the account is successfully created in the earlier step, goto Add a tracker UI to search for the tracker. </br>
**The tracker must not be Bluetooth bonded to another phone and advertising itself in Bluetooth. Please visit the section [preparing the trackers](../../C-Procedure-Topics/GetStartedMobileApp_T/#prepare-the-trackers) for more instructions.**

<img src="../../D-Reference/FirmwareUpdateMobileApp_R/images/addtracker.png" border="1" />

The following screens show the workflow of adding the tracker to the mobile app account.

<img src="./images/addtrackerWorkflow.png" width="1000px" border="1" />

## Using the mobile app
### Viewing the tracker in the app
Once the tracker is added successfully to the mobile app account, then it's position can be seen on the tracker view UI. It allows visualization of all user’s devices on a map and offers an user-friendly toolbar providing access to the following features:
* Itinerary, localization on demand, history, alerts set-up and parameters different tracking modes adapted to main consumer uses
* Ring the tracker to find the object when connected in Bluetooth
* Battery level, charging status and temperature
* Change of Profiles. There are three pre-configured profiles in the mobile app:
  - **INTENSIVE**: Position reporting every 2 minutes
  - **ECO**: Position reporting every 20 mins
  - **SLEEP**: Position reporting every hour
* Personalization of the tracker with another image or name
* Sharing of the tracker. The mobile app allows the sharing of the tracker with another mobile app end user (in the same Distributor).

### Setting alerts in the app

Mobile app also allows to configure alerts on the tracker. The alerts can be of the following types:
* Configurable alerts for motion, SoS and geofence Zones
* **Alert when left behind**: It alerts you when the tracker is Bluetooth disconnected with the mobile app to remind you if the tracker is left behind.
* Orange/RED Alerts for the loss of connectivity
  * **Orange alert:** There is no more LoRaWAN or Bluetooth connection with the tracker for 1 hour
  * **Red Alert:** There is no more LoRaWAN or Bluetooth connection with the tracker for at least 24 hours

<img src="./images/trackerAlerts.png" width="600px" border="1" />

### Visualization of tracker history
Mobile app can be used to visualize the history of positions, SoS and zone alerts along with the timeline.

<img src="./images/appHistory.png" width="300px" border="1" />

### Sharing the tracker
Tracker can be shared with other users of the mobile app in the same distributor/realm. If the follower's email account does not exist, they will need to create an account in the mobile app.

The followers can set motion, SoS and geofence zone alerts on the shared tracker.

<img src="./images/trackerSharing.png" width="300px" border="1" />

### Tracker advanced settings
On the tracker advanced settings history, the user can either firmware update the trackers or shutdown the tracker (over Bluetooth if the tracker is connected to the mobile) or over LoRaWAN. The tracker needs to be turned on manually with a button press if its put in airplane mode.

<img src="./images/advancedSettings.jpg" width="300px" border="1" />

### Developer mode

::: warning Note
This feature requires the mobile app user account to have an admin role. Please open a ticket on [Abeeway support](../../D-Reference/FAQ_R/README.md) to upgrade the mobile app account to admin role.
:::

Developer mode of the mobile app allows for advanced tracker debugging or performing firmware update with custom firmware files. Here is the summary of the features:
* **CLI Terminal:** Emulate CLI terminal to access the tracker CLI over Bluetooth. This enables visualization of tracker traces over Bluetooth
* **Pre-Defined Profiles:** Apply pre-defined profiles from the backend over Bluetooth
* **Pre-Defined test patterns:** Run pre-defined test patterns configured in the backend

<img src="./images/developerMode.png" width="900px" border="1" />


