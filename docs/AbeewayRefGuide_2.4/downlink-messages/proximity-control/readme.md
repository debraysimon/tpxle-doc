# Proximity control

|  Byte 0 |  Byte 1  |  Byte2    |  Byte 3+             |
|---------|----------|-----------|----------------------|
|  0x07   |  **ACK** |  **Type** |  **Additional Data** |

 **ACK**: Acknowledge token. Refer to the section [Acknowledge token](../../downlink-messages/ack-token/readme.md) **Max value is 0x0F**.

**Type:**

0. Get record status

1. Set Whitelist

2. Get Daily Report

3. Clear Daily Report

 **Additional Data**: depends on the selected **type**

 For more details, please refer to the dedicated application note [AN-007_proximity_feature](../../../D-Reference/DocLibrary_R/AbeewayTrackers_R.md#application-notes)