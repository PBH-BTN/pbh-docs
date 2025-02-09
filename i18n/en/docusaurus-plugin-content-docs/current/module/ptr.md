# DNS Reverse Lookup

:::info
This is a [PTR reverse lookup record](https://www.cloudflare.com/learning/dns/dns-records/dns-ptr-record/), not a reverse domain name lookup. This feature resolves **hostnames** rather than domains in a general sense.
:::

## What is a hostname?

If you have used qBittorrent and enabled the "Resolve peer host names" option in the settings, you should be very familiar with the following scenario.

![qbPTR](./assets/ptr-example.png)

The part marked in red in the image is the "hostname", and this module detects these "hostnames".

## Usage

### Allow DNS Reverse Lookup

By default, PeerBanHelper's DNS reverse lookup feature is disabled. This is because frequent queries may cause the DNS server you are using to refuse to continue providing services, thereby affecting your normal internet usage.

You need to go to "Settings -> Basic Settings -> Query" and enable the "Enable DNS Reverse Lookup" option, then save.

![turn-on-lookup](./assets/turn-on-ptr-lookup.png)

### Enable DNSJava

By default, PeerBanHelper uses the JDK resolver, but the JDK resolver usually does not work well. Therefore, it is best to enable the "DNSJava Experiment".

Go to "Settings -> Labs", then enable "Enable Experimental Features". Find and enable "DNSJava DNS Resolver" in the list below, and you will switch to the DNSJava resolver.

### Configure Rules

Go to "Settings -> Preferences -> DNS Reverse Lookup Records", expand it to configure the corresponding rules for hostnames.

![config ptr](./assets/ptr-config.png)

### Configuration File

```yaml
  # PTR （反向解析记录） 封禁
  # 此模块将强制对 Peer IP 进行 PTR 查询，并试图解析其 IP 地址绑定的主机名。如果 IP 地址绑定了一个主机名且主机名匹配下列规则，则执行操作
  # PTR (Reverse DNS) Blocker
  # This module will force to do PTR query on Peer IP, and try to resolve the hostname that bind with IP address. If the IP address bind with a hostname and the hostname match the rules below, then do the action
  ptr-blacklist:
    enabled: false
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
    ptr-rules:
      - '{"method":"EQUALS","content":"example.com"}'
```