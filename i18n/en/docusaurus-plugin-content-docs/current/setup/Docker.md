---
sidebar_position: 1
---

# Docker

Docker 部署是 PeerBanHelper 推荐的部署方式。使用 PBH 提供的示例配置文件和 CLI 命令，PBH 将能够跟随系统自动启动，并在后台运行（除非手动停止）。

## 获取版本标签

首先访问 [PBH最新版版本发布页](https://github.com/PBH-BTN/PeerBanHelper/releases/latest)，向下滚动，找到如图所示的 “Docker 用户” 章节，并复制镜像标签备用。

![image-tag](./assets/docker-tag.png)

**不要拉取 latest 镜像，由于镜像缓存的问题，你可能会得到一个远古/开发版本，出问题将无法获得支持。**

## 使用 Docker Compose 部署

找一个合适的位置创建一个目录作为 PBH 的数据存放位置，并将工作目录切换到此位置。
保存下面的内容到 docker-compose.yml 文件。

```yaml
version: "3.9"
services:
  peerbanhelper:
    image: "镜像标签"
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

保存退出，执行命令 `sudo docker-compose up` 即可。WebUI 端口将在 9898 开放。

## 使用 Docker CLI 部署

找一个合适的位置创建一个目录作为 PBH 的数据存放位置，并将工作目录切换到此位置。
执行命令：

```shell
sudo docker run -d --name peerbanhelper --stop-timeout -p 9898:9898 -v ${PWD}/:/app/data/ 将此段文字替换为你刚刚获取的镜像标签
```

WebUI 端口将在 9898 开放。
