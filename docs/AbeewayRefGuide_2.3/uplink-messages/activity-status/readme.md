# Activity status messages

## Activity operating mode

When the operation mode is activity, the activity status reporting has the following format: Common header with **Type**=0x07

|  Byte  | Data          |
|------------|-------------------|
| Byte 5     |  Byte 6-9         |
| **0x01**   | **Activity data** |

**Activity data**: Activity counter. Unsigned 32 bits value in big endian format (MSB first).

## Side operating mode

 When the activity is requested via the side operating mode (*periodic_activity_period* parameter not null) the status has the following format:
 Common header with **Type**=0x07
 **Data**
| Byte 5 |  Byte 6-7 |  Byte 8-9 |  Byte 10-11 |  Byte 12-13 |  Byte 14-15 |  Byte 16-17 |  Byte 18-21 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| 0x04 |  Window 1 |  Window 2|Window 3 |  Window 4 |  Window 5 |  Window 6 | Global counter |

 **Window x**: value containing the activity counter during the x<sup>th</sup> time window. The window 6 is the most recent one and the window 1 is the oldest.

 **Global counter**: Global activity counter, it contains the activity since the beginning.