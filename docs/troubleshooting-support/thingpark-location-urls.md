# ThingPark platforms URLs

## How to create a free account?

To create a free account for:

*  Community, use: [https://community.thingpark.org/](https://community.thingpark.org/)<br/>


Other ThingPark platforms, contact either:

* Your local distributor with whom you purchased Abeeway trackers.<br/>

* [Abeeway support](https://thingpark.page.link/AbeewaySupport) if you purchased trackers from Actility or Abeeway.


## Access to Abeeway Device Manager and DX Location API

This table describes how to access  (ADM) and  for all the ThingPark platforms.

:::warning Important

- When routing the LoRaWAN® payloads to ThingPark Location, you must set the content type to XML.
- The routing URLs below are for ThingPark Location B2B use case. If you wish to use Abeeway mobile app, please visit [here](../../../Getting%20started/getting-started-with-abeeway-tracking-app). **The routing URL for B2B Use case and B2C Use case should never be set at the same time on the same tracker towards to the same ThingPark Location platform. This is not supported and will result in errors for both the use cases. The tracker can be only in one of the use cases but NOT both at the same time.**
:::

| ThingPark operator      | Abeeway Device Manager (ADM) | Application Server (AS) routing URL | Application Server (AS) Key<br/>(Tunnel Interface Authentication Key) | DX API Platform | DX API Prefix |
| ----------------------- | ---------------------------- | -------------- | ------ | --------------- | ------------- |
| **[COMMUNITY](https://community.thingpark.io/tpe/)**           | [here](https://community.thingpark.io/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=community-api) | [https://abeeway-eu-eco.thingpark.com:50540](https://abeeway-eu-eco.thingpark.com:50540) | e8959e26fd9bce52700605a9cfe74d53 | [Getting Started](https://dx-api.thingpark.io/getstarted/readme.md#/)<br/>[Documentation](https://dx-api.thingpark.io/location/latest)<br/>[Swagger UI](https://dx-api.thingpark.io/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json)|community-api|
| **[DEV1](https://dev1.thingpark.com/portal/web/)**                | [here](https://dev1.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=dev1-api) | [https://abeeway-eu-eco.thingpark.com:50536](https://abeeway-eu-eco.thingpark.com:50536) |  No | [Getting Started](https://dx-api.thingpark.io/getstarted/readme.md#/)<br/>[Documentation](https://dx-api.thingpark.io/location/latest)<br/>[Swagger UI](https://dx-api.thingpark.io/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) |dev1-api |
| **[TPE SAAS PREPROD EU](https://thingparkenterprise-preprod.eu.actility.com/tpe)** | [here](https://thingparkenterprise-preprod.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-preprod-api) | [https://abeeway-dev1.thingpark.com:50539](https://abeeway-dev1.thingpark.com:50539) |  Ask your local distributor<br/>or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) | [Getting Started](https://dx-api.thingpark.io/getstarted/readme.md#/)<br/>[Documentation](https://dx-api.thingpark.io/location/latest)<br/>[Swagger UI](https://dx-api.thingpark.io/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json)|tpe-eu-preprod-api|
| **[TPE SaaS EU](https://thingparkenterprise.eu.actility.com/tpe/)**         | [here](https://thingparkenterprise.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-api) | [https://abeeway-eu.thingpark.com:50540](https://abeeway-eu.thingpark.com:50540/) |  Ask your local distributor<br/>or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) |[Getting Started](https://dx-api.thingpark.com/getstarted/readme.md#/)<br/>[Documentation](https://dx-api.thingpark.com/location/latest)<br/>[Swagger UI](https://dx-api.thingpark.com/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) |tpe-eu-api|
| **[IOT](https://iot.thingpark.com/portal/web/)**                 | [here](https://iot.thingpark.com/abeewayDeviceAnalyzer/?dxprofile=iot-api) | [https://abeeway-eu.thingpark.com:50536](https://abeeway-eu.thingpark.com:50536/) |  No | [Getting Started](https://dx-api.thingpark.com/getstarted/readme.md#/)<br/>[Documentation](https://dx-api.thingpark.com/location/latest)<br/>[Swagger UI](https://dx-api.thingpark.com/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) | iot-api|
| **[TPE SaaS AU](https://thingparkenterprise.au.actility.com/tpe/)**         | [here](https://thingparkenterprise.au.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-au1-api) | [https://abeeway-au.thingpark.com:50537](https://abeeway-au.thingpark.com:50537/) |  Ask your local distributor<br/>or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) |[Getting Started](https://dx-api-au1.thingpark.com/getstarted/readme.md#/)<br/>[Documentation](https://dx-api-au1.thingpark.com/location/latest)<br/>[Swagger UI](https://dx-api-au1.thingpark.com/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) |tpe-au1-api|
| **[TPE SaaS US](https://thingparkenterprise.us.actility.com/tpe)**         | [here](https://thingparkenterprise.us.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-us-api) | [https://abeeway-us.thingpark.com:50540](https://abeeway-us.thingpark.com:50540) |  89f099f1ac454f121a4aeab50a41ef54 | [Getting Started](https://dx-api-us.thingpark.com/getstarted/readme.md#/)<br/>[Documentation](https://dx-api-us.thingpark.com/location/latest)<br/>[Swagger UI](https://dx-api-us.thingpark.com/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) | tpe-us-api|

