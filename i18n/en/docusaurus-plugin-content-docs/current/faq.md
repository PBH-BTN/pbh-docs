# 常见问题

## 升级后 WebUI 白屏/黑屏/卡无限数据加载

清除浏览器缓存。

## 启动报错 Failed to bind to port / Port already in use. Make sure no other process is using port XXXX and try again.

同时启动了两个 PeerBanHelper（特别常见于安装时错误勾选了 “安装为系统服务”）；或者端口被占用导致端口冲突（如 Uplay/Ubisoft Connect 等）。

### 如果是安装为了系统服务

如果你不清楚这是做什么的，请运行卸载程序从系统中删除系统服务，重启后重新安装。

### 如果是 Uplay/Ubisoft Connect 正在运行；其它程序占用 WebUI 端口

请先退出，或者[更改 WebUI 端口](./network/http-server.md#更改-webui-端口)

## 127.0.0.1 或者 localhost 连不上下载器 (ConnectException: null)

出现这个问题多半是因为用了 Docker 容器部署导致的。在容器里使用 `127.0.0.1` 或者 `localhost` 指向的是容器内部，当然是连不上的。

群晖用户：Container Manager -> 容器 -> 找到 PBH 的容器 -> 向下滚动，使用显示的网关地址连接。

![dsm-gateway](./assets/dsm-network-gateway.png)

其它 Docker 用户：执行 `sudo docker network inspect bridge` 命令：

```json
"IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        }
```

使用上面的 Gateway 地址连接。

## 无法下载 IPDB/GeoIP 库 / 代理无效

参见：[配置代理服务器](./network/proxy-server.md)

## WebUI 管理 Token 在哪里？

参见：[更改 WebUI Token](./network/http-server.md#更改-webui-token)

## Transmission 有什么缺点/为什么弃用/废弃了

参见：[废弃对 Transmission 下载器的支持 #382](https://github.com/PBH-BTN/PeerBanHelper/issues/382)

## 反吸血进度检查器为什么显示进度超过 100% (例如：102%)，是不是出错了？怎么还能超过 100% 的？

不是的，进度检查器会累加此 IP 地址在特定种子上的下载进度。如果对方出现进度回退、断开更换端口重连、更换 PeerID、更换 Client name 重新下载时，下载器会认为这是一个新客户端，并从头开始计算下载数据（吸血者也使用此手段绕过吸血检查）。但对于 PBH 来说，只要对方 IP 地址未改变（或者处于特定区间内），并且下载的种子未更换的情况下，下载进度会持续增量累积，避免对方欺骗反吸血检查。例如一个文件大小是 1000MB，对方下载 102% 代表对方在这个 1000MB 大小的种子上，实际下载了 1020MB 的数据。

## PBH 提示我的下载器 “连续多次登录失败” ，并暂停了该怎么办？

您可以点击下载器的编辑按钮，然后直接点击确定保存。PBH 将会解除暂停状态并重新尝试登陆，此时会显示登陆失败的原因。请根据原因进行故障排查（例如：网络连接问题、WebUI 是否启用、用户名密码是否正确等）。排查完了再保存一次成功就解除暂停了。

## 什么是增量封禁？

- 非增量封禁：每次有新 IP 要封禁的时候，直接整个替换 IP 黑名单列表。在 qBittorrent 上容易造成下载器卡死。
- 增量封禁：每次有新 IP 要封禁的时候，使用 banPeer API 增量添加封禁 IP；在解除封禁的时候，仍然是直接整个替换 IP 黑名单列表。

## 什么是验证 SSL 证书？

如果填写的地址是一个 HTTPS 地址，且此开关启用，则会验证 SSL 证书的有效性。如果证书无效，则报错保证安全。
如果关闭，则信任所有 SSL 证书。

## 什么是 Basic Auth？

有的教程会让你通过反代或者 Nginx 额外添加一层用户名密码保证安全，其特点是浏览器访问的时候会弹框验证：

![basic-auth](./assets/basic-auth.png)

这个就是 Basic Auth。

## 统计数据中封禁计数比访问计数多？

当一个 Peer 连接**并产生流量**时，计为一次访问。如果 Peer 在产生流量之前就被封禁（比如处于握手阶段），则只记为一次封禁。

## 如何永久封禁 IP

请使用 [IP 黑名单](./module/ip-address-blocker.md)。

## 为什么我无法编辑自定义脚本？什么是“只读模式”？

出于安全原因考虑，脚本编辑功能会拒绝来自互联网的请求，这可以在 Token 泄漏的情况下保护您的设备。

如果您出于一定原因一定要在互联网编辑脚本，并理解 **Token 泄漏后黑客可以在你的设备上执行任何代码**，你可以在启动时添加以下`flag`：
```
java -Dpbh.please-disable-safe-network-environment-check-i-know-this-is-very-dangerous-and-i-may-lose-my-data-and-hacker-may-attack-me-via-this-endpoint-and-steal-my-data-or-destroy-my-computer-i-am-fully-responsible-for-this-action-and-i-will-not-blame-the-developer-for-any-loss ...
```
