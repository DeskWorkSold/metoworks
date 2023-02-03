import React from "react";
import { MainNav } from "./CompanyProfileComponents/MainNav";
import { PublishedJob } from "./PublishedJobs/PublishedJob";

export const MainPublishJobs = () => {
  return (
    <view>
      <MainNav />
      <PublishedJob />
    </view>
  );
};
