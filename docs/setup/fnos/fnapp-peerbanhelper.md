---
sidebar_position: 2
---

# 手动部署

声明：fnOS 版本由 PBH-BTN 外的第三方进行维护，[miaoermua/fnapp-peerbanhelper](https://github.com/miaoermua/fnapp-peerbanhelper/) 不属于官方维护项目。

![appcenter-pbh-info](./assets/appcenter-pbh-info.webp)

在 fnOS/飞牛OS 中虽然提供了官方应用商店，但其应用审核与版本更新速度较慢。如果你希望尽快使用新版本或获取安全更新，建议通过手动下载 fpk 包的方式进行部署，以绕过“应用中心”的审核流程。

## 访问并下载 fpk

请访问 [miaoermua/fnapp-peerbanhelper](https://github.com/miaoermua/fnapp-peerbanhelper) 项目的 [Releases](https://github.com/miaoermua/fnapp-peerbanhelper/releases) 页面，下载最新的 fpk 文件（带有 Latest 标签）。

例如：`peerbanhelper-9.X.X.fpk`

## 手动安装 fpk

使用 APP/WebUI，登录 fnOS/飞牛OS 页面，找到 “应用中心”。

![upload-fpk](./assets/upload-fpk.webp)

点击左下角的“手动安装”，并上传已下载的 PeerBanHelper fpk 包。

![safety](./assets/safety.webp)

此时会提示 “未检验应用的安全提示”，点击 “同意” 接着按照用户向导完成 PeerBanHelper 安装或更新。



其他步骤与详情请参考[使用应用中心部署](./fn-appcenter.md)文档。