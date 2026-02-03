---
sidebar_position: 2
---


# 手动部署指南

:::tip
虽然以下提供了手动部署的步骤，但我们更推荐使用 [Docker部署方案](../Docker.md) 以确保更稳定和便捷的安装体验。
:::

## 安装依赖项

首先，您需要使用系统的包管理器来安装 OpenJDK 25 或更高版本的 Java 开发工具包（JDK）。以下示例以 `apt` 包管理器为例：

```shell
sudo apt-get update
sudo apt-get install openjdk-25-jdk-headless -y
```

安装完成后，您可以通过运行以下命令来验证 JDK 是否成功安装：

```shell
java -version
```

如果安装成功，终端将显示类似以下的版本号信息：

```plain
OpenJDK version "xx.xx.xxx" xxxx-xx-xx
OpenJDK Runtime Environment (build xxxxxxx)
OpenJDK 64-Bit Server VM (build xxxxxxx, mixed mode, sharing)
```

## 下载 JAR 文件及依赖库

接下来，您需要访问 [PBH最新版版本发布页](https://github.com/PBH-BTN/PeerBanHelper/releases/latest) 下载最新的 JAR 文件以及 `libraries.tar.gz` 压缩包。

下载完成后，请解压 `libraries.tar.gz` 压缩包，并将解压得到的 `libraries` 文件夹与 JAR 文件放置在同一目录下。

## 启动 PeerBanHelper

使用以下命令来启动 PeerBanHelper（请将命令中的“替换这段文字为JAR文件的文件名”替换为您实际下载的 JAR 文件的名称），请特别注意不要修改附加参数，他们都很重要：

```shell
java -XX:+UseCompactObjectHeaders -XX:ZCollectionInterval=60 --enable-native-access=ALL-UNNAMED -Djdk.attach.allowAttachSelf=true -Dsun.net.useExclusiveBind=false -Dpbh.release=docker -XX:+UseZGC -XX:ZUncommitDelay=1 -Xss512k -XX:+UseStringDeduplication -XX:-ShrinkHeapInSteps -XX:MaxRAMPercentage=85.0 -jar 您的JAR文件名.jar
```

通常情况下，PeerBanHelper 会自动检测桌面环境，并在支持的情况下启用图形用户界面（GUI）。但在某些设备上，GUI 可能无法成功初始化。如果遇到此类情况，您可以通过在命令末尾添加 `nogui` 参数来手动禁用 GUI：

```shell
java -XX:+UseCompactObjectHeaders -XX:ZCollectionInterval=60 --enable-native-access=ALL-UNNAMED -Djdk.attach.allowAttachSelf=true -Dsun.net.useExclusiveBind=false -Dpbh.release=docker -XX:+UseZGC -XX:ZUncommitDelay=1 -Xss512k -XX:+UseStringDeduplication -XX:-ShrinkHeapInSteps -XX:MaxRAMPercentage=85.0 -jar 您的JAR文件名.jar nogui
```

这样即可启动 PeerBanHelper。如果您希望 PeerBanHelper 在后台运行或在系统启动时自动运行，请自行[配置 systemd 系统服务](https://github.com/PBH-BTN/PeerBanHelper/issues/179#issuecomment-2198225784) 以实现这一功能。