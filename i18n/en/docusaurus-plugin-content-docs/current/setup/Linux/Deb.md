---
sidebar_position: 1
---

# Debian/Ubuntu/Kali Linux

>适用于Debian/Ubuntu/Kali Linux等发行版

## 安装依赖

使用`apt`安装 OpenJDK 21 或更高版本：

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

## 下载安装
访问 [PBH最新版版本发布页](https://github.com/PBH-BTN/PeerBanHelper/releases/latest) 下载 DEB 文件。

安装 DEB 文件：

```shell
sudo dpkg -i peerbanhelper_*.*.*_all.deb
```

## 启动
```shell
systemctl start peerbanhelper
```

如需后台/开机运行，请运行：
```shell
systemctl enable peerbanhelper
```
