# Firmware Update (Using Abeeway Updater)

<html>
<iframe height="500" width="700" src="https://www.youtube.com/embed/10dbVy_Whxo?list=PLrtUhsI_mcGQ9_jGd-ggC5U-YnEhcriqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</html>

This section describes how to carry out the firmware update using Abeeway updater. There are two important firmware in the tracker that need frequent update (MCU Firmware and BLE Firmware). Here are the keys steps to carry out for the firmware update:

:::warning WARNING
* Abeeway Updater is only supported in Windows and Linux
* For update of large number of trackers with Smart badge docking station or USB hub, please ensure using **ONLY Linux** with the specific distribution/hardware PC model in [Abeeway Updater documentation](https://github.com/Abeeway/Abeeway-updater). 
* Ensure you are using USB data cable or smart badge docking station that supports data transfer
* Ensure the correct MCU and Firmware binaries are selected that match the hardware model. **Incorrect firmware might damage the tracker permanently**.
* Ensure that the MCU firmware config file has no invalid or non-existing parameters that are not present in the MCU/Application firmware. Please cross-check the config file parameters are present in [Abeeway Firmware Reference Guide](/AbeewayRefGuide/introduction/). Any invalid or non-existing parameters in firmware config file that do not match the firmware binary will be rejected and the configuration will not be applied correctly.
* The firmware parameters can change between different MCU Firmware versions. Please ensure to refer to the reference guide that is matching the MCU firmware version.
* The config file should only have parameters that are changed from **factory default** to reduce the size of the config file. The factory default of all the firmware parameters can be found in [Abeeway Firmware Reference Guide](/AbeewayRefGuide/factory-default-config/)
* The flash size of the firmware is very limited. Please avoid putting large number of parameters in the config file. The config file is appended to the firmware binary at the end of firmware update process. **If this appended file is bigger than the flash size, the tracker might be damaged permanently and will void the warranty**. **The combined file size of MCU firmware binary and config file should not exceed 240KBytes**. For changing more than 10 parameters, please refer to [Abeeway Updater](https://github.com/Abeeway/Abeeway-updater) (see chapter: Updating ONLY the tracker configuration). Alternatively, you can also use [Abeeway Device Manager (device configuration tab)](../../../trackers-overview/AbeewayDeviceManager_C/ChangeTrackerConfiguration_T/) to send LoRaWAN downlinks.
* Before carrying out the firmware update for large number of trackers in the field, please carry out the firmware update of few trackers and check the configuration using [Tera term](https://ttssh2.osdn.jp/index.html.en) or similar serial communication tool. You can check the configuration of the tracker by entering **config show** on the serial console. This will avoid potential mistake when carrying out firmware update for the large number of trackers. Please visit [here](../../D-Reference/UsingCLI_R/) on how to interact with the CLI over USB port. 
* Abeeway Updater or any other serial communication tool, like Tera term should not be running simultaneously. The tracker can only communicate with one of them at a time.
* For any issues with USB port, please refer to [Abeeway Updater documentation, Chapter: troubleshooting USB port](https://github.com/Abeeway/Abeeway-updater)
:::

<html>
<ol>
    <li>
        Install the required software from <a href="https://github.com/Abeeway/Abeeway-updater" >here</a>
    </li>
    <li>
        Identify your tracker model from <a href="../../IdentifyTrackerModel" >here</a>
    </li>
    <li>
        Download the MCU/BLE Firmware binaries and config file from <a href="https://actilitysa.sharepoint.com/:f:/t/aby/EgDe93KPylRIhhdRE4tdGXkBWYtF9kchJAAZqq_FS14aRQ?e=xjaE7a" >here</a>
    </li>
    <li>
        Update the firmware using <a href="https://github.com/Abeeway/Abeeway-updater" >Abeeway Updater</a>
    </li>
    <li>
        Check the firmware configuration on CLI using serial console application application application, like  <a href="https://ttssh2.osdn.jp/index.html.en" >Tera term</a>. You will need to enter <b>config show</b> to check firmware configuration on CLI. Please visit <a href="../../UsingCLI_R" >here</a> on how to interact with CLI over USB port. 
    </li>
</ol>
</html>
