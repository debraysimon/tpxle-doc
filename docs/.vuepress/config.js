const fs = require('fs');
var version = fs.readFileSync('version.txt', 'utf8').trim();

module.exports = {
    theme: getPackage().theme,
    title: getTitle,
    // theme:'display',
    base: getBase(false),

    head: [
        ['link', {rel: 'icon', href: `/public/favicon.png`}],
    ],

    themeConfig: {
        emojicomKey: 'y0GsFwFtqjyNInLokh03',
        repo: 'https://github.com/actility/tpxle-doc',
        repoLabel: 'Contribute!',
        docsRepo: 'https://github.com/actility/tpxle-doc',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit on GitHub',

        lastUpdated: 'Last Updated',

        logo: getPackage().banner,

        sidebar: {
            'NOW': [
                {
                    title: 'theme version',   // required
                    path: '/NOW/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                },
            ],
            'Home':[
                {
                    path:'/Home/',
                }
            ],
            '/': [
                {
                    title: 'Getting started',
                    collapsable: true,
                    children: [
                        {
                            title: 'ThingPark Location overview',
                            path: '/B-Feature-Topics/TP-Location_C/',
                            collapsable: true,
                        },
                        {
                            title: 'Getting started with Abeeway evaluation kit',
                            path: '/C-Procedure-Topics/GetStartedAEK_T/',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                {
                                    title: 'Deploying your trackers',
                                    path: '/C-Procedure-Topics/DeployTrackersAEK_T/',
                                },
                                {
                                    title: 'Tracking your assets',
                                    path: '/C-Procedure-Topics/TrackAssetsAEK_T/',
                                },
                            ],
                        },
                        {
                            title: 'Getting started with Abeeway tracking app',
                            path: '/C-Procedure-Topics/GetStartedMobileApp_T/',
                            collapsable: true,
                        },
                        {
                            title: 'Connecting your LoRaWAN network server',
                            path: '/C-Procedure-Topics/ProvisionTrackerOverview_T/',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [

                                {
                                    title: 'Provisioning your trackers on ThingPark Enterprise',
                                    path: '/C-Procedure-Topics/ProvisionTrackerTPE_T/',
                                },
                                {
                                    title: 'Provisioning your trackers on ThingPark Wireless',
                                    path: '/C-Procedure-Topics/ProvisionTrackerTPW_T/',
                                },
                                {
                                    title: 'Provisioning your trackers on third-party network servers',
                                    path: '/B-Feature-Topics/Integrate3PNS_0_C/',
                                    collapsable: true,
                                    sidebarDepth: 0,
                                    children: [
                                        {
                                            title: 'Actility Network Interface Translator',
                                            path: '/B-Feature-Topics/Integrate3PNS_1_C/',
                                            collapsable: true,
                                            sidebarDepth: 0,
                                        },
                                        {
                                            title: 'Node Red Network Interface Translator',
                                            path: '/B-Feature-Topics/Integrate3PNS_2_C/',
                                            collapsable: true,
                                            sidebarDepth: 0,
                                            children: [
                                                {
                                                    title: 'Installing a Node-RED server',
                                                    path: '/C-Procedure-Topics/InstallNodeRED_T/',
                                                },
                                                {
                                                    title: 'Getting the token',
                                                    path: '/C-Procedure-Topics/GetToken_T/',
                                                },
                                                {
                                                    title: 'Configuring the Network Interface Converter',
                                                    path: '/C-Procedure-Topics/ConfigureNIC_T/',
                                                },
                                                {
                                                    title: 'Rerouting the uplinks',
                                                    path: '/C-Procedure-Topics/RerouteUplinks_T/',
                                                },
                                                {
                                                title: 'Provisioning your trackers on a third-party network server',
                                                path: '/C-Procedure-Topics/ProvisionTracker3PNS_T/',
                                                }
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: 'Deploying your trackers',
                                    path: '/C-Procedure-Topics/DeployTrackers_T/',
                                },
                                {
                                    title: 'Tracking your assets',
                                    path: '/C-Procedure-Topics/TrackAssets_T/',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Learning about Abeeway trackers',
                    collapsable: true,
                    children: [
                        {
                            title: 'Trackers Overview',
                            path: '/B-Feature-Topics/TrackerOverview/',
                        },
                        {
                            title: 'Micro tracker',
                            path: '/B-Feature-Topics/MicroTracker_C/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Key micro tracker commands',
                                    path: '/D-Reference/MicroTrackerCommands_R/',
                                },
                                {
                                    title: 'Micro tracker best placement',
                                    path: '/B-Feature-Topics/MicroTrackerPlacement_C/',
                                },
                                {
                                    title: 'Reset the micro tracker and re-join LoRaWAN network',
                                    path: '/C-Procedure-Topics/ReDoJoinRequestMT_T/',
                                },
                            ],
                        },
                        {
                            title: 'Smart badge',
                            path: '/B-Feature-Topics/SmartBadge_C/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Key smart badge commands',
                                    path: '/D-Reference/SmartBadgeCommands_R/',
                                },
                                {
                                    title: 'Smart badge best placement',
                                    path: '/B-Feature-Topics/SmartBadgePlacement_C/',
                                },
                                {
                                    title: 'Reset the smart badge and re-join LoRaWAN network',
                                    path: '/C-Procedure-Topics/ReDoJoinRequestSB_T/',
                                },
                            ],
                        },
                        {
                            title: 'Industrial tracker',
                            path: '/B-Feature-Topics/IndustrialTracker_C/',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                {
                                    title: 'Industrial tracker best placement',
                                    path: '/B-Feature-Topics/IndusTrackerPlacement_C/',
                                },
                                {
                                    title: 'Reset the Industrial tracker and re-join LoRaWAN network',
                                    path: '/C-Procedure-Topics/ReDoJoinRequestIND_T/',
                                },
                            ],
                        },
                        {
                            title: 'Compact tracker',
                            path: '/B-Feature-Topics/CompactTracker_C/',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                {
                                    title: 'Compact tracker best placement',
                                    path: '/B-Feature-Topics/CompactTrackerPlacement_C/',
                                },
                                {
                                    title: 'Reset the compact tracker and re-join LoRaWAN network',
                                    path: '/C-Procedure-Topics/ReDoJoinRequestCT_T/',
                                },
                            ],
                        },
                        {
                            title: 'Geolocation Module',
                            path: '/B-Feature-Topics/GeolocModule_C/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Geolocation Module Hardware Introduction',
                                    path: '/B-Feature-Topics/GeolocModuleHWIntro_C/',
                                },
                                {
                                    title: 'Geolocation Module Firmware Introduction',
                                    path: '/B-Feature-Topics/GeolocModuleFWIntro_C/',
                                },
                                {
                                    title: 'Geolocation Module Evaluation Kit Introduction',
                                    path: '/B-Feature-Topics/GeolocModuleEVKIntro_C/',
                                },
                            ],
                        },
                        {
                            title: 'Abeeway Device Manager',
                            path: '/B-Feature-Topics/AbeewayDeviceManager_C/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Tracking your assets',
                                    path: '/C-Procedure-Topics/TrackAssetsADM_T/',
                                },
                                {
                                    title: 'Changing the tracker configuration',
                                    path: '/C-Procedure-Topics/ChangeTrackerConfiguration_T/',
                                },
                                {
                                    title: 'Location templates',
                                    path: '/D-Reference/LocationTemplates_R/',
                                },
                                {
                                    title: 'Battery lifetime calculator',
                                    path: '/D-Reference/PowerConsumption_R/',
                                },
                            ],
                        },
                        {
                            title: 'Trackers documentation',
                            path: '/D-Reference/TrackersDoc_R/',
                        },
                    ],
                },
                {
                    title: 'Connecting your LoRaWAN network server',
                    collapsable: true,
                    children: [
                        {
                            title: 'Provision your trackers on LoRaWAN Network Server',
                            path: '/C-Procedure-Topics/NetworkServerOverview/',
                        },
                        {
                            title: 'Provisioning your trackers on ThingPark Enterprise',
                            path: '/C-Procedure-Topics/ProvisionTrackerTPE_T/',
                        },
                        {
                            title: 'Provisioning your trackers on ThingPark Wireless',
                            path: '/C-Procedure-Topics/ProvisionTrackerTPW_T/',
                        },
                        {
                            title: 'Provisioning your trackers on third-party network servers',
                            path: '/B-Feature-Topics/Integrate3PNS_0_C/',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                {
                                    title: 'Actility Network Interface Translator',
                                    path: '/B-Feature-Topics/Integrate3PNS_1_C/',
                                    collapsable: true,
                                    sidebarDepth: 0,
                                },
                                {
                                    title: 'Node Red Network Interface Translator',
                                    path: '/B-Feature-Topics/Integrate3PNS_2_C/',
                                    collapsable: true,
                                    sidebarDepth: 0,
                                    children: [
                                        {
                                            title: 'Installing a Node-RED server',
                                            path: '/C-Procedure-Topics/InstallNodeRED_T/',
                                        },
                                        {
                                            title: 'Getting the token',
                                            path: '/C-Procedure-Topics/GetToken_T/',
                                        },
                                        {
                                            title: 'Configuring the Network Interface Converter',
                                            path: '/C-Procedure-Topics/ConfigureNIC_T/',
                                        },
                                        {
                                            title: 'Rerouting the uplinks',
                                            path: '/C-Procedure-Topics/RerouteUplinks_T/',
                                        },
                                        {
                                        title: 'Provisioning your trackers on a third-party network server',
                                        path: '/C-Procedure-Topics/ProvisionTracker3PNS_T/',
                                        }
                                    ],
                                },
                            ],
                        },
                        {
                            title: 'Deploying your trackers',
                            path: '/C-Procedure-Topics/DeployTrackers_T/',
                        },
                        {
                            title: 'Tracking your assets',
                            path: '/C-Procedure-Topics/TrackAssets_T/',
                        },
                    ],
                },
                {
                    title: 'Integrating your application with ThingPark Location',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: 'B-Feature-Topics/IntegrateAppwithTPLocation_C/',
                        },
                        {
                            title: 'Using ThingPark Location API',
                            path: '/B-Feature-Topics/UseTPLocationAPI_C/',
                        },
                        {
                            title: 'Encoding/Decoding LoRaWAN payloads',
                            path: '/C-Procedure-Topics/UseAbeewayDriver_T/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Decoding an uplink message',
                                    path: '/C-Procedure-Topics/DecodeUplinkMessage_T/',
                                },
                                {
                                    title: 'Encoding a downlink message',
                                    path: '/C-Procedure-Topics/EncodeDownlinkMessage_T/',
                                },
                                {
                                    title: 'Decoding a downlink message',
                                    path: '/C-Procedure-Topics/DecodeDownlinkMessage_T/',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Documentation library',
                    collapsable: true,
                    children: [
                        {
                            title: 'Suggested journey through the documentation',
                            path: '/D-Reference/DocLibrary_R/SuggestedJourney_R',
                        },
                        {
                          title: 'Abeeway trackers',
                          path: '/D-Reference/DocLibrary_R/AbeewayTrackers_R',
                        },
                        {
                          title: 'ThingPark X Location Engine',
                          path: '/D-Reference/DocLibrary_R/ThingParkLocationEngine_R',
                        },
                    ],
                },
                {
                    title: 'Troubleshooting & Support',
                    collapsable: true,
                    children: [
                        {
                            title: 'Identify the tracker model & Firmware',
                            path: '/D-Reference/IdentifyTrackerModel/',
                        },
                        {
                            title: 'Identify installed Firmware',
                            path: '/D-Reference/IdentifyInstalledFirmware/',
                        },
                        {
                            title: 'Firmware Update',
                            path: '/D-Reference/FirmwareUpdateOverview_R',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                {
                                    title: 'Firmware Update (Using Abeeway Tracking App)',
                                    path: 'D-Reference/FirmwareUpdateMobileApp_R/',
                                },
                                {
                                    title: 'Firmware Update (Using Abeeway Updater)',
                                    path: '/D-Reference/AbeewayFirmwareUpdate_R/',
                                },
                            ],
                        },
                        {
                            title: 'Using Command Line Interface (CLI)',
                            path: '/D-Reference/UsingCLI_R/',
                        },
                        {
                            title: 'ThingPark platforms URLs',
                            path: '/D-Reference/ThingParkLocationURLs/',
                        },
                        {
                            title: 'Release Notes',
                            path: '/D-Reference/ReleaseNotes/',
                        },
                        {
                          title: 'Power Consumption',
                          path: '/AbeewayRefGuide/functioning/power-consumption/',
                        },
                        {
                            title: 'FAQ',
                            path: '/D-Reference/FAQ_R/',
                        },
                    ],
                },
                {
                    title: 'Abeeway trackers reference guide',
                    collapsable: true,
                    children: [
                        {
                            title: 'Abeeway Firmware 2.4',
                            path: '/AbeewayRefGuide/introduction/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children: [
                                 {
                                 title: 'Introduction',
                                 path: '/AbeewayRefGuide/introduction/',
                                 collapsable: true,
                                 sidebarDepth: 3,
                                 children:[
                                    {
                                    title: 'Products description',
                                    path: '/AbeewayRefGuide/introduction/product-description/',
                                    },
                                    {
                                    title: 'Typical applications',
                                    path: '/AbeewayRefGuide/introduction/typical-apps/',
                                    },
                                    {
                                    title: 'Features',
                                    path: '/AbeewayRefGuide/introduction/features/',
                                    },
                                ],
                            },
                        {
                        title: 'Devices characteristics',
                        path: '/AbeewayRefGuide/devices-characteristics/',
                        collapsable: true,
                        sidebarDepth: 3,
                        children:[
                            {
                                title: 'Getting started with devices',
                                path: '/AbeewayRefGuide/devices-characteristics/getting-started/',
                            },
                            {
                                title: 'Micro tracker',
                                path: '/AbeewayRefGuide/devices-characteristics/micro-tracker/',
                            },
                            {
                                title: 'Smart badge',
                                path: '/AbeewayRefGuide/devices-characteristics/smart-badge/',
                            },
                            {
                                title: 'Compact and industrial devices',
                                path: '/AbeewayRefGuide/devices-characteristics/compact-industrial/',
                            },
                            ]
                        },
                        {
                            title: 'Functioning',
                            path: '/AbeewayRefGuide/functioning/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children:[
                              {
                                title: 'Startup process',
                                path: '/AbeewayRefGuide/functioning/startup-process/',
                              },
                              {
                                title: 'Main operating modes',
                                path: '/AbeewayRefGuide/functioning/main-operating-modes/',
                              },
                              {
                                title: 'Side operations',
                                path: '/AbeewayRefGuide/functioning/side-operations/',
                              },
                              {
                                title: 'Default and dynamic profiles',
                                path: '/AbeewayRefGuide/functioning/default-dynamic-profiles/',
                              },
                              {
                                title: 'SOS',
                                path: '/AbeewayRefGuide/functioning/sos/',
                              },
                              {
                                title: 'Motion detection',
                                path: '/AbeewayRefGuide/functioning/motion-detection/',
                              },
                              {
                                title: 'Shock detection',
                                path: '/AbeewayRefGuide/functioning/shock-detection/',
                              },
                              {
                                title: 'Event messages',
                                path: '/AbeewayRefGuide/functioning/event-messages/',
                              },
                              {
                                title: 'Temperature monitoring',
                                path: '/AbeewayRefGuide/functioning/temperature-monitoring/',
                              },
                              {
                                title: 'Low battery management for trackers with rechargeable batteries',
                                path: '/AbeewayRefGuide/functioning/low-battery-management/',
                              },
                              {
                                title: 'Network timeout monitoring',
                                path: '/AbeewayRefGuide/functioning/network-timeout-monitoring/',
                              },
                              {
                                title: 'User interfaces',
                                path: '/AbeewayRefGuide/functioning/user-interfaces/',
                              },
                              {
                                title: 'Power Consumption',
                                path: '/AbeewayRefGuide/functioning/power-consumption/',
                              },
                            ]
                        },
                        {
                            title: 'Geolocation strategy modes',
                            path: '/AbeewayRefGuide/geolocation-strategy-modes/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children:[
                              {
                                title: 'Main operating modes, SOS and side operations',
                                path: '/AbeewayRefGuide/geolocation-strategy-modes/main-side-operations/',
                              },
                              {
                                title: 'Geolocation technology description',
                                path: '/AbeewayRefGuide/geolocation-strategy-modes/geolocation-technology/',
                              },
                            ]
                        },
                        {
                            title: 'BLE communication interface',
                            path: '/AbeewayRefGuide/ble-communication-interface/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children:[
                              {
                                title: 'Connection and pairing',
                                path: '/AbeewayRefGuide/ble-communication-interface/connection-pairing/',
                              },
                              {
                                title: 'Firmware update OTA via BLE and client application',
                                path: '/AbeewayRefGuide/ble-communication-interface/fw-update-client-app/',
                              },
                            ]
                        },
                        {
                            title: 'Uplink messages',
                            path: '/AbeewayRefGuide/uplink-messages/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children:[
                              {
                                title: 'LoRaWAN uplink transmission',
                                path: '/AbeewayRefGuide/uplink-messages/lorawan-ul-transmission/',
                              },
                              {
                                title: 'Encoded form',
                                path: '/AbeewayRefGuide/uplink-messages/encoded-form/',
                              },
                              {
                                title: 'Common message header',
                                path: '/AbeewayRefGuide/uplink-messages/common-message-header/',
                              },
                              {
                                title: 'Heartbeat messages',
                                path: '/AbeewayRefGuide/uplink-messages/heartbeat/',
                              },
                              {
                                title: 'Position messages',
                                path: '/AbeewayRefGuide/uplink-messages/position/',
                              },
                              {
                                title: 'Extended position messages',
                                path: '/AbeewayRefGuide/uplink-messages/extended-position/',
                              },
                              {
                                title: 'Status messages',
                                path: '/AbeewayRefGuide/uplink-messages/status/',
                              },
                              {
                                title: 'Activity status messages',
                                path: '/AbeewayRefGuide/uplink-messages/activity-status/',
                              },
                              {
                                title: 'Configuration messages',
                                path: '/AbeewayRefGuide/uplink-messages/configuration/',
                              },
                              {
                                title: 'BLE MAC address messages',
                                path: '/AbeewayRefGuide/uplink-messages/ble-mac-address/',
                              },
                              {
                                title: 'Shock detection messages',
                                path: '/AbeewayRefGuide/uplink-messages/shock-detection/',
                              },
                              {
                                title: 'Frame pending messages',
                                path: '/AbeewayRefGuide/uplink-messages/frame-pending/',
                              },{
                                title: 'Shutdown messages',
                                path: '/AbeewayRefGuide/uplink-messages/shutdown/',
                              },
                              {
                                title: 'Event messages',
                                path: '/AbeewayRefGuide/uplink-messages/event/',
                              },
                              {
                                title: 'Collection scan messages',
                                path: '/AbeewayRefGuide/uplink-messages/collection-scan/',
                              },
                              {
                                title: 'Debug payloads',
                                path: '/AbeewayRefGuide/uplink-messages/debug-payloads/',
                              },
                            ]
                        },
                        {
                            title: 'Downlink messages',
                            path: '/AbeewayRefGuide/downlink-messages/',
                            collapsable: true,
                            sidebarDepth: 1,
                            children:[
                              {
                                title: 'Acknowledge token',
                                path: '/AbeewayRefGuide/downlink-messages/ack-token/',
                              },
                              {
                                title: 'Operational mode configuration',
                                path: '/AbeewayRefGuide/downlink-messages/operational-mode-configuration/',
                              },
                              {
                                title: 'Position on demand',
                                path: '/AbeewayRefGuide/downlink-messages/position-on-demand/',
                              },
                              {
                                title: 'Request device configuration',
                                path: '/AbeewayRefGuide/downlink-messages/request-device-configuration/',
                              },
                              {
                                title: 'Request temperature status',
                                path: '/AbeewayRefGuide/downlink-messages/request-temp-status/',
                              },
                              {
                                title: 'SOS setup',
                                path: '/AbeewayRefGuide/downlink-messages/sos-setup/',
                              },
                              {
                                title: 'Angle detection command',
                                path: '/AbeewayRefGuide/downlink-messages/angle-detection-command/',
                              },
                              {
                                title: 'Status request',
                                path: '/AbeewayRefGuide/downlink-messages/status-request/',
                              },
                              {
                                title: 'Clear motion duty cycle',
                                path: '/AbeewayRefGuide/downlink-messages/clear-motion-percentage/',
                              },
                              {
                                title: 'Parameters configuration',
                                path: '/AbeewayRefGuide/downlink-messages/parameters-configuration/',
                              },
                              {
                                title: 'Debug commands',
                                path: '/AbeewayRefGuide/downlink-messages/debug-commands/',
                              },
                              {
                                title: 'Two complement encoding',
                                path: '/AbeewayRefGuide/downlink-messages/two-complement-encoding/',
                              },
                            ]
                        },
                        {
                          title: 'Parameters and default configuration',
                          path: '/AbeewayRefGuide/Parameters-default-configuration/Overview',
                          collapsable: true,
                          sidebarDepth: 1,
                          children:[
                            {
                              title: 'Firmware Parameters',
                              path: '/AbeewayRefGuide/Parameters-default-configuration/firmware-parameters',
                            },
                            {
                              title: 'Factory Default Configuration',
                              path: '/AbeewayRefGuide/Parameters-default-configuration/factory-default',
                            },
                            {
                            title: 'Default delivered Configuration',
                            path: '/AbeewayRefGuide/Parameters-default-configuration/configuration-default',
                            collapsable: true,
                            children:[
                              {
                                title: 'Smart Badge & Micro Tracker',
                                path: '/AbeewayRefGuide/Parameters-default-configuration/default-delivered-mt-sb',
                              },
                              {
                                title: 'Compact Tracker & Industrial Tracker',
                                path: '/AbeewayRefGuide/Parameters-default-configuration/default-delivered-ci',
                              },
                            ]
                            },  
                          ]
                        },
                        {
                            title: 'Command Line Interpreter (CLI) interface',
                            path: '/AbeewayRefGuide/cli-interface/',
                            collapsable: true,
                          },
                          {
                            title: 'Tracker reset',
                            path: '/AbeewayRefGuide/tracker-reset/',
                            collapsable: true,
                        },
                            ]
                        },
                        {
                          title: 'Abeeway Firmware 2.3',
                          path: '/AbeewayRefGuide_2.3/introduction/',
                          collapsable: true,
                          sidebarDepth: 3,
                          children: [
                            {
                            title: 'Introduction',
                            path: '/AbeewayRefGuide_2.3/introduction/',
                            collapsable: true,
                            sidebarDepth: 3,
                            children:[
                          {
                              title: 'Products description',
                              path: '/AbeewayRefGuide_2.3/introduction/product-description/',
                          },
                          {
                              title: 'Typical applications',
                              path: '/AbeewayRefGuide_2.3/introduction/typical-apps/',
                          },
                          {
                              title: 'Features',
                              path: '/AbeewayRefGuide_2.3/introduction/features/',
                          },
                      ],
                      },
                      {
                      title: 'Devices characteristics',
                      path: '/AbeewayRefGuide_2.3/devices-characteristics/',
                      collapsable: true,
                      sidebarDepth: 3,
                      children:[
                          {
                              title: 'Getting started with devices',
                              path: '/AbeewayRefGuide_2.3/devices-characteristics/getting-started/',
                          },
                          {
                              title: 'Micro tracker',
                              path: '/AbeewayRefGuide_2.3/devices-characteristics/micro-tracker/',
                          },
                          {
                              title: 'Smart badge',
                              path: '/AbeewayRefGuide_2.3/devices-characteristics/smart-badge/',
                          },
                          {
                              title: 'Compact and industrial devices',
                              path: '/AbeewayRefGuide_2.3/devices-characteristics/compact-industrial/',
                          },
                          ]
                      },
                      {
                          title: 'Functioning',
                          path: '/AbeewayRefGuide_2.3/functioning/',
                          collapsable: true,
                          sidebarDepth: 3,
                          children:[
                            {
                              title: 'Startup process',
                              path: '/AbeewayRefGuide_2.3/functioning/startup-process/',
                            },
                            {
                              title: 'Main operating modes',
                              path: '/AbeewayRefGuide_2.3/functioning/main-operating-modes/',
                            },
                            {
                              title: 'Side operations',
                              path: '/AbeewayRefGuide_2.3/functioning/side-operations/',
                            },
                            {
                              title: 'Default and dynamic profiles',
                              path: '/AbeewayRefGuide_2.3/functioning/default-dynamic-profiles/',
                            },
                            {
                              title: 'SOS',
                              path: '/AbeewayRefGuide_2.3/functioning/sos/',
                            },
                            {
                              title: 'Motion detection',
                              path: '/AbeewayRefGuide_2.3/functioning/motion-detection/',
                            },
                            {
                              title: 'Shock detection',
                              path: '/AbeewayRefGuide_2.3/functioning/shock-detection/',
                            },
                            {
                              title: 'Event messages',
                              path: '/AbeewayRefGuide_2.3/functioning/event-messages/',
                            },
                            {
                              title: 'Temperature monitoring',
                              path: '/AbeewayRefGuide_2.3/functioning/temperature-monitoring/',
                            },
                            {
                              title: 'Low battery management for trackers with rechargeable batteries',
                              path: '/AbeewayRefGuide_2.3/functioning/low-battery-management/',
                            },
                            {
                              title: 'Network timeout monitoring',
                              path: '/AbeewayRefGuide_2.3/functioning/network-timeout-monitoring/',
                            },
                            {
                              title: 'User interfaces',
                              path: '/AbeewayRefGuide_2.3/functioning/user-interfaces/',
                            },
                          ]
                      },
                      {
                          title: 'Geolocation strategy modes',
                          path: '/AbeewayRefGuide_2.3/geolocation-strategy-modes/',
                          collapsable: true,
                          sidebarDepth: 3,
                          children:[
                            {
                              title: 'Main operating modes, SOS and side operations',
                              path: '/AbeewayRefGuide_2.3/geolocation-strategy-modes/main-side-operations/',
                            },
                            {
                              title: 'Geolocation technology description',
                              path: '/AbeewayRefGuide_2.3/geolocation-strategy-modes/geolocation-technology/',
                            },
                          ]
                      },
                      {
                          title: 'BLE communication interface',
                          path: '/AbeewayRefGuide_2.3/ble-communication-interface/',
                          collapsable: true,
                          sidebarDepth: 3,
                          children:[
                            {
                              title: 'Connection and pairing',
                              path: '/AbeewayRefGuide_2.3/ble-communication-interface/connection-pairing/',
                            },
                            {
                              title: 'Firmware update OTA via BLE and client application',
                              path: '/AbeewayRefGuide_2.3/ble-communication-interface/fw-update-client-app/',
                            },
                          ]
                      },
                      {
                          title: 'Uplink messages',
                          path: '/AbeewayRefGuide_2.3/uplink-messages/',
                          collapsable: true,
                          sidebarDepth: 3,
                          children:[
                            {
                              title: 'LoRaWAN uplink transmission',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/lorawan-ul-transmission/',
                            },
                            {
                              title: 'Encoded form',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/encoded-form/',
                            },
                            {
                              title: 'Common message header',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/common-message-header/',
                            },
                            {
                              title: 'Heartbeat messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/heartbeat/',
                            },
                            {
                              title: 'Position messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/position/',
                            },
                            {
                              title: 'Extended position messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/extended-position/',
                            },
                            {
                              title: 'Status messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/status/',
                            },
                            {
                              title: 'Activity status messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/activity-status/',
                            },
                            {
                              title: 'Configuration messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/configuration/',
                            },
                            {
                              title: 'BLE MAC address messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/ble-mac-address/',
                            },
                            {
                              title: 'Shock detection messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/shock-detection/',
                            },
                            {
                              title: 'Frame pending messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/frame-pending/',
                            },{
                              title: 'Shutdown messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/shutdown/',
                            },
                            {
                              title: 'Event messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/event/',
                            },
                            {
                              title: 'Collection scan messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/collection-scan/',
                            },
                            {
                              title: 'Proximity messages',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/proximity/',
                            },
                            {
                              title: 'Debug payloads',
                              path: '/AbeewayRefGuide_2.3/uplink-messages/debug-payloads/',
                            },
                          ]
                      },
                      {
                          title: 'Downlink messages',
                          path: '/AbeewayRefGuide_2.3/downlink-messages/',
                          collapsable: true,
                          sidebarDepth: 1,
                          children:[
                            {
                              title: 'Acknowledge token',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/ack-token/',
                            },
                            {
                              title: 'Operational mode configuration',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/operational-mode-configuration/',
                            },
                            {
                              title: 'Position on demand',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/position-on-demand/',
                            },
                            {
                              title: 'Request device configuration',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/request-device-configuration/',
                            },
                            {
                              title: 'Request temperature status',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/request-temp-status/',
                            },
                            {
                              title: 'SOS setup',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/sos-setup/',
                            },
                            {
                              title: 'Proximity control',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/proximity-control/',
                            },
                            {
                              title: 'Angle detection command',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/angle-detection-command/',
                            },
                            {
                              title: 'Status request',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/status-request/',
                            },
                            {
                              title: 'Parameters configuration',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/parameters-configuration/',
                            },
                            {
                              title: 'Debug commands',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/debug-commands/',
                            },
                            {
                              title: 'Two complement encoding',
                              path: '/AbeewayRefGuide_2.3/downlink-messages/two-complement-encoding/',
                            },
                          ]
                      },
                      {
                          title: 'Command Line Interpreter (CLI) interface',
                          path: '/AbeewayRefGuide_2.3/cli-interface/',
                          collapsable: true,
                        },
                        {
                          title: 'Default configuration delivered with micro tracker and smart badge',
                          path: '/AbeewayRefGuide_2.3/default-config-delivered-ms/',
                          collapsable: true,
                        },
                        {
                          title: 'Default delivered compact and industrial tracker configuration',
                          path: '/AbeewayRefGuide_2.3/default-config-delivered-ci/',
                          collapsable: true,
                        },
                        {
                          title: 'Factory default configuration',
                          path: '/AbeewayRefGuide_2.3/factory-default-config/',
                          collapsable: true,
                        },
                        {
                          title: 'Tracker reset',
                          path: '/AbeewayRefGuide_2.3/tracker-reset/',
                          collapsable: true,
                      },
                          ]
                        },
                        {
                          title: 'Older Versions',
                          path: 'https://actilitysa.sharepoint.com/:f:/t/aby/Ep4-XPaCPlpDkUrSP2_Iao0BLcCjcPyL_wiSe1aak0MzOg?e=AhKbQW',
                        },
                    ]
                },
            ],
        }
    },
}

function getPackage() {
    var options = {}
    const resultPackages = require('minimist')(process.argv.slice(2))._[2]
    if (resultPackages) {
        switch (resultPackages) {
            case 'abeeway':
                options['theme'] = resultPackages
                options['banner'] = '/img/DesktopBanner-' + resultPackages + '.png'
                return options
            default:
                options['theme'] = resultPackages
                options['banner'] = '/img/DesktopBanner-' + resultPackages + '.png'
                return options
        }
    } else {
        options['theme'] = 'actility'
        options['banner'] = '/img/DesktopBanner-actility.png'
        return options
    }
}

function getTitle() {
    return 'ThingPark Location (' + version + ')';
}

function getBase(printVersion) {
    if (printVersion) {
        if (version.endsWith("-SNAPSHOT")) {
            return "/thingpark-location/";
        }
        var rx = /([0-9]*\.[0-9]*).*/g;
        var result = rx.exec(version);
        return "/thingpark-location/" + result[1] + "/";
    } else {
        return "/thingpark-location/";
    }
}
