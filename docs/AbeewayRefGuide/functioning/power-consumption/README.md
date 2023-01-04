# Power Consumption


The tracker maintains the **power consumption** (special Parameter ID: 0xF7) which keeps tracker of the current power comsumption of the tracker

## Tracker behaviour for current firmware version (AT 2.4+)

### Rechargeable trackers (Micro Tracker/Smart Badge)
The **power consumption** is never stored in flash, but rather in no-init RAM.
The write on parameter **power consumption** is not useful, since the battery percentage is always calculated from the battery voltage.
The **power consumption** parameter is reset each time the USB cable is
disconnected from the tracker. So, the estimated consumption indicates what we consumed since the last charge.


### Primary Battery trackers (Compact Tracker/Industrial Tracker)
**power consumption** is stored in flash area of the tracker. This area of flash is preserved across tracker resets except in the case of brownout. The **power consumption** parameter is updated in flash
only when the consumption difference (new value - stored value) exceeds a calculated threshold.
The threshold is 0.5 percent of the **battery_capacity**.

Examples:
- The threshold for a 19000 mAh battery is 19000*0.5/100 = 95 mAh
- The threshold for a 8000 mAh battery is 8000*0.5/100 = 40 mAh


## Tracker behaviour for earlier versions of firmware (AT 2.3 and below)
In earlier firmware versions, the total **power consumption** were located
in a non-init RAM storage. This area is preserved across tracker resets except in the following cases:

- Brownout or battery replacement.
- MCU Firmmware upgrade is done via Bluetooth using [Abeeway Mobile app](/D-Reference/FirmwareUpdateOverview_R/). 
- Running a MFG or ACTT application could also erase the no-init RAM area and thus erase the **power consumption** parameter.

However, it is preserved during the firmare upgrade via USB using [Abeeway Updater](/D-Reference/FirmwareUpdateOverview_R/)

### Rechargeable trackers (Micro Tracker/Smart Badge)
The **power consumption** is not stored in flash but rather in no-init RAM.
The write on parameter **power consumption** is not useful, since the battery percentage is always calculated from the battery voltage.
The **power consumption** is never reset (so, it indicates the power consumption since the last reset).

### Primary Battery trackers (Compact Tracker/Industrial Tracker)
The **power consumption** is not stored in flash but rather in no-init RAM.
The write on parameter **power consumption** is useful, when the battery is replaced.
The **power consumption** is reset when replacing batteries or during firmware reset.


:::tip Note
The **power consumption** parameter is regularly updated each hour or when the consumption is requested
via the CLI or via LoRa.
:::