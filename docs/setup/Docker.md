---
sidebar_position: 1
---

# Docker

Docker 是 PeerBanHelper（简称 PBH）推荐的部署方式。借助 PBH 提供的示例配置文件和命令行指令，PBH 能够随系统自动启动并在后台稳定运行（除非手动停止）。

## 获取版本标签

首先，访问 [PBH 最新版本发布页面](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)，在页面下方找到"Docker 用户"部分，并复制相应的镜像标签以备使用。

![image-tag](./assets/docker-tag.png)

**注意：避免拉取 `latest` 镜像，因为镜像缓存问题可能导致你获取到一个旧版或开发版，这将无法得到支持。**

## 使用 Docker Compose 部署

选择一个合适的位置，创建一个目录用于存放 PBH 的数据，并将工作目录切换至此位置。然后，将以下内容保存为 `docker-compose.yml` 文件：

```yaml
version: "3.9"
services:
  peerbanhelper:
    image: "你的镜像标签"
    restart: unless-stopped
    container_name: "peerbanhelper"
    volumes:
      - ./:/app/data
    network_mode: host
    stop_grace_period: 30s
```

保存并退出编辑器，执行命令 `sudo docker-compose up -d` 以启动服务。Web 界面将在 9898 端口开放。

## 使用 Podman Quadlet

在 `/etc/containers/systemd` 中创建一个 `peerbanhelper.container` 文件，内容如下，根据需要更新 `Volume` 路径：

```ini
[Unit]
Description=PeerBanHelper Container
[Container]
ContainerName=peerbanhelper
Image=<标签>
Volume=/path/to/pbh-data:/app/data
PublishPort=9898:9898
Network=host
Environment=PUID=0
Environment=PGID=0
Environment=TZ=UTC
AutoUpdate=registry
[Install]
WantedBy=multi-user.target default.target
```

将 `<标签>` 替换为你刚刚复制的镜像标签。

使用 `sudo systemctl daemon-reload` 重新加载 systemd，并通过 `sudo systemctl enable --now peerbanhelper` 命令启动容器并设置为开机自启。如果你使用的是 `:latest`，可以通过 `sudo systemctl enable podman-auto-update.{service,timer}` 启用自动更新。

## 版本升级

若需要升级版本，更新 `image` 中的镜像标签到最新版本的版本标签，重新执行命令即可更新容器。  
如发现更新后数据丢失，则说明没有正确挂在存储卷，或者工作目录与上次不同。请检查工作目录。 
