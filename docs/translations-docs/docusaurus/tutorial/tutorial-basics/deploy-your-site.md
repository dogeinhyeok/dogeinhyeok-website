---
sidebar_position: 5
---

# 사이트 배포하기

Docusaurus는 **정적 사이트 생성기**입니다 (또는 [Jamstack](https://jamstack.org/)라고도 불립니다).

이 도구는 사이트를 간단한 **정적 HTML, JavaScript 및 CSS 파일**로 빌드합니다.

## 사이트 빌드하기

사이트를 **프로덕션용으로** 빌드하기:

```bash
npm run build
```

정적 파일은 `build` 폴더에 생성됩니다.

## 사이트 배포하기

프로덕션 빌드를 로컬에서 테스트하기:

```bash
npm run serve
```

`build` 폴더가 이제 [http://localhost:3000/](http://localhost:3000/)에서 제공됩니다.

이제 `build` 폴더를 **거의 어디서나** 쉽게 배포할 수 있으며, **무료** 또는 매우 적은 비용으로 가능합니다 (자세한 내용은 [배포 가이드](https://docusaurus.io/docs/deployment)를 참조하세요).
