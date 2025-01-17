``` js
{
  "deviceEUI" : "20635f028100003e",
  "time" : "2022-09-05T00:34:58.246Z",
  "customerId" : "100009247",
  "modelCfg" : "1:TPX_ba3df8fb-bc93-45ee-aa0d-b2f873b9bbc6",
  "dxProfileId" : "community-api",
  "coordinates" : [ 103.92500463, 1.31511024, 0.0 ],
  "age" : 9,
  "validityState" : "PREVIOUS",
  "horizontalAccuracy" : 36,
  "incomingSubscriberId" : "100009247",
  "processedFeed" : {
    "SF" : 10,
    "deviceProfileId" : "ABEEWAY/MICRO",
    "payloadEncoded" : "074c64a3a00301fd9904bef41a",
    "sequenceNumber" : 25644,
    "receptionTime" : "2022-09-05T00:34:58.246Z",
    "dynamicMotionState" : "MOVING",
    "temperatureMeasure" : 38.458824,
    "processedPacket" : {
      "SNR" : 7.75,
      "RSSI" : -67.0,
      "baseStationId" : "100008CE",
      "antennaCoordinates" : [ 103.924858, 1.314996 ]
    },
    "port" : 18
  },
  "resolvedTracker" : {
    "firmwareVersion" : "2.3.1",
    "bleFirmwareVersion" : "3.3.3",
    "messageType" : "SHOCK_DETECTION",
    "eventType" : "UNKNOWN",
    "shutdownCause" : "UNKNOWN",
    "trackingMode" : "PERMANENT_TRACKING",
    "gpsScanMode" : "UNKNOWN",
    "sensorMode" : "UNKNOWN",
    "periodicPositionInterval" : 3600,
    "batteryLevel" : 100,
    "batteryStatus" : "OPERATING",
    "sosFlag" : false,
    "nbOfShocks" : 1,
    "accelerometerShockData" : [ -615, 1214, -3046 ],
    "trackingUlPeriod" : 30,
    "loralivePeriod" : 600,
    "energyStatusPeriod" : 0,
    "geolocSensorProfile" : "WIFI_ONLY",
    "oneshotGeolocMethod" : "GPS",
    "extAntennaProfile" : "UNKNOWN",
    "motionStartEndNbTx" : -1,
    "gpsTimeout" : -1,
    "xgpsTimeout" : -1,
    "gpsEHPE" : 20,
    "gpsConvergence" : 30,
    "transmitStrat" : "CUSTOM_STRATEGY",
    "bleBeaconCount" : -1,
    "bleBeaconTimeout" : -1,
    "gpsStandbyTimeout" : -1,
    "confirmedUlBitmap" : 0,
    "confirmedUlRetry" : 3,
    "motionSensitivity" : -1,
    "shockDetection" : 10,
    "periodicActivityPeriod" : -1,
    "motionDuration" : -1,
    "bleRssiFilter" : -1,
    "temperatureHigh" : -1.0,
    "temperatureLow" : -1.0,
    "temperatureAction" : "UNKNOWN",
    "bleBond" : "UNKNOWN",
    "transmitStratCustom" : {
      "ADREnabled" : false,
      "transmissionType" : "SINGLE",
      "firstTransmissionDatarateDistribution" : "RANDOM",
      "secondTransmissionDatarateDistribution" : "RANDOM",
      "firstTransmissionDatarate" : {
        "dr0" : false,
        "dr1" : false,
        "dr2" : true,
        "dr3" : false,
        "dr4" : false,
        "dr5" : false,
        "dr6" : false,
        "dr7" : false
      },
      "secondTransmissionDatarate" : {
        "dr0" : false,
        "dr1" : false,
        "dr2" : false,
        "dr3" : false,
        "dr4" : false,
        "dr5" : false,
        "dr6" : false,
        "dr7" : false
      }
    },
    "batteryCapacity" : -1,
    "reedSwitchConfiguration" : "UNKNOWN",
    "collectionScanType" : "UNKNOWN",
    "collectionBLEFilterType" : "UNKNOWN",
    "collectionBLEFilterMain1" : -1,
    "collectionBLEFilterMain2" : -1,
    "collectionBLEFilterSecValue" : -1,
    "collectionBLEFilterSecMask" : -1,
    "collectionNbEntry" : -1,
    "networkTimeoutCheck" : -1,
    "networkTimeoutReset" : -1
  },
  "uplinkPayload" : {
    "messageType" : "SHOCK_DETECTION",
    "trackingMode" : "PERMANENT_TRACKING",
    "batteryLevel" : 100,
    "batteryStatus" : "OPERATING",
    "ackToken" : 10,
    "periodicPosition" : false,
    "temperatureMeasure" : 38.5,
    "miscDataTag" : "SHOCK_DETECTION",
    "sosFlag" : 0,
    "appState" : 1,
    "dynamicMotionState" : "MOVING",
    "onDemand" : false,
    "payload" : "074c64a3a00301fd9904bef41a",
    "deviceConfiguration" : {
      "mode" : "PERMANENT_TRACKING"
    },
    "nbOfshock" : 1,
    "accelerometerShockData" : [ -615, 1214, -3046 ]
  },
  "resolvedTrackerParameters" : {
    "mode" : "PERMANENT_TRACKING",
    "firmwareVersion" : "2.3.1",
    "bleFirmwareVersion" : "3.3.3",
    "trackingUlPeriod" : 30,
    "geolocSensorProfile" : "WIFI_ONLY",
    "oneshotGeolocMethod" : "GPS",
    "gpsEhpe" : 20,
    "gpsConvergence" : 30,
    "transmitStrat" : "CUSTOM_STRATEGY",
    "loralivePeriod" : 600,
    "energyStatusPeriod" : 0,
    "periodicPositionInterval" : 3600,
    "transmitStratCustom" : {
      "adrEnabled" : 0,
      "transmissionType" : "SINGLE",
      "firstTransmissionDatarateDistribution" : "RANDOM",
      "secondTransmissionDatarateDistribution" : "RANDOM",
      "firstTransmissionDatarate" : {
        "dr0" : 0,
        "dr1" : 0,
        "dr2" : 1,
        "dr3" : 0,
        "dr4" : 0,
        "dr5" : 0,
        "dr6" : 0,
        "dr7" : 0
      },
      "secondTransmissionDatarate" : {
        "dr0" : 0,
        "dr1" : 0,
        "dr2" : 0,
        "dr3" : 0,
        "dr4" : 0,
        "dr5" : 0,
        "dr6" : 0,
        "dr7" : 0
      }
    },
    "defaultProfile" : "UNKNOWN",
    "dynamicProfile" : "Unknown",
    "unknown" : 0,
    "periodicPositionPeriod" : 3600,
    "confirmedUplink" : {
      "framePending" : false,
      "position" : false,
      "energyStatus" : false,
      "healthStatus" : false,
      "heartbeat" : false,
      "activityStatus" : false,
      "configuration" : false,
      "shockDetection" : false,
      "shutdown" : false,
      "event" : false,
      "scanCollection" : false,
      "extendedPosition" : false,
      "debug" : false,
      "confirmedUlBitmap" : 0,
      "confirmedUlRetry" : 3
    },
    "confirmedUlBitmap" : 0,
    "confirmedUlRetry" : 3,
    "shockDetection" : 10
  },
  "messageSource" : "LORA",
  "downlinkUrl" : "https://community.thingpark.io/iot-flow/downlinkMessages/6f7b1b1a-5887-447d-a734-014a4e6926a9"
}
``` 