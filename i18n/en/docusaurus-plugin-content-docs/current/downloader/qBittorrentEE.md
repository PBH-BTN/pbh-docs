---
sidebar_position: 2
---

# qBittorrentEE

:::warning

All downloaders that deploy in Docker MUST use host network mode to make sure downloader can get correct incoming connection IP address, bridge will break it and not supported. PeerBanHelper may not working if you downloader not in correct network mode.

:::

The configuration for qBittorrent Enhanced Edition (qBittorrentEE) is identical to [qBittorrent](./qBittorrent.md), with some additional options.

## Additional Options

### ShadowBan

qBittorrentEE provides a [ShadowBan API](https://github.com/c0re100/qBittorrent-Enhanced-Edition/issues/538), which replaces the traditional IP banning mechanism of qBittorrent. This feature requires qBittorrent Enhanced Edition version 4.6.6.10 or later.

:::warning
**Use the ShadowBan feature only when absolutely necessary.** Misuse or accidental overuse of this feature may make your behavior similar to malicious leech clients.
Additionally, there’s a high likelihood that you may reach your ISP’s connection limit and disconnect yourself before fully overwhelming malicious leechers. Modern leech clients often disconnect when they don’t receive upload data for an extended period, significantly reducing the effectiveness of this feature.

This can result in a "kill 100 enemies, lose 1,000 of your own" scenario. Use with caution.
:::
