# Identifying the tracker model & firmware

It is important to identify the tracker model when updating the firmware or knowing the features of the tracker. The tracker model can be easily identified by the first 10 digits of DevEUI. 

If your DevEUI is not present, in the list, please contact your local distributor from which you purchased the tracker. If the tracker was purchased from Actility/Abeeway or [ThingPark Market](https://market.thingpark.com/), then please contact [Abeeway support](https://thingpark.page.link/AbeewaySupport)

::: warning Important
* All the application notes and reference guides are always w.r.t. MCU/Application Firmware. It is crucial to refer to the Abeeway tracker reference guide that corresponds to the MCU Firmware that is installed on the tracker.
* Flashing the incorrect MCU/BLE Firmware will render the tracker unusable and in some cases will cause permanent damage. In case of doubt, please contact [Abeeway support](https://thingpark.page.link/AbeewaySupport)
* The MCU/BLE FW compatibility and the tracker model can also be found from [Abeeway Updater](https://github.com/Abeeway/Abeeway-updater) documentation
::: 

The table below lists Tracker model and Firmware compatibility.

| Tracker Model | LoRaWAN DevEUI Prefix | MCU Firmware | BLE Firmware | 
| - | ----------- | -------- |-|
| Micro Tracker V2 | 20635F0106, 20635F0107, 20635F0108, 20635F0109 | 1.9.x and below | 2.0.x and below | 
| Micro Tracker V3.0 | 20635F0171, 20635F0172, 20635F01C1, 20635F01D1 | 2.x and above | 3.2.x and above | 
| Micro Tracker V3.1 | 20635F0261, 20635F0271, 20635F0281, 20635f0361 | 2.x and above | 3.2.x and above | 
| Smart Badge | 20635F0421, 20635F01E1, 20635F01F1, 20635F0201, 20635F0211, 20635F0231, 20635F0241, 20635F0251, 20635F0291, 20635F02A1, 20635F02B1, 20635F0291, 20635F02C1, 20635F02E1 | 2.x and above | 3.2.x and above | 
| Compact Tracker | 20635F0161, 20635F0181, 20635F0191, 20635F01A1, 20635F01B1, 20635F0181, 20635F0311, 20635F0321, 20635F01A2, 20635F0191 | 2.x and above | 3.2.x and above | 
| Industrial Tracker V1 | 20635f00C5, 20635f00C6, 20635f00C8, 20635f00C9, 20635F0131, 20635F0132, 20635F0133 | 1.8.x and below | Not Applicable | 
| Industrial Tracker V2 | 20635F0134, 20635F0135, 20635F02D1 | 2.x and above | 3.2.x and above | 

## Latest MCU and BLE Firmware
| Tracker Model | Latest MCU firmware | Latest BLE firmware | 
| - | ----------- | -------- |-|
| Micro Tracker V3.1 | 2.5.0 | 3.3.4 |
| Micro Tracker V3.0 | 2.5.0 | 3.3.4 | 
| Micro Tracker V2 | 1.9.1 | 2.0.0 | 
| Smart Badge | 2.5.0 | 3.3.4 |
| Compact Tracker | 2.5.0 | 3.3.4 |
| Industrial Tracker V2 | 2.5.0 | 3.3.4 |
| Industrial Tracker V1 | 2.5.0 | NA |

## MCU & BLE Firmware Compatibility

It is important to ensure the BLE Firmware and MCU Firmware are compatible with each other to avoid any issues. The following table below describes the compatible MCU and BLE Firmware that we have validated. 

::: warning Important
* Please use only these MCU/BLE Firmware combinations below to avoid any issues in the field.
::: 


| MCU Firmware| BLE Firmware | Compatible tracker models | 
| - | ----------- | -------- |
| 2.5.x| 3.3.4 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 2.4.x| 3.3.4 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 2.3.x | 3.3.3 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 2.2.x | 3.3.3 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 2.1.x | 3.2.2 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 2.0 | 3.1.0 | Micro Tracker V3.x, Smart Badge, Compact Tracker, Industrial Tracker V2 |
| 1.9.x | 2.0.0 | Micro Tracker V2|
