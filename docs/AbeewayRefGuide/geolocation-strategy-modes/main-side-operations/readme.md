# Main operating modes and SOS

 The following geolocation technology settings (*geoloc_sensor*
 parameter) are used by the main operating modes: motion-tracking,
 permanent-tracking, start/end tracking and SOS. Note that in standby
 mode, only side operations can report positions.

-   **WIFI only** → Only WIFI scans are used for position determination.
-   **GPS only** → Only the GPS is used for position determination.
-   **LPGPS only** → GPS and low power-GPS are used for position determination.
-   **BLE only** → Provide data formatted as a list of "MAC address/RSSI" or Beacon ID/RSSI couple that can be used to compute a position.
-   **Multi-technologies modes**
    -   **WIFI-GPS** → WIFI then GPS if WIFI fails in one geolocation cycle. 
    -   **WIFI-LPGPS** → WIFI then Low power-GPS if WIFI fails in one geolocation cycle.
    -   **BLE-GPS** → BLE then GPS if BLE fails in one geolocation cycle.
    -   **WIFI-LPGPS/ WIFI-GPS** → WIFI-low power GPS first, then WIFI-GPS if WIFI-low power GPS fails until timeout, then back to WIFI-low power GPS.
-   **BLE-LPGPS only** → BLE then Low power-GPS if BLE fails in one geolocation cycle.

## Side operations

 The following geolocation technology setting (*geoloc_method*
 parameter) are used for periodic-reporting, on-demand or alert
 operations.

-   **WIFI only** → Only WIFI scans are used for position determination.
-   **GPS only** → Only the GPS is used for position determination.
-   **LPGPS only** → GPS and low power-GPS are used for position determination.
-   **BLE only** → Provide data formatted as a list of "MAC address/RSSI" or Beacon ID/RSSI couple that can be used to compute a position.
-   **Multi-technologies modes**
    -   **WIFI-GPS** → WIFI then GPS if WIFI fails in one geolocation cycle.
    -   **WIFI-LPGPS** → WIFI then Low power-GPS if WIFI fails in one geolocation cycle.
    -   **BLE-GPS** → BLE then GPS if BLE fails in one geolocation cycle.
    -   **BLE-LPGPS only** → BLE then Low power-GPS if BLE fails in one geolocation cycle.