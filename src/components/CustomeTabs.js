import React, { useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400"],
});
const interBold = Inter({
  subsets: ["cyrillic"],
  weight: ["500"],
});

const CustomeTabs = () => {
  const [tabs, setTab] = useState("integrated");

  return (
    <>
      <div className="w-full mx-auto font-inter">
        <div className="flex justify-around items-center gap-2 flex-wrap max-w-2xl lg:flex-nowrap mx-auto lg:whitespace-nowrap">
          <button
            onClick={() => setTab("integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "integrated"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
              }
            >
              Integrated
            </span>
          </button>
          <span>|</span>
          <button
            onClick={() => setTab("markating")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "markating"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
              }
            >
              markating
            </span>
          </button>
          <span>|</span>
          <button
            onClick={() => setTab("events")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "events"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
              }
            >
              events & exhibitions
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("digital")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "digital"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
              }
            >
              Digital
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("contentProduction")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "contentProduction"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
              }
            >
              content production
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeTabs;
