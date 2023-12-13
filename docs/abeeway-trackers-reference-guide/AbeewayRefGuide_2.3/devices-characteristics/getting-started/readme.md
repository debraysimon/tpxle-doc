# Getting started

Your Device needs to be registered on a LoRaWAN™ network

-   Your LoRaWAN™ network provider can use one of the two activation modes:
    -   OTAA (Over The Air Activation): This mode requires the following keys to join the network: DEVEUI, APPEUI and APPKEY for each device. (It is the one mostly used and trackers shipped by default are in this mode)
    -   ABP (Activation by personalization): This mode requires the following keys to connect to the network: DEVEUI, DEVADDR, NWKSKEY and APPSKEY
-   Depending on your operator, some actions need to be done to activate the transfer of the data through Abeeway servers. Please refer to your LoRaWAN™ network provider for more information.

The application firmware will start as soon as LoRaWAN™ join is successfully done.

:::tip Note

The provided trackers are in OTA configuration only. It can't be
changed by configuration. If you need trackers working in ABP please
refer to your local distributor or [Abeeway support](../../../../troubleshooting-support/faq.md) if you purchased
the trackers from Actility/Abeeway.
:::

## LoRaWAN transmission

The following regions can be supported by Abeeway trackers

-   EU868
-   AS923
-   IN865
-   RU864
-   US915
-   AU915

For more details about LoRaWAN transmission strategies and how to adapt them, refer to the
application note [AN-002_LoRa_Transmission_strategy](../../../../documentation-library/abeeway-trackers#application-notes)

:::tip Note

In EU 868 the optional data rate DR6 and DR7 (SF7BW250 and FSK50) are not supported
:::
