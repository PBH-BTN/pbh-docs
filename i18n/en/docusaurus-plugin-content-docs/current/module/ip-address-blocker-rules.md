# 订阅规则

PeerBanHelper 的重要模块之一，默认订阅来自 [PBH-BTN/BTN-Collected-Rules](https://github.com/PBH-BTN/BTN-Collected-Rules) 的规则。  
当有规则内的 IP 连接下载器时，PeerBanHelper 会立刻封禁它。

不建议通过配置文件配置此功能，您可以直接使用 WebUI 的可视化编辑。

## 制作规则

PeerBanHelper 可以加载由以下内容组成的 IP 规则集：

* IP 地址（支持 v4 v6）如：1.2.3.4
* CIDR 如：1.2.3.0/24
* 以 `#` 开头的单行注释（不支持行尾注释）

## 配置文件

```yaml
  # 订阅规则
  # Rules Subscription
  # 建议在 WebUI 上配置
  # Recommended configure this module on WebUI
  ip-address-blocker-rules:
    enabled: true
    # 封禁时间，单位：毫秒，使用 default 则跟随全局设置
    ban-duration: 259200000
    # 检查间隔
    check-interval: 14400000 # 4小时检查一次 毫秒; Timeunit: ms
    # 规则列表 - Rules list
    rules:
      # 规则ID（任意） - Rule Id(any)
      all-in-one:
        # 是否启用 - Enable?
        enabled: true
        # 显示名称 - Display Name
        name: all-in-one
        # 规则文件订阅地址 - Subscription Address
        url: https://bcr.pbh-btn.ghorg.ghostchu-services.top/combine/all.txt
```