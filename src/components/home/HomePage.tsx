import React from "react";
import HeroSection from "./HeroSection";
import FeaturePost from "./FeaturePost";
import Features from "./Features";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 lg:gap-8">
      <HeroSection />
      <FeaturePost />
      <Features />
      <PricingSection />
      <Testimonials />
      <ContactUs/>
    </div>
  );
};

export default HomePage;
