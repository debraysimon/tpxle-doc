# ThingPark platforms URLs

## How to create a free account?

To create a free account for:

*  Community, use: [https://community.thingpark.org/](https://community.thingpark.org/)<br/>


Other ThingPark platforms, contact either:

* Your local distributor with whom you purchased Abeeway trackers.<br/>

* [Abeeway support](https://thingpark.page.link/AbeewaySupport) if you purchased trackers from Actility or Abeeway.


## Access to Abeeway Device Manager and DX Location API

This table describes how to access  (ADM) and  for all the ThingPark platforms.

::: warning Important

- When routing the LoRaWAN® payloads to ThingPark Location, you must set the content type to XML.
- The routing URLs below are for ThingPark Location B2B use case. If you wish to use Abeeway mobile app, please visit [here](../../C-Procedure-Topics/GetStartedMobileApp_T/README.md). **The routing URL for B2B Use case and B2C Use case should never be set at the same time on the same tracker towards to the same ThingPark Location platform. This is not supported and will result in errors for both the use cases. The tracker can be only in one of the use cases but NOT both at the same time.**
:::

| ThingPark operator      | Abeeway Device Manager (ADM) | AS routing URL | AS Key (Tunnel Interface Authentication Key) | DX API Platform | DX API Prefix |
| ----------------------- | ---------------------------- | -------------- | ------ | --------------- | ------------- |
| **POC**                 | [https://poc.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=poc-api](https://poc.thingpark.com/thingpark/abeewayDeviceaAnalyzer/index.php?dxprofile=poc-api) | [https://abeeway-dev1.thingpark.com:50537](https://abeeway-dev1.thingpark.com:50537) |  No | [https://dx-api-dev1.thingpark.com/getstarted/#/](https://dx-api-dev1.thingpark.com/getstarted/#/) | poc-api |
| **DEV1**                | [https://dev1.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=dev1-api](https://dev1.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=dev1-api) | [https://abeeway-eu-eco.thingpark.com:50536](https://abeeway-eu-eco.thingpark.com:50536) |  No | [https://dx-api.thingpark.io/getstarted/#/](https://dx-api.thingpark.io/getstarted/#/) |dev1-api |
| **TPE SAAS PREPROD EU** | [https://thingparkenterprise-preprod.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-preprod-api](https://thingparkenterprise-preprod.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-preprod-api) | [https://abeeway-dev1.thingpark.com:50539](https://abeeway-dev1.thingpark.com:50539) |  Ask your local distributor or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) | [https://dx-api.thingpark.io/getstarted/#/](https://dx-api.thingpark.io/getstarted/#/)|tpe-eu-preprod-api|
| **COMMUNITY**           | [https://community.thingpark.io/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=community-api](https://community.thingpark.io/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=community-api) | [https://abeeway-eu-eco.thingpark.com:50540](https://abeeway-eu-eco.thingpark.com:50540) | e8959e26fd9bce52700605a9cfe74d53 | [https://dx-api.thingpark.io/getstarted/#/](https://dx-api.thingpark.io/getstarted/#/)|community-api|
| **IOT**                 | [https://iot.thingpark.com/abeewayDeviceAnalyzer/?dxprofile=iot-api](https://iot.thingpark.com/abeewayDeviceAnalyzer/?dxprofile=iot-api) | [https://abeeway-eu.thingpark.com:50536](https://abeeway-eu.thingpark.com:50536/) |  No | [https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | iot-api|
| **TPE SaaS EU**         | [https://thingparkenterprise.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-api](https://thingparkenterprise.eu.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-eu-api) | [https://abeeway-eu.thingpark.com:50540](https://abeeway-eu.thingpark.com:50540/) |  Ask your local distributor or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) |[https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) |tpe-eu-api|
| **TPE SaaS AU**         | [https://thingparkenterprise.au.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-au1-api](https://thingparkenterprise.au.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-au1-api) | [https://abeeway-au.thingpark.com:50537](https://abeeway-au.thingpark.com:50537/) |  Ask your local distributor or contact [Abeeway Support](https://thingpark.page.link/AbeewaySupport) |https://dx-api-au1.thingpark.com/getstarted/#/|tpe-au1-api|
| **IOTNET**              | [https://iotnet-poc.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=ah-iotnet-poc-api](https://iotnet-poc.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=ah-iotnet-poc-api) | [https://abeeway-dev1.thingpark.com:50538](https://abeeway-dev1.thingpark.com:50538/) |  No |[https://dx-api.thingpark.io/getstarted/#/](https://dx-api.thingpark.io/getstarted/#/) | ah-iotnet-poc-api|
| **PROXIMUS**            | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=proximusiot-api](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=proximusiot-api) | [https://abeeway-eu.thingpark.com:50542](https://abeeway-eu.thingpark.com:50542/) |  No | [https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | proximusiot-api |
| **CAPITA**              | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=capita-api](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=capita-api) | [https://abeeway-eu.thingpark.com:50544](https://abeeway-eu.thingpark.com:50544/) |  No |[https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/)| capita-api |
| **SWISSCOM**            | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=swisscom-api](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=swisscom-api) | [https://abeeway-eu.thingpark.com:50543](https://abeeway-eu.thingpark.com:50543/) |  No | [https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | swisscom-api |
| **KPN**                 | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=kpn-api](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=kpn-api) | [https://abeeway-eu.thingpark.com:55532](https://abeeway-eu.thingpark.com:55532/) |  Ask your local distributor or [Abeeway Support](https://thingpark.page.link/AbeewaySupport) | [https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | kpn-api |
| **IOT Ukraine**         | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=iotukraine-api](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=iotukraine-api) | [https://abeeway-eu.thingpark.com:50536](https://abeeway-eu.thingpark.com:50536/) |  No |[https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | iotukraine-api |
| **Öresundskraft**       | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=oresundskraftapi](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=oresundskraftapi) | [https://abeeway-eu.thingpark.com:50545](https://abeeway-eu.thingpark.com:50545/) |  No |[https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/)|oresundskraft-api|
| **Digita**              | [https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=digitaapi](https://iot.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=digitaapi) | [https://abeeway-eu.thingpark.com:50546](https://abeeway-eu.thingpark.com:50546/) |  No | [https://dx-api.thingpark.com/getstarted/#/](https://dx-api.thingpark.com/getstarted/#/) | digita-api|
| **TPE SaaS US**         | [https://thingparkenterprise.us.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-us-api](https://thingparkenterprise.us.actility.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=tpe-us-api) | [https://abeeway-us.thingpark.com:50540](https://abeeway-us.thingpark.com:50540) |  89f099f1ac454f121a4aeab50a41ef54 | [https://dx-api-us.thingpark.com/getstarted/#/](https://dx-api-us.thingpark.com/getstarted/#/) | tpe-us-api|
