// @docusaurus
/**
 * Docusaurus 설정 파일
 * -> 사이트의 기본적인 설정을 정의
 * -> 사이트의 제목, URL, 테마, 플러그인 등 다양한 요소 설정 가능
 * -> Docusaurus를 통해 정적 사이트 생성 시 필요한 모든 설정 포함
 */
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config"; // dotenv로 환경 변수 로드

// 이 코드는 Node.js에서 실행됩니다 - 클라이언트 측 코드(브라우저 API, JSX 등)를 사용하지 마세요.
const websiteUrl = "https://dogeinhyeok.com";
const githubUrl = "https://github.com/dogeinhyeok";
const discordUrl = "https://discord.gg/pyHeT4B4jx";
const patreonUrl = "https://www.patreon.com/c/dogeinhyeok/membership";
const youtubeUrl = "https://www.youtube.com/@dogeinhyeok";
const threadUrl = "https://www.threads.net/@dogeinhyeok";
const emailUrl = "devinhyeok@gmail.com";

const config: Config = {
  title: "도지인혁연구소",
  tagline: '"매일 좋은 일을 하자!"',
  favicon: "img/favicon.ico",

  // 사이트의 프로덕션 URL을 여기에 설정하세요.
  url: websiteUrl,
  // 사이트가 제공되는 /<baseUrl>/ 경로명을 설정하세요.
  // GitHub 페이지 배포의 경우, 종종 '/<projectName>/'입니다.
  baseUrl: "/",

  // GitHub 페이지 배포 설정.
  // GitHub 페이지를 사용하지 않는 경우, 이 설정은 필요하지 않습니다.
  organizationName: "dogeinhyeok", // 보통 GitHub 조직/사용자 이름입니다.
  projectName: "dogeinhyeok-website", // 보통 저장소 이름입니다.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // 국제화를 사용하지 않더라도, 이 필드를 사용하여 유용한 메타데이터를 설정할 수 있습니다.
  // 예를 들어, 사이트가 중국어인 경우 "en"을 "zh-Hans"로 바꿀 수 있습니다.
  i18n: {
    defaultLocale: "kr",
    locales: ["kr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // 이 부분을 본인의 저장소로 변경하세요.
          // "이 페이지 편집" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 이 부분을 본인의 저장소로 변경하세요.
          // "이 페이지 편집" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // 블로깅 모범 사례를 강제하기 위한 유용한 옵션
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 프로젝트의 소셜 카드로 교체하세요.
    image: "img/docusaurus-social-card.jpg",
    // 상단 네비게이션 바 편집
    navbar: {
      title: "도지인혁연구소",
      logo: {
        alt: "도지인혁연구소",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: youtubeUrl,
          position: "right",
          className: "navbar-youtube-icon",
          "aria-label": "Youtube Icon",
        },
        {
          href: discordUrl,
          position: "right",
          className: "navbar-discord-icon",
          "aria-label": "Discord Icon",
        },
        {
          href: patreonUrl,
          position: "right",
          className: "navbar-patreon-icon",
          "aria-label": "Patreon Icon",
        },

        {
          href: githubUrl,
          position: "right",
          className: "navbar-github-icon",
          "aria-label": "GitHub Icon",
        },
      ],
    },
    // 하단 네비게이션 바 편집
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: discordUrl,
            },
            {
              label: "Patreon",
              href: patreonUrl,
            },
            {
              label: "Youtube",
              href: youtubeUrl,
            },
            {
              label: "GitHub",
              href: githubUrl,
            },
            {
              label: "Threads",
              href: threadUrl,
            },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Docs", to: "/docs/intro" },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dogeinhyeok, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Tailwind CSS와 AutoPrefixer 추가
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "vercel-analytics",
      {
        debug: true,
        mode: "auto",
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  customFields: {
    giscusRepo: process.env.GISCUS_REPO,
    giscusRepoId: process.env.GISCUS_REPO_ID,
    giscusCategory: process.env.GISCUS_CATEGORY,
    giscusCategoryId: process.env.GISCUS_CATEGORY_ID,
    giscusMapping: process.env.GISCUS_MAPPING,
    giscusTerm: process.env.GISCUS_TERM,
    giscusStrict: process.env.GISCUS_STRICT,
    giscusReactionsEnabled: process.env.GISCUS_REACTIONS_ENABLED,
    giscusEmitMetadata: process.env.GISCUS_EMIT_METADATA,
    giscusInputPosition: process.env.GISCUS_INPUT_POSITION,
    giscusLang: process.env.GISCUS_LANG,
  },
};

export default config;
