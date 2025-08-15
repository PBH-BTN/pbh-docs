---
sidebar_position: 2
---

# qBittorrentEE

:::warning

所有部署在 Docker 中的下载器，不得使用 bridge 桥接网络模式，必须使用 host 网络模式，以使下载器能够获取正确的 Peer 入站地址，否则 PeerBanHelper 将完全不会工作！

:::

与 [qBittorrent](./qBittorrent.md) 的配置流程完全相同，但 qBittorrentEE 提供了一些额外的选项和功能。

## 额外选项

### ShadowBan

qBittorrent EE 提供了 [ShadowBan API](https://github.com/c0re100/qBittorrent-Enhanced-Edition/issues/538)，作为传统 IP 封禁的替代方案。要使用此功能，您需要确保已安装 qBittorrent Enhanced Edition 4.6.6.10 或更高版本。

:::warning
**除非在必要情况下，否则不建议启用 ShadowBan 功能。** 误用此功能可能会导致您的行为类似于恶意吸血端，进而引发一系列问题。
此外，在成功达到恶意吸血者的连接数限制之前，您可能会首先达到互联网服务提供商（ISP）设定的连接数限制，从而导致您自己的网络连接中断。这种情况可能会产生反向效果。考虑到当前的吸血端在长时间未接收到您的上传数据时会自动断开连接，这使得 ShadowBan 功能的效果大打折扣。
:::