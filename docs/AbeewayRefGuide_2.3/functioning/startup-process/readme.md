# Startup process

 The startup process of Abeeway devices has been significantly modified since MCU firmware version 2.0. A process called shipping has been introduced to allow the shipping of the trackers to the final customer. This process puts the tracker in a deep low power state.
 Once the tracker arrives on the final customer site, it leaves the shipping state and starts the LoRaWAN&trade; join process. The shipping process can be disabled during the manufacturing.

 This process, including the shipping, is described as follows:

1.  The device is in the shipping state and waits for a long button press or activation of a [reed switch using magnet](../../devices-characteristics/compact-industrial/readme.md)<sup>(3)(4)</sup>.
2.  Then LoRaWAN&trade; join attempts are done:
    -   If the LoRaWAN&trade; join succeeds, the application starts (go to step 3)
    -   If the LoRaWAN&trade; join fails, the number of attempts is checked against a fixed limit<sup>(1)</sup>
        -   If the limit is not reached, a new LoRaWAN&trade; join attempt is done, otherwise, the tracker goes back to shipping state (back to step 1)
        -   There is a random delay between different join attempts which range from 15 minutes to 1 hour. 
3. The device starts<sup>(2)</sup>

 Once the join succeeds, the tracker doesn't go back to the shipping state, even after the device resets.

 During join step, the BLE starts to advertise if the bit 5 of the *config_flags* parameter is set. See [Bluetooth Connection and pairing](../../ble-communication-interface/connection-pairing/readme.md) for details about the advertisement duration.

:::tip Notes

<sup>(1)</sup> The number of attempts is limited to 15 in EU region and 27 for other regions for micro trackers and smart badge, it is infinite for compact trackers and Industrial trackers.

<sup>(2)</sup> If the autostart feature is enabled (via *config_flags* parameter) the tracker will skip shipping state and go directly to LoRaWAN joining state (after MCU firmware reset if the tracker had been successfully joined with LoRaWAN network). Otherwise, another long press on the button (duration configured in *button_mapping* duration) is required.

<sup>(3)</sup> The reed switch sequence will work to get out of shipping mode regardless of the value of *reed_switch_configuration* parameter.

<sup>(4)</sup> The Industrial tracker does not have reed switch and is shipped directly in the join state.
:::

This feature is supported by all the Abeeway trackers. 