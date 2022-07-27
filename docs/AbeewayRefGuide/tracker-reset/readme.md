# Tracker reset

 The micro tracker and smart badge can be reset by entering the following special button sequence:
-   ESC sequence for more than 14 seconds
-   1 click
-   Double-click
-   1 press

**-> The tracker will play reset melody if the sequence is successful.**

:::tip Notes
1.  A button action is needed to activate the special sequence mode (It is configured in *button_mapping* parameter) this mode is left after an error in the sequence or 10 seconds without any action on the button
2.  **Click:** Press the button for \<1 second
3.  **Press**: Press the button between 1 and *press_duration* +3 seconds.
4.  The default value of *press_duration* is 1 seconds (configurable via *button_mapping* parameter) 
5.  **Between 2 button sequences, a delay of 20 seconds must be respected**. If this delay is not respected the second sequence won't be considered.
:::