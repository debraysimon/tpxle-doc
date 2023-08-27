# Heartbeat messages

|  Common header |  Data  |     Data      |       Data |
|--------------------|------------|-------------------|----------------|
|  Byte 0-4          |  Byte 5    |  Byte 6-8       |  Byte 9-11          |
|  Header with **Type**=0x05       |  **Cause** |  **FW version** |  **BLE FW version** |

 **Cause**: Last MCU reset cause
-   0x00- Default value, no reset was done on the tracker
-   0x01- Power-On Reset
-   0x02- Brown-Out Unregulated Domain Reset
-   0x04- Brown-Out Regulated Domain Reset
-   0x08- External Pin Reset
-   0x10- Watchdog Reset
-   0x20- Lockup Reset
-   0x40- System Request (application) Reset

 **FW version**: MCU application Firmware version on the device,
-   Byte 6: Firmware major version
-   Byte 7: Firmware minor revision
-   Byte 8: Firmware iteration

 **BLE FW version**: BLE Firmware version on the device,
-   Byte 9: Firmware major version
-   Byte 10: Firmware minor revision
-   Byte 11: Firmware iteration

:::tip Note
The fields Major, Minor and Revision are encoded in the firmware version as follows: Major.Minor-Iteration. Example:2.1-0 is coded as 0x020100
:::