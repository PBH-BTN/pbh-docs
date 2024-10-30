---
sidebar_position: 2
---


# 手动部署

请注意：我们更推荐您使用 [Docker部署](../Docker.md))

## 安装依赖

使用你的包管理器安装 OpenJDK 21 或更高版本（此处以 `apt` 为例）：

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

## 下载 JAR 和库文件

要使用 PeerBanHelper，你访问 [PBH 最新版版本发布页]，向下滚动，找到并下载 `PeerBanHelper.jar` 和 `libraries.tar.gz` 两个文件。

[PBH 最新版版本发布页]: https://github.com/PBH-BTN/PeerBanHelper/releases/latest

将 `libraries.tar.gz` 压缩包中的 `libraries` 解压至与 `PeerBanHelper.jar` 处于同一级的子文件夹 `libraries` 中。例如：

```shell
.
├── data
├── libraries
│   ├── annotations-26.0.1.jar
│   ├── apache-mime4j-core-0.8.11.jar
│   ├── apache-mime4j-dom-0.8.11.jar
... ... ...
│   ├── xz-1.10.jar
│   └── yamlconfiguration-3.0.1.jar
└── PeerBanHelper.jar
```

使用命令来启动 PBH：

```shell
java -jar -Xmx256M -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar PeerBanHelper.jar
```

通常情况下，PBH 会自动探测桌面环境，并在支持的情况下启用 GUI，但在部分设备上，GUI 可能会初始化失败。遇到此类情况，请手动禁用 GUI：

```shell
java -jar -Xmx256M -XX:+UseG1GC -XX:+UseStringDeduplication -XX:+ShrinkHeapInSteps -jar PeerBanHelper.jar nogui
```

即可启动 PBH。如需后台/开机运行，请自行[配置 systemd 系统服务](https://github.com/PBH-BTN/PeerBanHelper/issues/179#issuecomment-2198225784)。
