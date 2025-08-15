# 连接 BTN

若要参与 BTN 计划，您只需将 BTN 客户端与 BTN 服务器进行连接即可。本文将以 PeerBanHelper（简称 PBH）作为 BTN 客户端，Sparkle 作为 BTN 服务端为例进行演示。

## Sparkle

Sparkle 是 PBH-BTN 组织的官方 BTN 服务器。

### 注册账号并创建 UserApp

请在浏览器中打开 [https://sparkle.pbh-btn.com](https://sparkle.pbh-btn.com) 并使用 GitHub 授权登录，系统将自动为您创建一个账号。

接着，点击页面顶部的“用户应用程序”链接，进入管理页面。

![homepage](./assets/btn-homepage.png)

点击“创建新用户应用程序”，输入一个备注信息后，点击按钮完成创建。

![management](./assets/userapp-management.png)

请务必记录页面上显示的 `AppID` 和 `AppSecret`，因为一旦关闭该页面，`AppSecret` 将不再显示。

![created](./assets/userapp-created.png)

## 在 PeerBanHelper 上加入 BTN 网络

请前往设置 -> 基础设置 选项。

![btn1](./assets/btn1.jpg)

向下滑动至 BTN 设置部分，勾选“启用 BTN 模块”，并填入之前获取的 AppID 和 App Secret：

![btn2](./assets/btn2.jpg)

滚动至页面底部，点击“保存”按钮，并重启 PeerBanHelper 以使设置生效。

![btn3](./assets/btn3.jpg)