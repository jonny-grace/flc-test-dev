import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 md:mx-48 mt-40 mb-10">
        <h1 className="text-4xl font-bold mb-4">The Team</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nunc at condimentum accumsan, est ex bibendum tortor,
          nec feugiat tellus nisi nec elit. Mauris sed libero eget justo
          tristique semper.
        </p>
        <div className="flex flex-col sm:flex-row gap-20">
          {/* Add new images in a single row here */}
          <div className="w-full md:w-64 sm:w-1/2">
            <Image
              src="/assets/team1.png"
              alt="Team Member 1"
              width={500}
              height={300}
            />
          </div>
          <div className="w-full md:w-64 sm:w-1/2">
            <Image
              src="/assets/team2.png"
              alt="Team Member 2"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-8">
        <div className="container mx-auto">
          <h1 className="text-xl px-10 md:px-32 md:text-2xl font-bold text-start mb-4">
            We are always on the lookout for new talent! Join our team
          </h1>
          <div className="flex px-10 md:px-32 justify-start">
            <button className="text-black py-2 px-4 rounded hover:font-bold">
              Join our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;