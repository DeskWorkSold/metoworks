import React from "react";
import { MainNav } from "./CompanyProfileComponents/MainNav";
import { MainProfile } from "./CompanyProfileComponents/MainProfile";

export const CompanyProfile = () => {
  return (
    <view style={{ background: "#F7F7F7" }}>
      <MainNav />
      <MainProfile />
    </view>
  );
};
