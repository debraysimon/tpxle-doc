# Module Firmware Introduction

The module firmware architecture is divided in three distinct layers:

1. **The application layer:** This layer implements the actual applications, which implement desired functionality and orchestrate service and system layer functions.
2. **The service layer:** This is an additional layer that will be developed by Abeeway. This layer relies on system layer functionality
3. **The system layer:** This is the system level code consisting of the operating system, hardware drivers, HAL, and various other middlewares.

The firmware is designed with priority to meet a low power consumption by using FreeRTOS and entering the MCU in the lowest power mode when MCU is idle. 

* [Module Architecture Summary](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/Architecture/Murata%20Module%20Architecture%20Summary%20-%20DRAFT%202.pdf?csf=1&web=1&e=i0lgLJ) (draft 2) 
* [Module Low Level driver API](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/Architecture/System%20Layer/Module%20system%20layer%20-%2020210322.pdf?csf=1&web=1&e=VYdt38)
* Block diagram of the [API to driver flow](https://actilitysa.sharepoint.com/:i:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/Architecture/System%20Layer/chip-driver-flow.png?csf=1&web=1&e=PlbWtL) 
* [Flash Memory usage study](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/Memory%20usage/Interest%20of%20having%20an%20external%20memory-20210625.pdf?csf=1&web=1&e=k1F0dA)
* Module [Provisioning Data Storage](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/Design/Provisioning%20Storage%20Mechanism%20-%20Version%201.0.pdf?csf=1&web=1&e=dL3AX7)

The MFG/ACTT FW is the first application to test the system layer and characterise and test the module (see section EVK dev)

* [CLI and Parser](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/Firmware/RTLS%20Proceedings/CLI%20and%20Parser%20presentation.pdf?csf=1&web=1&e=ECEsNF) implementation 
* [CLI summary list](https://actilitysa.sharepoint.com/:x:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Firmware/MFG_ACTT/Documentation/MFG_ACTT_CLI.xlsx?d=w17a95ff4322243a08c1f4705f5a9e2a0&csf=1&web=1&e=DtptZ3) for MFG/ACTT