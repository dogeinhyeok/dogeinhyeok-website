import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'], // 다크모드 지원
  corePlugins: { preflight: false }, // Docusaurus 기본값 유지
  blocklist: ["container"], // Docusaurus 클래스와 충돌 방지
};

export default config;
