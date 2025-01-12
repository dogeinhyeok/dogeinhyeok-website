import React, { CSSProperties } from "react"; // CSSProperties 타입을 사용하기 위해 import
import Giscus from "@giscus/react"; // Giscus 댓글 컴포넌트 import
import { useColorMode } from "@docusaurus/theme-common"; // Docusaurus의 색상 모드 훅 import
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; // customFields 로드

// GiscusComponent의 props 타입 정의
interface GiscusComponentProps {
  style?: CSSProperties; // 스타일을 커스터마이즈할 수 있는 선택적 prop
}

// GiscusComponent 컴포넌트 정의
const GiscusComponent: React.FC<GiscusComponentProps> = ({ style }) => {
  const { colorMode } = useColorMode(); // 현재 색상 모드 가져오기

  const { siteConfig } = useDocusaurusContext();
  const {
    giscusRepo,
    giscusRepoId,
    giscusCategory,
    giscusCategoryId,
    giscusMapping,
    giscusTerm,
    giscusStrict,
    giscusReactionsEnabled,
    giscusEmitMetadata,
    giscusInputPosition,
    giscusLang,
  } = siteConfig.customFields; // 환경 변수 로드

  return (
    <div style={style}>
      {/* 컴파일 에러 무시 */}
      <Giscus
        repo={giscusRepo}
        repoId={giscusRepoId}
        category={giscusCategory}
        categoryId={giscusCategoryId}
        mapping={giscusMapping}
        term={giscusTerm}
        strict={giscusStrict}
        reactionsEnabled={giscusReactionsEnabled}
        emitMetadata={giscusEmitMetadata}
        inputPosition={giscusInputPosition}
        theme={colorMode === "dark" ? "dark_dimmed" : "light"}
        lang={giscusLang}
      />
    </div>
  );
};

export default GiscusComponent; // GiscusComponent 컴포넌트 내보내기
