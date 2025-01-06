---
sidebar_position: 1
---

# 페이지 만들기

`src/pages`에 **Markdown 또는 React** 파일을 추가하여 **독립 페이지**를 만드세요:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 첫 번째 React 페이지 만들기

`src/pages/my-react-page.js`에 파일을 만드세요:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

새로운 페이지는 이제 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)에서 확인할 수 있습니다.

## 첫 번째 Markdown 페이지 만들기

`src/pages/my-markdown-page.md`에 파일을 만드세요:

```mdx title="src/pages/my-markdown-page.md"
# 나의 마크다운 페이지

이것은 마크다운 페이지입니다
```

새로운 페이지는 이제 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)에서 확인할 수 있습니다.
