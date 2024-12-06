# 日志

## 隐藏完成日志信息

默认情况下，PBH 会在每次 Peers 检查结束的时候打印一行日志。如果你觉得这很烦，可以将它关闭：

```yaml
# 日志记录器配置
# Logger configurer
logger:
  # 是否隐藏 [完成] 已检查 XX 的 X 个活跃 Torrent 和 X 个对等体 的日志消息？
  # 在 DSM 的 ContainerManager 上有助于大幅度减少日志数量，并仅记录有价值的封禁等日志条目
  # Do you want hide [Completed] spam logs? Can be enabled on DSM to avoid too many logs.
  hide-finish-log: false
```

## 历史日志

PBH 默认会在 `data/logs` 内存储日志文件。其中 `latest.log` 是当天/最后一次运行的最新日志文件。任何过往历史日志文件都会自动打包压缩归档。  