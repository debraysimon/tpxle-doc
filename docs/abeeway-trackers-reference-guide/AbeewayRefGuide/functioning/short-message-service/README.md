# Short Message Service (SMS)

This feature allows the tracker to send short messages over LoRaWAN. The message can be sent over [CLI](/D-Reference/UsingCLI_R/) with the tracker connected to computer using USB port or via bluetooth communication interface using smart phone.

The main application of this feature is to be able to send short messages over LoRaWAN when traditional cellular network is not available.

A position acquisition is performed each time a SMS is sent by the tracker. [Position message](../../uplink-messages/position/) is sent depending on the configuration of ***[geoloc_method](../../Parameters-default-configuration/firmware-parameters.html#parameters-for-side-operation-modes)*** parameter. The position message is characterized as an on demand position message in the [common message header](../../uplink-messages/common-message-header/).

:::tip Note
LoRaWAN duty cycle is disabled when sending/receiving SMS.
:::


## CLI commands

The CLI commands required for the lora SMS feature are the following:
```
 lora sms normal <Destination_ID> <message>
 lora sms urgent <destination ID> <message>
 lora sms receive
```

### Destination identifier
The destination ID is the identifier of the SMS recipient. It can be
entered as a decimal or hexadecimal number. Hexadecimal number are prefixed
by 0x. The identifier ranges in [0 - 16777215] or in hexadecimal [0 - 0xFFFFFF]

### Message
The message is coded in ASCII (usual coding for string) and can have maximum length of 192 characters.
In the case where the message is not restricted to a single word, it should be enclosed by double quotes.

Normal vs urgent: 
The two message types differ in the network processing:
 - **normal**: means that a non network acknowledged message will be sent. The network will not acknowledge
   the message reception. In the case where the message is lost by the server, it is not retransmitted
   by the device.
 - **urgent**: means that a network acknowledged message will be sent. The network will acknowledge the message reception. In the case where the message is not received by the server, the acknowledge will not be sent. The device will repeat the message up to 4 times (see [here](../../uplink-messages/lorawan-ul-transmission/#confirmed-uplink)).
   
 
### Examples
 1. ```lora sms normal 123 hello``` <br/>
    Send the non acknowledge message (single word) hello to the recipient matching the identifier 123.

 2. ```lora sms normal 0x1C "Hello world"```  <br/>
    Send the non acknowledge message (multiple words) "hello word" to the recipient matching the
    identifier 0x1c (28). Note that in this case the double quotes are required.

 3. ```lora sms urgent 456 "War is bad"```  <br/>
    Send the acknowledge message (multiple words) "war is bad" to the recipient matching the
    identifier 456. Note that in this case the double quotes are required.

 4. ```lora sms receive```  <br/>
    Check whether a message is destined for the tracker. If a message for us is pending, it will be sent
    to us.



## Configuration and usage
In order to simplify the readability of the CLI, log messages should be suppressed by entering the command
***system log off***.
The tracker should be let in standby mode to minimize the power consumption.
The configuration parameter ***transmit_strat*** and ***transmit_strat_custom*** should be correctly tuned regarding the LoRaWAN region. Please refer to [AN-002_LoRa_Transmission_strategy](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes) on how to configure LoRaWAN transmit strategy.

Please note that the maximum message size strongly depends on the LoRa DataRate it is sent.

### Data rates for Europe LoRaWAN region (EU868)
| Data Rate | Max SMS size |
|-----------|-----------|
|DR0  | 			46|
|DR1	|		46 |
|DR2 |			46| 
|DR3		|	110|
| DR4 |			192 |
|DR5	|		192 |

### Data rates for US LoRaWAN region (US915)
|Data rate |		Max SMS size |
|-----------|-----------|
|DR0 	|		  6 (should be avoided) |
| DR1	|		  48 |
|  DR2 |			  120|
|DR3	|		  192|
| DR4	|		  192|


### LoRaWAN uplink payload
The LoRaWAN uplink payload format is explained [here](../../uplink-messages/short-message-service/).

### LoRaWAN downlink payload
The LoRaWAN downlink payload format is explained [here](../../downlink-messages/short-message-service/).
