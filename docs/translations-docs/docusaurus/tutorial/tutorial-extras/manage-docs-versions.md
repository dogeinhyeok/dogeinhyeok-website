---
sidebar_position: 1
---

# 문서 버전 관리

Docusaurus는 여러 버전의 문서를 관리할 수 있습니다.

## 문서 버전 생성

프로젝트의 버전 1.0을 릴리스하세요:

```bash
npm run docusaurus docs:version 1.0
```

`docs` 폴더가 `versioned_docs/version-1.0`으로 복사되고 `versions.json`이 생성됩니다.

이제 문서에는 2개의 버전이 있습니다.

- `1.0` 버전 문서는 `http://localhost:3000/docs/`에서 확인할 수 있습니다.
- `current` 버전 문서는 **다가오는, 아직 릴리스되지 않은 문서**로 `http://localhost:3000/docs/next/`에서 확인할 수 있습니다.

## 버전 드롭다운 추가

버전 간 원활한 탐색을 위해 버전 드롭다운을 추가하세요.

`docusaurus.config.js` 파일을 수정하세요:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

문서 버전 드롭다운이 내비게이션 바에 나타납니다:

![문서 버전 드롭다운](./img/docsVersionDropdown.png)

## 기존 버전 업데이트

각 버전 폴더에서 버전된 문서를 편집할 수 있습니다:

- `versioned_docs/version-1.0/hello.md`는 `http://localhost:3000/docs/hello`를 업데이트합니다.
- `docs/hello.md`는 `http://localhost:3000/docs/next/hello`를 업데이트합니다.
