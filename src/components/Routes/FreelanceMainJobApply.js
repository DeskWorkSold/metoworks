import React from "react";
import { FreelanceJobApply } from "./FreelanceJobApplied/FreelanceJobApply";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";

export const FreelanceMainJobApply = () => {
  return (
    <view>
      <FreelanceNavMain />
      <FreelanceJobApply />
    </view>
  );
};
