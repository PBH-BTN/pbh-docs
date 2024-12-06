# 连接 BTN

要参与 BTN 计划，只需要将 BTN 客户端连接到 BTN 服务器就好了。本文使用 PeerBanHelper 作为 BTN 客户端，Sparkle 作为 BTN 服务端进行演示。

## Sparkle

Sparkle 是 PBH-BTN 的官方 BTN 服务器。

### 注册账号，创建 UserApp

浏览器打开 [https://btn-prod.ghostchu-services.top](https://btn-prod.ghostchu-services.top) 并使用 GitHub 授权登录，就会自动创建一个账号。  

点击顶部菜单的 “用户应用程序” 链接来到管理页面。

![homepage](./assets/btn-homepage.png)

点击 “创建新用户应用程序”，输入一个备注，然后点击按钮创建。

![management](./assets/userapp-management.png)

现在记下页面上显示的 `AppID` 和 `AppSecret`，因为一旦关闭这个页面，`AppSecret` 就不会再显示了。

![created](./assets/userapp-created.png)

## 在 PBH 上加入 BTN 网络

转到 设置 -> 基础设置 选项。

![btn1](./assets/btn1.jpg)

向下滑动找到 BTN 设置，打开 “启用 BTN 模块”，并填写刚刚在上面获取的 AppID 和 App Secret：

![btn2](./assets/btn2.jpg)

滚动到底部，点击“保存”按钮，然后重启 PeerBanHelper 使其生效。

![btn3](./assets/btn3.jpg)
