# Automatic Range Ban

Due to the latency of the [Progress Checker](./progress-cheat-blocker.md), some traffic from the IP is already leached before the user bans it. This feature is designed to help users stop losses in a timely manner.  
When an IP is banned, ARB will scan all connected peers. If any peer's IP address is in the same subnet as the banned IP, that peer will be chain-banned.

## Configuration File

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