import React from "react";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";
import { FreelanceProfileView } from "./FreelancerProfileComponents/FreelanceProfileView";

export const FreelancerProfile = () => {
  return (
    <view>
      <FreelanceNavMain />
      <FreelanceProfileView />
    </view>
  );
};
