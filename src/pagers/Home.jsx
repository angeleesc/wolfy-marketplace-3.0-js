import React from "react";
import HeroSwiper from "../components/swipers/HeroSwiper";
import Hero from "../template/pages/home/Hero/Hero";
import FeadturedHigthestAuctionBid from "../template/pages/home/FeadturedSections/FeadturedHigthestAuctionBid";

export default function Home() {
  return (
    <div>
      {/* <HeroSwiper /> */}
      <Hero/>
      <FeadturedHigthestAuctionBid/>
    </div>
  );
}
