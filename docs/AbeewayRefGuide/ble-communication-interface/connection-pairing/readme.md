# Connection and pairing

## Advertisement and connection

**Microtracker and Badge tracker:**

-   Advertisement triggers:
	-   The tracker resets: the advertisement is activated during *ble_cnx_adv_duration* time. It begins in join step After this period,
    	-   If the tracker is bonded the trackers continue to advertise
    	-   If the tracker is not bonded, the advertisement is stopped
	-   The tracker is turned ON: If the bit 5 of the *config_flags* parameter is set, the advertisement is activated during *ble_cnx_adv_duration* time. After this period,
    	-   If the tracker is bonded the trackers continue to advertise
    	-   If the tracker is not bonded, the advertisement is stopped

	-   CLI command (1): \"ble connect start\" . the tracker starts the advertisement for a fixed duration of 60 seconds. a parameter can be added to the command to specify an advertisement duration. After this period:
    	-   If the tracker is bonded the trackers continue to advertise.
    	-   If not the advertisement is stopped

	-   A LoRa downlink (2): It advertises during the duration set in the downlink. After this period:
    	-   If the tracker is bonded the trackers continue to advertise.
    	-   If not the advertisement is stopped

**Compact and industrial tracker:**

-   Advertisement triggers:
	-   The tracker resets: the advertisement is activated during *ble_cnx_adv_duration* time. It begins in join step After this period,
    	-   If the tracker is bonded the trackers continue to advertise
    	-   If the tracker is not bonded, the advertisement is stopped
	-   The tracker is turned ON: If the bit 5 of the *config_flags* parameter is set, the advertisement is activated during *ble_cnx_adv_duration* time. After this period, the advertisement is stopped no matter the bond state

-   CLI command (1): \"ble connect start\": the tracker starts the advertisement for a duration of 60 seconds or *ble_cnx_adv_duration* time (if this parameter value is smaller than 60 seconds). A parameter can be added to the command to specify an advertisement duration. After this period, the advertisement is stopped no matter the bond state

-   A LoRa downlink (2): Advertises during the minimum value between the value set in the downlink and *ble_cnx_adv_duration* time. After this period, the advertisement is stopped no matter the bond state.

-   A reed switch sequence (3) if it is configured for and if the bit 5 of the *config_flags* parameter is set. The advertisement is activated during *ble_cnx_adv_duration* time. After this period, the advertisement is stopped no matter the bond state.

 **For all trackers,** the user can stop at any time the BLE connectivity (communication or advertisement) using:
-   CLI command (1): \"ble connect stop\"
-   LoRa downlink (2) with a duration of 0 (0xFF010B0000)

:::tip Notes
(1)  Refer to the application note [AN-013_CLI_description](https://actilitysa.sharepoint.com/:f:/t/aby/Evqx0qp6AQ1OqrI7-2DoIxsB1wKjLBjykfPh2p7Lo8mP7g?e=VrNdaS) for more details.

(2)  Refer to the section [BLE scan and communication parameters](/downlink-messages/parameters-configuration/) and [Start and Stop BLE Advertisement](/downlink-messages/parameters-configuration/) for more details.

(3)  Only for compact trackers, refer to [Reed switch interface](/functioning/user-interfaces/#reed-switch-interface) for more details.
:::

## Bonding procedure

When the tracker advertises and is not bonded (fast advertisement), the buzzer beeps during the first 15 seconds.

Once the connection has been established, the Client application should send a bond request within a fixed delay of 1 minute. If no bond request is received during this period, the BLE module is switched off.
If the bonding fails, advertisement should be restarted to attempt a new bonding procedure.

## Secured connection

A secured connection is established when a known Central device initiates a connection request and bounded information are present.

Security keys are stored in both the tracker and Central device. The connection is encrypted.

As soon as the BLE secure connection is established (with the bond information), the tracker enters a special mode where the following applies:
-   Accelerometer and battery monitoring tasks are maintained.
-   An event uplink is sent (refer to the section [BLE communication events](/functioning/event-messages/readme.md).
-   All LoRaWAN&trade; communications are stopped (except shutdown message in case the tracker is turned off).
-   No geolocation is performed.

:::tip Notes
1.  Once connected, the tracker does not accept any other BLE connections.
2.  If the tracker has bonding information, only the paired central device can connect to it.
3.  When the tracker is actively bonded and connected to the central device, the geolocation is done by the central device.
4.  If a bonded central device lost its security keys, it can re-pair again to the tracker, if the bit 11 of the *config_flags* parameter is reset. See Asymmetric BLE pairing section below for more details
:::

### Disconnection with a bonded device

The BLE connection is said lost if no messages are received for 6 seconds (Supervision timeout).
30 seconds after a secured connection is lost, the last configured operational mode of the tracker is restored.

### Clear bond event

 The bond information can be cleared by:

-   A LoRaWAN&trade; Downlink (Refer to the sections [BLE parameters](/downlink-messages/parameters-configuration/) and [Reset the device](/downlink-messages/debug-commands/readme.md) for more details)
-   A specific BLE command
-   A CLI command (Refer to the application note [AN-013_CLI_description](https://actilitysa.sharepoint.com/:f:/t/aby/Evqx0qp6AQ1OqrI7-2DoIxsB1wKjLBjykfPh2p7Lo8mP7g?e=VrNdaS) for more details)
-   A specific button sequence: 1 long press, 6 short press, and 1 long press. Long press duration is configured in *button_mapping* parameter

Once cleared the tracker is disconnected from the central device and switches to its configured operational mode.
An event payload **bond deleted** is systematically sent regardless of the bonding state. Prior 2.2-1, this uplink was only sent if the tracker was bonded.

The advertisement restarts during *ble_cnx_adv_duration* time.

### Asymmetric BLE pairing

The asymmetric BLE pairing feature is configurable in the *config_flags* (bit11) and controls if the device can renew the bound
in case the central device has lost its bonding:
-   If set, the tracker cannot renew the bonding and it won't be able to reconnect with another central device (this configuration enhances the security, however, the device's bond can be reset by sending BLE bond reset downlink message)
-   If clear, the tracker allows you to renew bonding.