# Status message

The Status message provides various information on the tracker, mainly about power consumption and battery voltage. The Additional Data field defines the type of the Status message.

|Common header     |Common header|Common header|Status information data|
|----------------------|-----------------|-----------------|---------------------------|
|  Byte 0              |  Byte 1-3       |  Byte 4         |                           |    
| **Type**=0x04        |**Status/Batt/Temp.**|**ACK / Opt**|                           |

 Opt: message type
-   0: Power status
-   1: Health status

## Power Status message

 Common header with **Type**=0x04 and **Opt**=0x0.<br />
 **This message is no longer used since the battery percentage is given in all uplinks for all trackers.**

## Health Status message

 It is sent in answer to a health status request (see [Status request](/AbeewayRefGuide/downlink-messages/status-request/readme.md) for more details) 
 Common header with **Type**=0x04 and **Opt**=0x1 **power status data**
 
| Byte 5-6     |  Byte 7   | Byte 8  |  Bytes 9-10   |  Bytes 11-12 | Bytes 13-14   |  Bytes 15-16 |Bytes 17-18|
|--------------|-----------|---------------|----------|--------------|----------|--------------|----------|
|**Total power**|**Max temp.**  |**Min temp.** |**LoRa power consumption** |**BLE power consumption**|**GPS power consumption** |**WIFI power consumption**|**Batt voltage** |


- **Total Power**: total consumption value expressed in mAh
- **Max temp.**: Max measured temperature in °C, encoded like the temperature in the header
- **Min temp.**: Min measured temperature in °C, encoded like the temperature in the header 
- **LoRa Power Consumption**: accumulated consumption for the Lora radio, expressed in mAh 
- **BLE Power Consumption**: accumulated consumption for the BLE, expressed in mAh
- **GPS Power Consumption**: accumulated consumption for the GPS, expressed in mAh
- **WIFI Power Consumption**: accumulated consumption for the WIFI, expressed in mAh
- **Battery Voltage**: battery voltage, expressed in mV