``` js

{
  "deviceEUI" : "20635f028100003e",
  "time" : "2022-09-05T07:04:12.307Z",
  "customerId" : "100009247",
  "modelCfg" : "1:TPX_ba3df8fb-bc93-45ee-aa0d-b2f873b9bbc6",
  "dxProfileId" : "community-api",
  "coordinates" : [ 103.92496605945924, 1.3151012726371842, 0.0 ],
  "age" : 0,
  "validityState" : "NEW",
  "horizontalAccuracy" : 9,
  "incomingSubscriberId" : "100009247",
  "processedFeed" : {
    "SF" : 7,
    "deviceProfileId" : "ABEEWAY/MICRO",
    "payloadEncoded" : "0b485394a04001fdcfac233f286f61b7e45158da953ab4f5995b9d114f",
    "sequenceNumber" : 26429,
    "receptionTime" : "2022-09-05T07:04:12.307Z",
    "dynamicMotionState" : "STATIC",
    "temperatureMeasure" : 30.870588,
    "processedPacket" : {
      "SNR" : 9.0,
      "RSSI" : -73.0,
      "baseStationId" : "100008CE",
      "antennaCoordinates" : [ 103.924858, 1.314996 ]
    },
    "port" : 18
  },
  "resolvedTracker" : {
    "firmwareVersion" : "2.3.1",
    "bleFirmwareVersion" : "3.3.3",
    "messageType" : "DATA_SCAN_COLLECTION",
    "eventType" : "UNKNOWN",
    "shutdownCause" : "UNKNOWN",
    "trackingMode" : "PERMANENT_TRACKING",
    "gpsScanMode" : "UNKNOWN",
    "sensorMode" : "UNKNOWN",
    "periodicPositionInterval" : 3600,
    "batteryLevel" : 83,
    "batteryStatus" : "OPERATING",
    "sosFlag" : false,
    "activityCount" : -1,
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
    "configFlags" : {
      "framePendingMechanism" : true,
      "buttonPressToTurnDeviceOff" : true,
      "doubleClickIsSosModeOrAlert" : false,
      "downlinkSetParameterConfirmation" : true,
      "wifiPayloadWithNoCypher" : true,
      "bleAdvertisingAtStart" : true,
      "selectWifiScanOrGeolocStartMessage" : true,
      "ledBlinkWithGpsFix" : false,
      "startMotionEventUplink" : true,
      "endMotionEventUplink" : true,
      "otaJoinWhenLeavingModeOff" : false,
      "rejectAsymmetricBlePairing" : false,
      "enableLongWifiPayload" : false,
      "collectionLongReport" : false,
      "autoStart" : false
    },
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
    "collectionScanType" : "BLE_BEACONS",
    "collectionBLEFilterType" : "NO_FILTER",
    "collectionBLEFilterMain1" : 0,
    "collectionBLEFilterMain2" : 0,
    "collectionBLEFilterSecValue" : 0,
    "collectionBLEFilterSecMask" : 0,
    "collectionNbEntry" : 4,
    "networkTimeoutCheck" : -1,
    "networkTimeoutReset" : -1,
    "scanCollection" : {
      "scanType" : "BLE_BEACONS",
      "again" : false,
      "dataFormat" : "MAC_ADDRESS",
      "fragmentIdentification" : 0,
      "collectionIdentifier" : 1,
      "hash" : 253,
      "macAddressData" : [ {
        "rssi" : -49,
        "mac" : "AC:23:3F:28:6F:61"
      }, {
        "rssi" : -73,
        "mac" : "E4:51:58:DA:95:3A"
      }, {
        "rssi" : -76,
        "mac" : "F5:99:5B:9D:11:4F"
      } ]
    }
  },
  "uplinkPayload" : {
    "messageType" : "DATA_SCAN_COLLECTION",
    "trackingMode" : "PERMANENT_TRACKING",
    "batteryLevel" : 83,
    "batteryStatus" : "OPERATING",
    "ackToken" : 10,
    "periodicPosition" : false,
    "temperatureMeasure" : 30.9,
    "sosFlag" : 0,
    "appState" : 1,
    "dynamicMotionState" : "STATIC",
    "onDemand" : false,
    "payload" : "0b485394a04001fdcfac233f286f61b7e45158da953ab4f5995b9d114f",
    "deviceConfiguration" : {
      "mode" : "PERMANENT_TRACKING"
    },
    "dataScanCollection" : {
      "scanType" : "BLE_BEACONS",
      "again" : false,
      "dataFormat" : "MAC_ADDRESS",
      "fragmentIdentification" : 0,
      "collectionIdentifier" : 1,
      "hash" : 253,
      "macAddressData" : [ {
        "bssid" : "ac:23:3f:28:6f:61",
        "rssi" : -49
      }, {
        "bssid" : "e4:51:58:da:95:3a",
        "rssi" : -73
      }, {
        "bssid" : "f5:99:5b:9d:11:4f",
        "rssi" : -76
      } ]
    }
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
    "shockDetection" : 10,
    "configFlags" : {
      "framePendingMechanism" : true,
      "buttonPressToTurnOff" : true,
      "doubleClickIsSosModeOrAlert" : false,
      "downlinkSetParameterConfirmation" : true,
      "wifiPayloadWithNoCypher" : true,
      "bleAdvertisingAtStart" : true,
      "selectWifiScanOrGeolocStartMessage" : true,
      "ledBlinkWithGpsFix" : false,
      "startMotionEventUplink" : true,
      "endMotionEventUplink" : true,
      "otaJoinWhenLeavingModeOff" : false,
      "rejectAsymmetricPairing" : false,
      "enableLongWifiPayload" : false,
      "collectionLongReport" : false,
      "autoStart" : true,
      "forbidModeOff" : false,
      "sosModeSound" : true,
      "automaticDatarateSelection" : false,
      "extendedPosition" : false,
      "bleCli" : false
    },
    "collectionNbEntry" : 4,
    "collectionScanType" : "BLE_BEACONS",
    "collectionBLEFilterMain1" : 0,
    "collectionBLEFilterMain2" : 0,
    "collectionBLEFilterSecMask" : 0,
    "collectionBLEFilterSecValue" : 0,
    "collectionBLEFilterType" : "NO_FILTER"
  },
  "messageSource" : "LORA",
  "downlinkUrl" : "https://community.thingpark.io/iot-flow/downlinkMessages/6f7b1b1a-5887-447d-a734-014a4e6926a9"
}
``` 