---
sidebar_position: 7
---

:::danger

**Important Notice**: Support for Aria2Next is still highly experimental. We make no guarantees regarding its blocking effectiveness or operational stability.
:::

:::warning

All downloaders deployed in Docker must NOT use the bridge network mode. They MUST use the host network mode to allow the downloader to obtain the correct inbound peer addresses. Otherwise, PeerBanHelper will not work at all!

:::

## Version Confirmation

The RPC API required by PeerBanHelper is only available in `Aria2 Next v2.5.5` or later.

:::warning
**Version Requirement**: Any Aria2Next version below this release is not usable and is unsupported.
:::

## Configuration

Deploy and start aria2next using your preferred method (but note that if running in a container, it must be run in host network mode). Then enable RPC remote access and record the RPC secret key.

Then go to PeerBanHelper to configure it:

![motrix-next](./assets/Aria2Next-Step2.jpg)