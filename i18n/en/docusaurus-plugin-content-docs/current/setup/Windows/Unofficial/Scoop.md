---
sidebar_position: 3
---

# Scoop

:::warning
Installing via Scoop is a community-maintained, unofficial deployment method and is not officially supported by PeerBanHelper. On Windows, [use the installer](../Installer.md) instead, as it handles firewall configuration and startup management.
:::

Scoop is a command-line installer for Windows that downloads and manages packages in a portable way. It can check for updates and automatically maintain persistent data.

## Install Scoop

Follow the quickstart instructions at [https://scoop.sh](https://scoop.sh).

## Install PeerBanHelper

```pwsh
scoop bucket add extras
scoop install extras/peerbanhelper
```

## Start

Open PeerBanHelper from the Scoop Apps folder in the Start Menu.

## Upgrade

```pwsh
scoop update
scoop update peerbanhelper
```
