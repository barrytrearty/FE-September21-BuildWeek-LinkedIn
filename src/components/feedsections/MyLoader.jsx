import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={520}
    height={160}
    viewBox="0 0 520 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#0073b18f"
    // foregroundColor="#0072B1"
    {...props}
  >
    <rect x="0" y="9" rx="3" ry="3" width="109" height="16" />
    <rect x="0" y="43" rx="3" ry="3" width="109" height="16" />

    <rect x="400" y="15" rx="0" ry="0" width="124" height="34" />
    <rect x="0" y="73" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="83" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="93" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="103" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="123" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="133" rx="3" ry="3" width="100%" height="5" />
    <rect x="0" y="143" rx="3" ry="3" width="100%" height="5" />
  </ContentLoader>
);

export default MyLoader;
