---
sidebar_position: 6
---

# Docker Method

## Create Data Directory

First, create a folder for PBH to store its configuration files.

![step1](./assets/dsm-1.png)

In the Container Manager, select the project, click the "Add" button, and choose "Create docker-compose.yml" as the source (make sure to select the source first, otherwise, the subsequent steps will overwrite the settings).

![step2](./assets/dsm-2.png)

Then, click the `Set Path` button to configure the Docker Compose location to the folder we just created:

![step3](./assets/dsm-2.png)

![step4](./assets/dsm-4.png)

## Get Version Tag

First, visit the [PBH Latest Release Page](https://github.com/PBH-BTN/PeerBanHelper/releases/latest), find the "Docker Users" section as shown in the image, and copy the image tag for later use.

![image-tag](../assets/docker-tag.png)

**Do not pull the latest image, you may get an outdated or development version, and you will not receive support if problems occur.**

```yaml
version: "3.9"
services:
  peerbanhelper:
    image: "Image Tag"
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

Then paste it into the editor (the image is just an example for reference).

![step5](./assets/dsm-5.png)

If asked whether to enable the web portal, **do not enable it**:

![step6](./assets/dsm-6.png)

Continue with the next steps and start the container. After the first start, the configuration file should be automatically generated. After configuring the file, restart the Docker container to use it.

![step7](./assets/dsm-7.png)

## If Unable to Connect to Downloader

### Reason 1: Using 127.0.0.1

See: [FAQ](../../faq.md#cant-connect-to-the-downloader-via-127001-or-localhost)

### Reason 2: PBH Container Has Not Automatically Joined the Bridge Network Group

This issue occurs only on some devices. Some devices may require you to manually join the bridge network group:

![step8](./assets/dsm-8.png)
