import React from "react";
import { MembershipPlan } from "./AboutWorkComponents/Membership/MembershipPlan";
import { MainNav } from "./CompanyProfileComponents/MainNav";
import { RenewPlan } from "./RenewalPlanComponents/RenewPlan";

export const RenewPlanMain = () => {
  return (
    <view>
      <MainNav />
      <MembershipPlan />
      <RenewPlan />
    </view>
  );
};
