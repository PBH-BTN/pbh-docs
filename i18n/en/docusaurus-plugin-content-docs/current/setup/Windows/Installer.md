---
sidebar_position: 1
---


# 安装器

## 下载和安装

打开 [GitHub Releases](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)。你会找到三个以 `.exe` 结尾的安装程序。

其中，一种带有 `nojava` 标记，另一种不带。如果你对什么是 Java 不熟悉，请选择**不带**nojava标记的下载。

然后，你还会注意到还有 `amd64` 和 `aarch64` 的区别：
* 普通用户，请全部统一下载带有 `amd64` 标记的 `.exe` 安装程序。
* 如果你是不幸购买了高通骁龙 ARM 架构处理器的 Windows 笔记本的倒霉蛋小白鼠用户：请下载带有 `aarch64` 的 `.exe` 安装程序。

### 开机启动

勾选随系统启动时，当您登录到 Windows 桌面，PBH 就会静默启动到系统托盘。

## GUI/GUI Silent/NoGUI

### GUI

顾名思义，以图形窗口启动 PeerBanHelper。会有一个窗口可以查看日志，以及一个可以打开数据文件夹和免登录打开 WebUI 的菜单。
点击窗口的关闭按钮，就可以最小化到系统托盘图标。

### GUI Silent

与 GUI 类似，但启动时不会显示窗口。适合喜欢静默启动的用户。

### NoGUI

以控制台的模式情况，最节约资源。适合硬核用户。
