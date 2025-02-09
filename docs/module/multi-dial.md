# 多拨封禁

一些恶意用户会通过多拨连接等方式获取大量相同子网的IP地址。
ARB（自动范围封禁）虽然与本模块具备几乎一致的功能，但它仅在检测到封禁条件满足时才会采取行动。相比之下，多拨封禁模块无需等待封禁指令，会主动监测已连接的Peers。

当同一子网范围内的IP数量超过指定阈值，并且这些IP同时连接到同一种子时，系统将启动子网封禁操作。

![multi-dial](./assets/multi-dial.png)

## 追猎

如果某 IP 已判定为多拨，无视缓存时间限制继续搜索其相同子网内的所有其他 Peer。

启用此功能会占用一部分额外运行内存。

## 配置文件

```yaml
  # 多拨封禁
  # Multi-dialing blocker
  multi-dialing-blocker:
    enabled: true
    # 封禁时间，单位：毫秒，使用 default 则跟随全局设置
    ban-duration: 1296000000
    # IPV4 前缀长度
    # IPV4 prefix length
    # IP地址前多少位相同的视为同一个子网，位数越少范围越大，一般不需要修改
    # The same prefix ip addresses will trick as in same subnet, usually don't need changes
    subnet-mask-length: 24
    # IPv6 地址前缀长度
    # IPv6 prefix length
    subnet-mask-v6-length: 60
    # 容许同一网段下载同一种子的IP数量，正整数 (IPV4)
    # 防止DHCP重新分配IP、碰巧有同一小区的用户下载同一种子等导致的误判
    # The allowed maximum amount of ips in same subnet
    # To avoid mistake bans that caused by DHCP re-allocated IPs, or multiple users in same city
    tolerate-num-ipv4: 2
    # 容许同一网段下载同一种子的IP数量，正整数 (IPV6)
    # 防止DHCP重新分配IP、碰巧有同一小区的用户下载同一种子等导致的误判
    # The allowed maximum amount of ips in same subnet
    # To avoid mistake bans that caused by DHCP re-allocated IPs, or multiple users in same city
    tolerate-num-ipv6: 5
    # 缓存持续时间（秒）
    # Cache life span
    # 所有连接过的peer会记入缓存，DHCP服务会定期重新分配IP，缓存时间过长会导致误杀
    # All connected peers will record into cache, DHCP may re-allocated IPs.
    cache-lifespan: 86400
    # 是否追猎
    # Keep hunting
    # 如果某IP已判定为多拨，无视缓存时间限制继续搜寻其同伙
    # If a specific IP flagged multi-dialing, should we ignore the caching span and keep searching other IPs in same subnet?
    keep-hunting: false
    # 追猎持续时间（秒）
    # Hunting time
    # keep-hunting为true时有效，和cache-lifespan相似，对被猎杀IP的缓存持续时间
    # Only works when keep-hunting enabled, similar as cache-lifespan
    keep-hunting-time: 2592000
```