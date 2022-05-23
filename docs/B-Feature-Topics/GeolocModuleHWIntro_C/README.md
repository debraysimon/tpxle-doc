# Module Hardware Introduction

The module consists of 3 main ICs:

* **STM32WB55VG:**  Combo MCU - BLE5.0; M4+M0 core - 1MB Flash / 256kB RAM - Package: WLCSP100 (0.4mm pitch - 4.39x4.37mm) - Operating voltage 1.71V to 3.6V - Operating Temp : -40 to 105degC
* **MT3333:** GNSS Chip (multi constellation: GPS/Glonass/Beidou/Galileo/SBAS) -  8mb internal Flash - TFBGA: 4.3x4.3mm, 0.5mm pitch  57 balls - Operating voltage 2.8V to 4.3V - Operating Temp : -40 to 85degC
* **LR1110IMLTRT:** Long Range Low power Transceiver (150MHz-960MHz) supporting LoRa + (G)FSK modulation. It includes extra receiver for WIFI and GNSS geolocation capability - 5x5 MLQP 32p package - - Operating voltage 1.8V to 3.7V - Operating Temp : -40 to 85degC

The module also includes, LNA, RF switch, an optional secure element,  passive components , Xtal, TCXO, tuning circuit to get 50 ohm output impedance for the 3 RF ports. The application circuit will only need a 3V.0-3.3V supply and  decoupling cap. 
