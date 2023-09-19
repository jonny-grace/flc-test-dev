import React from "react";
import ServicesTabs from "../../components/Service/ServicesTabs";
import Carousel from "../../components/BottomCarousel/Carousel";
import Navbar from "../../components/Navbar";
import CaptionComponent from "../../components/CaptionBox";

const index = () => {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <section className="md:h-[90vh]  w-full relative md:mb-16">
          <Navbar />
          <img
            src="/assets/service_banner.png"
            alt="banner image"
            className="md:h-[90vh]    w-full object-cover mt-20"
          />
          {/* <Image
            src="/assets/service_rectangle.png"
            alt="banner image"
            width={1000}
            height={1000}
            className="h-[90vh] w-full object-cover mt-20"
          /> */}
          <div className="absolute bottom-1/4  w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto ">
              <div className="px-8 max-w-xl mt-4 mx-auto">
                <h1 className="text-white md:text-2xl text-xl font-medium capitalize">
                  growth partner
                </h1>
                <p className="hidden md:block text-white mt-4">
                  Your success is our goal. Through dynamic strategies and
                  adaptable marketing , were your gro wth catalysts. As an
                  extension o f your team, we navigate the digital landscape,
                  curate events, and orchestrate holistic campaigns, turning
                  every step into measurable achievements.
                </p>
                <p className="text-white mt-4">
                  Your success is our goal. Through dynamic strategies and
                  adaptable marketing , were your gro wth catalysts.
                </p>
              </div>
              <div className="invisible"></div>
            </div>
          </div>
        </section>

        <div className=" mt-7"><ServicesTabs /></div>
        <section className="my-16 max-w-5xl mx-auto">
          <Carousel />
        </section>
        <section>
          <CaptionComponent />
        </section>
      </div>
    </>
  );
};

export default index;
