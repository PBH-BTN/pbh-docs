---
sidebar_position: 1
---

# Docker

Docker is the recommended deployment method for PeerBanHelper on Linux. Using the sample configuration file and CLI commands provided by PBH, PBH will be able to follow the system to start automatically and run in the background (unless stopped manually).

## Get the version tags

First visit the [PBH latest version release page](https://github.com/PBH-BTN/PeerBanHelper/releases/latest), find the “Docker Users” section as shown and copy the image tag for backup.

![image-tag](./assets/docker-tag.png)

**DO NOT** use the latest tag, as it may be cached.

## Using Docker Compose

Create a `docker-compose.yml` file in the directory where you want to store the PBH data, and paste the following content:

```yaml
version: "3.9"
services:
  peerbanhelper:
    image: "<tags>"
    restart: unless-stopped
    container_name: "peerbanhelper"
    volumes:
      - ./:/app/data
    network_mode: host
    stop_grace_period: 30s
```

Replace `<tags>` with the image tag you just copied.

Then run the following command:

```shell
docker-compose up -d
```
The webui will be opened at `9898`.

## Using Podman Quadlet
Create a `peerbanhelper.container` file in `/etc/containers/systemd` with the following content, update the `Volume` path as necessary:
```ini
[Unit]
Description=PeerBanHelper Container

[Container]
ContainerName=peerbanhelper
Image=<tags>
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

Replace `<tags>` with the image tag you just copied.

Reload systemd with `sudo systemctl daemon-reload` and start the container now and on boot with `sudo systemctl enable --now peerbanhelper.service`. If you're using `:latest`, activate automatic updates with `sudo systemctl enable podman-auto-update.{service,timer}`.

## Upgrading

To upgrade your installtion, update the image label for field `image` to the version what you want upgrade, and execute same commands again to update your container.  
If the data losing after upgrade, that's mean you didn't mount data volume correctly, or your're in different working directory. Check your working directory and try again.