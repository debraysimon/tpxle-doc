# Factory default configuration

It is the configuration of the trackers after a firmware update if the firmware update is done only with the firmware binary **without the configuration file**. The parameter values below are compiled in the firmware and used if the configuration file does not provide the parameter value.

The output below can be easily contructed by doing **config show** once the firmware is flashed without the configuration file by connecting the tracker to [CLI terminal using USB cable](/D-Reference/UsingCLI_R/).

								
|	Parameter Name	|	Parameter ID (Decimal)	|	Parameter ID (Hex)	|	Parameter Value (Decimal)	|
|	--------------	|	--------------	|	--------------	|	--------------	|
|	ul_period                        	|	0	|	(0x00) 	|	300	|
|	lora_period                      	|	1	|	(0x01) 	|	600	|
|	pw_stat_period                   	|	2	|	(0x02) 	|	0	|
|	periodic_pos_period              	|	3	|	(0x03) 	|	0	|
|	unknown                          	|	4	|	(0x04) 	|	0	|
|	geoloc_sensor                    	|	5	|	(0x05) 	|	1	|
|	geoloc_method                    	|	6	|	(0x06) 	|	1	|
|	antenna                          	|	7	|	(0x07) 	|	0	|
|	motion_nb_pos                    	|	8	|	(0x08) 	|	1	|
|	gps_timeout                      	|	9	|	(0x09) 	|	240	|
|	agps_timeout                     	|	10	|	(0x0A) 	|	45	|
|	gps_ehpe                         	|	11	|	(0x0B) 	|	20	|
|	gps_convergence                  	|	12	|	(0x0C) 	|	30	|
|	config_flags                     	|	13	|	(0x0D) 	|	213055	|
|	transmit_strat                   	|	14	|	(0x0E) 	|	2	|
|	ble_beacon_cnt                   	|	15	|	(0x0F) 	|	4	|
|	ble_beacon_timeout               	|	16	|	(0x10) 	|	2	|
|	**gps_standby_timeout**              	|	17	|	(0x11) 	|	0	|
|	confirmed_ul_bitmap              	|	18	|	(0x12) 	|	0	|
|	confirmed_ul_retry               	|	19	|	(0x13) 	|	3	|
|	motion_sensitivity               	|	20	|	(0x14) 	|	131073	|
|	shock_detection                  	|	21	|	(0x15) 	|	0	|
|	periodic_activity_period         	|	22	|	(0x16) 	|	0	|
|	motion_duration                  	|	23	|	(0x17) 	|	180	|
|	geofencing_scan_period           	|	24	|	(0x18) 	|	0	|
|	geofencing_collect_period        	|	25	|	(0x19) 	|	60	|
|	ble_rssi_filter                  	|	26	|	(0x1A) 	|	-85	|
|	temperature_high                 	|	27	|	(0x1B) 	|	255	|
|	temperature_low                  	|	28	|	(0x1C) 	|	255	|
|	temperature_action               	|	29	|	(0x1D) 	|	0	|
|	transmit_strat_custom            	|	30	|	(0x1E) 	|	0	|
|	network_timeout_check            	|	31	|	(0x1F) 	|	432000	|
|	network_timeout_reset            	|	32	|	(0x20) 	|	172800	|
|	collection_scan_type             	|	33	|	(0x21) 	|	0	|
|	collection_nb_entry              	|	34	|	(0x22) 	|	20	|
|	collection_ble_filter_type       	|	35	|	(0x23) 	|	0	|
|	collection_ble_filter_main_1     	|	36	|	(0x24) 	|	0	|
|	collection_ble_filter_main_2     	|	37	|	(0x25) 	|	0	|
|	collection_ble_filter_sec_value  	|	38	|	(0x26) 	|	0	|
|	collection_ble_filter_sec_mask   	|	39	|	(0x27) 	|	0	|
|	battery_capacity                 	|	40	|	(0x28) 	|	-1	|
|	reed_switch_configuration        	|	41	|	(0x29) 	|	**0: Micro Tracker/Smart Badge/Industrial Tracker <br/> 3: Compact Tracker**	|
|	gnss_constellation               	|	42	|	(0x2A) 	|	4	|
|	prox_scan_pwr_min                	|	43	|	(0x2B) 	|	-90	|
|	prox_distance_coef               	|	44	|	(0x2C) 	|	200	|
|	prox_scan_frequency              	|	45	|	(0x2D) 	|	1800	|
|	prox_backtrace_max_age           	|	46	|	(0x2E) 	|	256	|
|	prox_distance_sliding_window     	|	47	|	(0x2F) 	|	30	|
|	prox_exposure_50                 	|	48	|	(0x30) 	|	200	|
|	prox_exposure_100                	|	49	|	(0x31) 	|	50	|
|	prox_exposure_150                	|	50	|	(0x32) 	|	22	|
|	prox_exposure_200                	|	51	|	(0x33) 	|	13	|
|	prox_exposure_250                	|	52	|	(0x34) 	|	0	|
|	prox_exposure_300                	|	53	|	(0x35) 	|	0	|
|	prox_exposure_400                	|	54	|	(0x36) 	|	0	|
|	prox_alarm_dist_immediate        	|	55	|	(0x37) 	|	1	|
|	prox_alarm_exposure              	|	56	|	(0x38) 	|	12000	|
|	prox_warn_dist_immediate         	|	57	|	(0x39) 	|	10	|
|	prox_warn_exposure               	|	58	|	(0x3A) 	|	6000	|
|	prox_record_dist_immediate       	|	59	|	(0x3B) 	|	20	|
|	prox_record_exposure             	|	60	|	(0x3C) 	|	3700	|
|	prox_alarm_buz_duration          	|	61	|	(0x3D) 	|	5	|
|	prox_warn_buz_duration           	|	62	|	(0x3E) 	|	5	|
|	prox_contact_policy              	|	63	|	(0x3F) 	|	0	|
|	prox_scan_duration               	|	64	|	(0x40) 	|	10	|
|	prox_scan_window                 	|	65	|	(0x41) 	|	120	|
|	prox_scan_interval               	|	66	|	(0x42) 	|	125	|
|	prox_alarm_remanence             	|	67	|	(0x43) 	|	30	|
|	prox_warn_remanence              	|	68	|	(0x44) 	|	30	|
|	prox_bcn_repeat                  	|	69	|	(0x45) 	|	100	|
|	prox_bcn_tx_power                	|	70	|	(0x46) 	|	-41	|
|	prox_reminder_period             	|	71	|	(0x47) 	|	20	|
|	prox_reminder_distance           	|	72	|	(0x48) 	|	20	|
|	prox_warn_disable_dist           	|	73	|	(0x49) 	|	25	|
|	prox_alarm_disable_dist          	|	74	|	(0x4A) 	|	25	|
|	prox_max_speed_filter            	|	75	|	(0x4B) 	|	15	|
|	prox_max_update                  	|	76	|	(0x4C) 	|	3600	|
|	position_ble_filter_type         	|	77	|	(0x4D) 	|	0	|
|	position_ble_filter_main_1       	|	78	|	(0x4E) 	|	0	|
|	position_ble_filter_main_2       	|	79	|	(0x4F) 	|	0	|
|	position_ble_filter_sec_value    	|	80	|	(0x50) 	|	0	|
|	position_ble_filter_sec_mask     	|	81	|	(0x51) 	|	0	|
|	position_ble_report_type         	|	82	|	(0x52) 	|	0	|
|	buzzer_volume                    	|	83	|	(0x53) 	|	10	|
|	angle_detect_mode                	|	84	|	(0x54) 	|	0	|
|	angle_ref_acq                    	|	85	|	(0x55) 	|	2	|
|	angle_ref_acc_x                  	|	86	|	(0x56) 	|	0	|
|	angle_ref_acc_y                  	|	87	|	(0x57) 	|	0	|
|	angle_ref_acc_z                  	|	88	|	(0x58) 	|	0	|
|	angle_critical                   	|	89	|	(0x59) 	|	30	|
|	angle_critical_hyst              	|	90	|	(0x5A) 	|	5	|
|	angle_report_mode                	|	91	|	(0x5B) 	|	1	|
|	angle_report_period              	|	92	|	(0x5C) 	|	300	|
|	angle_report_repeat              	|	93	|	(0x5D) 	|	0	|
|	angle_rising_time                	|	94	|	(0x5E) 	|	5	|
|	angle_falling_time               	|	95	|	(0x5F) 	|	5	|
|	angle_learning_time              	|	96	|	(0x60) 	|	5	|
|	angle_acc_accuracy               	|	97	|	(0x61) 	|	100	|
|	angle_deviation_delta            	|	98	|	(0x62) 	|	0	|
|	angle_deviation_min_interval     	|	99	|	(0x63) 	|	10	|
|	angle_deviation_max_interval     	|	100	|	(0x64) 	|	0	|
|	default_profile                  	|	101	|	(0x65) 	|	0	|
|	password                         	|	102	|	(0x66) 	|	123	|
|	gps_t0_timeout                   	|	103	|	(0x67) 	|	30	|
|	gps_fix_timeout                  	|	104	|	(0x68) 	|	0	|
|	geofencing_scan_duration         	|	105	|	(0x69) 	|	370	|
|	beaconing_type                   	|	106	|	(0x6A) 	|	0	|
|	beaconing_tx_power               	|	107	|	(0x6B) 	|	2	|
|	beaconing_static_interval        	|	108	|	(0x6C) 	|	10000	|
|	beaconing_motion_interval        	|	109	|	(0x6D) 	|	333	|
|	beaconing_motion_duration        	|	110	|	(0x6E) 	|	20	|
|	ble_cnx_adv_duration             	|	111	|	(0x6F) 	|	600	|
|	beacon_id_0                      	|	112	|	(0x70) 	|	0	|
|	beacon_id_1                      	|	113	|	(0x71) 	|	0	|
|	beacon_id_2                      	|	114	|	(0x72) 	|	0	|
|	beacon_id_3                      	|	115	|	(0x73) 	|	0	|
|	beacon_id_4                      	|	116	|	(0x74) 	|	0	|
|	sos_period                       	|	117	|	(0x75) 	|	120	|
|	motion_debounce                  	|	118	|	(0x76) 	|	1	|
|	button_mapping                   	|	119	|	(0x77) 	|	74768	|
|	default_datarate                 	|	120	|	(0x78) 	|	-1	|
|	**gps_ehpe_motion**                	|	121	|	(0x79) 	|	40	|
|	**gps_convergence_motion**           	|	122	|	(0x7A) 	|	20	|
|	**gps_t0_timeout_motion**         	|	123	|	(0x7B) 	|	30	|
|	[_Special Parameters_](../uplink-messages/configuration/#special-parameters)	|		|		|		|
|	ble_cli_active                   	|	245	|	(0xF5) 	|	0	|
|	profile                          	|	246	|	(0xF6) 	|	0	|
|	consumption                      	|	247	|	(0xF7) 	|	0	|
|	ble_bond_info                    	|	248	|	(0xF8) 	|	1	|
|	mode                             	|	249	|	(0xF9) 	|	0	|
|	acc_x_axis  (**Read only**)                      	|	250	|	(0xFA) 	|	-215	|
|	acc_y_axis   (**Read only**)                     	|	251	|	(0xFB) 	|	-158	|
|	acc_z_axis   (**Read only**)                     	|	252	|	(0xFC) 	|	975	|
|	ble_version    (**Read only**)                   	|	253	|	(0xFD) 	|	197380	|
|	firmware_version   (**Read only**)               	|	254	|	(0xFE) 	|	132096	|
								
									


:::tip Notes
(1) New parameters in this firmware or the parameter factory values modified from previous firmware version have their names bolded.

(2) Please visit [here](../functioning/user-interfaces/#button-management) for the definition of click, press, long press, etc.

(3) Please use MCU FW 2.3 and below for proximity feature. Proximity feature is removed starting from AT 2.4. 
:::
