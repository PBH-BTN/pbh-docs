---
sidebar_position: 3
---

# Scoop

:::warning
Scoop安装是社区维护的部署方式，并非由PeerBanHelper官方支持。Windows平台任何情况下均应[使用安装程序](../Installer.md)部署，它还兼顾防火墙配置和开机启动管理的任务。
:::

Scoop是Windows平台上，以便携版形式下载和管理软件的命令行安装工具。它可以检查更新，并自动维护软件数据。

## 安装Scoop

按照[https://scoop.sh](https://scoop.sh)上的quickstart安装Scoop。

## 安装PeerBanHelper

```pwsh
scoop bucket add extras
scoop install extras/peerbanhelper
```

## 启动

在开始菜单中找到Scoop Apps文件夹，然后打开PeerBanHelper。

## 升级

```pwsh
scoop update
scoop update peerbanhelper
```
