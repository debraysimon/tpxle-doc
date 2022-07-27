# Startup process

 The startup process of Abeeway devices has been significantly modified since MCU firmware version 2.0. A process called shipping has been introduced to allow the shipping of the trackers to the final customer. This process puts the tracker in a deep low power state.
 Once the tracker arrives on the final customer site, it leaves the shipping state and starts the LoRaWAN&trade; join process. The shipping process can be disabled during the manufacturing.

 This process, including the shipping, is described as follows:

1.  The device is in the shipping state and waits for a long button press or for a reed switch sequence (described [here](/AbeewayRefGuide/devices-characteristics/compact-industrial/readme.md)). (3)(4)
2.  Then LoRaWAN&trade; join attempts are done:
    -   If the LoRaWAN&trade; join succeeds, the application starts (go to step 3)
    -   If the LoRaWAN&trade; join fails, the number of attempts is checked against a fixed limit (1)
        -   If the limit is not reached, a new LoRaWAN&trade; join attempt is done
        -   Otherwise, the tracker goes back to shipping state (back to step 1).
        -   There is a delay between different join attempts which range from 15 minutes to 1 hour. 
3. The device starts. (2)

 Once the join succeeds, the tracker doesn't go back to the shipping state, even after the device resets.

 During join step, the BLE starts to advertise if the bit 5 of the *config_flags* parameter is set. See [Connection and pairing](/AbeewayRefGuide/ble-communication-interface/connection-pairing/readme.md) for details about the advertisement duration.

:::tip Notes

(1) The number of attempts is limited to 15 in EU region and 27 for other regions for micro trackers and smart badge, it is infinite for compact trackers and Industrial trackers.

(2) If the autostart feature is enabled (via *config_flags* parameter) the tracker will skip shipping state and go directly to LoRaWAN joining state (after MCU firmware reset if the tracker had been successfully joined with LoRaWAN network). Otherwise, another long press on the button (duration configured in *button_mapping* duration) is required.

(3) The reed switch sequence will work to get out of shipping mode regardless of the value of *reed_switch_configuration* parameter.

(4) The Industrial tracker does not have reed switch and moves directly in the join state. The shipping mode is not activated for the Industrial tracker.
:::

This feature is supported by all the Abeeway trackers. 