# Network timeout monitoring

 This feature is supported by all Abeeway trackers.

 This feature monitors the LoRaWAN&trade; network and resets the device in
 case of trouble. The monitoring consists of two periods:

-   *network_timeout_check*: once this duration elapses the tracker prepends a Link Check Request in all LoRaWAN&trade; uplinks (to force the network to answer). The associated timer is  restarted each time a LoRaWAN&trade; downlink is received.
-   *network_timeout_reset*: this duration covers the link check request period. Once elapsed, the tracker resets.

**Example**:

 *network_timeout_check*= 172800 seconds (2 days)  
 *network_timeout_reset*= 86400 seconds (1 day)  
 If after 2 days the tracker did not receive any downlink, it starts
 the link check request process. After 1 day of link check request
 process without answers, the tracker resets.

 Any downlink received by the tracker restarts the timer/mechanism.

## Possible configurations

|  network_timeout_check|  network_timeout_reset     |  Behaviour      |
|----------------------------|--------------------------------|---------------------|
|  Value = 0          |  Value = 0          |  Feature disabled.  |
|  Value = 0          |  Value ≠ 0          |  A Link Check Request is in all payloads|
|  Value ≠ 0          |  Value = 0          |  When in link check request period, there is no reset as no timeout is set|
|  Value ≠ 0          |  Value ≠ 0          |  Normal configuration            |
