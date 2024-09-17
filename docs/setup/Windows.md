---
sidebar_position: 1
---


# Windows

## 下载和安装

打开 [GitHub Releases](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)。你会找到四个以 `.exe` 结尾的安装程序。  

其中，一种带有 `nojava` 标记，另一种不带。如果你对什么是 Java 不熟悉，请选择**不带**nojava标记的下载。  

然后，你还会注意到还有 `x64` 和 `arm64` 的区别：  
* 普通用户，请全部统一下载带有 `x64` 标记的 `.exe` 安装程序。  
* 如果你是不幸购买了高通骁龙 ARM 架构处理器的 Windows 笔记本的倒霉蛋小白鼠用户：请下载带有 `arm64` 的 `.exe` 安装程序。  

### 开机启动

勾选随系统启动时，当您登录到 Windows 桌面，PBH 就会静默启动到系统托盘。

## GUI/Safe Mode/NoGUI

### GUI

顾名思义，以图形窗口启动 PeerBanHelper。会有一个窗口可以查看日志，以及一个可以打开数据文件夹和免登录打开 WebUI 的菜单。  
点击窗口的关闭按钮，就可以最小化到系统托盘图标。

## Safe Mode

是 PBH 旧版本的 GUI，无需下载依赖。当 JavaFx 下载失败时会自动进入 Safe Mode。比目前的 GUI 稳定一些，但功能较少。

### NoGUI

以控制台的模式情况，最节约资源。适合硬核用户。
