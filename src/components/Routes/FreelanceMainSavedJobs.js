import React from "react";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";
import { FreelanceSavedJobs } from "./FreelanceSavedJob/FreelanceSavedJobs";

export const FreelanceMainSavedJobs = () => {
  return (
    <view>
      <FreelanceNavMain />
      <FreelanceSavedJobs />
    </view>
  );
};
