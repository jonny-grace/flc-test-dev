import React, { useState } from "react";

const CustomeTabs = () => {
  const [tabs, setTab] = useState("integrated");

  return (
    <>
      <div className="w-full mx-auto font-inter">
        <div className="flex justify-evenly items-center gap-2 flex-wrap">
          <button
            onClick={() => setTab("integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "integrated"
                  ? "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap"
                  : "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap"
              }
            >
              integrated
            </span>
          </button>
          <button
            onClick={() => setTab("markating")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "markating"
                  ? "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap"
                  : "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap"
              }
            >
              | markating
            </span>
          </button>
          <button
            onClick={() => setTab("events")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "events"
                  ? "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap"
                  : "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap"
              }
            >
              | events & exhibitions
            </span>
          </button>

          <button
            onClick={() => setTab("digital")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "digital"
                  ? "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap"
                  : "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap"
              }
            >
              | Digital
            </span>
          </button>

          <button
            onClick={() => setTab("contentProduction")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "contentProduction"
                  ? "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-800 whitespace-nowrap"
                  : "font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap"
              }
            >
              | content production
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeTabs;
