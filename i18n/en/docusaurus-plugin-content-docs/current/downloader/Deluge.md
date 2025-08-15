---
sidebar_position: 4
---

# Deluge

:::warning

All downloaders that deploy in Docker MUST use host network mode to make sure downloader can get correct incoming connection IP address, bridge will break it and not supported. PeerBanHelper may not working if you downloader not in correct network mode.

:::

PeerBanHelper will connect to Deluge through Deluge's plugin system.

## Installing PBH-Adapter-Deluge Adapter

First, you need to download the Deluge adapter: [PBH-BTN/PBH-Adapter-Deluge](https://github.com/PBH-BTN/PBH-Adapter-Deluge/releases). Please select the plugin Egg file that matches your Deluge version for download. If there are no special instructions, please download the latest version.

### Windows Installation Steps

1. In Deluge, select "Edit" -> "Preferences" to open the configuration window.

   ![step1](assets/Deluge-step1.png)

2. Go to the "Plugins" menu and click the "Install Plugin" button.

   ![step2](assets/Deluge-step2.png)

3. In the file selection dialog that pops up, select the Egg file you just downloaded.

   ![step3](assets/Deluge-step3.png)

4. After selecting, the plugin should be installed. Return to the plugins menu, you should see the PeerBanHelper plugin. Please check the box to enable it and click "Close" to save and exit.

   ![step4](assets/Deluge-step4.png)

### Linux Installation Steps

For Linux users, please place the downloaded Egg file in Deluge's plugin directory.

## Configuring PBH-Adapter-Deluge Adapter

The PBH-Adapter-Deluge plugin will be automatically enabled after installation, no additional configuration is required.

## Connecting to PeerBanHelper

On the PeerBanHelper add downloader page, select the Deluge downloader.

1. Click the "New Downloader" button in PBH, and select the Deluge downloader in the dialog that pops up.

   ![step5](assets/Deluge-step5.png)

2. Fill in the connection parameters:
   * **Name**: Give it a name you like
   * **Address**: Fill in your Deluge WebUI address
   * **Password**: Fill in your Deluge WebUI password
   * **RPC URL**: If you don't know what this is, please fill in `/json`
   * **Incremental Ban**: It is recommended to enable this to reduce the number of requests to the downloader
   * **HTTP Version**: Keep default (HTTP/1.1)
   * **Validate SSL Certificate**: Enable if using HTTPS connection with a valid certificate; disable if using a self-signed certificate or validation is not needed

3. Click OK to save and complete the addition.