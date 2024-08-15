import React from "react";
import { FaRobot, FaBook, FaDownload, FaLanguage } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Writing",
    description: "Generate high-quality content with advanced AI technology.",
  },
  {
    icon: <FaBook />,
    title: "Custom Genres",
    description: "Create stories in any genre or blend multiple styles.",
  },
  {
    icon: <FaDownload />,
    title: "Instant Download",
    description: "Get your completed book in various formats instantly.",
  },
  {
    icon: <FaLanguage />,
    title: "Multilingual",
    description: "Generate content in multiple languages effortlessly.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="container px-4 lg:px-40 py-4 lg:py-8 flex justify-center items-center w-full"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-2 shadow p-4"
            >
              <div className="flex justify-center items-center text-2xl text-white transition-all duration-300 hover:opacity-90 bg-gradient-to-r from-[#8a2be2] to-[#4b0082] group-hover:from-[#4b0082] group-hover:to-[#8a2be2] rounded-full w-10 lg:w-14 h-10 lg:h-14 cursor-pointer">
                {feature.icon}
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <h2 className="font-semibold text-lg">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
