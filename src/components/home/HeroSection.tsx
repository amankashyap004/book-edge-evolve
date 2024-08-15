import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="container px-4 lg:px-40 pt-8 pb-4 lg:pt-28 flex flex-col justify-center items-center w-full gap-4 lg:gap-6"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <section className="flex justify-center items-center w-full">
          <AnimatedText />
        </section>
        <section
          className="flex justify-center items-center w-full lg:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-anchor-placement="center-bottom"
        >
          <p className="text-sm lg:text-lg text-center opacity-70">
            Unleash the power of AI to create captivating books in minutes.
            Download, Distribute wherever you want. Generate unlimited free
            books
          </p>
        </section>
        <section
          className="flex justify-center items-center w-full lg:w-1/2 gap-4"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-anchor-placement="center-bottom"
        >
          <Button text="Get Started" className="rounded-full px-6" />
          <Button text="Get API Access" className="rounded-full px-6" />
        </section>
        <section
          className="flex justify-center items-center w-full"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-anchor-placement="center-bottom"
        >
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

const AnimatedText = () => {
  const words = [
    "Explore the",
    "Possibilities of",
    "AI Book Writing",
    "with BookAI",
  ];

  return (
    <h1 className="text-2xl lg:text-6xl font-semibold text-center">
      <span className="leading-tight">
        {words.map((word, index) => (
          <span
            key={index}
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-delay={(index + 1) * 300}
            className={
              word === "AI Book Writing"
                ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#4b0082]"
                : ""
            }
          >
            {word}
            {index < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </h1>
  );
};
