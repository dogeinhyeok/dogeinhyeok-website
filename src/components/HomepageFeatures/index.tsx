/**
 * 홈페이지 기능 컴포넌트
 * -> 홈페이지에 표시될 다양한 기능을 정의하고 렌더링하는 컴포넌트입니다.
 * -> 각 기능은 제목, 설명, 그리고 SVG 이미지를 포함합니다.
 * -> 기능 목록은 FeatureList 배열을 통해 관리됩니다.
 * -> React 컴포넌트를 사용하여 기능을 확장하거나 사용자 정의할 수 있습니다.
 */
import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "아이디어 실현 지원",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        최소한의 비용으로 자신만의 비즈니스를 구축하고 자동화하는 방법을
        연구합니다.
      </>
    ),
  },
  {
    title: "효율적 솔루션 제공",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        "매일 좋은 일을 하자!"는 철학 아래, 누구나 자신의 아이디어를 실현할 수
        있도록 돕습니다.
      </>
    ),
  },
  {
    title: "아이디어 검증 및 개발 단순화",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        복잡한 아이디어 검증 및 개발 과정을 단순화하여, 아이디어를 현실로 만드는
        여정을 함께합니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
