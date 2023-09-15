import React from "react";

const Marketing = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid gap-y-8">
          <h5 className="text-gray-600 text-xl">01</h5>
          <h5 className="text-black text-5xl">marketing</h5>
          <div className="grid gap-y-6 max-w-2xl bg-orange-800">
            <p>
              We're more than a marketing agency we're your strategic partner
              for v results.
            </p>
            <p>
              Rooted in the shopper's journey, we craft narratives that tell
              your brand's story with a passion. Our approach is result driven,
              pushing brands towards increased market share and ROI. Consider us
              a one stop shop for all your marketing needs. We bring your
              campaign to life, turning your vision into reality.
            </p>
          </div>
        </div>
        <div className="invisible"></div>
      </div>
    </div>
  );
};

export default Marketing;
