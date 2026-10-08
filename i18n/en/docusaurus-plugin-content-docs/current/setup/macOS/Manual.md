---
sidebar_position: 2
---
# Manual Install

## Install Java

Install JDK by homebrew:

```shell
brew install --cask oracle-jdk
```

Verify

```shell
java -version
```

If the installation is successful, you will see output similar to the following:

```plain
java 23.0.1 2024-10-15
Java(TM) SE Runtime Environment (build 23.0.1+11-39)
Java HotSpot(TM) 64-Bit Server VM (build 23.0.1+11-39, mixed mode, sharing)
```

## Running

Download the `jar` and `libraries.tar.gz` from [Release](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)
Unzip them into a same directory.

Run:

```shell
java -Djava.awt.headless=true -Xmx512M -Xss512k -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar PeerBanHelper.jar nogui
```

## Services

touch file `~/Library/LaunchAgents/peerbanhelper.plist` with content:

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
        <string>-Xss512k</string>
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

The path `/path/to/PBH` is the directory where you put the `jar` and `libraries.tar.gz`.

```shell
launchctl load -w ~/Library/LaunchAgents/peerbanhelper.plist
```
