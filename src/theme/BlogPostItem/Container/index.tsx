import React, { type ReactNode } from "react";
import type { Props } from "@theme/BlogPostItem/Container";
import GiscusComponent from "@site/src/components/GiscusComponent"; // GiscusComponent 컴포넌트 가져오기
import GoogleAdsenseComponent from "@site/src/components/GoogleAdsenseComponent"; // GoogleAdsenseComponent 컴포넌트 가져오기

export default function BlogPostItemContainer({
  children,
  className,
}: Props): ReactNode {
  return (
    <article className={className}>
      {children}
      {/* Google Adsense 추가 */}
      <GoogleAdsenseComponent style={{ marginTop: "4rem" }} />
      {/* GiscusComponent 추가 */}
      <GiscusComponent style={{ marginTop: "4rem" }} />
    </article>
  );
}
