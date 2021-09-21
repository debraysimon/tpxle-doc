<html>
<a id="top"></a>
</html>

# Installing a Node-RED server
There are two ways to deploy Node-RED applications:
* If you want to install Node-RED locally, see [Installing Node-RED locally](/C-Procedure-Topics/InstallNodeRED_T/#Install).<br/>

* If you prefer to use IBMCloud, see [Installing Node-RED on IBM Cloud](/C-Procedure-Topics/InstallNodeRED_T/#Installi).

## Installing Node-RED locally

<html>
<a id="Install"></a>
</html>

You can install Node-RED locally on your computer. The following steps are presented to help you quickly run through the process.<br/>
For more information, see the related topic in the official IBM documentation: [https://nodered.org/docs/getting-started/local](https://nodered.org/docs/getting-started/local)


1. Download and install the latest nodeJS from: [https://nodejs.org/en/](https://nodejs.org/en/)<br/>
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 1 Installing Node RED.png" border="0" /><br/>


2. Open a command prompt and install the Node-RED package using the following command:
    `npm install -g --unsafe-perm node-red`
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 1 Installing Node RED_1.png" border="0" />
   
3. Run Node-Red using the following command:
   `node-red`
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 1 Installing Node RED_2.png" border="0" />
   
4. Open Node-RED entering this URL in your web browser: [http://127.0.0.1:1880](http://127.0.0.1:1880)
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 1 Installing Node RED_3.png" border="0" />

## Installing Node-RED on IBM Cloud

<html>
<a id="Installi"></a>
</html>

Alternatively to install Node-RED locally, you can install it on IBM Cloud. The following steps are presented to help you quickly run through the process.<br/>
For more information, see the related topic in the official IBM documentation: [https://nodered.org/docs/getting-started/ibmcloud](https://nodered.org/docs/getting-started/ibmcloud)

1. Go to [https://cloud.ibm.com](https://cloud.ibm.com), and click **Create an account**. Then fill in the form and verify your e-mail.
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED.png" border="0" />

2. Log in to IBM Cloud using your new account at: [https://cloud.ibm.com](https://cloud.ibm.com)
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_1.png" border="0" /> 

3. Navigate to **Catalog** > **Featured**, then search for .
   <img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_2.png" border="0" />

4. This presents you with the Node-RED starter kit:
    * It gives you a Node-RED instance running as a Cloud Foundry application. It also provides a Cloudant database instance and a collection of nodes that make it easy to access various IBM Cloud services.<br/>

    * Click **Get started**.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_3.png" border="0" />

5. In the form that displays, fill in the **App name** with a name you want for your application.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_4.png" border="0" />

6. Click **Create** and wait for a few minutes until the application has been created.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_5.png" border="0" />
-> Once the App has been created, you will see the following screen:
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_6.png" border="0" />

7. Click **Deploy your app**, then in **IBM Cloud API key** select **Cloud Foundry** for your deployment target.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_7.png" border="0" />

8. In the **IBM Cloud API key** area, click **New +** to generate a new API key, then click **OK**.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_8.png" border="0" />

9. In **Region**, select the region you want for the deployment.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_9.png" border="0" />

10. In **Host**, write a host name and click **Next**.The host name must be unique.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_10.png" border="0" />

11. In **Region**, select the region of your DevOps toolchain and click **Create**. Wait a few minutes until the deployment is finished.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_11.png" border="0" />

12. In the following screen that appears, verify:
    * In the **Delivery Pipelines** area: **Status** must appear as **Success**.<br/>

    * In the **Details** area: **App URL** must display a valid URL.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_12.png" border="0" />

13. In **App URL**, click the URL.

-> Your new Node-RED instance on IBM Cloud opens.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_13.png" border="0" />

14. Click **Next** and fill in the form with your Node-RED credentials.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_14.png" border="0" />

15. In the screen that displays, read the text, and click **Next**.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_15.png" border="0" />

16. Read the text and click **Finish**.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_16.png" border="0" />

17. In the screen that displays, read the text and click **Go to your Node-RED flow editor**.
<img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_17.png" border="0" />

-> Your Node-RED flow editor opens. <img src="./images/Integration3PNS-TTN-Norbertv2/Option 2 Installing Node RED_18.png" border="0" />
