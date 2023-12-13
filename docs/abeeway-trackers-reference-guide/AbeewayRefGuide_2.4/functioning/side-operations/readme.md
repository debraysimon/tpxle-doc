# Side operations

Whatever the operating mode (except OFF mode), the trackers support **side operations** as shown in the following table:

|Side operations <sup>(1)</sup>    |Trackers|User Interface needed|
|----------------------|-----------------|-------------------------|
|**Periodic positions reporting**  |All              |          -              |
|**Positions on demand**           |All              |          -              |
|**Alert position**                |Smart Badge, Micro and compact tracker     |button or reed switch acting like a button|
|**Periodic activity reporting**   |All              |          -              |
|**Collection payloads**           |All              |          -              |
|**Angle detection**               |All              |          -              |
|**BLE geozoning**                 |All              |          -              |
|**Beaconing**                     |All              |          -              |


:::tip Note
<sup>(1)</sup> All side operations can be accrued.
:::

## Periodic position message reporting

The device sends additional positions at the *periodic_pos_period* frequency. This feature is disabled when its associated configuration parameter is set to 0.

This periodic position reporting uses the *geoloc_method* geolocation strategy.

:::tip Note
1.  If the selected *geoloc_method* uses GPS or LPGPS, the position is sent at the end of *gps_timeout or agps_timeout* delay (even if the acquisition is finished before)
2.  A periodic position cannot be interrupted by a regular acquisition (triggered by the operational mode).
:::

## Position on Demand

The tracker position can be requested via LoRaWAN™ downlink message. In this case, the *geoloc_method* strategy is used.

:::tip Note
This action has precedence over the main operational mode. So, if a position acquisition is already in progress, the operation is stopped, and the demand is serviced.
:::

## Alert position

Alert position can only be done with tracker having a button or a reed switch acting like a button.

After the button press(es) for the Alert position is done, (button action is configured in *button_mapping* parameter) the tracker automatically starts a position acquisition using the *geoloc_method* strategy. As previously stated, If the position acquisition is in progress, the operation is stopped, and the demand is serviced.

**Between 2 button sequences, a delay of 60 seconds must be respected**. If this delay is not respected the second sequence won't be considered.

The LoRaWAN™ position messages are tagged with the **alert flag** and the **position on demand flag**.

## Periodic activity reporting

The tracker can report periodically its activity (motion detection). The reporting frequency is controlled by the parameter
*periodic_activity_period*. When this parameter is set to 0, this feature is disabled.

The associated LoRaWAN™ uplink message will contain the history of the activity split in six-time windows equals to 1/6 of the configured period (*periodic_activity_period*).

:::tip Note
*motion_sensitivity* parameter should have a value between 100 and 200.
:::

## Scan collection

A scan collection is a WIFI or a BLE extra scan used to sense the environment around the tracker, which is done after the usual geolocation and reported via LoRaWAN™ just after the position.

## Angle detection

Angle detection is a side operation, that triggers an event when the tracker angular position reaches a configured critical angle between a reference gravity vector and the current measured vector.

This feature uses the on-board accelerometer, also used for motion detection.

## BLE geozoning

The BLE geozoning is a side operation, which periodically scans BLE beacons and reacts according to the type of beacons detected.

:::tip Note
If the BLE geozoning feature is activated and the *collection_scan_type* parameter is set to BLE, then the BLE collection message is not sent after a position. Only the BLE geozoning collection message is sent.
:::

## BLE Beaconing

The purpose of this feature is to configure the tracker as a BLE beacon. The supported beaconing types are:
-   [QUUPPA](https://www.quuppa.com/) allowing an accurate indoor geolocation, please see the [AN-012_Quuppa_beaconing](../../../../documentation-library/abeeway-trackers#application-notes) for reference.
-   Eddystone
-   IBeacon
-   altBeacon
The beaconing behavior is activated and configured by means of the [BLE Beaconing configuration parameters](../../Parameters-default-configuration/firmware-parameters.md#ble-beaconing-parameters).
