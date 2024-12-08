---
sidebar_position: 1
---

# Docker

Docker 是 PeerBanHelper（简称 PBH）推荐的部署方式。借助 PBH 提供的示例配置文件和命令行指令，PBH 能够随系统自动启动并在后台稳定运行（除非手动停止）。

## 获取版本标签

首先，访问 [PBH 最新版本发布页面](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)，在页面下方找到“Docker 用户”部分，并复制相应的镜像标签以备使用。

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
    ports:
      - "9898:9898"
    environment:
      - PUID=0
      - PGID=0
      - TZ=UTC
```

保存并退出编辑器，执行命令 `sudo docker-compose up -d` 以启动服务。Web 界面将在 9898 端口开放。

## 使用 Docker CLI 部署

选择一个合适的位置，创建一个目录用于存放 PBH 的数据，并将工作目录切换至此位置。然后，执行以下命令：

```shell
docker run -d \
    --name PeerBanHelper \
    --restart unless-stopped \
    --stop-timeout 30 \
    -p 9898:9898 \
    -v ${PWD}/:/app/data/ \
    -e PUID=0 \
    -e PGID=0 \
    -e TZ=UTC \
    你的镜像标签
```
:::warning
在 `-v` 参数中，`$(pwd)/` 表示当前工作目录，应替换为你希望用作数据目录的路径。同时，将 `你的镜像标签` 替换为你刚刚获取的 Docker 镜像标签。
:::
如果一切正常，WebUI 的端口将在 9898 端口开放。