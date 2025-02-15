// @docusaurus
/**
 * 메인 페이지 구성 파일
 * -> Docusaurus의 메인 페이지를 정의하는 파일입니다.
 * -> ReactNode 타입을 사용하여 컴포넌트를 정의합니다.
 * -> 사이트의 첫 인상을 결정짓는 중요한 역할을 합니다.
 * -> 사이트의 제목과 설명을 포함하여 레이아웃을 설정합니다.
 */
import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "../index.module.css";

function ShowcaseHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container py-24">
        <Heading as="h1" className="hero__title">
          업데이트 예정...
        </Heading>
        <p className="hero__subtitle">
          이 페이지는 현재 작업 중입니다. 곧 멋진 콘텐츠로 채워질 예정입니다!
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Showcase"}
      description="Description will go into a meta tag in <head />"
    >
      <ShowcaseHeader />
      <main></main>
    </Layout>
  );
}
