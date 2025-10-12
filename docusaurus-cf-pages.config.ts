import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "PeerBanHelper",
  tagline: "自动封禁不受欢迎、吸血和异常的 BT 客户端，并支持自定义规则",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://pbh-btn.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PBH-BTN", // Usually your GitHub org/user name.
  projectName: "pbh-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    //locales: ['en', 'zh-Hans'],
    locales: ["en", "zh-Hans"],
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PBH-BTN/pbh-docs/edit/master",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "PeerBanHelper",
      logo: {
        alt: "PeerBanHelper",
        src: "img/peerbanhelper-icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        {
          href: "https://github.com/PBH-BTN/pbh-docs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "PeerBanHelper",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PBH-BTN/PeerBanHelper",
            },
            {
              label: "QQ 群",
              href: "https://qm.qq.com/cgi-bin/qm/qr?k=w5as_wH2G1ReUrClreCYhR69XiNCuP65&jump_from=webapi&authKey=EyjMX7Pwc77XLM51V6FEcR7oXnG8fsUbSFqYZ4PPiEpq32vBglJn/jFvpc3LFDhn",
            },
            {
              label: "Telegram",
              href: "https://t.me/+_t3Nt5GZ6bJmYjBl",
            },
          ],
        },
        {
          title: "支持我们",
          items: [
            {
              label: "爱发电",
              to: "https://afdian.com/a/Ghost_chu",
            },
          ],
        },
      ],
      copyright: `Licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.en">CC BY-NC (署名—非商业性使用 4.0 协议)</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
