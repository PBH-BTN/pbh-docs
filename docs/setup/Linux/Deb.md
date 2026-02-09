---
sidebar_position: 1
---

# Debian/Ubuntu/Kali Linux 系统部署

>本指南适用于Debian、Ubuntu以及Kali Linux等基于Debian的Linux发行版。

## 前置条件

安装所需依赖，并导入 PBH-BTN 软件包公钥到系统中：

```shell
sudo apt update
sudo apt install ca-certificates cur -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://raw.githubusercontent.com/PBH-BTN/apt-repo/master/public-key.asc -o /etc/apt/keyrings/pbh-btn.asc
sudo chmod a+r /etc/apt/keyrings/pbh-btn.asc
```

添加软件源，将下面的内容保存到 `/etc/apt/sources.list.d/pbh-btn.sources`

```
Types: deb
URIs: https://apt-repo.pbh-btn.com/debian
Suites: sid
Components: main
Signed-By: /etc/apt/keyrings/pbh-btn.asc
```

最后更新软件源：

```shell
sudo apt update
sudo apt search PeerBanHelper
```

如果输出下面的内容，则说明软件源导入成功：

```
peerbanhelper/sid,now 9.2.5 all [installed]
PeerBanHelper is a tool to auto ban peers on the bitorrent network
```

可以用下面的命令安装：

```shell
sudo apt install peerbanhelper
```

如需卸载：

```shell
sudo apt remove peerbanhelper
```

## 启停 PeerBanHelper

PeerBanHelper 在安装时会安装 systemd 服务单元：

启动并设置开机自启：

```shell
sudo systemctl enable --now peerbanhelper
```

停止并取消开机自启：

```shell
sudo systemctl disable --now peerbanhelper
```

查看运行状态:

```shell
sudo systemctl status peerbanhelper
```
