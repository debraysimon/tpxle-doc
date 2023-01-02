# Default configuration delivered with micro tracker and smart badge

 The tracker is in **motion tracking operating mode**. a
 **geoloc_start** event message is sent at the beginning of a motion
 It is possible to turn it off using the button,
 in motion, position are sent using **GPS** technology each **5
 minutes,** using **double transmit** strategy in static a
 **heartbeat** is sent every **10 minutes** using **ADR** of LoRa
 network
 Side operations setting:
-   **Periodic position** sent every **12 hours** using **GPS**technology
-   **SOS** activated/deactivated using a **3 short presses** on the button
-   If the tracker has its **temperature** outside the range -10°C to 57°C, no position is calculated (battery saver option)
-   If no DL is received for 7 days, the tracker is reset (the network has certainly being lost)
-   Geozoning, Collection payload, Angle detection, and beaconing are deactivated

|  BLE Connection status                |  Message        |
|-------------------------------------------|-----------------------|
|  New BLE connection (if the tracker is also bonded)    |  **BLE connected**    |
|  End of BLE connection (if the tracker is also bonded) |  **BLE disconnected** |
|  BLE bond is deleted on the tracker       |  **BLE bond deleted** |


|	Parameter Name  	|	Value       	|
|	---------	|	-----------	|
|	mode	|	1 (motion tracking)	|
|	ul_period 	|	300 seconds	|
|	lora_period	|	600 seconds (10 minutes)	|
|	pw_stat_period	|	0 (disabled)	|
|	periodic_pos_period	|	14400 seconds	|
|	geoloc_sensor	|	1 (GPS)	|
|	geoloc_method	|	1 (GPS)	|
|	motion_nb_pos	|	1	|
|	gps_timeout	|	240 seconds	|
|	agps_timeout	|	55 seconds for micro tracker/45 seconds for smart badge	|
|	gps_ehpe	|	20 meters	|
|	gps_convergence	|	30 seconds	|
|	config_flags	|	0x3403F	|
|	Bit0	|	Frame pending mechanism: Activated	|
|	Bit1	|	Very long button press to switch to off mode: Enabled	|
|	Bit2	|	no more used	|
|	Bit3	|	Send a configuration confirmation uplink message: Activated	|
|	Bit4	|	WIFI payload without Cypher: Enabled	|
|	Bit5	|	BLE advertising when the device is turned on: enabled	|
|	Bit6	|	First WIFI scan when geolocation starts. Disabled, (Send a geoloc start message instead)	|
|	Bit7	|	LED blinks when a GPS fix is received: Disabled	|
|	Bit8	|	Motion start message: Disabled	|
|	Bit9	|	Motion end message: Disabled	|
|	Bit10	|	OTA join when leaving the mode OFF: Disabled	|
|	Bit11	|	Asymmetric BLE pairing: Activated (0)	|
|	Bit12	|	Long WIFI payload: Disabled (0)	|
|	Bit13	|	Collection Long Report: Disabled (0)	|
|	Bit14	|	Autostart of the tracker when leaving shipping mode: Activated (1)	|
|	Bit15	|	Forbid the mode OFF: deactivated (0)	|
|	Bit16	|	Melody played during SOS: activated (1)	|
|	Bit17	|	Automatic data rate selection: activated (1)	|
|	Bit18	|	Extended position payload : deactivated (0)	|
|	transmit_strat	|	2(Double transmit)	|
|	ble_beacon_cnt	|	0x04	|
|	ble_beacon_timeout	|	2 seconds	|
|	gps_standby_timeout	|	28800 seconds	|
|	confirmed_ul_bitmap	|	0 (none)	|
|	confirmed_ul_retry	|	3	|
|	motion_sensitivity	|	1	|
|	prox_alarm_buz_duration	|	5 seconds	|
|	prox_warn_buz_duration	|	5 seconds	|
|	prox_contact_policy	|	0	|
|	prox_scan_duration	|	10 (*0.01 seconds)	|
|	prox_scan_window	|	120 milliseconds	|
|	prox_scan_interval	|	125 milliseconds	|
|	prox_alarm_remanence	|	30 seconds	|
|	prox_warn_remanence	|	30 seconds	|
|	prox_bcn_repeat	|	100 milliseconds	|
|	prox_bcn_tx_power	|	-41 dBm	|
|	prox_reminder_period	|	20 seconds	|
|	prox_reminder_distance	|	20 (*0.01 meters)	|
|	prox_warn_disable_dist	|	25 (*0.01 meters)	|
|	prox_alarm_disable_dist	|	25 (*0.01 meters)	|
|	prox_max_speed_filter	|	15 (*0.01 meters/sec.)	|
|	prox_max_update	|	3600 seconds	|
|	position_ble_filter_type	|	0 (none)	|
|	position_ble_filter_main_1	|	0	|
|	position_ble_filter_main_2	|	0	|
|	position_ble_filter_sec_value	|	0	|
|	position_ble_filter_sec_mask	|	0	|
|	position_ble_report_type	|	0 (mac address)	|
|	buzzer_volume	|	100% for micro tracker, 10% for smart badge	|
|	angle_detect_mode	|	0	|
|	angle_ref_acq	|	2	|
|	angle_ref_acc_x	|	0 milliG	|
|	angle_ref_acc_y	|	0 milliG	|
|	angle_ref_acc_z	|	0 milliG	|
|	angle_critical	|	30 degree	|
|	angle_critical_hyst	|	5 degree	|
|	angle_report_mode	|	1	|
|	angle_report_period	|	300 seconds	|
|	angle_report_repeat	|	0	|
|	angle_rising_time	|	5 seconds 	|
|	shock_detection	|	0 (disabled)	|
|	periodic_activity_period	|	0 (disabled)	|
|	motion_duration	|	180 seconds	|
|	geofencing_scan_period	|	0 seconds	|
|	geofencing_collect_period	|	60 seconds	|
|	ble_rssi_filter	|	-85 dBm	|
|	temperature_high	|	57 °C	|
|	temperature_low	|	-10 °C	|
|	temperature_action	|	3	|
|	transmit_strat_custom	|	0	|
|	network_timeout_check	|	432000 seconds (5 days)	|
|	network_timeout_reset	|	172800 seconds (2 days)	|
|	collection_scan_type	|	0 (deactivated)	|
|	collection_nb_entry	|	20	|
|	collection_ble_filter_type	|	0 (none)	|
|	collection_ble_filter_main_1	|	0	|
|	collection_ble_filter_main_2	|	0	|
|	collection_ble_filter_sec_value	|	0	|
|	collection_ble_filter_sec_mask	|	0	|
|	battery_capacity	|	-1 (provisioned value should not be modified)	|
|	reed_switch_configuration	|	0	|
|	gnss_constellation	|	Europe, India, America, Australia: 2 (GPS and Glonass), Asia: 6 (GPS and Beidou)	|
|	prox_scan_pwr_min	|	-90 (dBm)	|
|	prox_distance_coef	|	200	|
|	prox_scan_frequency	|	1800 (scans/hour)	|
|	prox_backtrace_max_age	|	256 seconds	|
|	prox_distance_sliding_window	|	30 seconds	|
|	prox_exposure_50	|	200 cm	|
|	prox_exposure_100	|	50 cm	|
|	prox_exposure_150	|	22 cm	|
|	prox_exposure_200	|	13 cm	|
|	prox_exposure_250	|	0 cm	|
|	prox_exposure_300	|	0 cm	|
|	prox_exposure_400	|	0 cm	|
|	prox_alarm_dist_immediate	|	1 (*0.01 meters)	|
|	prox_alarm_exposure	|	12000	|
|	prox_warn_dist_immediate	|	10 (*0.01 meters)	|
|	prox_warn_exposure	|	6000	|
|	prox_record_dist_immediate	|	20 (*0.01 meters)	|
|	prox_record_exposure	|	3700	|
|	angle_falling_time	|	5 seconds	|
|	angle_learning_time	|	5 seconds	|
|	angle_acc_accuracy	|	100 milliG	|
|	angle_deviation_delta	|	0 degree	|
|	angle_deviation_min_interval	|	10 degree	|
|	angle_deviation_max_interval	|	0 degree	|
|	default_profile	|	0	|
|	password	|	123	|
|	gps_t0_timeout	|	45 seconds for micro tracker, 30 seconds for smart badge	|
|	gps_fix_timeout	|	0 seconds	|
|	geofencing_scan_duration	|	370 milliseconds	|
|	beaconing_type	|	0	|
|	beaconing_tx_power	|	2 (0 dBm)	|
|	beaconing_static_interval	|	10000 milliseconds	|
|	beaconing_motion_interval	|	333 milliseconds	|
|	beaconing_motion_duration	|	20 seconds	|
|	ble_cnx_adv_duration	|	600 seconds	|
|	beacon_id_0	|	0	|
|	beacon_id_1	|	0	|
|	beacon_id_2	|	0	|
|	beacon_id_3	|	0	|
|	beacon_id_4	|	0	|
|	sos_period	|	120 seconds	|
|	motion_debounce	|	1	|
|	button_mapping(1)	|	0x12410 </br> Bit0-3:0000 (Button press: no action) </br> Bit4-7:0001 (Button click: battery level with LEDs) </br> Bit8-11:0100 (Double click: No action) </br> Bit12-15:0010 (Triple click: start/stop SOS) </br> Bit16-19:0001 (Button long press duration = 1 second) 	|
|	Bit0-3	|	Button long press: no action	|
|	Bit4-7	|	Button short press: battery level with leds	|
|	Bit8-11	|	Double click: No action	|
|	Bit12-15	|	Triple click: start/stop SOS	|
|	Bit16-19	|	Button long press duration = 1 second	|
|	default_datarate	|	-1 (provisioned value)	|
|	**gps_ehpe_motion**             	|	 **20 meters** 	|
|	 **gps_convergence_motion**      	|	 **30 seconds** |
|	 **gps_t0_timeout_motion**       	|	 **30 seconds** |                                                              	

:::tip Notes
(1). Please visit [here](../functioning/user-interfaces/#button-management) for the definition of click, press, long press, etc.

(2)  New parameters or if their default values changed have been marked bold.

(3)  Default parameter values are subject to change. The tracker configuration can be obtained with a downlink or a [CLI command](/D-Reference/UsingCLI_R/#here-are-the-main-steps-to-use-cli) (**config show**).  
:::