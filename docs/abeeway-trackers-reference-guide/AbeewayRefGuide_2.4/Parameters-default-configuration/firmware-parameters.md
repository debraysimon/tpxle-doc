# Firmware Parameters

The table below sum up all parameters and their identifiers (ID). The parameters described as "reserved" are not used in this firmware version.

							
|	Parameter Name	|	Parameter ID (Decimal)	|	Parameter ID (Hex)	|
|	--------------	|	--------------	|	--------------	|
|	ul_period                        	|	0	|	(0x00)	|
|	lora_period                      	|	1	|	(0x01)	|
|	pw_stat_period                   	|	2	|	(0x02)	|
|	periodic_pos_period              	|	3	|	(0x03)	|
|	unknown                          	|	4	|	(0x04)	|
|	geoloc_sensor                    	|	5	|	(0x05)	|
|	geoloc_method                    	|	6	|	(0x06)	|
|	antenna                          	|	7	|	(0x07)	|
|	motion_nb_pos                    	|	8	|	(0x08)	|
|	gps_timeout                      	|	9	|	(0x09)	|
|	agps_timeout                     	|	10	|	(0x0A)	|
|	gps_ehpe                         	|	11	|	(0x0B)	|
|	gps_convergence                  	|	12	|	(0x0C)	|
|	config_flags                     	|	13	|	(0x0D)	|
|	transmit_strat                   	|	14	|	(0x0E)	|
|	ble_beacon_cnt                   	|	15	|	(0x0F)	|
|	ble_beacon_timeout               	|	16	|	(0x10)	|
|	**gps_standby_timeout**              	|	17	|	(0x11)	|
|	confirmed_ul_bitmap              	|	18	|	(0x12)	|
|	confirmed_ul_retry               	|	19	|	(0x13)	|
|	motion_sensitivity               	|	20	|	(0x14)	|
|	shock_detection                  	|	21	|	(0x15)	|
|	periodic_activity_period         	|	22	|	(0x16)	|
|	motion_duration                  	|	23	|	(0x17)	|
|	geofencing_scan_period           	|	24	|	(0x18)	|
|	geofencing_collect_period        	|	25	|	(0x19)	|
|	ble_rssi_filter                  	|	26	|	(0x1A)	|
|	temperature_high                 	|	27	|	(0x1B)	|
|	temperature_low                  	|	28	|	(0x1C)	|
|	temperature_action               	|	29	|	(0x1D)	|
|	transmit_strat_custom            	|	30	|	(0x1E)	|
|	network_timeout_check            	|	31	|	(0x1F)	|
|	network_timeout_reset            	|	32	|	(0x20)	|
|	collection_scan_type             	|	33	|	(0x21)	|
|	collection_nb_entry              	|	34	|	(0x22)	|
|	collection_ble_filter_type       	|	35	|	(0x23)	|
|	collection_ble_filter_main_1	|	36	|	(0x24)	|
|	collection_ble_filter_main_2	|	37	|	(0x25)	|
|	collection_ble_filter_sec_value  	|	38	|	(0x26)	|
|	collection_ble_filter_sec_mask   	|	39	|	(0x27)	|
|	battery_capacity                 	|	40	|	(0x28)	|
|	reed_switch_configuration        	|	41	|	(0x29)	|
|	gnss_constellation               	|	42	|	(0x2A)	|
|	prox_scan_pwr_min                	|	43	|	(0x2B)	|
|	prox_distance_coef               	|	44	|	(0x2C)	|
|	prox_scan_frequency              	|	45	|	(0x2D)	|
|	prox_backtrace_max_age           	|	46	|	(0x2E)	|
|	prox_distance_sliding_window     	|	47	|	(0x2F)	|
|	prox_exposure_50	|	48	|	(0x30)	|
|	prox_exposure_100	|	49	|	(0x31)	|
|	prox_exposure_150	|	50	|	(0x32)	|
|	prox_exposure_200	|	51	|	(0x33)	|
|	prox_exposure_250	|	52	|	(0x34)	|
|	prox_exposure_300	|	53	|	(0x35)	|
|	prox_exposure_400	|	54	|	(0x36)	|
|	prox_alarm_dist_immediate        	|	55	|	(0x37)	|
|	prox_alarm_exposure              	|	56	|	(0x38)	|
|	prox_warn_dist_immediate         	|	57	|	(0x39)	|
|	prox_warn_exposure               	|	58	|	(0x3A)	|
|	prox_record_dist_immediate       	|	59	|	(0x3B)	|
|	prox_record_exposure             	|	60	|	(0x3C)	|
|	prox_alarm_buz_duration          	|	61	|	(0x3D)	|
|	prox_warn_buz_duration           	|	62	|	(0x3E)	|
|	prox_contact_policy              	|	63	|	(0x3F)	|
|	prox_scan_duration               	|	64	|	(0x40)	|
|	prox_scan_window                 	|	65	|	(0x41)	|
|	prox_scan_interval               	|	66	|	(0x42)	|
|	prox_alarm_remanence             	|	67	|	(0x43)	|
|	prox_warn_remanence              	|	68	|	(0x44)	|
|	prox_bcn_repeat                  	|	69	|	(0x45)	|
|	prox_bcn_tx_power                	|	70	|	(0x46)	|
|	prox_reminder_period             	|	71	|	(0x47)	|
|	prox_reminder_distance           	|	72	|	(0x48)	|
|	prox_warn_disable_dist           	|	73	|	(0x49)	|
|	prox_alarm_disable_dist          	|	74	|	(0x4A)	|
|	prox_max_speed_filter            	|	75	|	(0x4B)	|
|	prox_max_update                  	|	76	|	(0x4C)	|
|	position_ble_filter_type         	|	77	|	(0x4D)	|
|	position_ble_filter_main_1	|	78	|	(0x4E)	|
|	position_ble_filter_main_2	|	79	|	(0x4F)	|
|	position_ble_filter_sec_value    	|	80	|	(0x50)	|
|	position_ble_filter_sec_mask     	|	81	|	(0x51)	|
|	position_ble_report_type         	|	82	|	(0x52)	|
|	buzzer_volume                    	|	83	|	(0x53)	|
|	angle_detect_mode                	|	84	|	(0x54)	|
|	angle_ref_acq                    	|	85	|	(0x55)	|
|	angle_ref_acc_x                  	|	86	|	(0x56)	|
|	angle_ref_acc_y                  	|	87	|	(0x57)	|
|	angle_ref_acc_z                  	|	88	|	(0x58)	|
|	angle_critical                   	|	89	|	(0x59)	|
|	angle_critical_hyst              	|	90	|	(0x5A)	|
|	angle_report_mode                	|	91	|	(0x5B)	|
|	angle_report_period              	|	92	|	(0x5C)	|
|	angle_report_repeat              	|	93	|	(0x5D)	|
|	angle_rising_time                	|	94	|	(0x5E)	|
|	angle_falling_time               	|	95	|	(0x5F)	|
|	angle_learning_time              	|	96	|	(0x60)	|
|	angle_acc_accuracy               	|	97	|	(0x61)	|
|	angle_deviation_delta            	|	98	|	(0x62)	|
|	angle_deviation_min_interval     	|	99	|	(0x63)	|
|	angle_deviation_max_interval     	|	100	|	(0x64)	|
|	default_profile                  	|	101	|	(0x65)	|
|	password                         	|	102	|	(0x66)	|
|	gps_t0_timeout	|	103	|	(0x67)	|
|	gps_fix_timeout                  	|	104	|	(0x68)	|
|	geofencing_scan_duration         	|	105	|	(0x69)	|
|	beaconing_type                   	|	106	|	(0x6A)	|
|	beaconing_tx_power               	|	107	|	(0x6B)	|
|	beaconing_static_interval        	|	108	|	(0x6C)	|
|	beaconing_motion_interval        	|	109	|	(0x6D)	|
|	beaconing_motion_duration        	|	110	|	(0x6E)	|
|	ble_cnx_adv_duration             	|	111	|	(0x6F)	|
|	beacon_id_0	|	112	|	(0x70)	|
|	beacon_id_1	|	113	|	(0x71)	|
|	beacon_id_2	|	114	|	(0x72)	|
|	beacon_id_3	|	115	|	(0x73)	|
|	beacon_id_4	|	116	|	(0x74)	|
|	sos_period                       	|	117	|	(0x75)	|
|	motion_debounce                  	|	118	|	(0x76)	|
|	button_mapping                   	|	119	|	(0x77)	|
|	default_datarate                 	|	120	|	(0x78)	|
|	**gps_ehpe_motion**                	|	121	|	(0x79)	|
|	**gps_convergence_motion**           	|	122	|	(0x7A)	|
|	**gps_t0_timeout_motion**	|	123	|	(0x7B)	|
|	[_Special Parameters_](../uplink-messages/configuration/#special-parameters)	|		|		|
|	ble_cli_active                   	|	245	|	(0xF5)	|
|	profile                          	|	246	|	(0xF6)	|
|	consumption                      	|	247	|	(0xF7)	|
|	ble_bond_info                    	|	248	|	(0xF8)	|
|	mode                             	|	249	|	(0xF9)	|
|	acc_x_axis  (**Read only**)                      	|	250	|	(0xFA)	|
|	acc_y_axis   (**Read only**)                     	|	251	|	(0xFB)	|
|	acc_z_axis   (**Read only**)                     	|	252	|	(0xFC)	|
|	ble_version    (**Read only**)                   	|	253	|	(0xFD)	|
|	firmware_version   (**Read only**)               	|	254	|	(0xFE)	|
| appeui_low<sup>(3)</sup> (**Write only**)                       | NA  | NA |
| appeui_high<sup>(3)</sup> (**Write only**)                       | NA  | NA |

:::tip Notes
(1)  the parameters in bold are new or modified in this firmware version
(2)  The Application should avoid sending invalid parameter values. The firmware accommodates an invalid value as follows:
    - Value above the maximum is set to the maximum
    - Value below the minimum is set to the minimum
    - If the downlink contains out of range Parameter ID, then the downlink is silently discarded.  
(3) The **appeui_low** and **appeui_high** are used to change the JoinEUI/AppEUI of the tracker to allow it to join with third party join server. These parameters can only be changed by passing the config file during the [firmware update](/D-Reference/FirmwareUpdateOverview_R/). These parameters cannot be set with LoRa downlink. For more information on changing the JoinEUI/AppEUI, see [here](/D-Reference/UseCaseCustomizeJoinEUI/).
:::

**Example**: If the application sends a downlink to change the *lora_period* to 120 seconds, the tracker will set the value of *lora_period* to 300 since this is the minimum acceptable (range \[300-86400\]). If configured for (the bit3 of _config_flags_ parameter is set) the tracker will send a device configuration uplink with the corrected value. The application should check the reported value of the device configuration which it is trying to set and send another downlink if the device configuration is not reported in the uplink.

The parameters identifiers and the values are given in the following tables.

## Parameters for operational modes

| Parameter           | ID   | Unit   | Range         | Description                                                                                                                                                                                                                                                                      |
| ------------------- | ---- | ------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode                | 0xF9 | none   | 0 - 5         | Operational mode of the tracker:                                                                                                                                                                                                                                                 |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 0\. Standby                                                                                                                                                                                                                                                                      |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 1\. Motion tracking                                                                                                                                                                                                                                                              |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 2\. Permanent tracking                                                                                                                                                                                                                                                           |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 3\. Motion start/end tracking                                                                                                                                                                                                                                                    |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 4\. Activity tracking                                                                                                                                                                                                                                                            |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 5\. Off mode                                                                                                                                                                                                                                                                     |
| default_profile     | 0x65 | none   | 0 - 3         | Profile applicable to configure several parameters at once, used when application starts, after a reset or when the tracker is turned on                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 0\. None                                                                                                                                                                                                                                                                         |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 1\. Sleep                                                                                                                                                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 2\. Economic                                                                                                                                                                                                                                                                     |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 3\. Intensive                                                                                                                                                                                                                                                                    |
| profile | 0xF6 | none   | 0 - 3         | Set the dynamic profile of the tracker                                                                                                                                                                                                                                           |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 0\. None                                                                                                                                                                                                                                                                         |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 1\. Sleep                                                                                                                                                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 2\. Economic                                                                                                                                                                                                                                                                     |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 3\. Intensive                                                                                                                                                                                                                                                                    |
| ul_period           | 0x00 | second | 15(1) - 86400 | Periodicity of position or activity messages in motion, start/end, activity or permanent operating mode                                                                                                                                                                               |
| lora_period         | 0x01 | second | 300 - 86400   | Periodicity of LoRa heartbeat messages                                                                                                                                                                                                                                                |
| geoloc_sensor       | 0x05 | none   | 0 - 12        | Geolocation sensor profile used in main operating mode and SOS:                                                                                                                                                                                                                  |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 0\. WIFI only                                                                                                                                                                                                                                                                    |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 1\. GPS only                                                                                                                                                                                                                                                                     |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 2\. LPGPS (AGPS/GPS)                                                                                                                                                                                                                                                             |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 3\. Reserved (do not use)                                                                                                                                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 4\. Reserved (do not use)                                                                                                                                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 5\. Reserved (do not use)                                                                                                                                                                                                                                                        |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 6\. WIFI-GPS only (WIFI then GPS if WIFI fails in one geolocation cycle)                                                                                                                                                                                                         |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 7\. WIFI-LPGPS only (WIFI then LPGPS if WIFI fails in one geolocation cycle)                                                                                                                                                                                                      |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 8 Reserved (do not use)                                                                                                                                                                                                                                                          |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 9\. WIFI-LPGPS first, then WIFI-GPS until timeout, then back to WIFI-LPGPS                                                                                                                                                                                                       |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 10\. BLE scan only                                                                                                                                                                                                                                                               |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 11\. BLE-GPS only (BLE then GPS if BLE fails in one geolocation cycle)                                                                                                                                                                                                           |
| &nbsp;                   | &nbsp;    | &nbsp;      | &nbsp;             | 12\. BLE-LPGPS only (BLE then LPGPS if BLE fails in one geolocation cycle)                                                                                                                                                                                                       |
| motion_nb_pos   | 0x08 | none   | 0 - 20        | Number of positions to report during motion start/end events. <br/> **Note: This parameter has been updated in MCU/Application FW2.3. In motion tracking mode: additional positions are done when the device goes to static (after the expiration of **motion_duration** parameter). If set to 0, no positions are sent in motion start/end mode. Please refer to [AN-018_Motion_and_shock_detection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#application-notes) for more details.**  |
| motion_duration     | 0x17 | second | 20 - 3600     | Period of time required to detect the end of a motion |
| sos_period      | 0x75 | second | 15 - 300      | SOS uplink period in seconds                                                                                                                                                                                                                                                     |

:::tip Note  
(1) If a small _ul_period_ value is set the following issues can be encountered:

- Uplink timing not respected (due to the LoRaWAN duty cycle)
- If the geolocation mode being used is GPS or LPGPS, It can be difficult for the device to acquire the position.
:::

**Example**:

To modify the heartbeat period (_lora_period_) to 1 hour, the command 0x0B020100000E10 should be sent. Description:

- (0x0B): set the parameter
- (0x02): with an ack token of 2
- (0x01): heartbeat message period
- (0x 00 00 0E 10): to a value of 3600s = 1 hour


## Parameters for side operation modes

These parameters are used for the following side operating modes:

- Periodic position
- Position on demand
- Alert mode
- Periodic activity report

The parameters for other side operations are described in dedicated sections.

| Parameter                | ID   | Unit   | Range           | Description                                                                                                            |
| ------------------------ | ---- | ------ | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| periodic_pos_period      | 0x03 | second | 0, 900 - 604800 | Period of the periodic position report. When set to 0, the reporting is disabled.                                      |
| geoloc_method            | 0x06 | none   | 0 - 7           | Geolocation policy used for the side operating modes:                                                                  |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 0\. WIFI                                                                                                               |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 1\. GPS                                                                                                                |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 2\. LPGPS (AGPS/GPS)                                                                                                   |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 3\. WIFI-GPS only (WIFI then GPS if WIFI fails in one geolocation cycle)                                               |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 4\. WIFI-LPGPS only (WIFI then LPGPS if WIFI fails in one geolocation cycle)                                           |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 5\. BLE scan only                                                                                                      |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 6\. BLE-GPS only (BLE then GPS if BLE fails in one geolocation cycle)                                                  |
| &nbsp;                        | &nbsp;    | &nbsp;      | &nbsp;               | 7\. BLE-LPGPS only (BLE then LPGPS if BLE fails in one geolocation cycle)                                              |
| periodic_activity_period | 0x16 | second | 0, 1800 - 86400 | Period of the periodic activity report. The value must be a multiple of 6(1). When set to 0, the reporting is disabled |

:::tip Note  
(1) If a wrong value is set, it is automatically updated with an upper value that is a multiple of 6.  
:::

**Example**:

To modify the periodic position period to 12 hours, the command 0x0B01030000A8C0 should be sent. Description:

- (0x0B): set the parameter
- (0x01): with an ack token of 1
- (0x03): periodic position message period
- (0x 00 00 A8 C0): to a value of 43200s = 12 hours

## Parameters for collections

| Parameter                       | ID   | Unit | Range           | Description                                                               |
| ------------------------------- | ---- | ---- | --------------- | ------------------------------------------------------------------------- |
| collection_scan_type            | 0x21 | none | 0 - 2           | Collection scan type used:                                                |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 0\. No collection scan                                                    |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 1\. BLE collection scan                                                   |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 2\. WIFI collection scan                                                  |
| collection_nb_entry             | 0x22 | none | 1 - 20          | Maximum number of elements to report in collection payloads after a scan. |
| collection_ble_filter_type      | 0x23 | none | 0 - 6           | Beacon type to scan and report when Collection Scan Type is BLE:          |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 0\. No filter                                                             |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 1\. Eddystone UID only                                                    |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 2\. Eddystone URL only                                                    |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 3\. All Eddystone                                                         |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 4\. iBeacon UID only                                                      |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 5\. altBeacon only                                                        |
| &nbsp;                               | &nbsp;    | &nbsp;    | &nbsp;               | 6\. Reserved, internal use only                                           |
| collection_ble_filter_main_1    | 0x24 | none | 0x0 –0xFFFFFFFF | First part of the main BLE filter.                                        |
| collection_ble_filter_main_2    | 0x25 | none | 0x0 –0xFFFFFFFF | Second part of the main BLE filter.                                       |
| collection_ble_filter_sec_value | 0x26 | none | 0x0 –0xFFFFFFFF | BLE secondary value                                                       |
| collection_ble_filter_sec_mask  | 0x27 | none | 0x0 –0xFFFFFFFF | BLE secondary mask                                                        |

:::tip Note  
Refer to the application note [AN-003_Scan Collection](/documentation-library/abeeway-trackers-documentation.md#application-notes) or [Scan Collection training](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#abeeway-firmware-trainings) for more details about these parameters.  
:::


## Parameters for GPS and low power GPS geolocation modes

| Parameter              | ID   | Unit    | Range        | Description                                                                                                                                                                                                                                                                     |
| ---------------------- | ---- | ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gnss_constellation     | 0x2A | none    | 0 - 6        | Configure the GNSS constellations used by the GPS chip to compute a position(1):                                                                                                                                                                                                |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 0\. GPS only                                                                                                                                                                                                                                                                    |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 1\. GLONASS only                                                                                                                                                                                                                                                                |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 2\. GPS and GLONASS                                                                                                                                                                                                                                                             |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 3\. GPS and Galileo                                                                                                                                                                                                                                                             |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 4\. GPS, GLONASS and Galileo                                                                                                                                                                                                                                                    |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 5\. Beidou only                                                                                                                                                                                                                                                                 |
| &nbsp;                      | &nbsp;    | &nbsp;       | &nbsp;            | 6\. GPS and Beidou                                                                                                                                                                                                                                                              |
| collection_nb_entry    | 0x22 | none    | 1 - 20       | Maximum number of elements to report in collection payloads after a scan.                                                                                                                                                                                                       |
| gps_timeout            | 0x09 | second  | 30 - 300     | Timeout used for GPS geolocation mode before sending a message. (GPS position or timeout).                           |
| gps_ehpe               | 0x0B | meter   | 0 - 100      | Acceptable GPS horizontal error for GPS geolocation. Applicable if the tracker is static.                                                                                                                                                                                       |
| gps_ehpe_motion        | 0x79 | meter   | 0 - 100      | Acceptable GPS horizontal error for GPS geolocation. Applicable if the tracker is in motion.                                                                                                                                                                                    |
| gps_convergence        | 0x0C | second  | 0 - 300      | Time to let to the GPS module to refine the calculated GPS position. Applicable if the tracker is static.                                                                                                                                                                          |
| gps_convergence_motion | 0x7A | second  | 0 - 300      | Time to let to the GPS module to refine the calculated GPS position. Applicable if the tracker is in motion.                                                                                                                                                                       |
| gps_standby_timeout    | 0x11 | second  | 0, 1 - 2147483647 | Duration of the GPS standby mode before going OFF. When set to 0, no standby timeout is applied .|
| gps_t0_timeout         | 0x67 | seconds | 0, 1 - 300   | Time in seconds to abort the GPS or LPGPS geolocation when not enough satellites are in view. The condition is at least one satellite with a C/N greater than 15 at the end of the configured period. When 0, the timeout doesn’t apply. Applicable if the tracker is static    |
| gps_t0_timeout_motion  | 0x7B | seconds | 0, 1 - 300   | Time in seconds to abort the GPS or LPGPS geolocation when not enough satellites are in view. The condition is at least one satellite with a C/N greater than 15 at the end of the configured period. When 0, the timeout doesn’t apply. Applicable if the tracker is in motion |
| gps_fix_timeout        | 0x68 | seconds | 0, 1 - 300   | **GPS**: Abort the current GPS geolocation if there is no GPS fix at the end of this duration.<br/> **LPGPS**: get back to LPGPS geolocation if there is no GPS fix at the end of this duration.<br/> When set to 0, the timeout doesn’t apply                                                   |
| agps_timeout           | 0x0A | second  | 15 - 250     | Timeout used for LPGPS geolocation mode before sending the geolocation message (GPS/LP-GPS position or timeout)|

:::tip Note  
- (1) If a value is set out of the range, configuration 4 is used .
- Refer to the application note [AN-016_GPS_LPGPS](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details about these parameters.  
:::

**Example**:

To modify the _gps_convergence_ time to 5 minutes, the command 0x0B040C0000012C should be sent. Description:

- (0x0B): set the parameter
- (0x04): with an ack token of 4
- (0x0C): _gps_convergence_ time
- (0x 00 00 01 2C): to a value of 300s = 5 minutes

## LoRa parameters

|Parameter|ID|Unit|Range|Description|
|-------------|------|----------|------------|-------------|
|transmit_strat<sup>(1)(2)</sup>|0x0E|none|0 - 5|Transmit strategy in motion: |
|              |          |            |             | 0. Single fixed. Single TX. Using the data rate configured in default_datarate parameter             |
|              |          |            |             | 1. Single random: Single TX. Using a random data rate within [DR0-DR5].    |
|              |          |            |             | 2. Dual random: First TX using a random data rate within [DR4-DR5], next TX using a random data rate within [DR0-DR3]. |
|              |          |            |             | 3. Dual fixed: First TX using a random data rate within [DR4-DR5]. Next TX Using the data rate configured in default_datarate parameter. **(NOT recommended)** |
|              |          |            |             | 4. Reserved, internal use only. |
|              |          |            |             | 5. Activate the strategy defined with the *transmit_strat_custom* parameter|
|transmit_strat_custom<sup>(3)(2)</sup>|0x1E|none|0 –0xFFFFFF|bit 0: ADR activation in static (0: enabled)  |
|              |          |            |             |bit 1: Transmission type:<br/>0: single transmission<br/>1: double transmission|
|              |          |            |             |bit 2-4: First transmission, data rate distribution:<br/>0: Random <br/>1: Bell Curve<br/>2: Ring|
|              |          |            |             |bit 5-7: Second transmission, data rate distribution:<br/>0: Random<br/>1: Bell Curve<br/>2: Ring|
|              |          |            |             |bit 8-15: Bitmap representing each data rate to select for the first transmission (from DR0 to DR7)<sup>(4)</sup> bit 8 is DR0, then Bit 9, DR1 and so on.|
|              |          |            |             |bit 16-23: Bitmap representing each data rate to select for the second transmission (from DR0 to DR7)<sup>(4)</sup>. bit 16 is DR0, then Bit 17, DR1 and so on.|
|default_datarate|0x78|none|-1, 0 - 7|-1: use the provisioned data rate.<sup>(6)</sup> <br/>0-7: set the corresponding data rate.<br/> If the configured data rate is not supported by the Lora MAC. The min data rate supported is used instead|
|confirmed_ul_bitmap(5)|0x12|none|0 –0xFFFF|Bitmap enabling the LoRaWAN confirmation of specific type of uplink message|
|confirmed_ul_retry(5)|0x13|none|0 – 8|The number of retries for each confirmed uplink when the confirmation is not received|
|network_timeout_check|0x1F|seconds|0, 86400 – 5184000|Time without received downlink, before asking a link check request. 0: No timeout check is done|
|network_timeout_reset|0x20|seconds|0, 21600 – 2592000|Time after network_timeout_check without received downlink before the tracker resets. 0: feature deactivated|

:::tip Notes
<sup>(1)</sup> Refer to the section [LoRaWAN™ uplink transmission](../uplink-messages/lorawan-ul-transmission/) for more details.

<sup>(2)</sup> For trackers configured in US region:

- DR5 is not used, and it is replaced by DR4.

- If the selected data rate (DR) is not valid due to the payload length, the payload is sent using DR+1

<sup>(3)</sup> Refer to the application note [AN-002_LoRa_Transmission_strategy](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details.

<sup>(4)</sup> If no data rate is selected, the default will be the minimum available for the current band.

<sup>(5)</sup> Refer to the section [Confirmed uplink](../uplink-messages/lorawan-ul-transmission/readme.md#confirmed-uplink) for more details

<sup>(6)</sup> Value provisioned in the device during the manufacturing process  
:::

**Examples**:

To modify the transmit strategy to 2, the command 0x0B050E00000002 should be sent. Description:

- (0x0B): set the parameter
- (0x05): with an ack token of 5
- (0x0E): transmit_strat_ parameter
- (0x 00 00 00 01): to a value of 1 (single random)

To use custom strategy, with the following settings:

- double transmission enabled
- ADR enabled in static
- DR1 and DR2 used for the first transmission with random distribution
- DR3 and DR4 used for the second transmission with random distribution  
  the commands 0x0B050E00000005 (enable custom strategy) and  
  0x0B061E00180602 (to set the custom strategy) should be sent. (see the table below to see the bitmap)

_transmit_strat_custom_ parameter:

![](images/image16.png)

The value in the table above is 0001 1000 0000 0110 0000 0010 =0x180602


## BLE scan and communication parameters

### BLE position scan parameters

| Parameter                     | ID   | Unit   | Range           | Description                                                                                                                                                        |
| ----------------------------- | ---- | ------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ble_beacon_cnt                | 0x0F | none   | 1 - 4           | This parameter provides the maximum number of BLE beacons to provide in payload (1)                                                                                |
| ble_beacon_timeout            | 0x10 | second | 1 - 21          | BLE scan duration                                                                                                                                                  |
| ble_rssi_filter(7)               | 0x1A | dBm    | \-100 - -40     | RSSI value to filter BLE beacons with BLE geolocation modes (only applicable for BLE-GPS &amp; BLE-LPGPS). (Please refer to the section [Two’s complement Encoding](../downlink-messages/two-complement-encoding/) for information for the encoding). |
| position_ble_filter_type      | 0x23 | none   | 0 - 6           | Beacon type to scan and report when position Scan Type is BLE:                                                                                                     |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 0\. No filter                                                                                                                                                      |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 1\. Eddystone UID only                                                                                                                                             |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 2\. Eddystone URL only                                                                                                                                             |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 3\. All Eddystone                                                                                                                                                  |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 4\. iBeacon UID only                                                                                                                                               |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 5\. AltBeacon only                                                                                                                                                 |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 6\. Reserved, internal use only                                                                                                                                    |
| position_ble_filter_main_1    | 0x4E | none   | 0x0 –0xFFFFFFFF | First part of the main BLE filter.                                                                                                                                 |
| position_ble_filter_main_2    | 0x4F | none   | 0x0 –0xFFFFFFFF | Second part of the main BLE filter.                                                                                                                                |
| position_ble_filter_sec_value | 0x50 | none   | 0x0 –0xFFFFFFFF | BLE secondary value                                                                                                                                                |
| position_ble_filter_sec_mask  | 0x51 | none   | 0x0 –0xFFFFFFFF | BLE secondary mask                                                                                                                                                 |
| position_ble_report_type      | 0x52 | none   | 0 - 3           | Configure the BLE data to report in payloads.(2)                                                                                                                   |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 0\. MAC address                                                                                                                                                    |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 1\. Short ID                                                                                                                                                       |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 2\. Long ID                                                                                                                                                        |
| &nbsp;                             | &nbsp;    | &nbsp;      | &nbsp;               | 3\. Short beacon ID including the Major and Minor field (iBeacon only) (4)                                                                                         |

### BLE communication parameters

| Parameter            | ID   | Unit    | Range         | Description                                        |
| -------------------- | ---- | ------- | ------------- | -------------------------------------------------- |
| ble_cnx_adv_duration | 0x6F | seconds | 30 – 18000(5) | Time in seconds for BLE advertisement duration(3). |
| ble_bond_info      | 0xF8 | second  | 0,1             | 0: Delete BLE bond <br/> 1: Indicates that the BLE bond is present on the tracker.<br/> **Only value 0 can be set for this parameter**.                                    |
| ble_cli_active(6)      | 0xF5 | None    | 0,1           | 0: Disable the CLI traces over BLE interface with tracker connected to [Abeeway tracking app](/C-Procedure-Topics/GetStartedMobileApp_T/). <br/> 1: Enables the CLI traces over BLE interface with tracker connected to [Abeeway tracking app](/C-Procedure-Topics/GetStartedMobileApp_T/). |

:::tip Notes

(1) This parameter has no effect with long ID BLE payloads: only one beacon is sent.

(2) Depends on the value of _position_ble_filter_type_ parameter. Refer to the dedicated application note [AN-006_Position_BLE_filtering](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details.

(3) Refer to the section [BLE communication interface](../ble-communication-interface/) for more details.

(4) In the case where the parameter _position_ble_filter_type_ is not iBeacon and the _position_ble_report_type_ is set to the new value 3), the tracker will behave as if the _position_report_type_ = 1 (short beacon ID).

(5) The max value is 18000 seconds with BLE firmware version 3.3.1 or above, 600 seconds for BLE firmware version 3.3.0.  

(6) The CLI traces will be sent over BLE interface instead over USB interface when _ble_cli_enable_ parameter is set to true.

(7) The *ble_rssi_filter* signal level applies only to the BLE-LPGPS and BLE-GPS [geolocation modes](../geolocation-strategy-modes/main-side-operations/), as the BLE RSSI threshold is used to switch to LPGPS/GPS. The beacon scan algorithm ensures that regardless of the number of beacons around, only the strongest ones will be reported.
   - The number of reported beacons is defined by *ble_beacon_cnt* when using BLE geolocation feature (see [AN-006_Position_BLE_filtering](/documentation-library/abeeway-trackers-documentation.md#application-notes), [BLE Position Filtering](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#abeeway-firmware-trainings) )
   - The number of reported beacons is defined by *collection_nb_entry* when using Scan collection feature (see [AN-003_ScanCollection](/documentation-library/abeeway-trackers-documentation.md#application-notes), [Scan Collection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#abeeway-firmware-trainings) )
:::

**Example**:

To modify the _ble_beacon_cnt_ parameter to three BLE beacons max reported, the command 0x0B060F00000003 should be sent.

Description:

- (0x0B): set the parameter
- (0x06): with an ack token of 6
- (0x0F): _ble_beacon_cnt_ parameter
- (0x 00 00 00 03): to a value of 03 (max numbers of BLE beacon reported in payload)

## Miscellaneous parameters

| Parameter            | ID   | Unit | Range             | Description                                                                                                         |
| -------------------- | ---- | ---- | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| config_flags         | 0x0D | none | 0 –0x1FFFFF       | Configuration flags:                                                                                                |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit0: Set to enable the Frame pending mechanism                                                                                       |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit1: Set to activate very long button press to switch to off mode                                                         |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit2: Deprecated, to not used                                                                                       |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit3: Set to send the configuration uplink message in response to a configuration modification downlink.                     |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit4: WIFI payload with Cypher (0) or without Cypher(1)                                                             |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit5: Activate BLE connectivity interface at the start time(2)                                                      |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit6: First WIFI scan when geolocation starts. If disabled (0), WIFI position is replaced by a geoloc start message |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit7: LED blinks when a GPS fix is received. Set to enable the feature, reset to disable                            |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit8: Set to enable the sending of a motion start message                                                           |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit9: Set to enable the sending of a motion end message                                                             |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit10: Set to enable a new OTA join when leaving the mode OFF(3)                                                    |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit11: Asymmetric BLE pairing: 0 accepted, 1 rejected(4)(5)                                                         |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit12: Set to enable Long WIFI payload with up to 12 BSSID(6)                                                       |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit13: Set to enable Collection Long Report                                                                         |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit14: Set to enable the autostart of the tracker when leaving shipping state(7)                                    |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit15: Set to forbid the mode OFF(8)                                                                                |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit16: Set to enable a melody during SOS                                                                            |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit17: Set to enable the automatic data rate selection in case of too long payloads(9)(10)                          |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit18: Set to enable extended position payload, (type=0x0E), reset to use classic payload (type=0x03)           |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit19: Reserved, do not used                                                                                        |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit 20: Enable the CLI over BLE                                                                                     |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | bit 21: BLE passkey authentication enable. When this bit is enabled, the tracker will ask for 6 digit PIN to be entered into the phone initiating the first pairing request. The 6 digit PIN needs to be requested from the backend. This feature is specific to the [Abeeway Mobile app](/C-Procedure-Topics/GetStartedMobileApp_T/).|
| battery_capacity(11) | 0x28 | mAh  | \-1, 0, 1 - 65535 | Battery setting:                                                                                                    |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | \-1: Use provisioned value.                                                                                        |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | 0: Rechargeable battery.                                                                                            |
| &nbsp;                    | &nbsp;    | &nbsp;    | &nbsp;                 | 1-65535: Capacity of the primary battery                                                                            |

:::tip Notes

(1) Before V1.7 MCU application firmware version, WIFI position payloads were all encrypted, this parameter is for backward compatibility only and only non-cyphered payload should be use in new application.

(2) If the bit is set, the Bluetooth advertising is activated when the tracker is turned on (Micro Tracker/Smart Badge), or in case of Compact Tracker when the special [Reed switch](../functioning/user-interfaces/#reed-switch-interface) sequence is detected.

(3) Force a new join to the LoRaWAN™ network when the tracker is turned on after it was in OFF mode due to a downlink or a user action.

(4) It is only useful when the tracker is used BLE bonded with a mobile or a tablet.

(5) When this bit is modified, the buzzer plays a melody according to the BLE bonding state:  
\- Tracker bonded: BLE bond success melody.  
\- Tracker not bonded: BLE bond on going melody.

(6) Refer to the application note [AN-002_LoRa_Transmission_strategy](/documentation-library/abeeway-trackers-documentation.md#application-notes) to know how to set DR working with long payloads.

(7) This bit is automatically set for compact and industrial tracker and can't be disabled.

(8) The tracker switches to standby mode if the user sends downlink to change to OFF mode, or if a very long button press is done.

(9) If the bit 17 is set to 1, and *transmit_strat* =1,2,4 or 5 then the tracker adapts the LoRaWAN™ data rate for long payloads (so it is possible that the transmit strategy is not respected).

(10) If bit 17 is set to 0, then the tracker does not adapt the LoRaWAN data rate for long payloads. In this case if the selected data rate does not support the payload size, then it is discarded.

(11) This parameter should not be modified to have the right battery percentage in the uplinks. Provisioned value is always used.
:::

| Parameter                 | ID   | Unit   | Range            | Description                                                                                       |
| ------------------------- | ---- | ------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| reed_switch_configuration | 0x29 | none   | 0 – 3            | Reed switch action:                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 0\. Disable the reed switch.                                                                      |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 1\. A special sequence causes a device reset(12)                                                  |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 2\. Behave as the button.                                                                         |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 3\. Start BLE advertising using the special sequence(12)                                          |
| button_mapping        | 0x77 | none   | 0 – 0x00086666   | Configure the button action                                                                       |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | Bit0-3: Button **long press** action                                                              |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | Bit4-7: Button **short press** action                                                             |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | Bit8-11: **2 short button presses** action                                                        |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | Bit12-15: **3 or more short button presses** action                                               |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | Bit16-19: Button **long press** duration in seconds, range is \[1:8\](13)                         |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | **Possible actions are listed below, coded on 4 bits:**                                           |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 0\. No action                                                                                     |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 1\. Battery level is shown with the LEDs.                                                         |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 2\. Start/Stop SOS.                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 3\. Alert.                                                                                        |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 4\. No action.                                                             |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 5\. Angle detection manual trigger.                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;      | &nbsp;                | 6\. Special sequence activation.                                                                  |
| buzzer_volume             | 0x53 | %      | 0 – 100          | Configure of the buzzer volume                                                                    |
| password                  | 0x66 | none   | 100 – 999999     | password used to access CLI interface with tracker connected to USB port   |
| consumption(14)         | 0xF7 | mAh    | 0, 1 –0xFFFFFFFF | 0: the current consumption of the tracker is reset. A non-zero value can be used to set the current consumption of the tracker.  |
| pw_stat_period            | 0x02 | second | 0, 300 - 604800  | No more used                                                                                      |
| ble_version           | 0xFD| NA | NA  | BLE Firmware version. **It is read only parameter**. |
| firmware_version            | 0xFE | NA | NA  | MCU Firmware version. **It is read only parameter**. |

:::tip Notes
  
(12) Special sequence is described in [Reed switch interface](../functioning/user-interfaces/#reed-switch-interface) section.

(13) If set to 0, the long press duration is 1 second, if set to a value above 8, the long press duration is 8 seconds.

(14) _consumption_ parameter should be set to 0 when replacing batteries for primary trackers (Compact Tracker/Industrial Tracker).
:::

**Example 1**:

To modify the _config_flags_ parameter to 0x1F, the command 0x0B030D0000001F should be sent. Description:

- (0x0B): set the parameter
- (0x03): with an ack token of 3
- (0x0D): _config_flags_ parameter
- (0x 00 00 00 1F): to a value of 0x1F:

| Bit 11 | Bit 10 | Bit 9 | Bit 8 | Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |
| ------ | ------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 0      | 0      | 0     | 0     | 0     | 0     | 0     | 1     | 1     | 1     | 1     | 1     |

**Example 2**:

To set the _button mapping_ parameter with the following setting

- Button press action: No action
- Button click: Battery level is shown with the LEDs
- Double click: Start Alert
- Triple click: No action
- Button long press duration: 3 seconds

0x0B027700034310 should be sent. 

Description:

- (0x0B): set the parameter
- (0x02): with an ack token of 2
- (0x77): _button mapping_ parameter
- (0x 00 03 43 10): to a value of 0x34310:

![](images/image17.png)

## Accelerometer parameters

The _motion_sensitivity_ parameter is used to set the minimum acceleration to be measured to validate a motion of the tracker. The _shock_detection_ parameter is used to set the shock level to trigger a shock detection message.
:::tip Warning
The functioning of these 2 parameters and accelerometer driver has been significantly modified in the applicative FW 2.4 and is not backward compatible with the earlier MCU Firmware versions. Please refer to application note, [AN-018_Motion_and_shock_detection](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details.
:::

| Parameter              | ID   | Unit | Range      | Description |
| ---------------------- | ---- | ---- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| motion_sensitivity | 0x14 | none | 1 – 0x000FFFFF    | Accelerometer configuration. **Functioning has been modified in MCU/Application FW 2.4**. Bit fields &nbsp;composed by 3 octets(1)(2):                                                                                                                 |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | **Octet 0 (LSB). Configure the sensitivity**                                                                                                                                                                                                                                                                            |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 1-30: The threshold is coded as follow: motion_sensitivity \* 0.063g                                                                                                                                                                                                                                                    |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 31-99: Same mode than above with the value 30. The threshold is capped to 30 \* 0.063 = 1,89g                                                                                                                                                                                                                           |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 100: Default mode (was 0 in firmware version 2.2-x and below).                                                                                                                                                                                                                                                          |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 101-200: Default mode (sensitivity ranging from 1% to 100% as in firmware version 2.2-x and below).                                                                                                                                                                                                                     |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | **Octet 1. Configure the Output Data Rate (ODR)**                                                                                                                                                                                                                                                                       |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 0 : 12.5Hz                                                                                                                                                                                                                                                                                                              |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 1 : 25Hz                                                                                                                                                                                                                                                                                                                |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 2 : 50Hz                                                                                                                                                                                                                                                                                                                |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 3 : 100Hz                                                                                                                                                                                                                                                                                                               |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 4 : 200Hz                                                                                                                                                                                                                                                                                                               |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | **Octet 2. Full scale &nbsp;selection**                                                                                                                                                                                                                                                                                      |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 0: 2G                                                                                                                                                                                                                                                                                                                   |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 1: 4G                                                                                                                                                                                                                                                                                                                   |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 2: 8G                                                                                                                                                                                                                                                                                                                   |
| &nbsp;                      | &nbsp;    | &nbsp;    | &nbsp;          | 3: 16G                                                                                                                                                                                                                                                                                                                  |
| shock_detection    | 0x15 | none | 0, see note (3) | This parameter provides the configuration of the sensitivity of the shock detection. A value of 0 disables shock detection. _shock_detection_ value = (shock intensity (in g) - 1)/0.063.<br/> **Note: When enabled _shock_detection_ sensitivity should be strictly less than *motion_sensitivity* parameter**. |
| motion_debounce    | 0x76 | none | 0 – 255      | **For MCU Firmware 2.3.x:**<br/>Minimum duration of a movement to be detected if _motion_sensitivity_ parameter is set between 1 and 30. 0 triggers motion detection as soon as a single accelerometer sample is above the value set in _motion_sensitivity_. The duration of the motion debounce period is given by the formula: _motion_debounce_ \* 20 milli seconds<br/>**For MCU Firmware 2.4.x and above:**<br/>Please refer to [AN-018_Motion_and_shock_detection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#application-notes) for more details. |
| motion_nb_pos   | 0x08 | none   | 0 - 20        | Number of positions to report during motion start/end events. <br/> **Note: This parameter has been updated in MCU/Application FW2.3. In motion tracking mode: additional positions are done when the device goes to static (after the expiration of motion_duration). If set to 0, no positions are sent in motion start/end mode. Please refer to [AN-018_Motion_and_shock_detection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#application-notes) for more details.**  |
| motion_duration     | 0x17 | second | 20 - 3600     | Period of time required to detect the end of a motion |
| acc_x_axis     | 0xFA | mG | -2<sup>16</sup> – 2<sup>16</sup>-1    | Value measured on X axis of the accelerometer. **It is read only parameter**. |
| acc_y_axis     | 0xFB | mG | -2<sup>16</sup> – 2<sup>16</sup>-1      | Value measured on Y axis of the accelerometer. **It is read only parameter**.|
| acc_z_axis     | 0xFC | mG | -2<sup>16</sup> – 2<sup>16</sup>-1     | Value measured on Z axis of the accelerometer. **It is read only parameter**. |

:::tip Notes  
(1) The driver of the old accelerometer chip (MMA8256FC) ignores the values of the octets 1 and 2. Only the octet 0 is relevant and the sensitivity is configured as described.  <br/>

(2) The accelerometer chip details can be easily found by connecting the tracker with USB cable on [CLI terminal](/D-Reference/UsingCLI_R/) and entering **system accelero show**.

(3) The range of *shock_detection* parameter depends on the accelerometer inside the tracker. The range is [0,111] for trackers using MMA8256FC and its [0,255] for trackers using LIS2DW. Please refer to the [AN-018_Motion_and_shock_detection](/documentation-library/abeeway-trackers-documentation.md#application-notes) to find out the accelerometer inside your tracker.
:::

## Temperature monitoring parameters

These parameters are used to configure temperature monitoring

| Parameter          | ID   | Unit | Range          | Description                                                                    |
| ------------------ | ---- | ---- | -------------- | ------------------------------------------------------------------------------ |
| temperature_high   | 0x1B | °C   | \-44 – 85, 255 | Configure the high threshold temperature <br/> 255 = disabled                        |
| temperature_low    | 0x1C | °C   | \-44 – 85, 255 | Configure the low threshold temperature <br/> 255 = disabled                         |
| temperature_action | 0x1D | none | 0 – 3          | Configure the action to be done when entering a critical state:                |
| &nbsp;                  | &nbsp;    | &nbsp;    | &nbsp;              | 0\. No action                                                                  |
| &nbsp;                  | &nbsp;    | &nbsp;    | &nbsp;              | 1\. Geolocation disabled if _temperature_high_ is reached                      |
| &nbsp;                  | &nbsp;    | &nbsp;    | &nbsp;              | 2\. Geolocation disabled if _temperature_low_ is reached                       |
| &nbsp;                  | &nbsp;    | &nbsp;    | &nbsp;              | 3\. Geolocation disabled if _temperature_low_ or _temperature_high_ is reached |

:::tip Notes

1.  Starting FW 2.4, _temperature_high_ or _temperature_low_ are saved in the flash area of the tracker so their values are preserved across resets or change of battery (Compact Tracker/Industrial Tracker).
2. For FW 2.3 and below, the parameters _temperature_high_ or _temperature_low_ are in RAM and are lost when the tracker undergoes a reset or when the battery is replaced/removed (Compact Tracker/Industrial Tracker).
3. Critical state is entered if an over or under temperature is detected.  
:::

## Angle feature parameters

These parameters are used to configure the angle detection feature.

| Parameter                    | ID   | Unit    | Range                 | Description                                                                                                                                                                                                        |
| ---------------------------- | ---- | ------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| angle_detect_mode            | 0x54 | none    | 0 – 3                 | Angle Detection method.                                                                                                                                                                                            |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 0\. Disabled                                                                                                                                                                                                       |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 1\. Critical angle detection only                                                                                                                                                                                  |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 2\. Critical angle detection + Angle deviation detection                                                                                                                                                           |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 3\. Critical angle detection triggered on shock detection                                                                                                                                                          |
| angle_ref_acq                | 0x55 | none    | 0 – 3                 | Reference acquisition mode for Angle detection feature.                                                                                                                                                            |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 0\. Manual(2)                                                                                                                                                                                                      |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 1\. Configured                                                                                                                                                                                                     |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 2\. Automatic                                                                                                                                                                                                      |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | 3\. Assisted                                                                                                                                                                                                       |
| angle_ref_acc_x              | 0x56 | mG      | \-1000 – 1000, 0xFFFF | X axis for reference orientation vector. 0xFFFF means this axis is ignored.                                                                                                                                        |
| angle_ref_acc_y              | 0x57 | mG      | \-1000 – 1000, 0xFFFF | Y axis for reference orientation vector. 0xFFFF means this axis is ignored.                                                                                                                                        |
| angle_ref_acc_z              | 0x58 | mG      | \-1000 – 1000, 0xFFFF | Z axis for reference orientation vector. 0xFFFF means this axis is ignored.                                                                                                                                        |
| angle_critical               | 0x59 | degrees | 5 -175                | Critical angle                                                                                                                                                                                                     |
| angle_critical_hyst          | 0x5A | degrees | 0 – 180               | Critical angle hysteresis.                                                                                                                                                                                         |
| angle_report_mode            | 0x5B | none    | 0 – 0x1F              | Angle Detection events to report in LoRaWAN messages:                                                                                                                                                              |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | Bit 0: normal → critical.                                                                                                                                                                                          |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | Bit 1: critical → normal.                                                                                                                                                                                          |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | Bit 2: learning → normal.                                                                                                                                                                                          |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | Bit 3: normal → learning.                                                                                                                                                                                          |
| &nbsp;                            | &nbsp;    | &nbsp;       | &nbsp;                     | Bit 4: critical → learning.                                                                                                                                                                                        |
| angle_report_period          | 0x5C | seconds | 0, 60 – 36000         | Reporting period between repeated event messages. 0 means reports and repetitions will be transmitted after positions.                                                                                             |
| angle_report_repeat          | 0x5D | none    | 0 – 7                 | number of event message repetitions. 0 indicates only one event message is sent (no repetition).                                                                                                                   |
| angle_rising_time            | 0x5E | seconds | 0 – 3600              | Rising time phase duration, in seconds.                                                                                                                                                                            |
| angle_falling_time           | 0x5F | seconds | 0 – 3600              | Falling time phase duration, in seconds.                                                                                                                                                                           |
| angle_learning_time          | 0x60 | seconds | 0 – 3600              | Learning time phase duration, in seconds. In automatic reference acquisition this is also the period between 2 learning steps                                                                                      |
| angle_acc_accuracy           | 0x61 | mg      | 0 – 1000              | Accuracy of the measured acceleration.                                                                                                                                                                             |
| angle_deviation_delta        | 0x62 | degrees | 0 – 175               | A deviation of _angle_deviation_delta_ from the previous reported orientation triggers an event message. Applicable only with angle deviation methods(1)                                                           |
| angle_deviation_min_interval | 0x63 | seconds | 0 – 1800              | No event message is sent before the delay _angle_deviation_min_interval_ from previous angle deviation event is elapsed. Any deviation before this delay is ignored. Applicable only with angle deviation methods. |
| angle_deviation_max_interval | 0x64 | seconds | 0 – 86400             | No event message is sent after this duration from first event message is elapsed. Applicable only with angle deviation methods.                                                                                    |

:::tip Notes  
(1) Depending on the setting of _angle_report_mode_ parameter. Refer to the application note [AN-010_Angle_Detection](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details about these parameters.

(2) If selected _button mapping_ parameter should be set to have a button action with angle reference acquisition activated  
:::

## BLE geozoning parameters

| Parameter                 | ID   | Unit         | Range        | Description                                                                                                                      |
| ------------------------- | ---- | ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| geofencing_scan_period    | 0x18 | seconds      | 0, 1 – 300   | scan period (in seconds). 0 means the BLE geozoning scan is disabled                                                             |
| geofencing_collect_period | 0x19 | seconds      | 0, 15 – 3600 | Period in second at which the last beacon seen is inserted in the collection. 0 means there is no geozoning collection reported |
| geofencing_scan_duration  | 0x69 | milli second | 370 – 3000   | BLE geozoning scan duration expressed in milliseconds                                                                            |

:::tip Note  
Refer to the application note [AN-011_BLE_geozoning](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details about these parameters.  
:::

## BLE beaconing parameters

| Parameter                 | ID   | Unit        | Range          | Description                                                                                                                                              |
| ------------------------- | ---- | ----------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beaconing_type            | 0x6A | none        | 0 – 5          | Beaconing advertisement type.                                                                                                                            |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 0\. Disabled                                                                                                                                             |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 1\. Not used                                                                                                                                            |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 2\. Quuppa                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 3\. Eddystone UID                                                                                                                                        |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 4\. Ibeacon                                                                                                                                              |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 5\. Altbeacon                                                                                                                                            |
| beaconing_tx_power        | 0x6B | none        | 0 – 8          | Beaconing TX power:                                                                                                                                      |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 0\. +4 dBm                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 1\. +3 dBm                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 2\. +0 dBm                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 3\. -4 dBm                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 4\. -8 dBm                                                                                                                                               |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 5\. -12 dBm                                                                                                                                              |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 6\. -16 dBm                                                                                                                                              |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 7\. -20 dBm                                                                                                                                              |
| &nbsp;                         | &nbsp;    | &nbsp;           | &nbsp;              | 8\. -40 dBm                                                                                                                                              |
| beaconing_static_interval | 0x6C | millisecond | 0, 100 – 10000 | when the beaconing feature is active, time in milliseconds for beacon advertising period when the tracker is static. 0 disables beaconing when static    |
| beaconing_motion_interval | 0x6D | millisecond | 0, 100 – 10000 | when the beaconing feature is active, time in milliseconds for beacon advertising period when the tracker is moving. 0 disables beaconing when in motion |
| beaconing_motion_duration | 0x6E | seconds     | 4 – 255        | when the beaconing feature is active, time in seconds to be considered in motion when receiving a motion event                                           |
| beaconing_id_0            | 0x70 | none        | 0 – 0xFFFFFFFF | Beacon ID advertised in the BLE Beacon advertisement payload, part 0                                                                                     |
| beaconing_id_1            | 0x71 | none        | 0 – 0xFFFFFFFF | Beacon ID advertised in the BLE Beacon advertisement payload, part 1                                                                                     |
| beaconing_id_2            | 0x72 | none        | 0 – 0xFFFFFFFF | Beacon ID advertised in the BLE Beacon advertisement payload, part 2                                                                                     |
| beaconing_id_3            | 0x73 | none        | 0 – 0xFFFFFFFF | Beacon ID advertised in the BLE Beacon advertisement payload, part 3                                                                                     |
| beaconing_id_4            | 0x74 | none        | 0 – 0xFFFFFFFF | Beacon ID advertised in the BLE Beacon advertisement payload, part 4                                                                                     |

:::tip Note  
Refer to the application note [AN-012_Quuppa_beaconing](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details about these parameters.  
:::

## Proximity feature parameters

:::tip Warning
- **The proximity feature is removed from firmware starting MCU/Application firmware 2.4+. If you wish to use Proximity feature, please refer to [MCU/Application firmware 2.3](/AbeewayRefGuide_2.3/introduction/) or below**.
- Refer to the application note [AN-007_proximity feature](/documentation-library/abeeway-trackers-documentation.md#application-notes) for more details about these parameters.
:::

These parameters are used to configure the proximity feature.

|Parameter|ID|Unit|Range|Description|
|-------------|------|----------|------------|-------------|
|prox_scan_pwr_min|0x2B|dBm|-90 – 10|Minimum RSSI power for a proximity scan entry to be considered.|
|prox_distance_coef|0x2C|none|1 – 256|Proximity distance coefficient.|
|prox_scan_frequency|0x2D|scan/hour|2 – 3600|Number of proximity scans in an hour.|
|prox_backtrace_max_age|0x2E|seconds|1 – 256|Delay after which a proximity entry is removed from short term buffer.|
|prox_distance_sliding_window|0x2F|seconds|1 – 256|Duration of a sliding window over which distance average will be evaluated.|
|prox_exposure_50|0x30|none|0, 1 – 256|Marginal exposure index for (0-50) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_100|0x31|none|0, 1 – 256|Marginal exposure index for (50-100) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_150|0x32|none|0, 1 – 256|Marginal exposure index for (100-150) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_200|0x33|none|0, 1 – 256|Marginal exposure index for (150-200) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_250|0x34|none|0, 1 – 256|Marginal exposure index for (200-250) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_300|0x35|none|0, 1 – 256|Marginal exposure index for (250-300) cm range during 1 second. 0 means it is not considered.|
|prox_exposure_400|0x36|none|0, 1 – 256|Marginal exposure index for (300-400) cm range during 1 second. 0 means it is not considered.|
|prox_alarm_dist_immediate|0x37|0.1meters|0 – 100|Detection threshold to trigger an alarm.|
|prox_alarm_exposure|0x38|none|0 – 65535|Total Exposure threshold to trigger an alarm.|
|prox_warn_dist_immediate|0x39|0.1meters|0 – 100|Detection threshold to trigger a warning.|
|prox_warn_exposure|0x3A|none|0 – 65535|Total Exposure threshold to trigger a warning.|
|prox_record_dist_immediate|0x3B|0.1meters|0 – 100|Detection threshold to record a contact.|
|prox_record_exposure|0x3C|none|1 – 65535|Total Exposure threshold to record a contact.|
|prox_alarm_buz_duration|0x3D|seconds|0 – 256|Alarm buzzer duration.|
|prox_warn_buz_duration|0x3E|seconds|0 – 256|Warning buzzer duration.|
|prox_contact_policy|0x3F|none|0 – 0x07|Contact policy bitmap: bit 0: enable proximity feature // bit 1: store data in memory // bit 2: send data with Lora uplinks. If bit 0 is 0, the feature is disabled.|
|prox_scan_duration|0x40|0.1seconds|1 – 600|Duration of proximity scan.|
|prox_scan_window|0x41|milli seconds|10 – 10240|Duration of a scan window.|
|prox_scan_interval|0x42|milli seconds|15 – 10245|Duration of a scan interval.|
|prox_alarm_remanence|0x43|seconds|0 – 256|Time in seconds to keep an item in Alarm list when not detected anymore.|
|prox_warn_remanence|0x44|seconds|0 – 256|Time in seconds to keep an item in Warning list when not detected anymore.|
|prox_bcn_repeat|0x45|milli seconds|0 – 65535|Proximity beacon advertising interval.|
|prox_bcn_tx_power|0x46|dBm|-60 – -20|Advertising calibrated TX power at 1m.|
|prox_reminder_period|0x47|seconds|0 – 256|Interval to repeat Alarm or Warning buzzer reminder. 0 disables the reminder.|
|prox_reminder_distance|0x48|0.1meters|0 – 256|Distance to ignore reminder for Alarm or Warning devices.|
|prox_warn_disable_dist|0x49|0.1meters|1 – 256|Distance to ignore Warning devices.|
|prox_alarm_disable_dist|0x4A|0.1meters|1 – 256|Distance to ignore Alarm devices.|
|prox_max_speed_filter|0x4B|0.1meter/second|0 – 40|Maximum speed in tenth of meter to filter outliers.|
|prox_max_update|0x4C|seconds|300 – 43200|Time before sending a record|



