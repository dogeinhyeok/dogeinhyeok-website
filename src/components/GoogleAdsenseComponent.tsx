// src/components/GoogleAdsenseComponent.tsx
import React, { CSSProperties } from "react";
import AdSense from "react-adsense";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface GoogleAdsenseProps {
  style?: CSSProperties; // 스타일을 커스터마이즈할 수 있는 선택적 prop
}

const GoogleAdsenseComponent: React.FC<GoogleAdsenseProps> = ({ style }) => {
  const { siteConfig } = useDocusaurusContext();
  const { googleAdsenseId, googleAdsenseSlot } = siteConfig.customFields;

  return (
    <div style={style}>
      <AdSense.Google
        client={googleAdsenseId}
        slot={googleAdsenseSlot}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};

export default GoogleAdsenseComponent;
