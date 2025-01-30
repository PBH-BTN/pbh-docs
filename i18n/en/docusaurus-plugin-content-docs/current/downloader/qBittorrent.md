---
sidebar_position: 1
---

# qBittorrent

:::warning

All downloaders that deploy in Docker MUST use host network mode to make sure downloader can get correct incoming connection IP address, bridge will break it and not supported. PeerBanHelper may not working if you downloader not in correct network mode.

:::

:::warning

The PeerBanHelper is only compatible with qBittorrent versions `v4.5.0` and higher, and it is not compatible with XDown. Even if you manage to run PeerBanHelper successfully on an incompatible downloader, we will not provide any support for such configurations.

:::

PeerBanHelper leverages the WebAPI of qBittorrent to interact with it. This chapter will guide you on how to enable the WebUI for qBittorrent and successfully connect it to PeerBanHelper. For users using qBittorrent in Linux or Docker environments, if your WebUI is already configured, you can skip through the relevant steps.

## Enable WebUI

Click on the gear icon at the main page to open the settings menu.

![step1](assets/qBittorrent-step1.png)

Next, follow these steps:

1. Switch to the "WebUI" tab in the left sidebar.
2. Check the box for "Enable Web User Interface (Remote Control)".
3. Configure a port number; we use `7474` as an example. Note that the term "IP Address" here refers to the "Listen Network Card Address". If you're unsure about its meaning, keep it at the default of `*`, but ensure your firewall is configured correctly so that only necessary ports are accessible.
4. In the "Authentication" section, set a username and a strong password. If someone guesses the password, they might access qBittorrent's download files or execute commands/programs.
5. Finally, click on the bottom-right button to apply the settings.

:::warning

**Security Tip**
- Set strong passwords to protect your qBittorrent.
- If you only use it locally, consider restricting access to `127.0.0.1`.
- Ensure that your firewall is configured correctly and only allows necessary ports.

:::

![step2](assets/qBittorrent-step2.png)

## Configure Advanced Options

In addition to enabling WebUI, some configuration adjustments are needed for PeerBanHelper to function properly:

1. Switch to the "Advanced" tab in the left sidebar.
2. Uncheck the box next to "Resolve User Hostnames".
3. Scroll down to the "libtorrent-related" section and uncheck the option titled "Allow multiple connections from the same IP address". 
:::tip

From version `v7.2.0` and above, when a downloader connects to PBH, the option "Allow multiple connections from
the same IP address" will automatically be disabled by qBittorrent. Therefore, if you are using the correct
version, there is no need for manual configuration of this setting.

:::

![step3](assets/qBittorrent-step3.png)
![step4](assets/qBittorrent-step4.png)

## Add qBittorrent Downloader in PeerBanHelper

Follow these steps to add the downloader:

1. Open PeerBanHelper's Add Downloader window.
2. In the top-down list of downloader types, select "qBittorrent".
3. You can leave the name field empty but ensure it doesn't contain a period (`.`).
4. In the address bar, enter `http://localhost:7474`, where `7474` is the port number you configured earlier. When entering the URL, make sure not to end with a forward slash (`/`).
5. For the username and password, use the credentials set in the "Authentication" section.
6. Click on the "OK" button to confirm; if prompted successfully, it indicates that the addition was successful.

![step5](assets/qBittorrent-step5.png)