---
sidebar_position: 2
---

# qBittorrentEE

与 [qBittorrent](./qBittorrent.md) 的配置完全相同，但多出了一些额外选项。

## 额外选项

### ShadowBan

使用 qBittorrent EE 的 [ShadowBan API](https://github.com/c0re100/qBittorrent-Enhanced-Edition/issues/538) 代替 qBittorrent 的传统 IP 封禁。使用此功能需要使用 qBittorrent Enhanced Edition 4.6.6.10 或者更高版本。

:::warning
**除非必要，否则不建议使用 ShadowBan 功能。** 一旦出现误封，这会让您的行为变得和恶意吸血端几乎一致。  
同时，很大概率上，在您拉爆恶意吸血者的连接数之前，会首先达到您的 ISP 的连接数限制从而导致您自己断网。可能会杀敌 100 自损 1000。目前的吸血端在您长时间不发送上传数据时会主动断开连接，这使得此功能的效果大打折扣。
:::
