---
sidebar_position: 1
---

# Docker

Docker is the recommended deployment method for PeerBanHelper (PBH). With the example configuration files and command-line instructions provided by PBH, PBH can automatically start with the system and run stably in the background (unless manually stopped).

<!-- ## Getting Version Tags

First, visit the [PBH latest release page](https://github.com/PBH-BTN/PeerBanHelper/releases/latest), find the "Docker Users" section at the bottom of the page, and copy the corresponding image tag for later use.

![image-tag](./assets/docker-tag.png)

**Note: Avoid pulling the `latest` image, as image caching issues may result in you obtaining an outdated or development version, which will not be supported.** -->

## Deploying with Docker Compose

Choose an appropriate location and create a directory to store PBH's data, then switch your working directory to this location. Save the following content as a `docker-compose.yml` file:

```yaml
version: "3.9"
services:
  peerbanhelper:
    image: "ghostchu/peerbanhelper:latest"
    restart: unless-stopped
    container_name: "peerbanhelper"
    volumes:
      - ./:/app/data
    network_mode: host
    stop_grace_period: 30s
```

Save and exit the editor, then execute `sudo docker compose up -d --pull always` to start the service. The web interface will be available on port 9898.

## Version Upgrade

To upgrade the version, run `sudo docker compose pull` in the same directory as your `docker-compose.yml` to update the image, then run `sudo docker compose up -d --pull always` again.

We recommend also deploying Watchtower. Simply run the following command and it will automatically update containers without manual management:

```shell
sudo docker run --detach --name watchtower --volume /var/run/docker.sock:/var/run/docker.sock --restart=unless-stopped nickfedor/watchtower
```

## Using Podman Quadlet

Create a `peerbanhelper.container` file in `/etc/containers/systemd` with the following content, updating the `Volume` path as needed:

```ini
[Unit]
Description=PeerBanHelper Container
[Container]
ContainerName=peerbanhelper
Image=ghostchu/peerbanhelper:latest
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

<!-- Replace `<tag>` with the image tag you just copied. -->

Reload systemd with `sudo systemctl daemon-reload`, then start the container and enable auto-start with `sudo systemctl enable --now peerbanhelper`. If you're using `:latest`, you can enable automatic updates with `sudo systemctl enable podman-auto-update.{service,timer}`.

