import React from "react";
import { FreelanceOffer } from "./FreelanceOffer/FreelanceOffer";
import { FreelanceNavMain } from "./FreelancerProfileComponents/FreelanceNavMain";

export const FreelanceMainOffer = () => {
  return (
    <view>
      <FreelanceNavMain />
      <FreelanceOffer />
    </view>
  );
};
