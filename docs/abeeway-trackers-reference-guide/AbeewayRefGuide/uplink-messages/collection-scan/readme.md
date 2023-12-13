# Collection scan message

|  Common header         |  Collection Position information data|Collection Position information data|Collection Position information data|Collection Position information data|
|----------------------------|------------------|----------------------|----------------------|----------------------|
|  Byte 0-4                  |  Byte 5          |  Byte 6           |  Byte 7           |  Byte 8+           |
|  **Header** with **Type**=0x0B and **Opt**=0 or 1 |  **NF** |  **CiD** |  **Hash** |  **Collection data** |

 **Opt** in header:
-   0: BLE beacons data
-   1: WIFI BSSID data
-   2: BLE geozoning data

 **NF** (Next Frame): bit field used by the fragmentation:
-   Bit 7**: Transmission**
    -   0: No next uplink.
    -   1: Another associated uplink will follow.
-   Bit 6: **Data Format (DF)**
    -   0: The **Collection Data** field is coded on 4 bytes and contains an identifier.
    -   1: The **Collection Data** field is coded on 7 bytes and contains the MAC address.
-   Bit 5-0**: Fragment ID**: ID number of the fragment coded on 5 bits

 **CiD** (Collection identifier): Unique number ranging from 0-255 and indicating the collection number. It starts at 0 and is incremented for each new collection. All fragments have the same CiD.

 **Hash**: This field is the hash of the associated position message. Hash is the xor sum on the whole position message (including the payload header). All fragments have the same hash.
 For BLE geozoning, collection hash is set to 0

 **Collection Data**: Data information.

 Depending on the bit **Data Format** (DF) in **Next Frame** byte, the **Collection Data** can have 2 different formats, on 4 or 7 bytes, as described below.

 Collection Data with Data Format on 4 bytes (DF=0):

|  Bytes |  Byte 8 |  Byte 9-11 |  Byte 12 |  Byte 13-15 |  Byte 16 |  Byte 17-19 |  Byte 20 |  Byte 21-23 |
|---------|---------|---------|---------|---------|---------|---------|---------|---------|
|**Field**|RSSI0	|Element ID0|	RSSI1|	Element ID1|	RSSI2|	Element ID2|	RSSI3|	Element ID3|

 Collection Data with Data Format on 7 bytes (DF=1):

|  Bytes |  Byte 8 |  Byte 9-14 |  Byte 15 |  Byte 16-21 |  Byte 22 |  Byte 23-28 |  Byte 29 |  Byte 30-35 |
|---------|---------|---------|---------|---------|---------|---------|---------|---------|
|**Field**|RSSI0	|Mac address0|	RSSI1|	Mac address1|	RSSI2|	Mac address2|	RSSI3|	Mac address3|

 **RSSI**: RSSI corrected with TX power, if present.

 **Element ID**: ID of the element in Big endian format, 3 last bytes.

 **MAC address**: Device MAC address.

 Additionally, if in *config_flags* parameter the bit 13 Collection Long Report is set to 1 a long report is created, increasing the number of elements that can be reported (**DF**=0: up to 21 elements, **DF**=1: up to 12). This number can also be changed by the parameter collection_nb_entry.

 Refer to the application note [AN-003_Scan_Collection](../../../../documentation-library/abeeway-trackers#application-notes) for more details.

:::tip Note
If the BLE geozoning feature is activated and the *collection_scan_type* parameter is set to BLE, then the BLE collection message is not sent after a position. Only the BLE geozoning collection message is sent.
:::
