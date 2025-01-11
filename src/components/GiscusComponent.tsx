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
      <Giscus
        repo="dogeinhyeok/dogeinhyeok-website" // Giscus가 연결될 GitHub 저장소
        repoId="R_kgDONmXHWw" // 저장소 ID
        category="Announcements" // 댓글이 달릴 카테고리
        categoryId="DIC_kwDONmXHW84Cl7dq" // 카테고리 ID
        mapping="url" // 댓글 매핑 방식
        term="Welcome to @giscus/react component!" // 기본 댓글 주제
        strict="0" // 엄격 모드 설정
        reactionsEnabled="1" // 반응(이모지) 기능 활성화
        emitMetadata="1" // 메타데이터 전송 활성화
        inputPosition="top" // 입력창 위치
        theme={colorMode === "dark" ? "dark_dimmed" : "light"} // 다크 모드에서는 "dark_dimmed", 라이트 모드에서는 "light" 테마 사용
        lang="ko" // 언어 설정
      />
    </div>
  );
};

export default GiscusComponent; // GiscusComponent 컴포넌트 내보내기
