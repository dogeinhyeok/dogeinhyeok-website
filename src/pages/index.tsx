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
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext(); // 사이트 설정을 가져옵니다.
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* 버튼 스타일을 적용합니다. */}
          <Link
            className="button button--secondary button--lg"
            to="/docs" // 링크 경로를 지정합니다.
          >
            자세히보기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
