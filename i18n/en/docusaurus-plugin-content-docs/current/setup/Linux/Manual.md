---
sidebar_position: 2
---
# Manual Install

:::tip
[Docker](../Docker.md) is more recommended.
:::

## Install OpenJDK

Use your package manager to install OpenJDK 25 or higher (here is an example using apt):

```shell
sudo apt-get update
sudo apt-get install openjdk-25-jdk-headless -y
```

Verify the installation:

```shell
java -version
```

If the installation is successful, you will see output similar to the following:

```plain
openjdk version "xx.xx.xxx" 2026-01-16
OpenJDK Runtime Environment (build xxxxxxx)
OpenJDK 64-Bit Server VM (build xxxxxxx, mixed mode, sharing)
```

## Download Jar

Download the `jar` and `libraries.tar.gz` from [Release](https://github.com/PBH-BTN/PeerBanHelper/releases/latest).

Unzip them into a same directory.

Using the following command to launch PBH：

```shell
java -XX:+UseCompactObjectHeaders -XX:ZCollectionInterval=60 --enable-native-access=ALL-UNNAMED -Djdk.attach.allowAttachSelf=true -Dsun.net.useExclusiveBind=false -Dpbh.release=docker -XX:+UseZGC -XX:ZUncommitDelay=1 -Xss512k -XX:+UseStringDeduplication -XX:-ShrinkHeapInSteps -XX:MaxRAMPercentage=85.0 -jar <jar file>
```

PBH will automatically detect the desktop environment and enable the GUI if supported, but the GUI may fail to initialize on some devices. In such cases, manually disable the GUI:

```shell
java -XX:+UseCompactObjectHeaders -XX:ZCollectionInterval=60 --enable-native-access=ALL-UNNAMED -Djdk.attach.allowAttachSelf=true -Dsun.net.useExclusiveBind=false -Dpbh.release=docker -XX:+UseZGC -XX:ZUncommitDelay=1 -Xss512k -XX:+UseStringDeduplication -XX:-ShrinkHeapInSteps -XX:MaxRAMPercentage=85.0 -jar <jar file> nogui
```
