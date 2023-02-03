import React from "react";
import { ForthSec } from "./HomeComponents/ForthSec";
import { MainHome } from "./HomeComponents/MainHome";
import { SecBanner } from "./HomeComponents/SecBanner";
import { ThirdSec } from "./HomeComponents/ThirdSec";

export const Home = () => {
  return (
    <view>
      <MainHome />
      <SecBanner />
      <ThirdSec />
      <ForthSec />
    </view>
  );
};
