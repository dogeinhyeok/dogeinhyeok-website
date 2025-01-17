import React, { type ReactNode } from "react";
import Logo from "@theme/Logo";
import { useWindowSize } from "@docusaurus/theme-common"; // 윈도우 크기 확인

export default function NavbarLogo(): ReactNode {
  const windowSize = useWindowSize(); // 현재 창 크기
  const isMobile = windowSize === "mobile"; // 모바일 모드인지 확인

  return (
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName={`navbar__title text--truncate ${
        isMobile ? "hidden" : ""
      }`} // 모바일 모드에서 텍스트 숨기기
    />
  );
}
