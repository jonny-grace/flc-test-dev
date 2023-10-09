import React, { useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400"],
});
// const interBold = Inter({
//   subsets: ["cyrillic"],
//   weight: ["500"],
// });

const CustomeTabs2 = () => {
  const [tabs, setTab] = useState("integrated");

  return (
    <>
      <div className="w-full mx-auto font-inter">
        <div className="flex justify-around items-center gap-2 flex-wrap max-w-xl lg:flex-nowrap mx-auto lg:whitespace-nowrap">
          <button
            onClick={() => setTab("integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "integrated"
                  ? `font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
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
                  ? `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Marketing
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
                  ? `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
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
                  ? `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
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
                  ? `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              content production
            </span>
          </button>
          <span>|</span>

          <button
            onClick={() => setTab("Luxury")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Luxury"
                  ? `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className} font-semibold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Luxury
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeTabs2;
