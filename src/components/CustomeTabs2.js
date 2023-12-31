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
            onClick={() => setTab("FMCG")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "FMCG"
                  ? `${inter.className} text-sm md:text-lg xxl:text-[22px] text-gray-900 font-gothamBold whitespace-nowrap capitalize`
                  : `${inter.className} text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              FMCG
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
                  ? `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Electronics
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
                  ? `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Fashion & Lifestyle
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
                  ? `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
              }
            >
              Food & Beverage
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
                  ? `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-900 whitespace-nowrap capitalize`
                  : `${inter.className}  text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap capitalize`
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
