# Key Smart Badge tracker commands

There is major difference in the Smart Badge commands from MCU Firmware 2.3 and the ones below. The first step is to find out the MCU Firmware version of the tracker.

## Find the MCU firmware version of the tracker

The button sequence to reset the tracker is quite different between Asset Tracker MCU Firmware 2.3 and the versions below. The first step is to find out the installed MCU firmware version of the tracker from [here](../../D-Reference/IdentifyInstalledFirmware/).

## The tracker commands for MCU Firmware 2.3 and above

This table gives you quick access to the tracker commands. For more information on all the commands and LED patterns, see [Abeeway Trackers Reference Guide: User Interfaces](../../AbeewayRefGuide/functioning/user-interfaces).



::: warning Important
* **Click:** Press the button **less than one second**.
* **Press:** Press the button **between** lasts **1 and 4 seconds**.
* **Long Press:** Press the button **between** lasts **5 and 7 seconds**.
* **Double-click:** Press the button 2 times (The duration **between** the clicks is **less than 1 second**).
* **Triple-click:** Press the button 3 times (The duration **between** the clicks is **less than 1 second**).
* **Very Long Press or ESC Sequence:** Press the button **more than 14 seconds**. The tracker will play a beep every second during this time.
* **Since MCU Firmware 2.3+**, the button sequence is configurable with **button_mapping** parameter. The examples below are for the button mapping for the default firmware configuration. For more inforation, visit [User Interface training](https://actilitysa.sharepoint.com/:f:/t/aby/EiWIqYpAehBKg3Py8I6X07oBFFxUWT3i2FVHYRX2MzXtow?e=ZFkhrM).
* Please ensure you refer to the [Abeeway Trackers Reference Guide](../../AbeewayRefGuide/introduction/) that matches your MCU Firmware version. **The user interface of Abeeway trackers have different behavior across different MCU Firmware versions.**
* The sequences below are the same for micro tracker and smart badge.
* Abeeway trackers have three important states:
   1. **SHIPPING:** This is usually the state when the tracker leaves the warehouse. The tracker is in lower power state waiting to be activated with a **button Press (between 1 and 4 seconds)**. Once, activated, the tracker moves to JOINING state.
   2. **JOINING:** In this state, the tracker is trying to join the LoRaWAN network, but has not joined yet. Each **button press (between 1 and 4 seconds)** in this state restarts the join procedure and also activates the Bluetooth of the tracker to allow pairing with the Abeeway tracking app. If the Bluetooth is successfully activated, the tracker will play [Bluetooth advertisement melody](https://actilitysa.sharepoint.com/:u:/t/aby/EWdjoLPV12BGiHsZptjIOrABxRdVpqTLLJM72K795IUQsg?e=kcW1U3) for about 10 minutes (which is the default configuration). The Micro tracker/Smart Badge will make 15 LoRaWAN join attempts for EU region and 27 attempts for other regions. If the join is not successful after these attempts, tracker will go back to SHIPPING state and needs to be re-activated again with the **button Press (between 1 and 4 seconds)**.
   3. **JOINED:** In this state, the tracker has successfully joined the LoRaWAN network and is functioning normally. 
:::

<html>
<table cellspacing="21">
    <colgroup>
        <col/>
        <col/>
    </colgroup>
    <thead>
    <tr>
        <th><strong>How to...</strong>
        </th>
        <th>
            <p>Action</p>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><strong>Activate the tracker</strong>
        </td>
        <td><strong>Press</strong> the button <strong>once</strong> (between 1 and 4 seconds). <strong>The button must be released to generate the event</strong>
        <p>The tracker will play Bluetooth advertisement melody to allow pairing with the mobile app and will make Blue/Pink flash to indicate the start of LoRaWAN Join procedure</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/R0Cen5AhOKs?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>This sequence is NOT configurable with <b>button_mapping</b>
                    parameter</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (SHIPPING, JOINING)
                    </li>
                    <li>
                        Repeating the sequence again while the tracker is in JOINING state will restart the LoRaWAN join procedure and Bluetooth advertisement
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Switch on</strong>
        </td>
        <td><strong>Press</strong> the button <strong>once</strong> (between 1 and 4 seconds). <strong>The button must be released to generate the event</strong>
        <p> The tracker will play switch ON melody once it starts and will also start Bluetooth advertisement to allow pairing with the Abeeway tracking app </p>
        <p> The tracker starts in motion tracking mode in default configuration</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/_S1_B4NqsUo?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>This sequence is NOT configurable with <b>button_mapping</b>
                    parameter.</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED)
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Switch off</strong>
        </td>
        <td><strong>Long Press</strong> the button <strong>once</strong> (between 5 and 7 seconds). <strong>The button must be released to generate the event</strong>
        <p>The tracker will play switch OFF melody before it shuts down.</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/GUp96FG1vsI?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>This sequence is NOT configurable with <b>button_mapping</b>
                    parameter.</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger the sequence.
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Check On/Off status</strong>
        </td>
        <td class="TableStyle-Alternate-Row-Color-BodyD-Column1-Body1"><strong>Click</strong> the button <strong>once
            shortly</strong> (less than one second).<p>-&gt; If the tracker is on, the blue led flashes and the tracker indicates battery level.</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/0b3yLGs_4Gw?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>When this feature is activated (with <b>button_mapping</b>
                    parameter, the behavior is the following:</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger the sequence.
                    </li>
                    <li>
                        The default configuration of click is mapped to show battery level in default configuration of <b>button_mapping</b> parameter 
                    </li>
                    <li>
                        Please refer to <a href="../../AbeewayRefGuide/functioning/user-interfaces" style="color:teal">Abeeway Trackers Reference Guide</a> (Chapter: User Interfaces) on how to interpret LEDs to indicate battery level
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Trigger SOS mode/Stop SOS mode</strong>
        </td>
        <td><strong>Triple-click</strong> the button (Duration between each click should be less than one second).
            <p>
                        <iframe class="youtube-player_0" src="https://www.youtube.com/embed/r71K9LHv2SU?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                                allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>When this feature is activated (with <b>button_mapping</b>
                    parameter, the behavior is the following:</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger the sequence.
                    </li>
                    <li>
                        The tracker sends positions continuously at a fixed period of 120 seconds (defined by <b>sos_period</b>).
                    </li>
                    <li>
                        The tracker’s red led is blinking slowly.
                    </li>
                    <li>
                        To stop SOS mode, triple-click the button again.
                    </li>
                    <li>
                        <b>Note: The default configuration of the firmware is mapped to SoS with triple-click.</b>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Trigger a position alert</strong>
        </td>
        <td><strong>Triple-click</strong> the button (Duration between each click should be less than one second).
            <p>
                        <iframe class="youtube-player_0" src="https://www.youtube.com/embed/ZbDvetCdOHU?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                                allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p> When this feature is activated (with <b>button_mapping</b>
                    parameter, the behavior is the following:</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger the sequence.
                    </li>
                    <li>
                        To trigger one-time position alert, triple-click the button. <b>The position alert cannot be triggered again for 60 seconds.</b>
                    </li>
                    <li>
                        The tracker sends one time position. The tracker will blink with red LED to indicate the position was sent
                    </li>
                    <li>
                        <b>Note: The default configuration of the firmware is NOT mapped to send position alert with ANY button sequence</b>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Remove Bluetooth bond on the tracker</strong>
        </td>
        <td>Do the following sequence to remove Bluetooth bond on the tracker:
                <ul>
                    <li>
                        Hold the button for more than 14 sec to enter ESC sequence. The tracker will play melody indicating the fact that special sequence can be started.
                    </li>
                    <li>
                        Once inside the special sequence, do the following: 1 click, 1 click, 1x press (between 1 - 4 sec)
                    </li>
                    <li>
                        If the sequence is successful, the tracker will play Bluetooth advertisement melody indicating the Bluetooth bond is removed for about 10 minutes (which is the default configuration)
                    </li>
                </ul>
            <p>
                        <iframe class="youtube-player_0" src="https://www.youtube.com/embed/1EkGi3Zw9Jo?list=PLrtUhsI_mcGQ1B0AAgZ4Yvkad9AyoEPML" frameborder="0"
                                allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <ul>
                    <li>
                        This special sequence is not configurable with <b>button_mapping</b> parameter
                    </li>
                    <li>
                        This special sequence is applicable for all the tracker states: (SHIPPING, JOINING, JOINED) irrespective of the tracker being ON or OFF.
                    </li>
                    <li>
                        If the sequence that is entered is not recognizable by the firmware, the firmware will abort special sequence after 15 seconds
                    </li>
                    <li>
                        You must wait at least 20 seconds between two special sequences, else the second special sequence will not be taken into account
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Reset the tracker and re-do a join request</strong>
        </td>
        <td>Apply <a href="../../C-Procedure-Topics/ReDoJoinRequestSB_T/" class="MCXref xref">Re-doing a join request</a>.
        </td>
    </tr>
    </tbody>
</table>
</html>

## The tracker commands for MCU Firmware 2.2 and below

This table gives you quick access to the tracker commands. For more information on all the commands and LED patterns, see [Abeeway Trackers Reference Guide](../../AbeewayRefGuide/functioning/user-interfaces/).

::: warning Important
* **Click:** Press the button **less than one second**.
* **Long Press:** Press the button **more than five seconds**.
* **Double-click:** Press the button 2 times (The duration **between** the clicks is **less than 1 second**).
* **Triple-click:** Press the button 3 times (The duration **between** the clicks is **less than 1 second**).
* Please ensure you refer to the [Abeeway Trackers Reference Guide](../../AbeewayRefGuide/introduction/) that matches your MCU Firmware version. **The user interface of Abeeway trackers have different behavior across different MCU Firmware versions.**
* The sequences below are the same for micro tracker and smart badge.
* Abeeway trackers have three important states:
   1. **SHIPPING:** This is usually the state when the tracker leaves the warehouse. The tracker is in lower power state waiting to be activated with a **Long Press (more than 5 seconds)**. Once, activated, the tracker moves to JOINING state.
   2. **JOINING:** In this state, the tracker is trying to join the LoRaWAN network, but has not joined yet. Each **long press (more than 5 seconds)** in this state restarts the join procedure and also activates the Bluetooth of the tracker to allow pairing with the Abeeway tracking app. If the Bluetooth is successfully activated, the tracker will play [Bluetooth advertisement melody](https://actilitysa.sharepoint.com/:u:/t/aby/EWdjoLPV12BGiHsZptjIOrABxRdVpqTLLJM72K795IUQsg?e=kcW1U3) for about 10 minutes (which is the default configuration). The Micro tracker/Smart Badge will make 15 LoRaWAN join attempts for EU region and 27 attempts for other regions. If the join is not successful after these attempts, tracker will go back to SHIPPING state and needs to be re-activated again with a **long press (more than 5 seconds)**. 
   3. **JOINED:** In this state, the tracker has successfully joined the LoRaWAN network and is functioning normally. 
:::

<html>
<table cellspacing="21">
    <colgroup>
        <col/>
        <col/>
    </colgroup>
    <thead>
    <tr>
        <th><strong>How to...</strong>
        </th>
        <th>
            <p>Action</p>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><strong>Activate the tracker</strong>
        </td>
        <td><strong>Long Press</strong> the button <strong>once</strong> (more than 5 seconds).
        <p>The tracker will make Blue/Pink flash to indicate the start of LoRaWAN Join procedure</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/Id4M3btMuBY?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (SHIPPING, JOINING)
                    </li>
                    <li>
                        Repeating the sequence again while the tracker is in JOINING state will restart the LoRaWAN join procedure
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Switch on</strong>
        </td>
        <td><strong>Long Press</strong> the button <strong>once lengthily</strong> (more than five seconds) <strong>until you
            heard a melody</strong>.<p>-&gt; The tracker starts in motion tracking mode in default
            configuration.</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/T9dfVbptpsM?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED)
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Switch off</strong>
        </td>
        <td><strong>Long Press</strong> the button <strong>once lengthily</strong> (more than five seconds) <strong>until you
            heard a melody</strong>.<p>-&gt; If the tracker is on, it switches off.</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/gNtn3KRglrU?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger to sequence.
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Check On/Off status</strong>
        </td>
        <td class="TableStyle-Alternate-Row-Color-BodyD-Column1-Body1"><strong>Click</strong> the button <strong>once
            shortly</strong> (less than one second).<p>-&gt; If the tracker is on, the blue led flashes to indicate battery level.</p>
            <p>
                <iframe class="youtube-player_0" src="https://www.youtube.com/embed/0b3yLGs_4Gw?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                        allowfullscreen="1" width="300px" height="150px"></iframe>
            </p>
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger to sequence.
                    </li>
                    <li>
                        Please refer to <a href="../../D-Reference/DocLibrary_R/#abeeway-trackers" style="color:teal">Abeeway Trackers Reference Guide</a> (Chapter: User Interfaces) on how to interpret LEDs to indicate battery level
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Trigger SOS mode</strong>
        </td>
        <td><strong>Triple-click</strong> the button (Duration between the clicks should be less than one second).
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p>When this feature is activated (<span class="CodeInline">config_flags</span>
                    must be set to <span class="CodeInline">bit 2=1</span>), the behavior is the following:</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger to sequence.
                    </li>
                    <li>
                        The tracker sends positions continuously at a fixed period of 120 seconds.
                    </li>
                    <li>
                        The tracker’s red led is blinking slowly.
                    </li>
                    <li>
                        To stop SOS mode, triple-click the button again.
                    </li>
                    <li>
                        <b>For MCU FW: 2.0 and below</b>, SoS is triggered by double click if config_flags (bit 2=1).
                    </li>
                    <li>
                        <b>For MCU FW: 2.1/2.2</b>, SoS is triggered by triple click if config_flags (bit 2=1).
                    </li>
                    <p>
                        <iframe class="youtube-player_0" src="https://www.youtube.com/embed/HgsMfytTue4?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                                allowfullscreen="1" width="300px" height="150px"></iframe>
                    </p>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Trigger a position alert</strong>
        </td>
        <td><strong>Triple-click</strong> the button (Duration between the clicks should be less than one second).
            <div class="custom-block tip">
                <p class="custom-block-title">Note</p>
                <p> When this feature is activated (<span class="CodeInline">config_flags</span>
                    must be set to <span class="CodeInline">bit 2=0</span>), the behavior is the following:</p>
                <ul>
                    <li>
                        This sequence is only applicable for the following tracker states: (JOINED). The tracker must be ON to trigger to sequence.
                    </li>
                    <li>
                        To trigger position alert, triple-click the button.
                    </li>
                    <li>
                        The tracker sends one time position. The tracker will blink with RED LED to indicate the position was sent
                    </li>
                    <li>
                        <b>For MCU FW: 2.0 and below</b>, SoS is triggered by double click if config_flags (bit 2=0).
                    </li>
                    <li>
                        <b>For MCU FW: 2.1/2.2</b>, SoS is triggered by triple click if config_flags (bit 2=0).
                    </li>
                    <p>
                        <iframe class="youtube-player_0" src="https://www.youtube.com/embed/7BAg7XF2jyk?list=PLrtUhsI_mcGSgJDREmRvaJlCBeAmlKs_o" frameborder="0"
                                allowfullscreen="1" width="300px" height="150px"></iframe>
                    </p>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td><strong>Reset the tracker and re-do a join request</strong>
        </td>
        <td>Apply <a href="../../C-Procedure-Topics/ReDoJoinRequestSB_T/" class="MCXref xref">Re-doing a join request</a>.
        </td>
    </tr>
    </tbody>
</table>
</html>

