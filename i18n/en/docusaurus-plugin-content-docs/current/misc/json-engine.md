# JSON 规则引擎

PBH 使用 JSON 规则引擎来解析规则。

下面这是一个简单的 JSON 规则示例：

```yaml
  client-name-blacklist:
    enabled: true
    banned-client-name:
      - '{"method":"CONTAINS","content":"xunlei"}'
```

它的作用是封禁任何 ClientName 中带有 Xunlei 关键字的 Peer。

## JSON 规则引擎 - 匹配模式

所有的规则都必须指定一个匹配模式 `method`，以下是目前 PBH 支持的匹配模式列表，所有匹配模式检查时均忽略大小写：

* `STARTS_WITH` - 匹配开头字符串，给定参数必须以指定字符串打头
  * 可用扩展参数：
    * `content` 需要检查的开头字符串
* `ENDS_WITH` - 匹配结尾字符串，给定参数必须以指定字符串结束
  * 可用扩展参数：
    * `content` 需要检查的结尾字符串
* `CONTAINS` - 匹配是否包含子串，给定参数必须包含指定字符串
  * 可用扩展参数：
    * `content` 需要检查的子串
* `EQUALS` - 完全匹配，给定参数必须与匹配模板的内容完全一致
  * 可用扩展参数：
    * `content` 完全匹配模板
* `LENGTH` - 匹配字符串长度，给定参数必须在指定区间内
  * 可用扩展参数：
    * `min` 最小长度
    * `max` 最大长度
* `REGEX` - 匹配正则表达式，给定参数必须可被提供的正则表达式命中
  * 可用扩展参数
    * `content` 正则表达式

## 条件控制

每个规则执行后都会在 `TRUE`, `FALSE` 和 `DEFAULT` 三个结果中选择一个作为返回值。

对于 **if条件** 来说，`TRUE` 和 `DEFAULT` 都返回真结果，`FALSE` 返回假结果。  
对于 **封禁规则** 来说，`TRUE` 会封禁 Peer，`FALSE` 会**强制**放行 Peer（优先级比封禁更高），而 `DEFAULT` 则会保持默认，什么都不做。

对于 if 条件，如果用户没有明确指定，则总是返回 TRUE，使得条件为真，执行规则。  
对于 封禁规则，如果用户没有明确指定，则 hit 行为总是返回 TRUE，使得条件为真，封禁 Peer；而 miss 行为总是返回 DEFAULT，保持默认，不做额外操作。

### 自定返回类型

PBH 的 JSON 规则引擎提供了两个字段，分别是 `hit` 和 `miss`。默认情况下它们分别为 `TRUE` 和 `DEFAULT`，下面是一个示例：

```json
{"method":"CONTAINS","content":"xunlei 0019","hit": "FALSE"}
```

这段规则指定了在命中规则时，返回 `FALSE`，从而使得 迅雷 0019 被强制放行（放行的优先级要比封禁更高）。

### if 控制

PBH 的 JSON 规则引擎允许您进行 if 嵌套。正如之前所说，每个规则都会返回一个逻辑值，其值也可被 if 字段解析。当一个规则的 if 字段被解析为 `FALSE` 时，这条规则则不会被执行。

下面是一个实例，通过 if 嵌套来实现在封禁迅雷的同时，不封禁迅雷 0019：

```json
{
	"method": "CONTAINS",
	"if": {
		"method": "CONTAINS",
		"content": "xunlei 0019",
		"hit": "FALSE"
	},
	"content": "xunlei"
}
```

在此示例中，虽然顶层规则要求封禁所有包含 xunlei 关键字的客户端，但用户提供了 if 字段，因此 PBH 首先检查 if 字段的结果是否为真。可以看到，if 内的二级规则被命中时返回了 `FALSE` 逻辑值，因此 if 字段的执行结果为假，此命令本次禁用不执行。

### if 嵌套

尽管 if 的规则里面的 if 字段还可以嵌套另一个规则，但绝对是可读性地狱。尽量避免这么干！

### 白名单模式

新的 JSON 规则引擎允许用户编写白名单模式规则，操作方式很简单：

首先添加一个正则表达式，封禁所有客户端：

```yaml
  client-name-blacklist:
    enabled: true
    banned-client-name:
    - '{"method": "REGEX", "content": "*", "hit": "TRUE"}'
```

然后我们逐个强制放行你想要的客户端，比如说 qBittorrent：

```yaml
  client-name-blacklist:
    enabled: true
    banned-client-name:
    - '{"method": "REGEX", "content": "*", "hit": "TRUE"}'
    - '{"method": "CONTAINS", "content": "qbittorrent", "hit": "FALSE"}'
```

这样就达到了白名单的效果。(请注意：这是个示例，实践中不要使用白名单功能，因为恶意 Peer 会伪装自己)
