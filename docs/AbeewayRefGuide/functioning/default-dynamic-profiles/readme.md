# Default and dynamic profiles

To simplify the configuration of the device, profiles have been added. These profiles allow the configuration of several predefined parameters at once.

## Presentation

Currently, 3 profiles are defined:
-   Sleep<sup>(1)</sup>
-   Economic<sup>(2)</sup>
-   Intensive<sup>(3)</sup>

If no profile is defined, Unknown (0) is used.
Refer to the [Parameters for operational modes](/AbeewayRefGuide/downlink-messages/parameters-configuration/#parameters-for-operational-modes) topic for more details.

Two parameters are defined to manage this feature:
-   *default_profile* parameter (Parameter ID: 0x65): This parameter defines the initialization value of the profile and is used when the device is powered ON for the first time, or resets.
-   *Dynamic profile* as a special parameter (Parameter ID: 0xF6): This parameter is used to dynamically change the profile. The value is not stored in flash, **the setting is lost after a reset**. and the device will restart with *default_profile* if the parameter is set or with the configuration it had before *Dynamic profile* was set.

This is the parameter to modify if the profile needs to be updated while the device is running.

## Configuration

When a profile is selected, some parameters will be forced to a specific value, while the others will keep their current value.

If the ***dynamic profile*** is set to a specific value (except Unknown value), and, if any forced parameter is changed to a new
value, the current ***dynamic profile*** profile is automatically reset to Unknown (0).

Hereafter is the list of parameters impacted when a profile (dynamic or default) is selected:
-   **Profile Unknown:** No profile defined . The parameters are managed by the user.
-   **Profile Sleep**
    -   *mode*: Standby
    -   *periodic_pos_period* (0x03): 3600 seconds
-   **Profile Economic**
    -   *mode*: motion tracking
    -   *periodic_pos_period* (0x03): 3600 seconds
    -   *ul_period*(0x00): 1200 seconds
-   **Profile Intensive**
    -   *mode*: motion tracking
    -   *periodic_pos_period* (0x03): 1800 seconds
    -   *ul_period*(0x00): 120 seconds

:::tip Note
These profiles are currently used mainly in Abeeway mobile app to manage tracker configuration
:::