import React from "react";
import Navbar from "../../components/Navbar";
import JoinUs from "../../components/JoinUs";
import Image from "next/image";

const Index = () => {
  return (
    <div className=" mb-20">
      <Navbar />
      <div className="p-4 md:mx-12 mt-20 mb-20 font-inter">
        <h1 className="text-xl font-bold mb-4 mx-10">Featured Articles</h1>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full  md:w-auto px-10">
            <img src="/assets/blog-banner.png" className="w-full" alt="Blog Banner" />
            <div>
              <h2 className="text-gray-500 mt-4">Shopper Marketing</h2>
            </div>

            <div>
              <h1 className="font-bold text-2xl">Gen-Z Shopping Behavior</h1>
            </div>

            <div>
              <h2 className="text-gray-500 mt-4">Nidhi Sehgal</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto">
            <div className="mb-4 flex  sm:flex-row gap-5">
              <img src="/assets/blog1.png" className="w-[130px] h-[130px]" alt="Blog 1" />
              <div>
                <h3>Events</h3>
                <h1 className="text-lg font-bold hover:cursor-pointer">Technology in Events</h1>
                <h3>Nas</h3>
              </div>
            </div>
            <div className="mb-4 flex  sm:flex-row gap-5">
              <img src="/assets/blog2.png" className="w-[130px] h-[130px]" alt="Blog 2" />
              <div>
                <h3>Events</h3>
                <h1 className="text-lg font-bold hover:cursor-pointer">Technology in Events</h1>
                <h3>Nas</h3>
              </div>
            </div>
            <div className="mb-4 flex  sm:flex-row gap-5">
              <img src="/assets/blog 3.png" className="w-[130px] h-[130px]" alt="Blog 3" />
              <div>
                <h3>Events</h3>
                <h1 className="text-lg font-bold hover:cursor-pointer">Technology in Events</h1>
                <h3>Nas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full flex flex-col  md:mx-16 mx-4 sm:flex-row justify-center gap-5 pl-4">
          <div className="mb-4 sm:w-1/3">
            <img src="/assets/blog1.png" className="w-full h-72" alt="Blog 1" />
            <div>
              <h2 className="text-gray-500 mt-4">Integrated Marketing</h2>
            </div>

            <div>
              <h1 className="font-bold text-lg hover:cursor-pointer">Why Marketers are Focusing on Experiential Marketing?</h1>
            </div>
          </div>
          <div className="mb-4 sm:w-1/3">
            <img src="/assets/blog2.png" className="w-full h-72" alt="Blog 2" />
            <div>
              <h2 className="text-gray-500 mt-4">Digital Marketing</h2>
            </div>

            <div>
              <h1 className="font-bold text-lg hover:cursor-pointer">Top 3 Most Powerful AI in Digital Marketing in 2023</h1>
            </div>
          </div>
          <div className="mb-4 sm:w-1/3">
            <img src="/assets/blog 3.png" className="w-full h-72" alt="Blog 3" />
            <div>
              <h2 className="text-gray-500 mt-4">Influencer Marketing</h2>
            </div>

            <div>
              <h1 className="font-bold text-lg hover:cursor-pointer">Micro is the New Macro</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;