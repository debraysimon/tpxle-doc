# Two's complement Encoding

 Some parameters as well as some values inside uplinks are coded in two's complement.

 This encoding provides positives and negatives values depending on the setting of the MSB (Most Significant Bit):
-   MSB=0, the number is positive and doesn't need any transformation
-   MSB=1, the number is negative. To have the actual value, each bit ofthe hexadecimal number should be toggled (transforming the 0 bit to 1 and the 1 bit to 0) then add 1 to the result.

**Examples**:

 In the following, the notation prefix 0x is used for hexadecimal
 representations and 0b for binary.
 
 Example 1. Hexadecimal value on 4 bits:
 0xA (0b1010) gives 0b0101 + 1 = 0b0110 = -6
 0x3 (0b0011) = 3

 Example 2. Hexadecimal value on 8 bits:
 0xF5 (0b11110101) gives 0b00001010 + 1 = 0b00001011 = -11
 0x6B (0b01101011) gives 107

 Example 3. Hexadecimal value on 16 bits:
 0x0xfdF5 (0b1111110111110101) gives 0b0000001000001010 + 1 = 0b0000001000001011 = -523
 0x506B (0b01101011) gives 20587