import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const SkeletonLoader = (props: IContentLoaderProps) => {
  return (
    <ContentLoader
      speed={1.5}
      width={460}
      style={{ width: "100%", height: "100%" }}
      height={300}
      viewBox="0 0 460 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="280" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  );
};
