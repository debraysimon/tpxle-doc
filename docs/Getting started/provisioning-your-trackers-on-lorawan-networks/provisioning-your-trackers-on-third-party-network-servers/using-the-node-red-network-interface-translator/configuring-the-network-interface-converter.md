# Configuring the Network Interface Converter
In this step, we deploy the Node-RED flow to connect your third-party network server to ThingPark Location.<br/>
We use the source code of TTN integration as an example. You can find the source code of other network servers such as Senet, Kerlink, Loriot: [here](https://github.com/actility/thingpark-integrations/tree/main/3_NS-NIT-tpLS/NIT).
:::warning Before you begin
 You need the ThingPark X Location Engine token you have copied in [Getting the token](/C-Procedure-Topics/GetToken_T/#top).
:::


1. Open the Node-RED flow manager application.<br/><img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network.png" border="0" /><br/>

2. Click the menu icon on the top-right (with three horizontal bars) and select **Import**.
    <img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network_1.png" border="0" />
   
3. In the **Clipboard** area in the middle, paste the source code of the network server you want to integrate and click **Import**.
    <img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network_2.png" border="0" />

4. In the diagram that displays:

    * Double-click the **Send_UL to Location Solver** node.<br/>

    * In the **Properties** tab:
        * In the **Token** box, paste your ThingPark X Location Engine token that you have copied in [Getting the token](/C-Procedure-Topics/GetToken_T/#top).
        * Check that:
            * The authentication **Type** is set to: **Bearer authentication**<br/>

            * The ThingPark Location **URL** is set to: [https://dx-api-dev1.thingpark.com/location/latest/api/feeds](https://dx-api-dev1.thingpark.com/location/latest/api/feeds).



            * Click **Done** to update these settings.
        <img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network_3.png" border="0" />

5. Copy the Access Key in TTN Console. The Access Key will be needed in the next step for ThingPark X Location Engine to be able to send downlinks.
    <img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network_4.png" border="0" />

6. If you use the TTN network server, double-click the **TTN DL Interface** node and edit the code that displays so that the `msg.key =”...”` is defining the TTN access key. Then click **Done**.  
   <img src="./images/Integration3PNS-TTN-Norbertv2/Step 3 Configure the Network_5.png" border="0" />

7. Click **Deploy** on top of the screen.<br/>
 If you are requested to log in, click the user icon on the top right of the screen and enter your Node-RED credentials you have created earlier.
