# Default configuration delivered with micro tracker and smart badge

 The tracker in in **motion tracking operating mode**. a
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
-   Geozoning, proximity, Collection payload, Angle detection, and beaconing are deactivated

|  BLE Connection status                |  Message        |
|-------------------------------------------|-----------------------|
|  New BLE connection (if the tracker is also bonded)    |  **BLE connected**    |
|  End of BLE connection (if the tracker is also bonded) |  **BLE disconnected** |
|  BLE bond is deleted on the tracker       |  **BLE bond deleted** |


|Setting  |Value       |Setting     |Value       |
|---------|-----------|-----------|-----------------------|
|mode|1 (motion tracking)|shock_detection|0 (disabled)|
|ul_period |300 seconds|periodic_activity_period|0 (disabled)|
|lora_period|600 seconds (10 minutes)|motion_duration|180 seconds|
|pw_stat_period|0 (disabled)|geofencing_scan_period|0 seconds|
|periodic_pos_period|14400 seconds|geofencing_collect_period|60 seconds|
|geoloc_sensor|1 (GPS)|ble_rssi_filter|-85 dBm|
|geoloc_method|1 (GPS)|temperature_high|57 °C|
|***motion_nb_pos***|1|temperature_low|-10 °C|
|gps_timeout|240 seconds|temperature_action|3|
|agps_timeout|55 seconds for micro tracker/45 seconds for smart badge|transmit_strat_custom|0|
|gps_ehpe|20 meters|network_timeout_check|432000 seconds (5 days)|
|gps_convergence|30 seconds|network_timeout_reset|172800 seconds (2 days)|
|**config_flags**|**0x3403F**|collection_scan_type|0 (deactivated)|
|Bit0|Frame pending mechanism: Activated|collection_nb_entry|20|
|Bit1|Very long button press to switch to off mode: Enabled|collection_ble_filter_type|0 (none)|
|**Bit2**|**no more used**|collection_ble_filter_main_1|0|
|Bit3|Send a configuration confirmation uplink message: Activated|collection_ble_filter_main_2|0|
|Bit4|WIFI payload without Cypher: Enabled|collection_ble_filter_sec_value|0|
|Bit5|BLE advertising when the device is turned on: enabled|collection_ble_filter_sec_mask|0|
|Bit6|First WIFI scan when geolocation starts. Disabled, (Send a geoloc start message instead)|battery_capacity|-1 (provisioned value should not be modified)|
|Bit7|LED blinks when a GPS fix is received: Disabled|reed_switch_configuration|0|
|Bit8|Motion start message: Disabled|gnss_constellation|Europe, India, America, Australia: 2 (GPS and Glonass), Asia: 6 (GPS and Beidou)|
|Bit9|Motion end message: Disabled|prox_scan_pwr_min|-90 (dBm)|
|Bit10|OTA join when leaving the mode OFF: Disabled|prox_distance_coef|200|
|Bit11|Asymmetric BLE pairing: Activated (0)|prox_scan_frequency|1800 (scans/hour)|
|Bit12|Long WIFI payload: Disabled (0)|prox_backtrace_max_age|256 seconds|
|Bit13|Collection Long Report: Disabled (0)|prox_distance_sliding_window|30 seconds|
|Bit14|Autostart of the tracker when leaving shipping mode: Activated (1)|prox_exposure_50|200 cm|
|Bit15|Forbid the mode OFF: deactivated (0)|prox_exposure_100|50 cm|
|Bit16|Melody played during SOS: activated (1)|prox_exposure_150|22 cm|
|Bit17|Automatic data rate selection: activated (1)|prox_exposure_200|13 cm|
|**Bit18**|**Extended position payload : deactivated (0)**|prox_exposure_250|0 cm|
|transmit_strat|2(Double transmit)|prox_exposure_300|0 cm|
|ble_beacon_cnt|0x04|prox_exposure_400|0 cm|
|ble_beacon_timeout|2 seconds|prox_alarm_dist_immediate|1 (*0.01 meters)|
|gps_standby_timeout|28800 seconds|prox_alarm_exposure|12000|
|confirmed_ul_bitmap|0 (none)|prox_warn_dist_immediate|10 (*0.01 meters)|
|confirmed_ul_retry|3|prox_warn_exposure|6000|
|***motion_sensitivity***|***1***|prox_record_dist_immediate|20 (*0.01 meters)|
|prox_alarm_buz_duration|5 seconds|prox_record_exposure|3700|
|prox_warn_buz_duration|5 seconds|angle_falling_time|5 seconds|
|prox_contact_policy|0|angle_learning_time|5 seconds|
|prox_scan_duration|10 (*0.01 seconds)|angle_acc_accuracy|100 milliG|
|prox_scan_window|120 milliseconds|angle_deviation_delta|0 degree|
|prox_scan_interval|125 milliseconds|angle_deviation_min_interval|10 degree|
|prox_alarm_remanence|30 seconds|angle_deviation_max_interval|0 degree|
|prox_warn_remanence|30 seconds|default_profile|0|
|prox_bcn_repeat|100 milliseconds|password|123|
|prox_bcn_tx_power|-41 dBm|***gps_t0_timeout***|45 seconds for micro tracker, ***30 seconds for smart badge***|
|prox_reminder_period|20 seconds|gps_fix_timeout|0 seconds|
|prox_reminder_distance|20 (*0.01 meters)|geofencing_scan_duration|370 milliseconds|
|prox_warn_disable_dist|25 (*0.01 meters)|beaconing_type|0|
|prox_alarm_disable_dist|25 (*0.01 meters)|beaconing_tx_power|2 (0 dBm)|
|prox_max_speed_filter|15 (*0.01 meters/sec.)|beaconing_static_interval|10000 milliseconds|
|prox_max_update|3600 seconds|beaconing_motion_interval|333 milliseconds|
|position_ble_filter_type|0 (none)|beaconing_motion_duration|20 seconds|
|position_ble_filter_main_1|0|ble_cnx_adv_duration|600 seconds|
|position_ble_filter_main_2|0|**beacon_id_0**|**0**|
|position_ble_filter_sec_value|0|**beacon_id_1**|**0**|
|position_ble_filter_sec_mask|0|**beacon_id_2**|**0**|
|position_ble_report_type|0 (mac address)|**beacon_id_3**|**0**|
|buzzer_volume|100% for micro tracker, 10% for smart badge|**beacon_id_4**|**0**|
|angle_detect_mode|0|**sos_period**|**120 seconds**|
|angle_ref_acq|2|**motion_debounce**|**1**|
|angle_ref_acc_x|0 milliG|**button_mapping**|**0x12410**|
|angle_ref_acc_y|0 milliG|**Bit0-3**|**Button long press: no action**|
|angle_ref_acc_z|0 milliG|**Bit4-7**|**Button short press: battery level with leds**|
|angle_critical|30 degree|**Bit8-11**|**2 short button presses: whitelist proximity feature**|
|angle_critical_hyst|5 degree|**Bit12-15**|**3 or more short button presses: start/stop SOS**|
|angle_report_mode|1|**Bit16-19**|**Button long press duration = 1 second**|
|angle_report_period|300 seconds|**default_datarate**|**-1 (provisioned value)**|
|angle_report_repeat|0|||
|angle_rising_time|5 seconds|||