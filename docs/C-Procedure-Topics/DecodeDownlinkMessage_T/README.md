
# Decoding a downlink message
The input of the driver is a LoRaWAN® downlink payload sent to an Abeeway tracker using a firmware Asset Tracker version 1.9 and above.
The output of the driver is a string in the well-known JSON format.

## Example
This example shows the decoding of a downlink message.
1. The LoRaWAN® payload to be parsed is the following: `"0b0a1512345678"`<br/>

```
------------------------------ Snippet begin ------------------------------
curl -X POST \
  http://dx-api.thingpark.com/location-driver/latest/api/decode \
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
    "raw": {
        "binary": "0b0a1512345678"
    }
}'
------------------------------ Snippet End ------------------------------
```

2. The response is the following, where `"message"` is the decoded payload:


```
------------------------------ Snippet begin ------------------------------
{
    "direction": "downlink",
    "sourceTime": 1568973729059,
    "meta": {
        "driverId": "abeeway:asset-tracker:2"
    },
    "raw": {
        "binary": "0b0a1512345678"
    },
    "message": {
        "downMessageType": "SET_PARAM",
        "ackToken": 10,
        "setParameters": {
            "shockDetection": 305419896
        },
        "payload": "0b0a1512345678"
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
