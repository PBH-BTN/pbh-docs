# BTN Cloud Rules

Use cloud rules from the BTN network. You need to [configure PBH to connect to BTN](../btn/connect.md) in advance.

If only BTN is connected but the BTN rules module is not enabled, only upload data will be submitted, and BTN cloud rules will not be used.

![BTN-Profile](./assets/btn-profile.png)

## Configuration File

```yaml
  # 启用来自 BTN 网络的规则
  # Enable the network rules from BTN server, only works when you configured BTN server in config.yml
  btn:
    enabled: true
    # 封禁时间，单位：毫秒，使用 default 则跟随全局设置
    ban-duration: 259200000
```