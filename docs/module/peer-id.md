# PeerID 过滤器

PeerID 过滤器会使用由 Peer 主动汇报的 PeerID 来检测。对于内置 PeerID 过滤器的客户端（例如 qBittorrent Enhanced Edition），建议优先使用其内置的 PeerID 过滤功能。  

:::warning
PeerID 是由 Peer 主动汇报的（可以被随意修改），因此不能作为判定对方客户端的依据。
:::

![peer-id](./assets/peer-id.png)

## 配置文件

规则使用[JSON规则引擎](../misc/json-engine.md)语法。

## 配置文件

```yaml
  # PeerId 封禁
  # 此模块对 Transmission 不起效
  # PeerID blacklist
  # The module may not work well with Transmission
  peer-id-blacklist:
    enabled: true
    # 封禁时间，单位：毫秒，使用 default 则跟随全局设置
    # BanDuration, Timeunit: ms, use `default` to fallback to global settings
    ban-duration: 259200000
    # method = 匹配方式 - Match Method
    #  + STARTS_WITH = 匹配开头 - Match the starts
    #  + ENDS_WITH = 匹配结尾 - Match the ends
    #  + LENGTH = 匹配字符串长度 - Match the string length
    #     + 支持的额外字段 - Other supported fields
    #       * min = 最小长度 - Min length
    #       * max = 最大长度 - Max length
    #  + CONTAINS = 匹配包含 - Match the contains
    #  + EQUALS = 匹配相同 - Match the equals
    #  + REGEX = 匹配正则表达式（大小写敏感） - Match the regex (case-sensitive)
    # content = 匹配的内容（除正则外忽略大小写） - The content will be matched
    # if = 表达式控制器，当 if 的表达式为 true 时，则检查此规则；否则此规则被忽略。 # if controller, `0` or `false` will skip this rule
    #  + if 表达式可以为 true/false, 1/0 或者一个嵌套的规则 # the return result can be `true` or `false` and `0` or `1`
    # hit = 匹配成功返回的行为代码 # the behavior if matched
    #  + TRUE = 在 if 中代表 true，在规则中代表 BAN（封禁） # true in if controller, BAN in rule
    #  + FALSE = 在 if 中代表 false，在规则中代表 SKIP（排除） # false in if controller, SKIP in rule
    #  + DEFAULT = 在 if 中代表 true，在规则中代表 NO_ACTION（默认行为） # true in if controller, NO_ACTION in rule
    # miss = 匹配失败返回的行为代码（与上相同） # the behavior if match failed, same as above
    # 规则从上到下执行
    banned-peer-id:
      - '{"method":"STARTS_WITH","content":"-xl"}'
      - '{"method":"STARTS_WITH","content":"-hp"}'
      - '{"method":"STARTS_WITH","content":"-xm"}'
      - '{"method":"STARTS_WITH","content":"-dt"}'
      - '{"method":"CONTAINS","content":"-rn0.0.0"}'
      - '{"method":"STARTS_WITH","content":"-sd"}'
      - '{"method":"STARTS_WITH","content":"-xf"}'
      - '{"method":"STARTS_WITH","content":"-qd"}'
      - '{"method":"STARTS_WITH","content":"-bn"}'
      - '{"method":"STARTS_WITH","content":"-dl"}'
      - '{"method":"STARTS_WITH","content":"-ts"}'
      - '{"method":"STARTS_WITH","content":"-fg"}'
      - '{"method":"STARTS_WITH","content":"-tt"}'
      - '{"method":"STARTS_WITH","content":"-nx"}'
      - '{"method":"CONTAINS","content":"cacao"}'
```