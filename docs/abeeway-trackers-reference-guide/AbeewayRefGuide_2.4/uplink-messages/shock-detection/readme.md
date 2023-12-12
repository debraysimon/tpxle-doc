# Shock detection messages

| Common header              | Data   | Data             | Data                         | Data                         | Data                         | Data      |
| -------------------------- | ------ | ---------------- | ---------------------------- | ---------------------------- | ---------------------------- |-----------|
| Byte 0-4                   | Byte 5 | Byte 6           | Byte 7-8                     | Byte 9-10                    | Byte 11-12                   |Byte 13-16 |
| Header with **Type**\=0x07 | 0x03   | **Nb of shocks** | **Accelerometer shock data** | **Accelerometer shock data** | **Accelerometer shock data** |**Accelerometer shock data**|
| &nbsp;                          | &nbsp;      | &nbsp;                | **X Axis**                   | **Y Axis**                   | **Z Axis**                   |**GADD index**|

**Nb of shocks**: Number of shocks having an accelerometer value above  
the configured thresholds.

## Accelerometer shock data

- **X Axis**: Value measured on axis X of the accelerometer, it is expressed in mG
- **Y Axis**: Value measured on axis Y of the accelerometer, it is expressed in mG
- **Z Axis**: Value measured on axis Z of the accelerometer, it is expressed in mG
- **GADD index**: Index on 32 bits representing the intensity of the shock 

:::tip Notes
1.  Signed 16 bit value on each axis, refer to the section [Two's complement Encoding](../../downlink-messages/two-complement-encoding/readme.md) to have information for the encoding.
2.  G is the terrestrial gravity, mG means milli G.
:::
