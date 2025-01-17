import React, { type ReactNode } from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import { useColorMode } from "@docusaurus/theme-common"; // Docusaurus 컬러모드 훅
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DefaultNavbarItem";

// 데스크톱 로고 컴포넌트 예시
function LogoComponentDesktop(props: {
  href: string;
  lightSrc: string;
  darkSrc: string;
}) {
  const { colorMode } = useColorMode(); // 현재 테마 가져오기

  return (
    <a
      href={props.href}
      className="menu__link group hover:bg-transparent" // 그룹 클래스 추가, 배경색 변경 방지
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={colorMode === "dark" ? props.darkSrc : props.lightSrc}
        alt="Logo"
        style={{
          width: "24px",
          height: "24px",
          marginLeft: "4px",
          marginRight: "4px",
        }} // 인라인 스타일로 크기 설정
        className="navbar__logo transition-opacity duration-300 group-hover:opacity-75" // 그룹 호버 스타일 추가
      />
    </a>
  );
}

// 모바일 로고 컴포넌트 예시
function LogoComponentMobile(props: {
  href: string;
  lightSrc: string;
  darkSrc: string;
}) {
  const { colorMode } = useColorMode(); // 현재 테마 가져오기

  return (
    <a
      href={props.href}
      className="menu__link" // 그룹 클래스 추가
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={colorMode === "dark" ? props.darkSrc : props.lightSrc}
        alt="Logo"
        style={{
          width: "1rem",
          height: "1rem",
          marginRight: "0.5rem",
        }} // 인라인 스타일로 크기 설정
        className="navbar__logo" // 그룹 호버 스타일 추가
      />
      <div>Github</div>
    </a>
  );
}

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  // 특정 URL에 대해 데스크탑 로고 렌더링
  if (props.href && props.href.startsWith("https://github.com")) {
    return LogoComponentDesktop({
      href: props.href,
      lightSrc: "/icon/24px/github.svg",
      darkSrc: "/icon/24px/github-dark.svg",
    });
  }

  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? "dropdown__link" : "navbar__item navbar__link",
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function DefaultNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  // 특정 URL에 대해 모바일 로고 렌더링
  if (props.href && props.href.startsWith("https://github.com")) {
    return LogoComponentMobile({
      href: props.href,
      lightSrc: "/icon/16px/github.svg",
      darkSrc: "/icon/16px/github-dark.svg",
    });
  }

  return (
    <li className="menu__list-item">
      <NavbarNavLink className={clsx("menu__link", className)} {...props} />
    </li>
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): ReactNode {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? "menu__link--active" : "navbar__link--active")
      }
    />
  );
}
