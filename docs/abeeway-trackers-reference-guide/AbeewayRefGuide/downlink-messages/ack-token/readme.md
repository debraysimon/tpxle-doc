# Acknowledge token

 It provides a way to indicate to the application that a given message has been received by the tracker.
 The acknowledge token is transmitted in every uplink message, and it is updated when the tracker receives a LoRaWAN™ message. This way, each time the server receives a LoRaWAN™ uplink, it knows whether the previous message has been received.

 The acknowledge token is four bits size. Its value ranges from 0 to 15 (0x0F).

:::tip Notes
 1. The ack token value must be changed for each downlink. 

 2. It's up to the application to process or not the ack tokens.

 3. It's up to the application to manage the confirmations. It can either wait for the matching ack token in the uplink message before sending another downlink or send multiple downlinks and later waits for the acks.
 :::