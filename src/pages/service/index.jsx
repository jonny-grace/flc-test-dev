import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <div className="min-h-screen">
        <section className="h-[80vh] w-full relative">
          <Image
            src="/bannerService.jpg"
            alt="banner image"
            width={1000}
            height={1000}
            className="h-[80vh] w-full object-cover"
          />
          <div className="absolute bottom-1/4  w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto ">
              <div className="px-8 max-w-xl mx-auto">
                <h1 className="text-white text-2xl font-medium capitalize">
                  growth partner
                </h1>
                <p className="text-white mt-4">
                  Your success is our goal. Through dynamic strategies and
                  adaptable marketing , were your gro wth catalysts. As an
                  extension o f your team, we navigate the digital landscape,
                  curate events, and orchestrate holistic campaigns, turning
                  every step into measurable achievements.
                </p>
              </div>
              <div className="invisible"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
