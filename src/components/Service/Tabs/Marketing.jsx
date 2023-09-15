import React from "react";

const Marketing = () => {
  return (
    <div className="mt-16 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
        <div className="grid h-min max-w-lg">
          <h5 className="text-gray-600 text-xl">01</h5>
          <h5 className="text-black text-5xl py-8">marketing</h5>
          <div className="grid gap-y-6  h-min">
            <p className="text-gray-600 h-min">
              We're more than a marketing agency we're your strategic partner
              for the results.
            </p>
            <p className="text-gray-600 h-min">
              Rooted in the shopper's journey, we craft narratives that tell
              your brand's story with a passion. Our approach is result driven,
              pushing brands towards increased market share and ROI. Consider us
              a one stop shop for all your marketing needs. We bring your
              campaign to life, turning your vision into reality.
            </p>
          </div>
        </div>

        <div className="grid gap-y-8 h-min max-w-lg mx-auto">
          <div className="mt-8 invisible"></div>
          <div className="grid gap-y-8 max-w-lg mx-auto">
            <h3 className="text-xl text-gray-800 font-medium">
              brand ambassadors
            </h3>
            <p className="text-gray-600">
              We build a connect with your target audience by strategically
              employing experiential activities across multiple touch points,
              from in store and outdoor settings to vibrant malls, beaches,
              schools, parks, and more
            </p>
            <hr />
          </div>
          <div className="grid gap-y-8">
            <h3 className="text-xl text-gray-800 font-medium mt-8">
              shopper & trade marketing
            </h3>
            <p className="text-gray-600">
              We design our strategy based on shopper insights to create
              successful brand campaigns. From creating impactful P O S M to
              category and shelf management, our focus is to bring your brand to
              the forefront in the eyes of the consumer.
            </p>
            <hr />
          </div>
          <div className="grid gap-y-8">
            <h3 className="text-xl text-gray-800 font-medium mt-8">
              brand activation
            </h3>
            <p className="text-gray-600">
              Through meticulous selection and in house training, we select the
              ideal representatives for each campaign. Our representatives are
              committed to optimal performance and detailed reporting to ensure
              maximum success.
            </p>
            <hr />
          </div>
          <div className="grid gap-y-8">
            <h3 className="text-xl text-gray-800 font-medium mt-8">
              promotions & sampling
            </h3>
            <p className="text-gray-600">
              Our goal is to amplify conversions through dynamic e sampling,
              product trials, and sales oriented endeavours like raffle
              promotions, scratch and win, and instant gratification.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
