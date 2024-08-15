import React from "react";
import HeroSection from "./HeroSection";
import FeaturePost from "./FeaturePost";
import Features from "./Features";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 lg:gap-16">
      <HeroSection />
      <FeaturePost />
      <Features/>
    </div>
  );
};

export default HomePage;
