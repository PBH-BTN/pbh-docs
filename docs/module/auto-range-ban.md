# 自动范围封禁

由于[进度检查器](./progress-cheat-blocker.md)的滞后性，用户封禁对应 IP 时已经被吸血了一部分流量。此功能的设计是为了帮助用户及时止损。
当一个 IP 被封禁时，ARB 会扫描所有连接的 Peers。如果有任何 Peer 的 IP 地址和已封禁的任意 IP 地址处于同一子网内，则该 Peer 会被连锁封禁。

## 生效范围

PBH 仅检查处于[活跃传输状态](https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#torrent-management)的种子。`stalledUP`（做种无传输）、暂停状态下的 Peer **不会被检查**。

详见 [FAQ](../faq.md#为什么配置了封禁规则但有些-peer-没有被封禁)。


![Auto Range Ban](./assets/auto-range-ban.png)

## 触发条件

- **管道**：种子处于[活跃传输状态](#生效范围)
- **握手**：Peer 已完成握手
- **缓存**：无独立缓存
- **匹配**：封禁列表中存在同子网（IPv4 `/24`，IPv6 `/52`）的已封禁 IP 时，连锁封禁

:::note
ARB 不主动封禁——它依赖其他模块先产生封禁记录，再扫描同子网 Peer 连锁封禁。
:::

```yaml
  # 范围 IP 段封禁
  # 在封禁 Peer 后，被封禁的 Peer 所在 IP 地址的指定前缀长度内的其它 IP 地址都将一同封禁
  # Range Ban
  # After a peer got banned, other connected peers that in same range with banned peers will also get banned.
  auto-range-ban:
    # 是否启用
    # Enable?
    enabled: true
    # 封禁时间，单位：毫秒，使用 default 则跟随全局设置
    ban-duration: 604800000
    # IPV4 前缀长度
    # IPV4 prefix length
    ipv4: 30
    # IPV6 前缀长度
    # IPV6 prefix length
    ipv6: 60
```