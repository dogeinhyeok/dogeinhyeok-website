---
sidebar_position: 2
---

# 문서 만들기

문서는 다음을 통해 연결된 **페이지 그룹**입니다:

- **사이드바**
- **이전/다음 탐색**
- **버전 관리**

## 첫 번째 문서 만들기

`docs/hello.md`에 Markdown 파일을 생성하세요:

```

새로운 문서는 이제 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello)에서 확인할 수 있습니다.

## 사이드바 구성

Docusaurus는 `docs` 폴더에서 자동으로 **사이드바를 생성**합니다.

사이드바 레이블과 위치를 사용자 정의하려면 메타데이터를 추가하세요:
---

# Hello

This is my **first Docusaurus document**!
```

사이드바를 `sidebars.js`에서 명시적으로 생성할 수도 있습니다.

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    "intro",
    // highlight-next-line
    "hello",
    {
      type: "category",
      label: "튜토리얼",
      items: ["tutorial-basics/create-a-document"],
    },
  ],
};
```
