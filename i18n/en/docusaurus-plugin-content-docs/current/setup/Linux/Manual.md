---
sidebar_position: 2
---


# 手动部署
:::tip
请注意：我们更推荐您使用 [Docker部署](../Docker.md))
:::
## 安装依赖

使用你的包管理器安装 OpenJDK 21 或更高版本（此处以 apt 为例）：

```shell
sudo apt-get update
sudo apt-get install openjdk-21-jdk-headless -y
```

验证安装是否成功：

```shell
java -version
```

如果安装成功，则会输出类似下列的版本号：

```plain
openjdk version "xx.xx.xxx" 2024-01-16
OpenJDK Runtime Environment (build xxxxxxx)
OpenJDK 64-Bit Server VM (build xxxxxxx, mixed mode, sharing)
```

## 下载JAR
访问 [PBH最新版版本发布页](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)，下载 JAR 文件和 libraries.tar.gz。

将解压出来的 libraries 文件夹和 jar 放在一起。

使用命令来启动 PBH：
```shell
java -jar -Xmx512M -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar 替换这段文字为JAR文件的文件名
```
通常情况下，PBH 会自动探测桌面环境，并在支持的情况下启用 GUI，但在部分设备上，GUI 可能会初始化失败。遇到此类情况，请手动禁用 GUI：

```shell
java -jar -Xmx512M -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar 替换这段文字为JAR文件的文件名 nogui
```

即可启动 PBH。如需后台/开机运行，请自行[配置 systemd 系统服务](https://github.com/PBH-BTN/PeerBanHelper/issues/179#issuecomment-2198225784)。
