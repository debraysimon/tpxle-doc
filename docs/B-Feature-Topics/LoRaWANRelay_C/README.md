# LoRaWAN Relay

The Abeeway LoRaWAN Relay is able to manage communication of up to 15 devices located in isolated or hard to reach locations such as basements, metallic street cabinets, etc.
The Abeeway LoRAWAN Relay operates from 3 user replaceable AAA lithium batteries, providing several years of operation depending on configuration settings and daily frame transmission count.
When planning for a public network roll-out, It is well known that coverage for the last 10% of devices easily adds 30% or more to the overall network CAPEX with the classic network densification approach. The additional CAPEX is due to additional network equipment, but
also the need to secure additional rooftop hosting and power grid connections. Using battery powered relays to boost the signal from the hard-to-reach devices is a complementary approach that usually significantly optimizes the additional CAPEX, particularly when the density of such devices is low or when they are isolated in small groups.
The Relay itself behaves as a LoRAWAN® class A device with the extended MAC commands defined in the LoRa
Alliance TS011-1.0.0 specification: it maintains a low-duty cycle wake-on-radio (WOR) channel, then dynamically switches frequency to collect uplinks from the managed devices and relays the frames to the main LoRaWAN® network. It also collect downlinks from the network and relays them to the relevant device. The relay is equipped with an internal omnidirectional antenna, so the managed devices can be positioned anywhere around it.

The Abeeway LoRaWAN® Relay is entirely managed from the network using the standard TS011 MAC commands which define which of the discovered devices are managed by each Relay. For easier troubleshooting and experiments, the Relay offers a USB serial terminal compatible with Tera Term. A command activates Bootloader mode and allows to upgrade the Relay firmware using Xmodem also from the USB port. The Relay self-estimates its battery level and reports it to the network using standard class A MAC commands.


## Applications
- Boost signal from underground devices street cabinets 
- Boost signal from underground devices
- Provide indoor coverage in hazardous areas

<img src="./images/CompactTrackerPlacement2.png" border="0" />

## Key product features

- **Compliance**: Fully compliant with LoRa Alliance TS011 1.0.0
- **Remote management**: Remotely managed by Relay-enabled LoRaWAN® Network server
- **Radio specification**: Equipped with LoRaWAN® Class A radio
- **Local interface**: USB command line interface for local troubleshooting and configuration
- **Firmware updates**: Supports firmware upgrades through USB
- **Power source**: User replaceable 3*AA Batteries
- **Mounting options**: Fixture by straps, screws or magnets
- **Antenna**: Omnidirectional antenna • Durability: Waterproof IP68 enclosure and IK08 shock resistance
- **Hazardous environments**: Optional ATEX/IECEx zone 2 or Zone 0 versions.



# Battery lifetime

The Relay battery life can be estimated precisely from the traffic profile and radio characteristics using our [online simulator](https://docs.thingpark.com/thingpark-enterprise/7.3/lorawan-relay-calculator.html).
The simulator also estimates the required energy consumption of the managed devices, taking into account the overhead of the wake-up preamble, but also the energy gains resulting from the reduced Tx power and increased datarates (compared to situation without a Relay).


::: warning WARNING
*  The latest information on certification can be found [here](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#certifications).
* The tracker is resistant to water but must never be placed either fully/partially submerged in water or under the influence of high pressure water spray jets for significantly long periods of time. To avoid water entering in the casing, the tracker must not be placed upside down.
* In excessilvely hot weather, we recommend to put the tracker in the shade to avoid overheating.
* **The warranty of the tracker is avoid if used incorrectly**.
:::

### Datasheet
The datasheet of the tracker can be downloaded from [here](/D-Reference/DocLibrary_R/AbeewayTrackers_R.html#data-sheets).
