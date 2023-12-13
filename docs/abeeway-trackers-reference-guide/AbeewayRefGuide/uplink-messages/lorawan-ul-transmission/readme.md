# LoRaWAN™ uplink transmission

## Basic Transmission strategy

The tracker follows the LoRaWAN™ requirements regarding the transmission (like duty cycle). Each transmission is managed according to the *transmit_strat* parameter:

|Strategy |ID |Device is static|Device is moving<sup>(2)</sup> |
|-------------|-------|-----------------|---------------------|
|**Single fixed** |0x00 |Single transmission using network ADR<sup>(1)</sup> |Single transmission using the data rate configured in *default_datarate* parameter|
|**Single random** |0x01 |Single transmission using network ADR<sup>(1)</sup>|Single transmission using a random data rate within [DR0-DR5]|
|**Dual random** |0x02 |Single transmission using network ADR<sup>(1)</sup>|Double transmissions: -	First transmission using a random data rate within [DR4-DR5] - Second transmission using a random data rate within [DR0-DR3].|
|**Dual fixed** |0x03 |Single transmission using network ADR<sup>(1)</sup>|Double transmissions: - First transmission using a random data rate within [DR4-DR5]. - Second transmission using the data rate configured in default_datarate parameter|
|**Network ADR** |0x04 |Single transmission using network ADR<sup>(1)</sup>|Reserved, internal use only.|
|**Custom strategy** |0x05 |Based on *transmit_strat_custom* parameter| |

:::tip Notes

<sup>(1)</sup>  Number of retransmission and data rate managed by the network (with the same sequence number).<br/>
<sup>(2)</sup> Tracker is considered in motion until the *motion_duration* timer expires.
:::

The data rate used when tracker transitions from motion to static (with ADR) and before receiving the new data rate from the network with ADR is working as described below:

|Transmit Strategy used in motion|Data rate used when tracker is static before the new data rate is received from the network|
|--------------------------------|---------------------------------------------|
|  Single fixed                  |the data rate configured with *default_datarate* parameter   |
|  Single random                 |DR0                            |
|  Dual random                   |DR0                            |
|  Dual fixed                    |the data rate configured with *default_datarate* parameter   |
|  Network ADR                   |No data rate change            |
|  Custom strategy               |Minimum data rate configured in *transmit_strat_custom* parameter   |

 Refer to the section [LoRa parameters](../../downlink-messages/parameters-configuration/readme.md) for more details.

## Custom Transmission strategy

It is activated only if *transmit_strat* parameter is set to 0x05 (custom strategy). The strategy is then defined with *transmit_strat_custom* parameter.

Refer to the dedicated application note [AN-002_LoRa_Transmission](../../../../documentation-library/abeeway-trackers#application-notes) strategy for more details.
**This feature should be applied only after careful study of the application note and LoRaWAN MAC behavior to not negatively impact the proper functioning of the trackers.**

## Confirmed uplink

The device can be configured to request LoRaWAN™ confirmations for uplink messages. The parameter *confirmed_ul_bitmap* is used to select the message types requiring a confirmation. Only message types in the range 0x00 to 0x0F can be selected.

**Example**: To enable confirmed uplink of message types 0x0 and 0x3, we need to set bit 0 and bit 3 to true. This results in *confirmed_ul_bitmap* = 2^0 + 2^3 = 000001001 = 9.

The parameter *confirmed_ul_retry* gives the number of retransmissions that the tracker should do in the case where the LoRaWAN™ confirmation is not received. A value 0 means that the tracker will request the LoRaWAN™ confirmation of the uplink message (enabled in *confirmed_ul_bitmap* ) but will not retry in case of a failure.
