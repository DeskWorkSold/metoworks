import React from "react";
import { GenerateCv } from "./FreelanceGenerateCv/GenerateCv";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";

export const FreelanceGenerateCv = () => {
  return (
    <view>
      <FreelanceNavMain />
      <GenerateCv />
    </view>
  );
};
