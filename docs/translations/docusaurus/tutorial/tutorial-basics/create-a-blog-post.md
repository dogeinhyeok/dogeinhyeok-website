---
sidebar_position: 3
---

# 블로그 게시물 작성하기

Docusaurus는 **각 블로그 게시물에 대한 페이지**뿐만 아니라 **블로그 인덱스 페이지**, **태그 시스템**, **RSS** 피드를 생성합니다...

## 첫 번째 게시물 작성하기

`blog/2021-02-28-greetings.md` 파일을 생성하세요:

```md title="blog/2021-02-28-greetings.md"
---
slug: 인사
title: 인사!
authors:
  - name: Joel Marcey
    title: Docusaurus 1 공동 창시자
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus 유지보수자
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [인사]
---

축하합니다, 첫 번째 게시물을 작성하셨습니다!

이 게시물을 자유롭게 수정하고 실험해보세요.

새로운 블로그 게시물이 이제 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings)에서 확인 가능합니다.
```
