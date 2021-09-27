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
        emojicomKey: '24lr9TXIVpwrZ8KvVCll',
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
                            title: 'Connecting your LoRaWAN network server',
                            path: '/C-Procedure-Topics/ProvisionTrackerTPE_T/',
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
                            title: 'Tracker Overview',
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
                                    title: 'Re-doing a micro tracker join request',
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
                                    title: 'Re-doing a smart badge join request',
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
                            title: 'Using ThingPark Location API',
                            path: '/B-Feature-Topics/UseTPLocationAPI_C/',
                        },
                        {
                            title: 'Using Abeeway Device Manager to encode or decode payloads',
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
                            title: 'Documentation library',
                            path: '/D-Reference/DocLibrary_R/',
                        },
                    ],
                },
                {
                    title: 'Troubleshooting',
                    collapsable: true,
                    children: [
                        {
                            title: 'ThingPark platforms URLs',
                            path: '/D-Reference/ThingParkLocationURLs/',
                        },
                        {
                            title: 'FAQ',
                            path: '/D-Reference/FAQ_R/',
                        },
                    ],
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