---
sidebar_position: 2
---

# FreeBSD
 After `v6.4.1`, PeerBanHelper provides a FreeBSD version of the installation package, currently supporting `13.4` and `14.1` two versions.

Please go to the [release](https://github.com/PBH-BTN/PeerBanHelper/releases/latest) page to find the FreeBSD package for your corresponding version, copy the link, and enter the following command to download:

```
fetch https://github.com/PBH-BTN/PeerBanHelper/releases/download/v6.4.2/peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg
```

## Install Java
Use  `pkg` to install OpenJDK 25 or higher：

```shell
sudo pkg install openjdk25
```

Verify:

```shell
java -version
```

Once you installed successfully, you will get the following output:

```plain
OpenJDK Runtime Environment (build 25.0.3+9-1)
OpenJDK 64-Bit Server VM (build 25.0.3+9-1, mixed mode, sharing)
```

## Install
```shell
pkg add -f peerbanhelper-v*.*.*-FreeBSD-*.*-RELEASE.pkg # -f for force install
```

## Run
```shell
service peerbanhelper onestart
```

## Auto-start
```shell
sysrc peerbanhelper_enable=YES
```
