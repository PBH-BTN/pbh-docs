# FAQ

## PeerBanHelper detects Peers that need to be banned but does not ban them (Critical Error: Downloader in Incorrect Network Mode, PeerBanHelper May Not Work)

This is usually because the IP address is incorrect. Check if the IP address of the Peer that is not banned is 172.x.x.x, 10.x.x.x, 192.x.x.x, etc., which are internal network IP addresses.  
If so, and the downloader is deployed in Docker, you must switch the container network mode of the downloader to host mode instead of bridge mode. Inbound connections forwarded by Docker will cause PBH to not work due to the loss of the real IP address.

Although you can modify the configuration to cancel this check, it is not recommended. Once you do this, PBH will **incorrectly ban all inbound connections**, so it is very necessary to set the network mode correctly.

Some IP forwarding tools, such as Lucky, FRP, etc., may forward data tables in user space, which will also modify the IP address of the packets and cause the Peer IP to be displayed incorrectly in the downloader. If you are using these tools, please refer to the corresponding tool's documentation for a solution.

OpenWRT/RouterOS high flexibility router firmware may need to check NAT settings.

## Can't connect to the downloader via 127.0.0.1 or localhost

This issue usually occurs when deploying with Docker containers using the `bridge` network mode. Since `v9.0.0` version, PeerBanHelper recommends using the `host` network mode for deployment. If you are still using the `bridge` network mode, `127.0.0.1` or `localhost` inside the container will refer to the container itself, not the host machine.

**Synology users**: In Container Manager, locate the PBH container and use the displayed gateway address to connect.

![dsm-gateway](./assets/dsm-network-gateway.png)

**Other Docker users**: Run the command `sudo docker network inspect bridge` to find the Gateway address and use it to connect.


## Startup error Failed to bind to port / Port already in use. Make sure no other process is using port XXXX and try again.

Two PeerBanHelpers are launched at the same time (especially common when incorrectly selected "Install as system service" during installation); or the port is occupied causing port conflict (such as Uplay/Ubisoft Connect etc.).

### If it is installed as a system service

If you don't know what this is for, please run the uninstaller to remove the system service from the system, and reinstall after restarting.

### If Uplay/Ubisoft Connect is running; other programs occupy the WebUI port

Please exit first, or [change the WebUI port](./network/http-server.md#modify-webui-port-number)

## Unable to download IPDB/GeoIP library / Proxy invalid

See: [Configure Proxy Server](./network/proxy-server.md)

## Where is the WebUI management Token?

See: [Change WebUI Token](./network/http-server.md#modify-webui-access-token)

## What are the disadvantages of Transmission/Why is it abandoned?

See: [Abandoning support for Transmission downloader #382](https://github.com/PBH-BTN/PeerBanHelper/issues/382)

## Why does the anti-leech progress checker show progress over 100% (e.g., 102%), is there an error? How can it exceed 100%?

No, the progress checker will accumulate the download progress of this IP address on a specific torrent. If the other party appears to regress, disconnect and reconnect with a different port, change PeerID, change Client name and re-download, the downloader will consider this a new client and start calculating download data from scratch (leechers also use this method to bypass leech checks). But for PBH, as long as the other party's IP address remains unchanged (or within a specific range), and the torrent being downloaded has not changed, the download progress will continue to accumulate incrementally, preventing the other party from deceiving the anti-leech check. For example, if a file size is 1000MB, the other party downloading 102% means that the other party has actually downloaded 1020MB of data on this 1000MB size torrent.

## PBH prompts my downloader "multiple consecutive login failures" and pauses, what should I do?

You can click the edit button of the downloader, and then click OK to save. PBH will lift the pause and try to log in again, at which point the reason for the login failure will be displayed. Please troubleshoot according to the reason (for example: network connection problems, whether WebUI is enabled, whether the username and password are correct, etc.). After troubleshooting, save it again to lift the pause.

## What is incremental banning?

Non-incremental banning: each time a new IP needs to be banned, the entire IP blacklist is directly replaced. This can easily cause the downloader to freeze on qBittorrent.
Incremental banning: each time a new IP needs to be banned, the banPeer API is used to incrementally add banned IPs; when unbanning, the entire IP blacklist is still directly replaced.

## What is SSL certificate verification?

If the entered address is an HTTPS address and this switch is enabled, the validity of the SSL certificate will be verified. If the certificate is invalid, an error will be reported to ensure security. If it is turned off, all SSL certificates will be trusted.

## What is Basic Auth?

Some tutorials will let you add an extra layer of username and password for security through reverse proxy or Nginx. The feature is that the browser will pop up for verification when accessing:

![basic-auth](./assets/basic-auth.png)

This is Basic Auth.

# In statistical data, why is the ban count higher than the access count?

When a Peer connects and generates traffic, it is counted as one access. If the Peer is banned before generating traffic (for example, during the handshake stage), it is only counted as one ban.

## How to permanently ban IP

Consider to use [IP Blacklist](./module/ip-address-blocker.md).

## Why can't I edit custom scripts? What is "read-only mode"?

For security reasons, the script editing function will reject requests from the Internet, which can protect your device in the event of a Token leak.

If for some reason you have to edit scripts on the Internet and understand that **hackers can execute any code on your device after a Token leak**, you can add the following `flag` at startup:
```
java -Dpbh.please-disable-safe-network-environment-check-i-know-this-is-very-dangerous-and-i-may-lose-my-data-and-hacker-may-attack-me-via-this-endpoint-and-steal-my-data-or-destroy-my-computer-i-am-fully-responsible-for-this-action-and-i-will-not-blame-the-developer-for-any-loss ...
```

## How to Perform a Clean Installation

Sometimes, PeerBanHelper's program files may become corrupted or encounter errors, preventing it from running normally. You can try performing a clean installation to remove all residual files and attempt to restore normal operation.

First, please run the PeerBanHelper uninstaller and follow the wizard to complete the standard uninstallation. The standard uninstallation will remove registered service items and registry entries from your system, so we don't have to manually clean these files.

### Windows Platform

For the Windows platform, before performing the following operations, please run the PeerBanHelper uninstaller from the Start menu.

PeerBanHelper may store data in any of the following locations on the Windows platform (the specific storage location may vary depending on the actual situation). Please find and delete them. If the corresponding directory does not exist, it means PeerBanHelper has not stored files in these locations on your device, and you can skip to the next path.  
When you encounter paths wrapped with `% %`, please copy the entire path into the Windows Explorer address bar and press Enter to navigate (if it exists).

If you have modified the installation path yourself, the path may differ from the paths listed below. You will need to handle the related changes yourself.

* `%ProgramFiles%\PeerBanHelper` - System installation (System) standard installation directory (UAC)
* `%ProgramFiles(x86)%\PeerBanHelper` - System installation standard installation directory (x86)
* `%LOCALAPPDATA%\PeerBanHelper` - General user profile storage directory
* `%APPDATA%\PeerBanHelper` - General roaming user profile storage directory
* `%USERPROFILE%\AppData\Local\Programs\PeerBanHelper` - User installation (User) standard installation directory (no UAC)
* `%WINDIR%\System32\config\systemprofile\AppData\Local\PeerBanHelper` - Service installation (Service) data storage directory

### Linux via Install4j / PKG

For Linux package managers, please first use the package manager to uninstall the PeerBanHelper package.

* `/var/lib/peerbanhelper`
* `/etc/peerbanhelper`
* `/usr/lib/peerbanhelper`
* `/var/log/peerbanhelper`
* `~/.config/PeerBanHelper`

### macOS

* `/Library/Application Support/PeerBanHelper`
* `~/.config/PeerBanHelper`
