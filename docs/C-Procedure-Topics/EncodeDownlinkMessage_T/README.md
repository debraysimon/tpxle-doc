
# Encoding a downlink message
The encoder takes the JSON format string and converts it into the downlink hexadecimal payload.
Each downlink message must contain the following fields:
* `DownMessageType` : Type of downlink messages (string format). Acceptable values are:
    * `POS_ON_DEMAND` : Request a position

* `SET_MODE` : Change the operation mode of a tracker

* `START_SOS_MODE` : Start the SOS mode

* `CLEAR_SOS_MODE` : Stop the SOS mode

* `DEBUG_COMMAND` : Send debug commands

* `SET_PARAM` : Modify the tracker’s parameter or parameters

* `REQUEST_CONFIG` : Read the tracker configuration

* `REQUEST_TEMPERATURE_STATUS` : Request a temperature status


* `AckToken` : Random integer ranging from 0 to 15 and used by the tracker to acknowledge the downlink message. For more information about setting and processing this field, see [Asset Tracker Driver User Guide](/D-Reference/DocLibrary_R/#AssetTrackerDriver).

::: tip Notes
* Each field name must be coded as a string.<br/>

* Extra fields must be provided according to the downlink message type.
* **All types of messages are supported since Asset Tracker V1.7. However, some parameters are new since v1.8 or v1.9 in SET_PARAM, REQUEST_CONFIG, and DEBUG_COMMAND messages**.

:::

## Example - Request a position
1. This message requests a position to the tracker, where `"message"` is the downlink request in JSON.<br/><br/><br/>

```
------------------------------ Snippet begin ------------------------------
curl -X POST \
  http://localhost:8095/iot-flow-driver/v1/encode \
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
      "downMessageType": "POS_ON_DEMAND",
      "ackToken": 10
  }
}'
------------------------------ Snippet End ------------------------------
```

2. Here is the output of the driver results in the binary payload `"010a"` that can be sent to Abeeway tracker on LoRaWAN® downlink port number 2.

```
------------------------------ Snippet begin ------------------------------
{
  "direction": "downlink",
  "sourceTime": "2019-06-07T14:28:52.016Z",
  "meta": {
    "driverId": "abeeway:asset-tracker:2"
  },
  "raw": {
    "binary": "010a"
  },
  "message": {
    "DownMessageType": "POS_ON_DEMAND",
    "AckToken": 10
  },
  "thing": {
    "application": {
      "producerId": "abeeway",
      "moduleId": "asset-tracker",
      "version": "2"
    }
  }
}
------------------------------ Snippet end ------------------------------
```
