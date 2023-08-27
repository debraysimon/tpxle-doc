# Wi-Fi / GPS location to build a Wi-Fi database
This feature defines a new geolocation configuration to report a GPS position when ***motion_end*** event is detected. Please refer to application note, [AN-018_Motion_and_shock_detection](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes) for more details on ***motion_end*** event. Since, the device is static at the end of motion, we can associate the GPS position with previously detected Wi-Fi BSSIDs, thus allowing to build Wi-Fi data base in the cloud to avoid Wi-Fi geolocation requests to third party providers (for example, Google, HERE, Combain, etc).

## Enabling the feature
This feature needs to be enabled by setting bit 22 of [config_flags](../../Parameters-default-configuration/firmware-parameters.html#miscellaneous-parameters) to true. This feature is disabled by default.

:::warning Warning
- The [operational mode](../../Parameters-default-configuration/firmware-parameters.md#parameters-for-operational-modes) must be either motion or start/stop tracking.
- The scan collections must not be used. When using this feature, parameter [collection_scan_type (Parameter ID: 33)](../../Parameters-default-configuration/firmware-parameters.md#parameters-for-collections) must be set to 0.
- The parameter [motion_nb_pos](../../Parameters-default-configuration/firmware-parameters.md#accelerometer-parameters) must be greater or equal to 1.
- The number of reported beacons is defined by the parameter [collection_nb_entry (Parameter ID: 34)](../../Parameters-default-configuration/firmware-parameters.md#parameters-for-collections). 
- This feature is not active when the tracker is doing [Position On Demand (POD)](../side-operations/#position-on-demand). 
:::

# LoRaWAN uplinks

When the feature is active, the tracker will report the following uplinks at the **motion end** event:
- [Extended GPS position](../../uplink-messages/extended-position/#extended-gps-fix-payload) to report the last GPS position, if [config_flags (bit 18)](../../Parameters-default-configuration/firmware-parameters.md#miscellaneous-parameters) = true 
- [GPS position](../../uplink-messages/position/#gps-fix-payload) to report the last GPS position, if [config_flags (bit 18)](../../Parameters-default-configuration/firmware-parameters.md#miscellaneous-parameters) = false 
- [Collection Wi-Fi](../../uplink-messages/collection-scan) scan payload is sent to report the Wi-Fi BSSIDs.







