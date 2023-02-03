import React from "react";
import { FreelanceFindWork } from "./FindWorkComponent/FreelanceFindWork";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";
import { MainOpportunities } from "./OpportunitiesComponents/MainOpportunities";

export const MainFreelanceFindWork = () => {
  return (
    <view>
      <FreelanceNavMain />
      <MainOpportunities />
      <FreelanceFindWork />
    </view>
  );
};
