# Configuration messages

This message reports the parameter values configured in the trackers.If the complete list is requested, several UL messages will be transmitted.

|Common header | Data |  Data |  Data |  Data | Data | Data|
|--------|--------|--------|--------|--------|--------|--------|
| Byte 0-4 |  Byte 5 |  Byte 6-10 |  Byte 11-15 |  Byte 16-20 |  Byte 21-25 |  Byte 26-30 |
| Header with **Type**=0x07 |**0x02**|**Parameter 1**|**Parameter 2**|**Parameter 3**|**Parameter 4**|**Parameter 5**|

 **Parameter x**: Configuration of the parameter x, coded on 5 bytes as follow:

|  Parameter x   |    Parameter x*               |
|--------------------|-----------------------------------|
|  Byte (5\***x**+1) |  Byte (5\***x**+2) - (5\***x**+5) |
|  **Parameter ID**  |  **Parameter value**              |

## Parameter ID:

|Parameter|ID|Parameter|ID|Parameter|ID|
|-------------|------|-------------|------|-------------|------|
|ul_period	  |0x00	|reed_switch_configuration	|0x29	|position_ble_report_type	|0x52|
|lora_period	  |0x01	|gnss_constellation	|0x2A	|buzzer_volume	|0x53|
|pw_stat_period	|0x02	|prox_scan_pwr_min	|0x2B	|angle_detect_mode	|0x54|
|periodic_pos_period	|0x03	|prox_distance_coef	|0x2C	|angle_ref_acq	|0x55|
|Reserved, do not use	|0x04	|prox_scan_frequency	|0x2D	|angle_ref_acc_x	|0x56|
|geoloc_sensor	|0x05	|prox_backtrace_max_age	|0x2E	|angle_ref_acc_y	|0x57|
|geoloc_method	|0x06	|prox_distance_sliding_window	|0x2F	|angle_ref_acc_z	|0x58|
|Reserved, do not use	|0x07	|prox_exposure_50	|0x30	|angle_critical	|0x59|
|motion_nb_pos	|0x08	|prox_exposure_100	|0x31	|angle_critical_hyst	|0x5A|
|gps_timeout	|0x09	|prox_exposure_150	|0x32	|angle_report_mode	|0x5B|
|agps_timeout	|0x0A	|prox_exposure_200	|0x33	|angle_report_period	|0x5C|
|gps_ehpe	|0x0B	|prox_exposure_250	|0x34	|angle_report_repeat	|0x5D|
|gps_convergence	|0x0C	|prox_exposure_300	|0x35	|angle_rising_time	|0x5E|
|config_flags	|0x0D	|prox_exposure_400	|0x36	|angle_falling_time	|0x5F|
|transmit_strat	|0x0E	|prox_alarm_dist_immediate	|0x37	|angle_learning_time	|0x60|
|ble_beacon_cnt	|0x0F	|prox_alarm_exposure	|0x38	|angle_acc_accuracy	|0x61|
|ble_beacon_timeout	|0x10	|prox_warn_dist_immediate	|0x39	|angle_deviation_delta	|0x62|
|gps_standby_timeout	|0x11	|prox_warn_exposure	|0x3A	|angle_deviation_min_interval	|0x63|
|confirmed_ul_bitmap	|0x12	|prox_record_dist_immediate	|0x3B	|angle_deviation_max_interval	|0x64|
|confirmed_ul_retry	|0x13	|prox_record_exposure	|0x3C	|default_profile	|0x65|
|motion_sensitivity	|0x14	|prox_alarm_buz_duration	|0x3D	|password	|0x66|
|shock_detection	|0x15	|prox_warn_buz_duration	|0x3E	|gps_t0_timeout	|0x67|
|periodic_activity_period	|0x16	|prox_contact_policy	|0x3F	|gps_fix_timeout	|0x68|
|motion_duration	|0x17	|prox_scan_duration	|0x40	|geofencing_scan_duration	|0x69|
|geofencing_scan_period	|0x18	|prox_scan_window	|0x41	|beaconing_type	|0x6A|
|geofencing_collect_period	|0x19	|prox_scan_interval	|0x42	|beaconing_tx_power	|0x6B|
|ble_rssi_filter	|0x1A	|prox_alarm_remanence	|0x43	|beaconing_static_interval	|0x6C|
|temperature_high	|0x1B	|prox_warn_remanence	|0x44	|beaconing_motion_interval	|0x6D|
|temperature_low	|0x1C	|prox_bcn_repeat	|0x45	|beaconing_motion_duration	|0x6E|
|temperature_action	|0x1D	|prox_bcn_tx_power	|0x46	|ble_cnx_adv_duration	|0x6F|
|transmit_strat_custom	|0x1E	|prox_reminder_period	|0x47	|beacon_id_0	|0x70|
|network_timeout_check	|0x1F	|prox_reminder_distance	|0x48	|beacon_id_1	|0x71|
|network_timeout_reset	|0x20   |prox_warn_disable_dist	|0x49	|beacon_id_2	|0x72|
|collection_scan_type	|0x21	|prox_alarm_disable_dist	|0x4A	|beacon_id_3	|0x73|
|collection_nb_entry	|0x22	|prox_max_speed_filter	|0x4B	|beacon_id_4	|0x74|
|collection_ble_filter_type	|0x23	|prox_max_update	|0x4C	|sos_period	|0x75|
|collection_ble_filter_main_1	|0x24	|position_ble_filter_type	|0x4D	|motion_debounce	|0x76|
|collection_ble_filter_main_2	|0x25	|position_ble_filter_main_1	|0x4E	|button mapping	|0x77|
|collection_ble_filter_sec_value	|0x26	|position_ble_filter_main_2	|0x4F	|default_datarate	|0x78|
|collection_ble_filter_sec_mask	|0x27	|position_ble_filter_sec_value	|0x50|		
|battery_capacity	|0x28	|position_ble_filter_sec_mask	|0x51|		

:::tip Note
Parameters in bold are new or modified in this firmware version.
:::

**Parameter value**: Unsigned 32 bits value in big endian format (MSB first).

## Specials parameters

**Firmware version** (Parameter ID equals to 0xFD or 0xFE) should be read as follow:

|  Parameter x   |  Parameter ID  |  Parameter value |
|--------------------|--------------------|----------------------|
|  Byte 5\*x+1     | 0xFD or 0xFE       |                      |
|  Byte 5\*x+2     |                    |  0x00                |
|  Byte 5\*x+3     |                    |  Firmware version    |
|  Byte 5\*x+4     |                    |  Firmware revision   |
|  Byte 5\*x+5     |                    |  Firmware iteration  |


**Example**

 Parameter=0xfe00010881, Firmware version=0x01, Firmware revision=0x08, Firmware iteration= 0x81

-   **Tracker orientation** (Parameters ID equals to 0xFA, 0xFB or 0xFC) can be negative. Refer to the section Two's complement Encoding for information for the encoding.

|  Parameter x          |  Parameter ID  |  Parameter value|
|---------------------------|--------------------|----------------------|
|  Byte 5\*x+1              | 0xFA, 0xFB or 0xFC |                      |
|  Byte 5\*x+2 - 5\*x+5     |                    |  X, Y or Z Axis      |

 **X, Y or Z Axis**: Value measured on axis X, Y or Z of the accelerometer, it is expressed in mG. Refer to the section [Two's complement Encoding](/downlink-messages/two-complement-encoding/readme.md) for information for the encoding

-   **Operational Mode** (Parameter ID equals to 0xF9): Unsigned 32 bits value in big endian format (MSB first).
    -   0- Standby
    -   1- Motion tracking
    -   2- Permanent tracking
    -   3- Motion start/end tracking
    -   4- Activity tracking

-   **Dynamic profile** configuration (Parameter ID equals to 0xF6): provides the dynamic profile of the tracker.
    -   0: No profile
    -   1: Profile sleep
    -   2: Profile economic
    -   3: Profile intensive

-   **Power consumption** (Parameter ID equals to 0xF7): provides the power consumption of the tracker in mA

-   **BLE Bond status** (Parameter ID equals to 0xF8): Unsigned 32 bits value in big endian format (MSB first).
    -   0: the tracker is not bonded
    -   1: the tracker is bonded
    -   2: unknown state