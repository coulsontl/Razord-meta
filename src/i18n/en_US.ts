const EN = {
    SideBar: {
        Proxies: 'Proxies',
        Overview: 'Overview',
        Logs: 'Logs',
        Rules: 'Rules',
        Settings: 'Setting',
        Connections: 'Connections',
        Version: 'Version',
    },
    Settings: {
        title: 'Settings',
        labels: {
            startAtLogin: 'Start at login',
            language: 'language',
            setAsSystemProxy: 'Set as system proxy',
            allowConnectFromLan: 'Allow Lan',
            proxyMode: 'Mode',
            logLevel: 'Log Level',
            redirProxyPort: 'Redir proxy port',
            socks5ProxyPort: 'Socks5 proxy port',
            httpProxyPort: 'HTTP proxy port',
            mixedProxyPort: 'Mixed proxy port',
            externalController: 'External controller',
        },
        values: {
            cn: '中文',
            en: 'English',
            global: 'Global',
            rules: 'Rules',
            direct: 'Direct',
            script: 'Script',
        },
        versionString: 'Current ClashX is the latest version：{{version}}',
        checkUpdate: 'Check Update',
        externalControllerSetting: {
            title: 'External Controller',
            note: 'Please note that modifying this configuration will only configure Dashboard. Will not modify your Clash configuration file. Please make sure that the external controller address matches the address in the Clash configuration file, otherwise, Dashboard will not be able to connect to Clash.',
            host: 'Host',
            port: 'Port',
            secret: 'Secret',
        },
    },
    Logs: {
        title: 'Logs',
        levelLabel: 'Log level',
    },
    Rules: {
        title: 'Rules',
        providerTitle: 'Providers',
        providerUpdateTime: 'Last updated at',
        ruleCount: 'Rule count',
    },
    Connections: {
        title: 'Connections',
        keepClosed: 'Keep closed connections',
        total: {
            text: 'total',
            upload: 'upload',
            download: 'download',
        },
        closeAll: {
            title: 'Warning',
            content: 'This would close all connections',
        },
        filter: {
            all: 'All',
        },
        columns: {
            host: 'Host',
            network: 'Network',
            type: 'Type',
            chains: 'Chains',
            process: 'Process',
            rule: 'Rule',
            time: 'Time',
            speed: 'Speed',
            upload: 'Upload',
            download: 'Download',
            sourceIP: 'Source IP',
        },
        info: {
            title: 'Connection',
            id: 'ID',
            host: 'Host',
            hostEmpty: 'Empty',
            dstIP: 'IP',
            dstIPEmpty: 'Empty',
            srcIP: 'Source',
            upload: 'Upload',
            download: 'Download',
            network: 'Network',
            process: 'Process',
            processPath: 'Path',
            inbound: 'Inbound',
            rule: 'Rule',
            chains: 'Chains',
            status: 'Status',
            opening: 'Open',
            closed: 'Closed',
            closeConnection: 'Close',
        },
    },
    Proxies: {
        title: 'Proxies',
        editDialog: {
            title: 'Edit Proxy',
            color: 'Color',
            name: 'Name',
            type: 'Type',
            server: 'Server',
            port: 'Port',
            password: 'Password',
            cipher: 'Cipher',
            obfs: 'Obfs',
            'obfs-host': 'Obfs-host',
            uuid: 'UUID',
            alterId: 'AlterId',
            tls: 'TLS',
        },
        groupTitle: 'Policy Group',
        providerTitle: 'Providers',
        providerUpdateTime: 'Last updated at',
        expandText: 'Expand',
        collapseText: 'Collapse',
        speedTestText: 'Speed Test',
        breakConnectionsText: 'Close connections which include the group',
    },
    Modal: {
        ok: 'Ok',
        cancel: 'Cancel',
    },
} as const

export default EN
