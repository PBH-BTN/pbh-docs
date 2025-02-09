# 主动监测

一些 PBH 提供的统计功能需要此模块开启。
启用主动监测后，PBH 会将每次扫描下载器获取的所有 Peers 数据全部存入/更新到数据库中，以提供可视化统计数据和流量告警服务。
:::warning
不建议 EMMC 芯片和 SD 卡用户启用此功能。除了会影响性能，还可能加快闪存芯片磨损。
:::
Transmission, BitComet 用户因 API 限制可能缺失部分数据。

## 需要此功能支持的功能

* 流量统计图表
* 趋势图表
* GeoIP 图表的非封禁部分

## 配置流量告警

转到 设置 -> 首选项，向下找到 “主动监控”，打开流量告警并配置每日流量告警阈值。

![traffic-capping](./assets/active-monitoring.png)

配置完成后，点击页面底部的 “保存” 按钮即可生效。

## 会记录的 Peer 的有关数据

按照 IP-种子记录，每个 IP 连接到一个不同的种子都视为一个会话。

* 会话 IP 地址
* 会话 Torrent 元数据
* 会话 下载器名称
* 会话最后一次使用的 Peer ID
* 会话最后一次使用的 Peer ClientName
* 会话中向 Peer 上传的累计数据量
* 会话中向 Peer 上传的最后一次记录的下载器统计数据
* 会话中从 Peer 下载的累计数据量
* 会话中从 Peer 下载的最后一次记录的下载器统计数据
* 此会话最后一次见到时的 Peer Flags
* 会话开始时间
* 会话最后更新时间

## 配置文件

```yaml
  # 主动监测 - Active Monitoring
  # 此功能允许 PeerBanHelper 主动记录每次请求下载器时获取到的数据到本地 SQLite 数据库中
  # Allow PBH records all data that fetched from downloader and save them into SQLite database
  # 其产生的数据可被其它模块调用（如：生成图表报表等）
  # The data produced by this module can be re-used by other modules
  # 注意：使用 SD 卡或者 EMMC 的设备【不建议】开启此功能，此功能对于存储设备的读写压力较高，可能加快 Flash 存储芯片磨损或导致存储设备过热
  # NOTE: It is not recommended to enable this module if PBH running on SDCard or EMMC Flash chip.
  # 另请注意：此功能可能还会导致本地数据库文件大小快速变大，不建议在存储空间不充足的存储设备上使用此功能
  # NOTE: This may lead database size increase quickly
  active-monitoring:
    # 是否启用此功能
    enabled: true
    # 清理周期
    # Retention time
    # 请注意：由于 SQLite 的特性，记录被删除后不会释放磁盘空间，但后续新数据记录会重新利用此部分空间
    # Note: Deleted records won't free the disk space, but new data will reuse those parts of space due SQLite internal design
    # 因此请选择一个合理的记录周期
    # 时间单位：ms；默认值：5184000000 (60 天) ; default: (60 days)
    data-retention-time: 5184000000
    # 清理检查周期
    # Cleanup check interval
    # 每 interval 毫秒后，将进行一次数据清理任务
    # Period of cleanup task will be run
    # 建议不要设置的太频繁，SQLite 是单线程数据库，无法同时执行多个 SQL 查询，慢查询可能导致 PBH 数据写入延迟/耗尽运行 RAM
    # Do not set it run too frequently
    # 时间单位：ms；默认值：604800000 (7 天); default: (7 days)
    data-cleanup-interval: 604800000
    # 流量监控 - Traffic Monitoring
    # 设置流量封顶阈值，当超出阈值后将发送告警信息提醒您检查下载器状态
    # Set the traffic capping threshold, when the threshold is exceeded, an alert message will be sent to remind you to check the status of the downloader.
    traffic-monitoring:
      # 每日阈值 - 设置为 -1 以禁用，单位：bytes
      # Daily threshold, set to -1 to disable, Unit: bytes
      daily: -1
```