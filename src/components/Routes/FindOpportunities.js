import React from "react";
import { MainOpportunities } from "./OpportunitiesComponents/MainOpportunities";
import { SecOpportunities } from "./OpportunitiesComponents/SecOpportunities";

export const FindOpportunities = () => {
  return (
    <view>
      <MainOpportunities />
      <SecOpportunities />
    </view>
  );
};
