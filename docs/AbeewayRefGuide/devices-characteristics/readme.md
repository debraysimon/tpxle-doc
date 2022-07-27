# Devices characteristics

|  Function      |         |Micro    | Badge   | Compact |Industrial| Required interface  |
|----------------|---------|---------|---------|---------|----------|---------------------|
|**Shipping mode**|         |   X     |  X      |  X      |     NA   |Button or reed switch|
|**Operating modes**|OFF   |   X     | X       | (1)     |   NA     |Button or reed switch acting like a button |
|                |  Standby|   X     | X       | X       | X        |                      |
|          | Motion tracking|   X     | X       | X       | X        |                      |
|         | Permanent tracking| X    | X       | X       | X        |                      |
|         | Motion start/end | X    | X       | X        | X        |                      |
|         | Activity mode  | X    | X       | X          | X        |                      |
|**Side operating modes**|Periodic positions reporting  | X| X | X  | X |                  |
|         | Activity mode  | X    | X       | X          | X        |                      |
|         | Activity mode  | X    | X       | X          | X        |                      |
|         | Alert position  | X    | X       | (1)          | NA    |Button or reed switch acting like a button|
|         | Periodic activity reporting  | X    | X       | X       | X        |           |
|         | Collection payloads  | X    | X       | X          | X  |                      |
|         | proximity feature  | X    | X       | X          | X    |                      |
|         | BLE geozoning  | X    | X       | X          | X        |                      |
|         | BLE beaconing  | X    | X       | X          | X        |                      |
|**default and dynamic profiles**|  | X    | X       | X          | X        |             |
|**SOS**|using the button  | X    | X       | (1)        |     NA |Button or reed switch acting like a button |
|       |using a downlink  | X    | X       | X          | X        |                      |
|**Low battery management**|  | X    | X       | NA          | NA   |Rechargeable battery |
|**Temperature monitoring**|  | X    | X       | X          | X        |             |
|**shock detection**|  | X    | X       | X          | X        |             |
|**Battery monitoring**|  | X    | X       | X          | X        |             |
|**Motion sensitivity**|  | X    | X       | X          | X        |             |


:::tip Note

(1) Refer to the section [Reed switch interface](/AbeewayRefGuide/functioning/user-interfaces/#reed-switch-interface) for reed switch interface explanation.
:::

### Interface/ components embedded on the trackers:


|          |  |  **Micro** |  **Badge** | **Compact** | **Industrial**  |
|----------|----------|----------|----------|----------|---------|
| User interface      | Button   | X        | X        |         |         
|          | LEDs (white charging LED and bicolor LED  | X     | X        | (1)  | (1) |
|          | buzzer | X      | X        |          |             |
|          | Reed switch |        |        | X        |          |
| Geolocation          | GPS         | X      | X      | X        |  X |
|                        | LPGPS       | X      | X      | X        |  X |
|                        | WIFI        | X      | X      | X        |  X |
|                        | BLE         | X      | X      | X        |  X |
| Rechargeable battery |       | 450  mAh |       1300 mAh  |          |     |
| Primary battery      |               |        |  | 8000 mAh |    19000 mAh(2) |

:::tip Notes

(1) LEDs inside the casing can only be used for tests.

(2) 13000mAh for US and AS regions
:::

In most cases, features using BLE can be used in parallel.

![Une image contenant table Description générée
automatiquement](./images/image010.png)

:::tip Notes

1.  While the tracker is BLE connected, none of these features are available
2.  If too many features are used in parallel this can lead to a delay in the LoRa transmission in the region where the duty cycle is used. The periodicity and the length of the payloads need to be studied to ensure that it is adequate for LoRa technology
:::