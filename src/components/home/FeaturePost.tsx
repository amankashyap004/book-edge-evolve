import React from "react";

const FeaturePost: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="container px-4 lg:px-40 py-4 lg:py-8 flex justify-center items-center w-full"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="group relative bg-gray-400/50 backdrop-blur-lg p-4 lg:p-12 rounded-lg overflow-hidden">
          <div className="transition-all duration-700 group-hover:scale-105">
            <img
              src={"./assets/images/feature-post-book.png"}
              alt="logo"
              className="object-contain w-full rounded-lg "
            />
          </div>
          <div className="absolute top-2 lg:top-4 left-2 lg:left-4 w-12 lg:w-28">
            <div className="bg-gray-400/50 backdrop-blur-lg p-1 lg:p-3 rounded-md">
              <img
                src={"./assets/images/feature-post-paradox.png"}
                alt="logo"
                className="object-contain w-full rounded-md transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4">
            <div className="bg-gray-400/50 backdrop-blur-lg p-2 lg:p-3 rounded-md">
              <p className="text-sm text-nowrap font-semibold lg:font-bold px-2">
                Chapter Complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
