---
sidebar_position: 2
---

# 사이트 번역하기

`docs/intro.md` 파일을 프랑스어로 번역해봅시다.

## i18n 설정

`docusaurus.config.js` 파일을 수정하여 `fr` 로케일을 지원하도록 추가합니다.

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## 문서 번역하기

`docs/intro.md` 파일을 `i18n/fr` 폴더로 복사하세요.

```bash
mkdir -p i18n/ko/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/ko/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 파일을 프랑스어로 번역하세요.

## 로컬라이즈된 사이트 시작하기

프랑스어 로케일로 사이트를 시작하세요:

```bash
npm run start -- --locale fr
```

로컬라이즈된 사이트는 [http://localhost:3000/fr/](http://localhost:3000/fr/)에서 접근할 수 있으며, `시작하기` 페이지가 번역되었습니다.

:::caution

개발 중에는 한 번에 하나의 로케일만 사용할 수 있습니다.

:::

## 로케일 드롭다운 추가하기

언어 간 원활한 탐색을 위해 로케일 드롭다운을 추가하세요.

`docusaurus.config.js` 파일을 수정하세요:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

로케일 드롭다운이 이제 내비게이션 바에 나타납니다:

![로케일 드롭다운](./img/localeDropdown.png)

## 로컬라이즈된 사이트 빌드하기

특정 로케일에 맞춰 사이트를 빌드하세요:

```bash
npm run build -- --locale fr
```

또는 모든 로케일을 한 번에 포함하여 사이트를 빌드하세요:

```bash
npm run build
```
