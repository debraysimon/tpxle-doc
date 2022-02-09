# Module Hardware Introduction

The module consists of 3 main ICs:

* **STM32WB55VG:**  Combo MCU - BLE5.0; M4+M0 core - 1MB Flash / 256kB RAM - Package: WLCSP100 (0.4mm pitch - 4.39x4.37mm) - Operating voltage 1.71V to 3.6V - Operating Temp : -40 to 105degC
* **MT3333:** GNSS Chip (multi constellation: GPS/Glonass/Beidou/Galileo/SBAS) -  8mb internal Flash - TFBGA: 4.3x4.3mm, 0.5mm pitch  57 balls - Operating voltage 2.8V to 4.3V - Operating Temp : -40 to 85degC
* **LR1110IMLTRT:** Long Range Low power Transceiver (150MHz-960MHz) supporting LoRa + (G)FSK modulation. It includes extra receiver for WIFI and GNSS geolocation capability - 5x5 MLQP 32p pacakage - - Operating voltage 1.8V to 3.7V - Operating Temp : -40 to 85degC

The module also includes, LNA, RF switch, an optional secure element,  passive components , Xtal, TCXO, tuning circuit to get 50 ohm outtput impedance for the 3 RF ports. The application circuit will only need a 3V.0-3.3V supply and  decoupling cap.  

## Hardware Documentation

* Geoloc Module hardware [specification](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Documentation/01_Module%20Study/A1%20-%20Geolocation%20module%20HW%20specification.pdf?csf=1&web=1&e=wJ7ZSB) 
* [Pin Mapping](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Hardware/ES1%20Developpment/02_Hardware/01_Module/02_MCU%20and%20Module%20pining/Geoloc%20Module%20-%20Pin%20Mapping.pdf?csf=1&web=1&e=6QNnx6): This document describe the mapping between the module Pin out (66 pins) and the STM32 pin out
* Geoloc Module [pin out](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Hardware/ES1%20Developpment/02_Hardware/01_Module/02_MCU%20and%20Module%20pining/Geoloc%20Module%20-%20Pin%20Mapping.pdf?csf=1&web=1&e=6QNnx6)
* [Package](https://actilitysa.sharepoint.com/:b:/r/teams/aby/Private%20Documents/Product/Geoloc%20module/Hardware/ES1%20Developpment/02_Hardware/01_Module/Type-1WL%20Geolocation%20Module%20Mechanical%20datasheet_20201022.pdf?csf=1&web=1&e=KoiK7Z) information (Mechanical drawing - 17x17.5mm - 66 pins)

***TBD: We need to decide the following:***
1. If the above documents are in public or restricted private area and which information should be given to customers
2. If any of the pdf/word files need to be in markdown format. Once its done, then RnD needs to edit the github pages directly to avoid duplication of documents
3. The links above are in Abeeway private area and needs to be changed after the decision
4. Review the structure with Olivier and Stephane
5. Incresae the size of the figure
6. Some components like MT3333 are optional (how to handle this).
7. WE cannot give the schematic and layout of the module. We can give schematic of the EVK board 

The next section would be:
1. Introduction to firmware
2. EVK intro

