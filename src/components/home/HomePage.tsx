import React from "react";
import HeroSection from "./HeroSection";
import FeaturePost from "./FeaturePost";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 lg:gap-16">
      <HeroSection />
      <FeaturePost />
    </div>
  );
};

export default HomePage;
