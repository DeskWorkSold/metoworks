import React from "react";
import { MainProfession } from "./FindProfession/MainProfession";
import { Professional } from "./FindProfession/Professional";

export const FindProfession = () => {
  return (
    <view>
      <Professional />
      <MainProfession />
    </view>
  );
};
