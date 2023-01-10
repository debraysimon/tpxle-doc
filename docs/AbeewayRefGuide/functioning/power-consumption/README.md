# consumption


The tracker maintains the [**consumption** (special Parameter ID: 0xF7)](../../Parameters-default-configuration/firmware-parameters.html#miscellaneous-parameters) parameter which keeps tracker of the current power comsumption of the tracker

## Tracker behaviour for current firmware version (AT 2.4+)

### Rechargeable trackers (Micro Tracker/Smart Badge)
The **consumption** is never stored in flash, but rather in no-init RAM.
The write on parameter **consumption** is not useful, since the battery percentage is always calculated from the battery voltage.
The **consumption** parameter is reset each time the USB cable is
disconnected from the tracker. So, the estimated consumption indicates what we consumed since the last charge.


### Primary Battery trackers (Compact Tracker/Industrial Tracker)
**consumption** is stored in flash area of the tracker. This area of flash is preserved across tracker resets except in the case of brownout. The **consumption** parameter is updated in flash
only when the consumption difference (new value - stored value) exceeds a calculated threshold.
The threshold is 0.5 percent of the **battery_capacity**.

Examples:
- The threshold for a 19000 mAh battery is 19000*0.5/100 = 95 mAh
- The threshold for a 8000 mAh battery is 8000*0.5/100 = 40 mAh


## Tracker behaviour for earlier versions of firmware (AT 2.3 and below)
In earlier firmware versions, the total **consumption** was located
in a non-init RAM storage. This area is preserved across tracker resets except in the following cases:

- Brownout or battery replacement.
- MCU Firmmware upgrade is done via Bluetooth using [Abeeway Mobile app](/D-Reference/FirmwareUpdateOverview_R/). 
- Running a MFG or ACTT application could also erase the no-init RAM area and thus erase the **consumption** parameter.

However, it is preserved during the firmare upgrade via USB using [Abeeway Updater](/D-Reference/FirmwareUpdateOverview_R/).

### Rechargeable trackers (Micro Tracker/Smart Badge)
The **consumption** is not stored in flash but rather in no-init RAM.
The write on parameter **consumption** is not useful, since the battery percentage is always calculated from the battery voltage.
The **consumption** is reset to 0 during firmware reset.

### Primary Battery trackers (Compact Tracker/Industrial Tracker)
The **consumption** is not stored in flash but rather in no-init RAM.
The write on parameter **consumption** is useful, when the battery is replaced.
The **consumption** is reset to 0 when replacing batteries or during firmware reset.


:::tip Note
The **consumption** parameter is regularly updated each hour or when the consumption is requested
via the CLI or via LoRa Downlink.
:::


## Reporting of battery % in LoRaWAN uplinks
The tracker reports the current battery level (%) in [LoRaWAN common message header](../../uplink-messages/common-message-header/) (Supported since MCU Firmware V2.0). If your tracker is is already integration with [ThingPark X Location Engine](/B-Feature-Topics/IntegrateAppwithTPLocation_C/), then you can see the current battery level(%) in [Abeeway device manager](/B-Feature-Topics/AbeewayDeviceManager_C/)  as shown in the screenshot below.

<img src="./images/batteryPercentage.png" width="1500" border="1" />

Alternatively, you can use [Abeeway Driver](/C-Procedure-Topics/UseAbeewayDriver_T/#using-abeeway-driver) to decode LoRaWAN uplinks to retrieve the battery percentage.

## Steps to do when replacing batteries for Compact Tracker/Industrial Tracker
When replacing batteries in the tracker, you need to reset the **consumption** of the tracker as follows. There are following ways to do it.

### Method 1: Using ThingPark Location APIs
If you are using ThingPark Location APIs, you can use the APIs to reset the consumption of the tracker using Tracker Command API. The documentation URL for ThingPark Location on community Platform is [here](https://dx-api.thingpark.io/location-trackercommand/latest/doc/index.html#trackercommandtosendrequest). For other platforms, visit [here](/D-Reference/ThingParkLocationURLs/). Here is the example API call to reset the consumption of the tracker.
```
------------------------------ Snippet begin ------------------------------
{
  "trackerCommandType": "TrackerCommandToSendAbeewayDownlinkPayload",
  "deviceEUI": "20635f01e100081e",
  "deviceProfileId": "ABEEWAY/MICRO",
  "abeewayDownlinkPayload": {
    "downMessageType": "SET_PARAM",
    "ackToken": 3,
    "setParameters": {
      "powerConsumption": 0
    }
  },
  "thing": {
    "application": {
      "producerId": "abeeway",
      "moduleId": "asset-tracker",
      "version": "2"
    }
  }
}
------------------------------ Snippet End ------------------------------
```
:::tip Note
The **deviceProfileId** parameter should always be "ABEEWAY/MICRO" irrespective of the tracker type.
:::

### Method 2: Sending a downlink to the tracker
You can also send a downlink (0b0af700000000) on LoRaWAN port=2 to the tracker from the LoRaWAN network server to reset the consumption of the tracker. This downlink resets the value **consumption** parameter to 0.

The downlink can be consutructed with [Abeeway driver](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#reference-guides-and-tools) with the following example:

```
------------------------------ Snippet begin ------------------------------
curl -X 'POST' \
  'http://localhost:8095/iot-flow-driver/v1/decode ' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "direction": "downlink",
    "meta": {},
    "thing": {
        "application": {
            "producerId": "abeeway",
            "moduleId": "asset-tracker",
            "version": "2"
        }
    },
    "message": {
        "downMessageType": "SET_PARAM",
        "ackToken": 10,
        "setParameters": {
            "powerConsumption": 0
        }
    }
}
------------------------------ Snippet End ------------------------------
```

The response is below where 0b0af700000000 should be sent on LoRaWAN downlink to the tracker on fPort=2.

```
------------------------------ Snippet begin ------------------------------
{
  "direction": "downlink",
  "sourceTime": "2023-01-10T10:42:05.512Z",
  "meta": {
    "lorawan": {
      "fPort": 2
    }
  },
  "raw": {
    "binary": "0b0af700000000"
  },
  "message": {
    "downMessageType": "SET_PARAM",
    "ackToken": 10,
    "setParameters": {
      "powerConsumption": 0
    }
  },
  "thing": {
    "application": {
      "producerId": "abeeway",
      "moduleId": "asset-tracker",
      "version": "2"
    }
  }
}
------------------------------ Snippet End ------------------------------
