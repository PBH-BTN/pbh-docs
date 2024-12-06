---
sidebar_position: 2
---

# FreeBSD

从`v6.4.1`之后，PeerBanHelper 提供 FreeBSD 版本安装包，目前支持`13.4`和`14.1`两个版本。

请前往[发布](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)页面找到你对应版本的 FreeBSD 安装包，复制链接，输入以下命令下载：

```
fetch https://github.com/PBH-BTN/PeerBanHelper/releases/download/v6.4.2/peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg
```

## 安装依赖
使用 `pkg` 工具安装 OpenJDK 21 或更高版本：

```shell
sudo pkg install openjdk21
```

验证安装是否成功：

```shell
java -version
```

如果安装成功，则会输出类似下列的版本号：

```plain
OpenJDK Runtime Environment (build 21.0.3+9-1)
OpenJDK 64-Bit Server VM (build 21.0.3+9-1, mixed mode, sharing)
```

## 安装
```shell
pkg add -f peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg # -f 表示强制更新安装
```

## 运行
```shell
service peerbanhelper onestart
```

## 开机启动
```shell
sysrc peerbanhelper_enable=YES
```
