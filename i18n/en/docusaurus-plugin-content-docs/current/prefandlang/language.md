# 国际化

PeerBanHelper 默认情况下其 UI 语言会跟随系统语言，而 WebUI 语言则跟随浏览器语言。

## 更改 UI 语言

要更改 UI 语言，则可以通过修改配置文件完成：

```yaml
# 设置程序语言
# Set the program language
# default 跟随操作系统 (Follow the operating system)
# en_us English (US)
# zh_cn Chinese Simplified (简体中文)
language: default
```

在给定的语言不受支持时，将使用 English 进行回退。  
在给定的语言受支持，但缺失文本时，将使用先使用 English 然后再使用 fallback 语言（默认为：简体中文）回退。

## 自订语言

在 `data/lang/overrides` 下存在多个使用语言代码命名的目录。如果没有你需要自订语言的目录，则可以手动创建，PBH 会自动识别它。  
在打开其中的文件后，你大概注意到：整个文件都是空的。这是因为 PBH 使用了一种名为 “覆盖加载” 的加载逻辑。也就是先从 JAR 内部的语言文件加载，然后再使用 overrides 目录中的文件，在内部语言的基础上覆盖文件中有的词条。

这样，当我们更新翻译文件时，使用旧的翻译文件的用户不会出现因缺失词条而导致显示故障的问题。

## 使用覆盖语言系统

很简单，就把你需要修改的内容写进去就行，就像这样：

源文本：

```yaml
IP_BAN_RULE_UPDATE_TYPE_AUTO: "自动更新"
```

写入覆盖文件的新文本：

```yaml
IP_BAN_RULE_UPDATE_TYPE_AUTO: "它自己更新"
```
