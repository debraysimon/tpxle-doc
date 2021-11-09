## ThingPark X Location Engine Network Interface Translator setup guide

The ThingPark X Location Engine Network Interface Translator (TPXLE-NIT) can be used with Abeeway devices connected through Helium and TTN networks.
An instance of this interface translator is already hosted at Actility cloud and can be tested to connect Abeeway Devices to the [Abeeway Device Manager][3] application.
The following steps explain how to set up this connectivity.

### 1. Sign up for a new ThingPark Community account.

Sign up for a new ThingPark Community account [here][1]. This is free of charge.

![101-tpcp-signUp](./images/101-tpcp-signUp.png)

Log in with your new account to the ThingPark Community Console [here][2]

![102-tpcp-signIn](./images/102-tpcp-signIn.png)

If you were able to log in, you can look around and get acquainted with the UI of ThingPark Enterprise. However, you don't need to use the console for anything now, since your goal is to use the ThingPark X Location Engine Network Interface Translator to connect to a 3rd party network server. This login was just requred to verify if your Community account is active. You can logout and leave this site without changing anything.

![105-tpcp-createDevice01](./images/105-tpcp-createDevice01.png)

<!--

### Create a dummy application (as prerequisite to add devices)

Before adding your devices to the platform you need to create an Application. This application won't be used for anything in the context of this interconnection with a 3rd party application server, but it is a pre-requisite to create a device on the Community portal.

1. Click on **_Applications>Create_** on the side bar menu and select **_https:// Generic Application_**

  ![103-tpcp-createApp01](./images/103-tpcp-createApp01_.png)

2. Fill in the form according to the following screenshot:

  ![104-tpcp-createApp02](./images/104-tpcp-createApp02.png)

3. Save the new application

### Provision your Abeeway Trackers on the ThingPark Community Console.

Since you are planning to use a 3rd party network server, you dont have to provision your devices with the correct AppSKey and AppEUI. We recommend you using "00000000000000000000000000000000" as ApppSKey and 0000000000000000 as JounEUI. The only important data you need to be accurate with is the DevEUI so that our platform can assign your device to your account. This step ensures that your devices are declared on the ThingPark platform, so later on you can refer to them in context of the ThingPark X Location Engine.

1. Click on **_Devices>Create_** on the side bar menu and select **_Abeeway_**

  ![105-tpcp-createDevice01](./images/105-tpcp-createDevice01_.png)

2. Fill in the form according to the following screenshots. (Please replace the DevEUI with your Device's real DevEUI.)

  ![106-tpcp-createDevice01](./images/106-tpcp-createDevice02.png)

  ![107-tpcp-createDevice01](./images/107-tpcp-createDevice03.png)

-->

### 2. Set up the uplink message flow on the 3rd party LoRaWAN Network Server

Create a new HTTP (webhook) integration on the Helium/TTN Console with the parameters described below.

#### Helium console:   
Login to Helium Console [here][4]   
Create a new HTTP (webhook) integration with the following parameters:
  - Url (for Helium): `https://community.thingpark.io/tpxle-nit/uplink_from_helium`
  - Header: `x-client-id: community-api/<YOUR_THINGPARK_COMMUNITY_USER_ID>`
  - Header: `x-client-secret: <YOUR_THINGPARK_COMMUNITY_PASSWORD>`  

In case you use your tracker with the Mobile App configure the following additional header:
  - Header: `x-realm: le-lab`  [Use this option if you are selecting Abeeway-Preview Platform from the Mobile APP "distributor" list (THIS IS RESTRICTED TO INTERNAL TESTING ONLY. PLEASE DO NOT USE IT FOR PRODUCTION ENVIRONMENT)

![401-helium-integration](./images/401-helium-integration_.png)

![402-helium-integration-http](./images/402-helium-integration-http_.png)

#### TTN Console:   
Login to Helium Console [here][5]

Create a new API key: 
![501-ttn-xapi-key](./images/501-ttn-xapi-key_.png)

Create a new HTTP (webhook) integration with the following parameters:
  - Url (for TTN): `https://community.thingpark.io/tpxle-nit/uplink_from_ttn`
  - Header: `x-client-id: community-api/<YOUR_THINGPARK_COMMUNITY_USER_ID>`
  - Header: `x-client-secret: <YOUR_THINGPARK_COMMUNITY_PASSWORD>`  

In case you use your tracker with the Mobile App configure the following additional header [Please add this header only if you are using Abeeway Mobile App]:
  - Header: `x-realm: le-lab`  [Use this option if you are selecting Abeeway-Preview Platform from the Mobile APP "distributor" list (THIS IS RESTRICTED TO INTERNAL TESTING ONLY. PLEASE DO NOT USE IT FOR PRODUCTION ENVIRONMENT)
  
  
![502-ttn-webhook](./images/502-ttn-webhook_.png)

![504-ttn-custom-webhook-config](./images/504-ttn-custom-webhook-config_.png)

Don't forget to add your new API key as Download API key that you created earlier.

### 3. Set up the downlink message flow from ThingPark X Location Engine to the 3rd party LoRaWAN Network Server

LoRaWAN Downlink notifications are managed by the ThingPark X Location Engine (TPX LE) Binder Module, which you can coofirue through the DX Location API. You need to configure the Binder module so that tracker commands are forwarded to the Actility Network Interface Translator:

Log in to ThingPark DX API with your ThingPark Community Credentials [here][6].

![201-dxapi-login](./images/201-dxapi-login.png)

Click on **_DX Location API > Swagger UI_**

![202-dxapi-loggedin](./images/202-dxapi-loggedin_.png)

Under the **_BinderConfig_** title click on **_POST /binderConfigs_**

![203-dxapi-locationAPI](./images/203-dxapi-locationAPI_.png)

Click on the **_Try it out_** button.

![204-dxapi-binderConfigPost](./images/204-dxapi-binderConfigPost_.png)

Insert the following text into the textarea:

  - for Helium:
    ```
    {
      "deviceEUIList": "*",
      "callbackURL": "https://community.thingpark.io/tpxle-nit/downlink_to_helium"
    }
    ```
  - for TTN:
    ```
    {
      "deviceEUIList": "*",
      "callbackURL": "https://community.thingpark.io/tpxle-nit/downlink_to_ttn"
    }
    ```
    ![205-dxapi-binderConfigPostTryitout](./images/205-dxapi-binderConfigPostTryitout_.png)

Click on the **_Execute_** button under the text area.

### 4. Test the uplink integration:

- Wait until the tracker sends a few UL messages.
- Verify on Helium/TTN Console that UL messages are forwarded to the integration you created earlier.
- Login to [Abeeway Device Manager (ADM)][3] with your ThingPark Community Credentials.

  ![301-adm-login](./images/301-adm-login.png)

- Select your devices.
  If you cannot see any devices in the list after you logged, in then you trackers have not sent any messages to ADM yet.

  ![302-adm-selectDevice](./images/302-adm-selectDevice_.png)

- Find your trackers on the map.

  ![303-adm-map](./images/303-adm-map_.png)

### 6. Test the downlinlink integration:

- Login to [Abeeway Device Manager (ADM)][3] with your ThingPark Community Credentials and select your devices. Your devices will appear here because you have registered them to the ThingPark platform in step 1.
- Click on the **_Device Configuration_** tab at the top of the ADM GUI.
- Click on the drop-dowm menu item at the bottom left of the page and select the **_Start SOS mode_** option.
- Click on the **_Send Request_** button just at the right of the drop-down menu item.  
  This should generate a downlink command that will switch the tracker to SOS mode.
  
  ![304-adm-deviceConfiguration](./images/304-adm-deviceConfiguration_.png)


[1]: https://community.thingpark.org/
[2]: https://community.thingpark.io/
[3]: https://dev1.thingpark.com/thingpark/abeewayDeviceAnalyzer/index.php?dxprofile=community
[4]: https://console.helium.com/welcome
[5]: https://console.cloud.thethings.network/
[6]: https://dx-api.thingpark.io/getstarted/#/
