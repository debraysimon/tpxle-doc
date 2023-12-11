# Encoded form

Some parameters are encoded with the following algorithm:

```
static float \_step_size (float **lo**, float **hi**, unsigned **nbits**, unsigned **nresv**)
{ return 1.0/((((1 \<\< **nbits**) -1) -**nresv**)/(**hi** -**lo**));}
```
```
float mt_value_decode(uint32_t value, float **lo**, float **hi**, unsigned **nbits**, unsigned **nresv**)
{ return ((value -**nresv** /2) \* \_step_size(**lo**, **hi**, **nbits**, **nresv**) + **lo**);}
```

 Where:
-   **nbits**: Number of bits used to encode.
-   **lo**: Min value that can be encoded
-   **hi**: Max value that can be encoded
-   **nresv**: Number of reserved values, not used for the encoding.

:::tip Notes

1. Values calculated using this formula provide a truncated value rounding within a range of step_size. Decoded value \< Real value \< decoded value + step_size.
2. **if real value \< step size, then a value of 0 is decoded**.
:::