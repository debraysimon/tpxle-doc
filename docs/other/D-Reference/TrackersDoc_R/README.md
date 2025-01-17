# Abeeway trackers and location services documentation
This page lists all the documentation available for Abeeway trackers, Abeeway Device Manager and the ThingPark X Location Engine.

## Suggested journey through the documentation
The complete documentation listed below can be a bit overwhelming. We recommend to read the documentation in the following order:
1. Read the out-of-the box notice related to your specific tracker model (which will also provide convenient QR codes pointing to essential documentation).
2. Read the training on the tracker Button and LED [User Interface](https://actilitysa.sharepoint.com/:f:/t/aby/EiWIqYpAehBKg3Py8I6X07oBFFxUWT3i2FVHYRX2MzXtow?e=ZFkhrM) and on the [Command Line Interface (CLI)](https://actilitysa.sharepoint.com/:f:/t/aby/EgxRhivJUIVNrq1Lwa3qBigBip9FcMMHhBD_ZaA9m8IT6w?e=WLr48X). Many features require activation by button press sequences or CLI commands, and it is important to be familiar with both.
3. Read the [Abeeway Device Manager (ADM) User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EhbJycLDkulLhGAhJpcOztcBa_glwi7WYyyPMz58f-PEUQ?e=YN9ptc). This easy to use online tool will allow you to interact and configure your trackers without having to know the exact configuration commands or parameter IDs.
4. You will need to tune the tracker's LoRaWAN transmit strategy to your specific use case and network. ADM provides default settings but if you want to optimize power consumption for a given private network you will need to make sure the the data-rates used are as high as possible. [AN-002_LoRa_Transmission_strategy](https://thingpark.page.link/ABWAppNotes) provides all the details.
5. You will usually need to understand how to tune the embedded GNSS geolocation logic to optimize power consumption and tune it to your local GNSS reception conditions, or configure aggressive timeouts if you want the tracker to switch to WiFi or BLE geolocation as much as possible. [AN-016_GPS_LPGPS](https://thingpark.page.link/ABWAppNotes) provides the required reference.
6. If you need to understand specific parameters when using the Abeeway Device Manager beyond the tooltip information, you can refer to the [Abeeway Trackers Reference Guide](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/introduction/index.md). This document is not meant to be read end-to-end, but rather as a comprehensive reference for all commands and parameters.
7. You can more information in [Abeeway Firmware trainings](../../D-Reference/TrackersDoc_R/README.md#abeeway-firmware-trainings) and [ThingPark X Location Engine trainings](../../D-Reference/TrackersDoc_R/README.md#thingpark-x-location-engine-trainings) below for more specific use cases.

The rest of the documentation relates to specific use cases (e.g. BLE scanning, Covid proximity) or specific actions (Firmware update, debugging), and the titles are self-explanatory. You need to read them only if relevant to you.

## Preparing the trackers for first use with GNSS
When a GNSS chip starts scanning for satellites, the search space is potentially huge: 
*	with no prior knowledge of satellites in sight all of them need to be searched
*	with no prior knowledge of the motion of satellites:
    - the impact of Doppler effect on expected signal frequency is also unknown and that increases the search space
    - even after capturing the pseudo range (signal flight time) for a given satellite, the position cannot be computed if the position of the satellite is not known. However it may be computed in the cloud using AGPS (Assisted-GPS) or LP-GPS (Low-Power GPS) technologies.

This initial blind search is called **Cold Start**, and typically requires up to a minute to acquire pseudo range and ephemeris (short term trajectory) of 4 satellites, which allows to compute the first fix. It will require an additional 12-15 minutes (potentially more depending on receive conditions) to acquire the Almanac (longer term trajectory information for the whole constellation), after which the GNSS will be “Warm” and able to perform subsequent fixes with a much shorter Time To First Fix (TTFF).

For this reason, when first using a tracker, it is important to not limit the resolution time to less than about a minute (parameter ***[gps_timeout](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)***) and to allow some reasonable time to find the first satellite (parameter ***[gps_t0_timeout](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)*** and ***[gps_t0_timeout_motion](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)*** set to 30 seconds). In order to make sure the Almanac is captured rapidly, it is also recommended to maximize the activity time of the GNSS when preparing them for first operational use, by setting a high target resolution (parameters ***[gps_ehpe](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)*** and ***[gps_ehpe_motion](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)*** set to 10m or less,  ***[gps_convergence](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/parameters-default-configuration/firmware-parameters.md#parameters-for-gps-and-low-power-gps-geolocation-modes)*** set to 40s or more).

After about an hour in clear sky conditions with such settings, the GNSS chip should be completely updated with the latest long term Almanac information, and in such “Warm” conditions it will be able to be set to more aggressive settings, with lower convergence time and lower power consumption).
A set of parameters that are optimized for first use acquisition of Almanac are available as a template in Abeeway Device Manager.
pseudo range
![](./images/PrepareTrackersFirstUse.png)

You can also verify the current status of Almanac that is stored in the tracker by entering the following command **gnss show `<gps|beidou>`** on [CLI](../../../troubleshooting-support/using-cli.md) with the tracker connected to the computer using USB port or via [Abeeway mobile app](../../../getting-started/getting-started-with-abeeway-tracking-app.md) (over bluetooth). For more information refer to [AN_016_GPS_LPGPS_usage] and [here](../../../use-cases/use-case-gps-positioning.md#preparing-your-tracker-for-first-use-with-gnss).

## Abeeway trackers

### Reference Guides and Tools

|                                                    | Resource                                                                                                                                                                                                       |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Asset tracker firmware reference guide**         | [LATEST](../../../abeeway-trackers-reference-guide/AbeewayRefGuide/introduction/index.md) <br/> [OLDER VERSIONS](https://actilitysa.sharepoint.com/:f:/t/aby/Ep4-XPaCPlpDkUrSP2_Iao0BLcCjcPyL_wiSe1aak0MzOg?e=AhKbQW) |  
| **Asset tracker firmware Release Notes**           | [Abeeway tracker Firmware Release notes]                                                                                                                                                                       |  
| **Trackers power consumption estimation**          | [Power Consumption Estimation](https://actilitysa.sharepoint.com/:f:/t/aby/Er1CBFg9-YxChO-cdxGs5DUBj2CDpFGEhoEQtFeuH9l_4w?e=xmiDVM)                                                                            |
| **LED patterns for micro tracker and smart badge** | [LED patterns](https://actilitysa.sharepoint.com/:b:/t/aby/Ee9KhtkknRFMiBipu_fWDdgBh5pr8AIyZNYXkTCe5fg18A?e=DtRe8I)                                                                                            | 
| **Asset tracker driver**                           | [Asset Tracker Driver User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EhpXO62fGtlEstRRCMq6UAgBRgT_0xLToEZd1k_NyGzCcA?e=HlmwTS)                                                                         |
| **Melodies for Abeeway Trackers**                  | [Abeeway trackers melody](https://actilitysa.sharepoint.com/:f:/t/aby/Er982mOeCYxLniE8OjVErKwBopXN9-mKCC7VPn5HsJkigA?e=dCGByt)                                                                                 |


### Out of Box User Guides

| | Resource | 
| - | -------- |
| **Micro tracker**| [Micro tracker Out of Box User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EuMzuM_frNdHv_PEqLKPIxsBI83xXlrDeOgdLbe6XnaHoA?e=fnAY2k) |
| **Smart badge** | [Smart Badge Out of Box User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EuMzuM_frNdHv_PEqLKPIxsBI83xXlrDeOgdLbe6XnaHoA?e=fnAY2k) |
| **Industrial tracker**| [Industrial Tracker Out of Box User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EuMzuM_frNdHv_PEqLKPIxsBI83xXlrDeOgdLbe6XnaHoA?e=fnAY2k) |
| **Compact tracker** | [Compact Tracker Out of Box User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EuMzuM_frNdHv_PEqLKPIxsBI83xXlrDeOgdLbe6XnaHoA?e=fnAY2k) |

### Certifications

| | Resource | 
| - | -------- | 
| **Micro tracker V2**| [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/Ep_mMs3nYABNkDSrFgI6lQIB1BMjdShDx1yyL0TPl6i2qg?e=rOCV8O) |
| **Micro tracker V3**| [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/Erlh0hDXjFVGqriKiLVvOggBcbYqBQzxp6iBYc7W3Cfbwg?e=U9pIsa) |
| **Smart badge** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/EkooWtJT0vJPv2phGGJHp18BT9988i36qQJzkJ2Rtsq-rA?e=w7mqj8) |
| **Industrial tracker V1** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/Eqk_LfFUHJBDotzEK2gdX9IBNXcynn_DlKWKqmuCbOYtnw?e=aGg18b) |
| **Industrial tracker V2** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/Ek4c_6w2bOBKuP1Bk2VDSjEB48s56zmOwVpzppyjDF1xSQ?e=wWTbuT) |
| **Compact tracker** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/EtWpMlYIt0lGk3o2Nx0hKyMBC52iKMXjW2bAuYoxUdvjYg?e=wgyH4y) |
| **Industrial Manageable Beacon** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/EohTrUr31FBLhAoHKED-F8sB0rICCeBtzEPaCV0qyz2mlA?e=afYhym) |
| **Docking station** | [Certification documents](https://actilitysa.sharepoint.com/:f:/t/aby/EnEQl3ZoI4ZArh073pciqXoBoO706gpO262rev0V38G-gw?e=TAemPx) |

## Abeeway Device Manager application

| | Resource | 
| - | -------- |
| **Abeeway Device Manager** (ADM)| [Abeeway Device Manager User Guide](https://actilitysa.sharepoint.com/:f:/t/aby/EhbJycLDkulLhGAhJpcOztcBa_glwi7WYyyPMz58f-PEUQ?e=YN9ptc) |

## Data sheets

| | Resource | 
| - | -------- | 
| **Micro tracker** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EgWpgfH_tAZLnWxUvbHik4sBrZndICDdFZH0mOPJv21Y_g?e=n97NzZ) |
| **Smart badge** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/ErQx5OT96LVAuVqNst7mOtEBfDCxo7sbOntVT0smN5EVug?e=ukxqa3) |
| **Industrial tracker** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/Evkh40X6gVlHqFouOdAl4uIBj139ph9fzji835sewtlFVg?e=SVf1m4) |
| **Compact tracker** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EodEe7JCZFhDgGR_IjtmoJUBB5sj9WhdgPThld6yYXWOwg?e=6e5giY) |
| **Combo LPWAN Compact tracker** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/Eqqg-R42cJlCuUzx6CAW2OEB1UJWRy8wv6zg0Lcz9JkdEg?e=YliDhz) |
| **Industrial Manageable beacon** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EodEe7JCZFhDgGR_IjtmoJUBB5sj9WhdgPThld6yYXWOwg?e=6e5giY) |
| **LoRaWAN Relay** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EgOtfCaHfZtMojilKyQ8GyEBgu_J4HkPJmMnQW1pdW3U4Q?e=gIMa4P) |
| **Smart badge docking station** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EvDDLZ6OdzVGrv1O3J5P2aoBjlI_rQrBeaafiawmbFONgA?e=d1EOAw) |
| **Geolocation module** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/EgYK6e26eYdPkTnRaIdN15IBJ3W_Lvi4CEtB6_z6ZMRO8Q?e=73BkwT) |
| **Third party accessories** | [Data sheet](https://actilitysa.sharepoint.com/:f:/t/aby/ErQIOhsLoiVFrDW5dcCW2qcBfdsNMAAIdhlkw5Hww8v0Xw?e=fvzYse) |


## Application notes

| | Description | Resource | Minimum Required MCU/BLE Firmware Version |
| - | ----------- | -------- |-------- |
| **Battery Percentage** | This application note describes the computation of the remaining (%) battery level | [AN-000_battery-percentage](https://thingpark.page.link/ABWAppNotes) | MCU: 1.9.x, BLE: 2.2.0 **<br/> This application note is deprecated since MCU FW 2.0 and above**|
| **BLE Firmware Update** | This application note describes the update of BLE Firmware on the tracker using nRFconnect app. | [AN-001_ble_firmware_update](https://thingpark.page.link/ABWAppNotes) | MCU: 1.9.x, BLE: 2.2.0 |
| **LoRa transmit strategy** | This application note describes the configuration and usage of LoRaWAN® custom transmit strategy. | [AN-002_LoRa_Transmission_strategy](https://thingpark.page.link/ABWAppNotes) | MCU: 1.9.x, BLE: 2.2.0 |
| **Scan collection** | This feature describes the scan collection feature which allows scanning, filtering and reporting up to twenty BLE beacons in several uplink payloads. | [AN-003_ScanCollection](https://thingpark.page.link/ABWAppNotes) | MCU: 2.0, BLE: 3.1.0 |
| **Device orientation** | This application note explains how to use the accelerometer data from the tracker to detect its orientation. | [AN-005_device_orientation](https://thingpark.page.link/ABWAppNotes) | MCU: 1.9.x, BLE: 2.2.0 |
| **BLE position filtering** | This application note explains the functionality and configuration of BLE position filtering feature that allows reporting of up to four BLE beacon identifiers with different filtering options on BLE UID. | [AN-006_Position_BLE_filtering](https://thingpark.page.link/ABWAppNotes) | MCU: 2.1.x, BLE: 3.2.2 |
| **Proximity detection** | This application note describes the Proximity detection feature that can be used for contact tracing and proximity detection between people wearing the Abeeway trackers. | [AN-007_proximity-detection](https://actilitysa.sharepoint.com/:f:/t/aby/EgbhcfgQ-bZPrkYbQ7isqYYBPZkOHvKjhwmED46IDtiimA?e=m0AYsd) | MCU: 2.1.x, BLE: 3.2.2 **<br/> This feature is deprecated since MCU FW 2.4+. Please use MCU FW 2.3 and below to use this feature**|
| **Proximity detection calibration guide** | This application note describes the positioning and calibration of badges for proximity detection and contact tracing. | [AN-008_proximity-detection-calibration-guide](https://actilitysa.sharepoint.com/:f:/t/aby/EgbhcfgQ-bZPrkYbQ7isqYYBPZkOHvKjhwmED46IDtiimA?e=m0AYsd) | MCU: 2.1.x, BLE: 3.2.2 **<br/> This feature is deprecated since MCU FW 2.4+. Please use MCU FW 2.3 and below to use this feature**|
| **MCU firmware update** | This application note describes the MCU firmware update procedure.**This tool is deprecated since MCU FW 2.2. Please use Abeeway Updater tool (see Firmware Update section below)**.| [AN-009_mcu_firmware_update](https://thingpark.page.link/ABWAppNotes) | MCU: 1.9.x, BLE: 2.2.0 |
| **Angle Detection** | This application note describes how to trigger events from the tracker based on its orientation | [AN-010_Angle_Detection](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **BLE Geozoning** | This application note describes the BLE Geozoning feature which can be used to generate alerts from the tracker based on safe/hazard zone detection using BLE | [AN-011_BLE_geozoning](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **Quuppa Beaconing** | This application note describes the Quuppa beaconing feature. | [AN-012_Quuppa_beaconing](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **CLI Usage** | This application note describes the debugging of the tracker over USB interface. | [AN-013_CLI_Description](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **BLE Communication** | This application note describes the interface between the tracker and the mobile APP | [AN-014_BLE communication](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **Debug Trackers** | This application note describes how to debug Abeeway trackers when there is reset or any other unexpected cause| [AN-015_Debug data](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **GPS/LPGPS Usage** | This application note describes how to configure and use the GPS/LP-GPS feature to optimize accuracy/power consumption of the tracker | [AN-016_GPS_LPGPS](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **Getting started with Mobile APP** | This application note describes how to configure and use the Abeeway mobile APP with the trackers | [AN-017_Mobile APP Getting Started Guide](https://thingpark.page.link/ABWAppNotes) | MCU: 2.2.x, BLE: 3.3.0 |
| **Motion and Shock detection** | This application note describes how to configure the firmware for motion and shock detection) | [AN-018_Motion_and_shock_detection](https://thingpark.page.link/ABWAppNotes) | MCU: 2.3.x, BLE: 3.3.2 |
| **BLE beaconing** | This application note describes how to configure the firmware to send BLE beacons (iBeacon, Eddystone and Altbeacon) | [AN-019_BLE Beacon transmission](https://thingpark.page.link/ABWAppNotes) | MCU: 2.3.x, BLE: 3.3.2 |


## Firmware Update

| | Description | Resource | 
| - | ----------- | -------- |
| **Abeeway Updater (Firmware Update tool)** | This tool allows MCU and BLE Firmware update of Abeeway trackers. | [Abeeway Firmware Update](https://github.com/Abeeway/Abeeway-updater) |
| **MCU Firmware binaries** | This folder has all the binaries for MCU/Application Firmware. | [ MCU Firmware binaries](https://actilitysa.sharepoint.com/:f:/t/aby/EstKVz_aVwRKkhcNATWI3loBEIgAAIxE0j_Sx8oZ5oiAew?e=g5Op9r) |
| **BLE Firmware binaries** | This folder has all the binaries for BLE Firmware. | [BLE Firmware binaries](https://actilitysa.sharepoint.com/:f:/t/aby/ElfViYe0P9BDiDQYQ9Tv0tYBr3yJpFNa1At2EzVxPujGPw?e=i6sw9e) |
| **Config files** | This folder has all the Firmware config files for different trackers. | [Abeeway Firmware Update](https://actilitysa.sharepoint.com/:f:/t/aby/ErEQcpIhgN9Khxt8q66GBy4Bj9FIV-0rGf5XhaVyCJo2CQ?e=QqegCQ) |
| **BLE firmware update** | This application note describes the BLE firmware update procedure using Nordic NrfConnect smartphone application. | [AN-001_ble-update](https://thingpark.page.link/ABWAppNotes) |

### Abeeway Firmware trainings

| | Description | Resource | 
| - | ----------- | -------- |
| **Abeeway Firmware feature overview** | These sessions provide overview of firmware features for each release | [What's new sessions](https://actilitysa.sharepoint.com/:f:/t/aby/EmU61087UklJsyAbuyDzlXsBfyeS_YLBfFfHMqjVRLhTkQ?e=x6DMRe) |
| **User Interface** | These training slides introduce the user interface (LED, buzzer, button) for Abeeway trackers. | [User Interface](https://actilitysa.sharepoint.com/:f:/t/aby/EiWIqYpAehBKg3Py8I6X07oBFFxUWT3i2FVHYRX2MzXtow?e=ZFkhrM) |
| **Proximity Policy Enforcement** | These training slides introduce basic concepts of proximity solution and how to set it up. | [Proximity Solution](https://actilitysa.sharepoint.com/:f:/t/aby/Eux5K7WVG8JClipPzZsJn7YB4snhG68oscKKw89g20UwRw?e=xqY4gZ) | 
| **Scan Collection** | This feature introduces BLE/WiFi scanning and reporting of up to 20 BLE Beacons/WiFi BSSIDs. | [Scan Collection](https://actilitysa.sharepoint.com/:f:/t/aby/ErgX0cSv_8dNgJZsYVbYVdAB3G-5rve_CK8dHQ1a2dSGkQ?e=6Q2Q47) |
| **BLE Position Filtering** | This feature introduces BLE position reporting of up to 4 BLE beacons. | [BLE Position Filtering](https://actilitysa.sharepoint.com/:f:/t/aby/EpG2Vos3eFxMkSFyWBrkNI8BEBiGorNXW-34K37-NFo-_w?e=4EnC2q) |
| **CLI Usage** | This feature allows to interact with tracker over USB to get the internal logs and also set the tracker parameters. | [CLI Usage](https://actilitysa.sharepoint.com/:f:/t/aby/EgxRhivJUIVNrq1Lwa3qBigBip9FcMMHhBD_ZaA9m8IT6w?e=WLr48X) |
| **Quuppa Beaconing** | This feature enables Quuppa beaconing for Abeeway trackers. | [Quuppa Beaconing](https://actilitysa.sharepoint.com/:f:/t/aby/EucRGJmCxnJEv_QCWbvL58YBkwyfz8RWgTmxU6YMwKJfkg?e=CE7yUH) |
| **BLE Geozoning** | This feature enables BLE geozoning for Abeeway trackers. | [BLE geozoning](https://actilitysa.sharepoint.com/:f:/t/aby/EoMeflwX2UdBnUhmVmwYfOYBYjFIIYupWFfgyNsW2uQvOQ?e=ffx9va) |
| **Abeeway Mobile App** | This feature explains how to use Abeeway Mobile for Abeeway trackers. | [Abeeway Mobile App](https://actilitysa.sharepoint.com/:f:/t/aby/Ep7oeKyEGeZIolF4avQrmf8BBsOOJoFQhjon7jacL4Koig?e=KgYKLP) |
| **Motion and shock detection** | This feature explains how to use accelerometer features inside Abeeway trackers. | [Motion &amp; Shock detection](https://actilitysa.sharepoint.com/:f:/t/aby/EuC-wMdBd6lItOlUUsQYbuoBDwzLdK6QY_uPTwgjG1tqzA?e=4USOgi) |
| **GPS LP-GPS features** | This feature explains how to use GPS/LP-GPS features inside Abeeway trackers. | [GPS &amp; LP-GPS Usage](https://actilitysa.sharepoint.com/:f:/t/aby/EliM0bMyOoJOqE67Y4HS8rMBBymloFfI0GD6JtakAsu_4Q?e=ohnMEh) |
| **ATEX/IECEx Certification** | These training slides explain the ATEX/IECEx certification for Abeeway trackers | [ATEX/IECEx Certification](https://actilitysa.sharepoint.com/:f:/t/aby/EkH65elONnpKktjVAhHXFHYB9ZcYKILOp8yOMvLAGrqRhA?e=Is7dRT) |
| **BLE beaconing** | These training slides explain how to configure the Abeeway trackers to transmit BLE beacons (Eddystone, iBeacon and AltBeacon) | [BLE beaconing](https://actilitysa.sharepoint.com/:f:/t/aby/EkC46dF5-qZCoUyPXDKjRcoB-1uGqSgnXxot3ugD-j4pDg?e=miShai) |

## ThingPark X Location Engine

### ThingPark X Location Engine Trainings

| | Description | Resource | 
| - | ----------- | -------- |
| **ThingPark Location Introduction** | These training slides introduce basic features of ThingPark Location. | [ThingPark Location Introduction](https://actilitysa.sharepoint.com/:f:/t/aby/EqVIEMaqJfVHoNAi90G068UB8K4HMfB1t2eyttWIGlIwbQ?e=JZYdsp) |
| **ThingPark Location feature overview** | These sessions provide overview of ThingPark X Location Engine features for each release | [What's new sessions](https://actilitysa.sharepoint.com/:f:/t/aby/EkFg4UZ8LvNHmkXbaxOKJugB2efnuws_-QyRqND-IvaQqg?e=HbfUd2) |

To get more resources on ThingPark Location, see [Documentation library](../../../documentation-library/suggested-journey.md).
