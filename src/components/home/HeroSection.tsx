import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-8 lg:py-28 flex flex-col justify-center items-center w-full gap-4 lg:gap-6">
        <section className="flex justify-center items-center w-full">
          <h1 className="text-2xl lg:text-6xl font-semibold text-center ">
            <span className="leading-tight">
              Explore the Possibilities of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#6f42ca]">
                AI Book Writing
              </span>{" "}
              with BookAI
            </span>
          </h1>
        </section>
        <section className="flex justify-center items-center w-full lg:w-1/2">
          <p className="text-sm lg:text-lg text-center opacity-70">
            Unleash the power of AI to create captivating books in minutes.
            Download, Distribute wherever you want. Generate unlimited free
            books
          </p>
        </section>
        <section className="flex justify-center items-center w-full lg:w-1/2 gap-4">
          <Button text="Get Started" className="rounded-full px-6" />
          <Button text="Get API Access" className="rounded-full px-6" />
        </section>
        <section className="flex justify-center items-center w-full">
          <p className="text-xs lg:text-sm text-center font-semibold text-yellow-500">
            Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM
            will be used for text and image generation
          </p>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
