"use client";

import React, { useState, useRef } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Testimonials: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2 w-full lg:w-1/2">
              <h1 className="font-bold text-lg lg:text-2xl">
                What Our Users Say
              </h1>
              <p className="text-sm lg:text-base text-center">
                Hear how BookAI has transformed the writing process for our
                users, making content creation faster and easier.
              </p>
            </div>
          </section>
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    quote:
      "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!",
    name: "Sarah J.",
    position: "Author",
  },
  {
    quote:
      "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips.",
    name: "Mark T.",
    position: "Aspiring Writer",
  },
  {
    quote:
      "I never thought I'd be able to produce content this quickly. This is a game-changer for content creators.",
    name: "Emily R.",
    position: "Content Creator",
  },
  {
    quote:
      "Using BookAI, I was able to expand my publishing business by offering more titles in less time.",
    name: "John M.",
    position: "Publishing Entrepreneur",
  },
];

interface PaginationIndicatorProps {
  totalItems: number;
  activeIndex: number;
  swiper: any;
}

const PaginationIndicator: React.FC<PaginationIndicatorProps> = ({
  totalItems,
  activeIndex,
  swiper,
}) => {
  const indicators = Array.from({ length: totalItems }, (_, index) => (
    <div
      key={index}
      className={`px-4 lg:px-6 py-[2px] lg:py-[3px] rounded-full cursor-pointer ${
        index === activeIndex
          ? "bg-gradient-to-t from-[#8a2be2] to-[#4b0082]"
          : "bg-[#D9D9D9]"
      } transition-all duration-500 flex justify-center items-center`}
      onClick={() => {
        swiper?.slideTo(index);
      }}
    ></div>
  ));

  return (
    <div className="flex justify-center items-center gap-4">{indicators}</div>
  );
};

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any | null>(null);

  return (
    <section className="space-y-4 w-full lg:w-3/4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        onInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onReachEnd={(swiper) => {
          setActiveIndex(0);
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-6 bg-gradient-to-tl from-[#8a2be2] to-[#4b0082] text-white p-4 lg:py-6 rounded-lg">
              <div className="flex flex-col justify-center items-center gap-1 h-full">
                <p className="text-center text-sm lg:text-base">
                  <span className="text-lg lg:text-xl inline-block">
                    <RiDoubleQuotesL />
                  </span>
                  {testimonial.quote}
                  <span className="text-lg lg:text-xl inline-block">
                    <RiDoubleQuotesR />
                  </span>
                </p>
                <div>
                  <p className="font-semibold text-lg">
                    {testimonial.name}, {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationIndicator
        totalItems={testimonials.length}
        activeIndex={activeIndex}
        swiper={swiperRef.current}
      />
    </section>
  );
};
