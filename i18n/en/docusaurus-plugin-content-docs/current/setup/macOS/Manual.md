---
sidebar_position: 2
---

# 手动安装
## 安装依赖
使用homebrew安装jdk：

```shell
brew install --cask zulu
```

验证安装是否成功：

```shell
java -version
```

如果安装成功，则会输出类似下列的版本号：

```plain
openjdk version "23.0.1" 2024-10-15
OpenJDK Runtime Environment Zulu23.30+13-CA (build 23.0.1+11)
OpenJDK 64-Bit Server VM Zulu23.30+13-CA (build 23.0.1+11, mixed mode, sharing)
```

## 运行
访问 Github Release 下载 [JAR 文件](https://github.com/PBH-BTN/PeerBanHelper/releases/latest/download/PeerBanHelper.jar)。  

使用命令启动 PBH：
```shell
java -Djava.awt.headless=true -Xmx512M -Xss512k -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar PeerBanHelper.jar nogui 
```

## 服务
创建`~/Library/LaunchAgents/peerbanhelper.plist`文件，并写入：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>peerbanhelper</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/java</string>
        <string>-Djava.awt.headless=true</string>
        <string>-jar</string>
        <string>-Xmx512M</string>
        <string>-Xms512k</string>
        <string>-XX:+UseG1GC</string>
        <string>-XX:+UseStringDeduplication</string>
        <string>-XX:+ShrinkHeapInSteps</string>
        <string>PeerBanHelper.jar</string>
        <string>nogui</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>WorkingDirectory</key>
    <string>/path/to/PBH</string>
</dict>
</plist>
```

注意替换`/path/to/PBH`为jar文件的目录，完成后使用以下命令启动：

```shell
launchctl load -w ~/Library/LaunchAgents/peerbanhelper.plist
```