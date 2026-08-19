# ClientName 过滤器

ClientName 过滤器会使用由 Peer 主动汇报的 ClientName（有时也称为 "客户端名称" 或者 "UserAgent"）来检测。对于内置 PeerID 过滤器的客户端（例如 qBittorrent Enhanced Edition），建议优先使用其内置的 ClientName 过滤功能。  
:::warning
ClientName 是由 Peer 主动汇报的（可以被随意修改），因此不能作为判定对方客户端的依据。  
:::
ClientName 是 BitTorrent 的一个[扩展协议](https://www.bittorrent.org/beps/bep_0010.html)，因此一个 Peer 可以没有 ClientName。对于这种情况，PeerBanHelper 会显示为 `N/A`。

## 生效范围

PBH 仅检查处于[活跃传输状态](https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#torrent-management)的种子。`stalledUP`（做种无传输）、暂停状态下的 Peer **不会被检查**。

详见 [FAQ](../faq.md#为什么配置了封禁规则但有些-peer-没有被封禁)。

## 触发条件

- **管道**：种子处于[活跃传输状态](#生效范围)
- **握手**：Peer 已完成握手（空 ClientName 跳过）
- **缓存**：无缓存，每次 Ban Wave 都检查
- **匹配**：[JSON 规则引擎](../misc/json-engine.md)，支持 `STARTS_WITH`/`CONTAINS`/`EQUALS`/`REGEX`，首次命中即 BAN

## 配置文件

规则使用[JSON规则引擎](../misc/json-engine.md)语法。你可以通过编写 JSON 规则来控制封禁行为。但如果只是简单的封禁和例外排除，则可以通过 WebUI 完成。

![Client Name](./assets/client-name.png)

```yaml
  # 客户端名称封禁
  # ClientName blacklist
  client-name-blacklist:
    enabled: true
    ban-duration: 259200000
    banned-client-name:
      - '{"method":"CONTAINS","content":"xunlei"}'
      - '{"method":"STARTS_WITH","content":"-xl"}'
      - '{"method":"STARTS_WITH","content":"hp/torrent"}'
      - '{"method":"STARTS_WITH","content":"hp "}'
      - '{"method":"STARTS_WITH","content":"dt/torrent"}'
      - '{"method":"STARTS_WITH","content":"dt "}'
      - '{"method":"STARTS_WITH","content":"xm/torrent"}'
      - '{"method":"STARTS_WITH","content":"xm "}'
      - '{"method":"STARTS_WITH","content":"taipei-torrent"}'
      - '{"method":"CONTAINS","content":"rain 0.0.0"}'
      - '{"method":"CONTAINS","content":"gopeed dev"}'
      - '{"method":"STARTS_WITH","content":"xfplay"}'
      - '{"method":"CONTAINS","content":"StellarPlayer"}'
      - '{"method":"CONTAINS","content":"SP "}' # 不要删除尾随空格
      - '{"method":"CONTAINS","content":"flashget"}'
      - '{"method":"CONTAINS","content":"tudou"}'
      - '{"method":"CONTAINS","content":"torrentstorm"}'
      - '{"method":"CONTAINS","content":"qqdownload"}'
      - '{"method":"STARTS_WITH","content":"qbittorrent/3.3.15"}'
      - '{"method":"STARTS_WITH","content":"github.com/thank423/trafficconsume"}'
      - '{"method":"STARTS_WITH","content":"ޭ__"}' # 0xde-0xad-0xbe-0xef
      - '{"method":"STARTS_WITH","content":"-XL"}'
```