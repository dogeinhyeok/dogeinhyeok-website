import React, { CSSProperties } from "react"; // CSSProperties 타입을 사용하기 위해 import
import Giscus from "@giscus/react"; // Giscus 댓글 컴포넌트 import
import { useColorMode } from "@docusaurus/theme-common"; // Docusaurus의 색상 모드 훅 import

// GiscusComponent의 props 타입 정의
interface GiscusComponentProps {
  style?: CSSProperties; // 스타일을 커스터마이즈할 수 있는 선택적 prop
}

// GiscusComponent 컴포넌트 정의
const GiscusComponent: React.FC<GiscusComponentProps> = ({ style }) => {
  const { colorMode } = useColorMode(); // 현재 색상 모드 가져오기

  return (
    <div style={style}>
      {/* 컴파일 에러 무시 */}
      <Giscus
        repo={process.env.GISCUS_REPO}
        repoId={process.env.GISCUS_REPO_ID}
        category={process.env.GISCUS_CATEGORY}
        categoryId={process.env.GISCUS_CATEGORY_ID}
        mapping={process.env.GISCUS_MAPPING}
        term={process.env.GISCUS_TERM}
        strict={process.env.GISCUS_STRICT}
        reactionsEnabled={process.env.GISCUS_REACTIONS_ENABLED}
        emitMetadata={process.env.GISCUS_EMIT_METADATA}
        inputPosition={process.env.GISCUS_INPUT_POSITION}
        theme={colorMode === "dark" ? "dark_dimmed" : "light"}
        lang={process.env.GISCUS_LANG}
      />
    </div>
  );
};

export default GiscusComponent; // GiscusComponent 컴포넌트 내보내기
