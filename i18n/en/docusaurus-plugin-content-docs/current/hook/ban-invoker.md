# 封禁执行器

## 生成本地 ipfilter.dat

PBH 可以在封禁 IP 的同时生成一份 `ipfilter.dat` 文件给其它下载器使用。


```yaml
# 封禁列表处理
# PBH 能够除了调用 BT 客户端的封禁 API 外，还能够进行如下操作，以便适配更多其它客户端
# Banlist invoker
# PBH can generate banlist file or execute commands when banning/unbanning peers.
banlist-invoker:
  # 生成 ipfilter.dat 文件
  # Generate ipfilter.dat file
  ipfilter-dat:
    enabled: false
```

生成的文件内容示例如下：

```
36.154.243.166-36.154.243.166,90,[L1]PBH Generated Rule-ebf4c937-e66a-473f-ae1b-e7e9ca673604
223.108.166.198-223.108.166.198,90,[L1]PBH Generated Rule-ac76b59a-bf95-44ab-8202-449423ff8623
36.154.243.166-36.154.243.166,90,[L1]PBH Generated Rule-9ae674c6-b686-48cc-b538-836984e738bd
220.202.244.115-220.202.244.115,90,[L1]PBH Generated Rule-d0d40333-8b2f-468c-a968-f9ec47e6f124
36.154.143.118-36.154.143.118,90,[L1]PBH Generated Rule-544cfec0-0761-4faf-848a-8459c2540082
221.131.158.182-221.131.158.182,90,[L1]PBH Generated Rule-9335b44e-e7e7-47c2-8062-72aadea0127d
```

## 执行系统命令

在出现封禁/解封禁/清理封禁列表事件发生时，PBH 可以执行一系列系统命令。您可以使用此功能操作系统防火墙。

:::warning
执行命令时将使用与 PBH 当前用户相同的权限执行。
:::

默认示例配置为使用 ipset 和 iptables 从系统防火墙上封禁 IP 地址。

```yaml
# 封禁列表处理
# PBH 能够除了调用 BT 客户端的封禁 API 外，还能够进行如下操作，以便适配更多其它客户端
# Banlist invoker
# PBH can generate banlist file or execute commands when banning/unbanning peers.
banlist-invoker:
  # 执行指定的系统命令
  # 所有的可用占位符都会被注册到执行的命令的进程环境变量中
  # 如果您的命令没有读取环境变量的能力，则也可以使用 {%占位符名%}，这样 PBH 会在执行前替换命令中的占位符，但请注意转义问题
  # 可用占位符列表：
  # Generate specific system command
  # All available placeholders will injected into system env variable, you can use them like in shell
  # If your command cannot parse system env variable, you also can use '{%PLACEHOLDER_NAME%}', so PBH will replace it to the placeholder.
  # Full list:
  #peer.ip - 对等体 IP 地址 - Peer IP Address
  #peer.port - 对等体端口 - Peer port
  #meta.context - 封禁模块上下文 - BanModule context
  #meta.description - 封禁描述 - Ban description
  #meta.banAt - 封禁时间 - Ban At
  #meta.unbanAt - 解封时间 - Unban At
  #meta.peer.id - PeerID
  #meta.peer.clientName - UserAgent 客户端名称字符串 - Client Name
  #meta.peer.uploaded - 总上传量 - Uploaded
  #meta.peer.downloaded - 总下载量 - Downloaded
  #meta.peer.progress - 客户端进度 - Peer Progress
  #meta.torrent.id - Torrent ID
  #meta.torrent.name - Torrent 名称 - Torrent Name
  #meta.torrent.hash - Torrent 的 Info Hash - InfoHash (preferred) of Torrent
  #meta.torrent.size - Torrent 大小 - Torrent size
  command-exec:
    enabled: false
    reset:
      - "/bin/sh -c 'ipset destroy peerbanhelper-blocklist'"
      - "/bin/sh -c 'ipset create peerbanhelper-blocklist hash:ip'"
      - "/bin/sh -c 'iptables -I INPUT -m set --match-set peerbanhelper-blocklist src -j DROP'"
      - "/bin/sh -c 'iptables -A OUTPUT -m set --match-set peerbanhelper-blocklist dst -j DROP'"
    ban:
      - "/bin/sh -c 'ipset add peerbanhelper-blocklist ${peer.ip}'"
    unban:
      - "/bin/sh -c 'ipset remove peerbanhelper-blocklist ${peer.ip}'"
```

## 配置文件

```yaml
# 封禁列表处理
# PBH 能够除了调用 BT 客户端的封禁 API 外，还能够进行如下操作，以便适配更多其它客户端
# Banlist invoker
# PBH can generate banlist file or execute commands when banning/unbanning peers.
banlist-invoker:
  # 生成 ipfilter.dat 文件
  # Generate ipfilter.dat file
  ipfilter-dat:
    enabled: false
  # 执行指定的系统命令
  # 所有的可用占位符都会被注册到执行的命令的进程环境变量中
  # 如果您的命令没有读取环境变量的能力，则也可以使用 {%占位符名%}，这样 PBH 会在执行前替换命令中的占位符，但请注意转义问题
  # 可用占位符列表：
  # Generate specific system command
  # All available placeholders will injected into system env variable, you can use them like in shell
  # If your command cannot parse system env variable, you also can use '{%PLACEHOLDER_NAME%}', so PBH will replace it to the placeholder.
  # Full list:
  #peer.ip - 对等体 IP 地址 - Peer IP Address
  #peer.port - 对等体端口 - Peer port
  #meta.context - 封禁模块上下文 - BanModule context
  #meta.description - 封禁描述 - Ban description
  #meta.banAt - 封禁时间 - Ban At
  #meta.unbanAt - 解封时间 - Unban At
  #meta.peer.id - PeerID
  #meta.peer.clientName - UserAgent 客户端名称字符串 - Client Name
  #meta.peer.uploaded - 总上传量 - Uploaded
  #meta.peer.downloaded - 总下载量 - Downloaded
  #meta.peer.progress - 客户端进度 - Peer Progress
  #meta.torrent.id - Torrent ID
  #meta.torrent.name - Torrent 名称 - Torrent Name
  #meta.torrent.hash - Torrent 的 Info Hash - InfoHash (preferred) of Torrent
  #meta.torrent.size - Torrent 大小 - Torrent size
  command-exec:
    enabled: false
    reset:
      - "/bin/sh -c 'ipset destroy peerbanhelper-blocklist'"
      - "/bin/sh -c 'ipset create peerbanhelper-blocklist hash:ip'"
      - "/bin/sh -c 'iptables -I INPUT -m set --match-set peerbanhelper-blocklist src -j DROP'"
      - "/bin/sh -c 'iptables -A OUTPUT -m set --match-set peerbanhelper-blocklist dst -j DROP'"
    ban:
      - "/bin/sh -c 'ipset add peerbanhelper-blocklist ${peer.ip}'"
    unban:
      - "/bin/sh -c 'ipset remove peerbanhelper-blocklist ${peer.ip}'"
```
