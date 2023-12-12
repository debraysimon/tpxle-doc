# Decoding an uplink message
The input of the driver is a LoRaWAN® uplink payload coming from an Abeeway tracker using a firmware Asset Tracker version 1.9 or earlier.
The output of the driver is a string in the well-known JSON format.

## Example - Decoding a position message
This example shows the decoding of an uplink position message.
The LoRaWAN® payload to be parsed is the following:
`"032ce8844926c8675e842cd7c76cc217d827bebc34dbfdad0e31b4c8675e8200d4b2"`

1. Here is the request:<br/>

```

------------------------------ Snippet begin ------------------------------
curl -X POST \
    http://localhost:8095/iot-flow-driver/v1/decode \
    -H 'Content-Type: application/json' \
    -d '{
        "direction": "uplink",
    "meta": {
        "lorawan": {
        "fPort": 18
        }
    },
    "thing": {
        "application": {
            "producerId": "abeeway",
            "moduleId": "asset-tracker",
            "version": "2"
        }
    },
    "raw": {
        "binary":
        "032ce8844926c8675e842cd7c76cc217d827bebc34dbfdad0e31b4c8675e8200d4b2"
    }
}
------------------------------ Snippet End ------------------------------

```

2. The response to the request is the following, where `"message"` is the decoded payload:

```

------------------------------ Snippet begin ------------------------------
{
  "direction": "uplink",
  "sourceTime": 1568725985852,
  "meta": {
    "driverId": "abeeway:asset-tracker:2"
  },
  "raw": {
    "binary": "032ce8844926c8675e842cd7c76cc217d827bebc34dbfdad0e31b4c8675e8200d4b2"
  },
  "message": {
    "messageType": "POSITION_MESSAGE",
    "trackingMode": "MOTION_TRACKING",
    "batteryVoltage": 4.08,
    "ackToken": 4,
    "rawPositionType": "WIFI_BSSIDS_WITH_NO_CYPHER",
    "periodicPosition": false,
    "temperatureMeasure": 22.8,
    "sosFlag": 0,
    "appState": 1,
    "dynamicMotionState": MOVING,
    "onDemand": false,
    "payload": "032ce8844926c8675e842cd7c76cc217d827bebc34dbfdad0e31b4c8675e8200d4b2",
    "bssids": {
      "34:db:fd:ad:0e:31": -76,
      "c8:67:5e:84:2c:d7": -57,
      "6c:c2:17:d8:27:be": -68,
      "c8:67:5e:82:00:d4": -78
    },
    "age": 304
  },
  "thing": {
    "model": {
      "producerId": "abeeway",
      "moduleId": "micro-tracker",
      "version": "3"
    "application": {
      "producerId": "abeeway",
      "moduleId": "asset-tracker",
      "version": "2"
    }
  },
}
------------------------------ Snippet end ------------------------------

```
