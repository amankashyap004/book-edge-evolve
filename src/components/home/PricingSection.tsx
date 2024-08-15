import React from "react";

const PricingSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="container px-4 lg:px-40 py-4 flex flex-col justify-center items-center w-full gap-4 lg:gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <div
          className="flex flex-col justify-center items-center space-y-2 text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="text-lg lg:text-2xl font-bold drop-shadow-lg">
            Flexible Plans to Suit Every Need
          </h2>
          <p className="font-semibold w-full lg:w-3/4 ">
            Choose the plan that best fits your needs. Whether you're just
            starting out or require advanced features, our flexible pricing
            options provide the perfect solution for generating high-quality
            books with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-4 lg:p-8 shadow-lg rounded-lg bg-gradient-to-t text-white transition-all duration-500 ${
                index === 1
                  ? "from-[#8a2be2] to-[#4b0082] hover:from-[#4b0082] hover:to-[#8a2be2]"
                  : "from-[#4b0082] to-[#8a2be2] hover:from-[#8a2be2] hover:to-[#4b0082]"
              }`}
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-anchor-placement="center-bottom"
            >
              <h3 className="text-2xl font-bold mb-1 lg:mb-2">{plan.name}</h3>
              <p className="text-xl font-semibold mb-1 lg:mb-2">{plan.price}</p>
              <ul className="list-disc list-inside text-left">
                {plan.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: [
      "Generate up to 2 books per month",
      "Limited to basic language models",
      "Community support only",
      "No customization options",
      "Access to public domain content",
      "API rate limit of 100 requests/day",
    ],
  },
  {
    name: "Pro",
    price: "$29.99/mo",
    description: [
      "Generate up to 100 books per month",
      "Access to advanced language models",
      "Email support",
      "Basic customization options (fonts, cover templates)",
      "Access to premium content",
      "API rate limit of 1,000 requests/day",
    ],
  },
  {
    name: "Enterprise",
    price: "$99.99/mo",
    description: [
      "Generate unlimited books",
      "Access to all language models including custom-trained models",
      "Priority customer support with dedicated account manager",
      "Full customization options (fonts, cover templates, branding)",
      "Access to exclusive content and early access to new features",
      "Unlimited API requests",
    ],
  },
];
