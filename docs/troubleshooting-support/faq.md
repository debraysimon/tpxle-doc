# FAQ
This section of our documentation answers the most typical questions we are getting from our ThingPark Location customers.

0. **How do I report problems?**
* If you bought directly from Actility or Abeeway, click [Support Portal](https://thingpark.page.link/AbeewaySupport); else contact your distributor.

1. **Where can I find the reference for LED patterns, button press sequences, buzzer tones on micro tracker or smart badge?**
<br/>You can find all the sequences to follow in [Key micro tracker commands](/B-Feature-Topics/MicroTracker_C/) and in [Key smart badge commands](/B-Feature-Topics/SmartBadge_C/).<br/>

2. **Where do I find certification documents?**
<br/>Abeeway trackers are certified with ATEX Zone II, FCC, EC, FCC, IC, TELEC. Certifications depend on the specific reference you have ordered. Certifications are always indicated on the product sticker. You can find all certification documents in [Certification Documents](https://actilitysa.sharepoint.com/:f:/t/aby/EpY7P-aTfkFMjo1GZgpXyrQBJ_XkD-XnaTCQu1-j6jsOTA?e=zBHYvH).<br/>

3. **Where do I find Abeeway product data sheets?**
<br/>The data sheets of different products is located in [DataSheet](https://actilitysa.sharepoint.com/:f:/t/aby/EjbhUI7oGiZHrPZ1wCDuXzsB7cUgti7AtYwTrMdn2_oRAg?e=qvyHWw).<br/>

4. **How do I perform a firmware update of the trackers?**<br/>
Please refer to [Firmware Update](/D-Reference/FirmwareUpdateOverview_R/) for more details.

5. **What are the steps to replace a faulty tracker?**
<br/>The RMA procedure and the associated form are described in [RMA Procedure](https://actilitysa.sharepoint.com/:f:/t/aby/ElVVoXBbQitMoqlGqw5WS5UBAt1U2WCquWR7LrNb72DciQ?e=b6QaXX).<br/>

6. **Are there preferred orientations or positioning for Abeeway trackers?**
<br/>Yes. Here are the instructions for all the trackers:<br/>
* [Micro tracker best placement](/B-Feature-Topics/MicroTrackerPlacement_C/)<br/>
* [Smart badge best placement](/B-Feature-Topics/SmartBadgePlacement_C/)
* [Industrial tracker best placement](/B-Feature-Topics/IndusTrackerPlacement_C/)
* [Compact tracker best placement](/B-Feature-Topics/CompactTrackerPlacement_C/)


7. **Is there a How-To guide to integrate my tracker with a LoRaWAN® network server (Actility ThingPark, TTN/TTI, Senet, etc.)?**
<br/>Yes. You can follow [Integrating a third-party network server](/B-Feature-Topics/Integrate3PNS_C/).

8. **Is there a configuration tool for Abeeway trackers? Are there pre-cooked “typical” configurations for common use cases?**
<br/>Yes, you can see [Abeeway Device Manager](/B-Feature-Topics/AbeewayDeviceManager_C/) device configuration tab to select pre-defined profiles for most common use cases.

9. **Is there a way to estimate battery life for a given configuration?**
<br/>Yes, you can use [Power Consumption Estimation](/D-Reference/PowerConsumption_R/) to estimate the battery lifetime of your trackers. However, be aware that this is an approximation under ideal conditions.

10. **How often should I charge my device?**
<br/>Only micro trackers and smart badges can be recharged. We recommend to periodically charge them at least once a month. To not damage the battery, they must not be left with a low or completely discharged battery for more than a month. The warranty is void if the battery has not been charged for a prolonged period.

11. **Can I use any USB charger?**
<br/>Yes, provided that you are certain that it has short-circuit protection, which is an essential security feature.

12. **My tracker resets very often. How do I know the root cause?**
<br/>You can look at the MCU Reset Cause in LoRaWAN® heartbeat uplinks. If the reset cause is 0x40, which means (System Request -application reset-), then one possible cause can be: There are lot of LoRaWAN® messages that the tracker is trying to send but there is lack of appropriate LoRaWAN® coverage. Then, if the LoRaWAN® MAC queue gets really full, the tracker will reset itself to be able to function properly. For more information about different reset causes and their explanation, see [Abeeway Trackers Reference Guide](/AbeewayRefGuide/introduction/).

13. **How do I debug the tracker over USB port?**
<br/>You can connect the tracker to USB port and interact with the tracker using serial terminal program like Tera term. You can find more information [CLI Usage](https://actilitysa.sharepoint.com/:f:/t/aby/EgxRhivJUIVNrq1Lwa3qBigBip9FcMMHhBD_ZaA9m8IT6w?e=WLr48X).

14. **My geolocation keeps getting stopped from time to time. What could be the reason?**
<br/>There is temperature monitoring feature in the tracker, which if enabled in the tracker configuration results in disabling the geolocation when the temperature detected by the tracker is outside the range. The symptom of this is to receive [Temperature Alert Event](/AbeewayRefGuide/uplink-messages/event) message. You can find more information about temperature monitoring [here](/AbeewayRefGuide/functioning/temperature-monitoring/). Temperature monitoring can be disabled by setting the value of *temperature_high = 255* and *temperature_value=255* in the firmware. It can be easily be done using [Abeeway Device Manager (Device Configuration tab)](/C-Procedure-Topics/ChangeTrackerConfiguration_T/) or by connecting the tracker over [USB port with CLI](/troubleshooting-support/using-cli.md/).

15. **What is the behavior of LoRaWAN join procedure of the trackers?**
<br/> The behavior of Abeeway trackers during the LoRaWAN join process is described [here](/AbeewayRefGuide/functioning/startup-process/).

16. **Where can I find End of Life (EoL) policy for Abeeway devices?**
<br/>You can find EoL policy for Abeeway devices [here](https://actilitysa.sharepoint.com/:f:/t/aby/ErUc5bGWzYdMsw3skEdq1KUBKvSwzEL4F-7yDs9GnZ0qNg?e=cnkWB3).
