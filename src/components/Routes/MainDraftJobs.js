import React from "react";
import { MainNav } from "./CompanyProfileComponents/MainNav";
import { DraftJob } from "./DraftJobs/DraftJob";

export const MainDraftJobs = () => {
  return (
    <view>
      <MainNav />
      <DraftJob />
    </view>
  );
};
