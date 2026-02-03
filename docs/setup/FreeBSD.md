---
sidebar_position: 2
---

# FreeBSD

自`v6.4.1`版本起，PeerBanHelper（简称 PBH）提供了针对 FreeBSD 的安装包，目前支持 `13.4` 和 `14.1` 这两个系统版本。

请访问[最新版本发布页面](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)，找到与你 FreeBSD 版本相对应的安装包链接，并复制。然后，在终端中输入以下命令以下载安装包：

```shell
fetch <你复制的安装包链接>
```

例如：

```shell
fetch https://github.com/PBH-BTN/PeerBanHelper/releases/download/v6.4.2/peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg
```

请将上述命令中的 `<你复制的安装包链接>` 替换为实际的安装包 URL。

## 安装依赖

使用 `pkg` 工具安装 OpenJDK 25 或更高版本：

```shell
sudo pkg install openjdk25
```

验证安装是否成功：

```shell
java -version
```

如果安装成功，终端将输出类似以下的版本号信息：

```plain
OpenJDK Runtime Environment (build 25.0.x+y-z)
OpenJDK 64-Bit Server VM (build 25.0.x+y-z, mixed mode, sharing)
```

请注意，上述输出中的 `x`, `y`, `z` 为版本号的具体数字，可能与你实际安装的版本有所不同。

## 安装 PBH

在终端中执行以下命令以安装 PBH：

```shell
sudo pkg add -f <你下载的安装包文件名>
```

例如：

```shell
sudo pkg add -f peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg
```

请将 `<你下载的安装包文件名>` 替换为你实际下载的安装包文件名。`-f` 参数表示强制更新或安装该软件包。

## 运行 PBH

在终端中执行以下命令以启动 PBH 服务：

```shell
sudo service peerbanhelper onestart
```

## 设置开机启动

为了确保 PBH 在系统启动时自动运行，请执行以下命令：

```shell
sudo sysrc peerbanhelper_enable="YES"
```

这样，PBH 将在每次系统启动时自动运行。