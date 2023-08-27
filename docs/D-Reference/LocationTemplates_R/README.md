
# Location templates
Abeeway Device Manager uses the following predefined location templates that you can apply to trackers to configure quickly their location profile. For more information, see [Changing the tracker configuration](/C-Procedure-Topics/ChangeTrackerConfiguration_T/).

:::warning Warning
All templates below assume that parameters that are not explicitly listed are set to their [default values](/AbeewayRefGuide/Parameters-default-configuration/configuration-default.md). If you have some of these other parameters that are not set to the default values, please review them carefully for possible interactions with the parameters modified by the template.
:::

<html>
    <thead>
    <tr>
        <th>Telplate</th>
        <th>Use</th>
        <th>Firmware</th>
        <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
            <strong>
                Default
            </strong>
        </td>
        <td>
            <p>This profile allows to get the position of the tracker in the easiest way possible.In this profile, the
                tracker reports GPS position every 2 minutes when moving, while it also reports position based on
                WiFi/GPS every hour.
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>ul_period</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
                <li>
                    <code>periodic_pos_period</code>
                </li>
                <li>
                    <code>geoloc_sensor</code>
                </li>
                <li>
                    <code>geoloc_method</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>120 seconds</code>
                </li>
                <li>
                    <code>600 seconds</code>
                </li>
                <li>
                    <code>36000 seconds</code>
                </li>
                <li>
                    <code>periodic_pos_period</code>
                </li>
                <li>
                    <code>1 (GPS Only)</code>
                </li>
                <li>
                    <code>3 (WiFi-GPS)</code>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>
                Tracking rented assets
            </strong>
        </td>
        <td>
            <p>
                This profile is useful for tracking rented assets movement especially at the beginning or end of the
                movement.
                In this profile, the tracker is reporting positions based on WiFi/GPS every 2 minutes once the tracker
                detects motion start/end event.
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>ul_period</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
                <li>
                    <code>periodic_pos_period</code>
                </li>
                <li>
                    <code>geoloc_sensor</code>
                </li>
                <li>
                    <code>geoloc_method</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>3 (Motion start/end tracking)</code>
                </li>
                <li>
                    <code>120 seconds</code>
                </li>
                <li>
                    <code>600 seconds</code>
                </li>
                <li>
                    <code>36000 seconds</code>
                </li>
                <li>
                    <code>6 (WiFi-GPS)</code>
                </li>
                <li>
                    <code>3 (WiFi-GPS)</code>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>
                Find my asset on demand
            </strong>
        </td>
        <td>
            <p>
                This profile is useful for getting the asset location on demand.In this profile, the tracker is
                reporting positions based on WiFi/GPS every hour. However, the tracker position can be requested by user
                by sending downlink message.
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>ul_period</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
                <li>
                    <code>periodic_pos_period</code>
                </li>
                <li>
                    <code>geoloc_method</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>0 (Standby)</code>
                </li>
                <li>
                    <code>900 seconds</code>
                </li>
                <li>
                    <code>36000 seconds</code>
                </li>
                <li>
                    <code>1 (GPS Only)</code>
                </li>
                <li>
                    <code>3 (WiFi-GPS)</code>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>
                Activity monitoring
            </strong>
        </td>
        <td>
            <p>
                This profile sends an activity reports instead of positions by counting the amount of motions with the
                accelerometer.
                Each motion detection increases a counter (if 3 motion events are detected during a 2 seconds period
                interval) and the counter value is reported at the
            </p>
            <code>
                ul_period
            </code>
            <p>
                frequency.
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>ul_period</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>4 (Activity tracking)</code>
                </li>
                <li>
                    <code>120 seconds</code>
                </li>
                <li>
                    <code>900 seconds</code>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>
                Proximity alert
            </strong>
        </td>
        <td>
            <p>
                This profile enables proximity detection and contact tracing when two trackers are brought close to each
                other.
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
                <li>
                    <code>prox_alarm_remanence</code>
                </li>
                <li>
                    <code>prox_warn_remanence</code>
                </li>
                <li>
                    <code>prox_bcn_tx_power</code>
                </li>
                <li>
                    <code>prox_warn_dist_immediate</code>
                </li>
                <li>
                    <code>prox_alarm_dist_immediate</code>
                </li>
                <li>
                    <code>prox_record_dist_immediate</code>
                </li>
                <li>
                    <code>Prox_scan_pwr_min</code>
                </li>
                <li>
                    <code>Prox_contact_policy</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>3600 seconds</code>
                </li>
                <li>
                    <code>30 seconds</code>
                </li>
                <li>
                    <code>30 seconds</code>
                </li>
                <li>
                    <code>-41 dBm</code>
                </li>
                <li>
                    <code>2 meters</code>
                </li>
                <li>
                    <code>2 meters</code>
                </li>
                <li>
                    <code>-60 dBm</code>
                </li>
                <li>
                    <code>5</code>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>
                Scan collection
            </strong>
        </td>
        <td>
            <p>
                This profile enables the scan collection feature which allows to scan and up to 20 WiFi Aps or BLE
                beacons once per hour
            </p>
        </td>
        <td>
            <ul>
                <li>
                    <code>mode</code>
                </li>
                <li>
                    <code>ul_period</code>
                </li>
                <li>
                    <code>lora_period</code>
                </li>
                <li>
                    <code>periodic_pos_period</code>
                </li>
                <li>
                    <code>geoloc_sensor</code>
                </li>
                <li>
                    <code>geoloc_method</code>
                </li>
                <li>
                    <code>collection_scan_type</code>
                </li>
                <li>
                    <code>collection_nb_entry</code>
                </li>
                <li>
                    <code>collection_ble_filter_type</code>
                </li>
                <li>
                    <code>collection_ble_filter_main_1</code>
                </li>
                <li>
                    <code>collection_ble_filter_main_2</code>
                </li>
                <li>
                    <code>collection_ble_filter_sec_value</code>
                </li>
                <li>
                    <code>collection_ble_filter_sec_mask</code>
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li>
                    <code>1 (Motion Tracking)</code>
                </li>
                <li>
                    <code>120 seconds</code>
                </li>
                <li>
                    <code>600 seconds</code>
                </li>
                <li>
                    <code>3600 seconds</code>
                </li>
                <li>
                    <code>6 (WiFi/GPS)</code>
                </li>
                <li>
                    <code>3 (WiFi/GPS)</code>
                </li>
                <li>
                    <code>1 (BLE Beacons)</code>
                </li>
                <li>
                    <code>20</code>
                </li>
                <li>
                    <code>0 (No filter)</code>
                </li>
                <li>
                    <code>0 (No filter)</code>
                </li>
                <li>
                    <code>0 (No filter)</code>
                </li>
                <li>
                    <code>0 (No filter)</code>
                </li>
            </ul>
        </td>
    </tr>
    </tbody>
</html>