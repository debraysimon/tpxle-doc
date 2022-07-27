# Low battery management for trackers with rechargeable batteries

|  Trackers    |  Type of battery  |
|------------------|-----------------------|
| **Micro tracker** |  rechargeable battery |
| **Smart badge**   |  rechargeable battery |

 The battery level monitoring is done as follows:

-   Every 5 minutes
-   On a button action (button press(es) type configured in the parameter *button_mapping)*

 When the battery level goes to 1%, the device sends a shutdown message
 with the reason **low battery** then moves to the **OFF** mode (no
 more LoRaWAN&trade; payloads are sent).
 The tracker remains in this state until the battery is recharged and
 restarted with a long button press (long press duration configured in
 the parameter *button_mapping)*.
 Before moving to the OFF state, a low battery melody is played.
 On restarted, the tracker goes back to its previous operational mode.

:::tip Note
If the battery is not recharged and stays at 1% for a long time it will take much longer than the regular two hours to fully recharge the tracker.
:::