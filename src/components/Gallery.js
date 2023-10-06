import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Inter } from "next/font/google";

import IntegratedTabContent from "./IntegratedTabContent";
const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400"],
});
// const interBold = Inter({
//   subsets: ["cyrillic"],
//   weight: ["500"],
// });

const GaleryTab = ({ caseStudy }) => {
  const [tabs, setTab] = useState("integrated");

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=" flex flex-col  mx-16  font-inter">
      {/* <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList className="flex justify-center hover:cursor-pointer flex-wrap ">
          {[
            "Integrated",
            "FMCG",
            "Electronics",
            "Fashion & Lifestyle",
            "Food & Beverage",
          ].map((tab, index) => (
            <React.Fragment key={tab}>
              {index > 0 && (
                <div className="   hidden md:block active:font-bold" />
              )}{" "}
              <Tab
                dec
                className={`px-2 ${
                  activeTab === index
                    ? " border-none text-gray-900 font-bold decoration-0"
                    : " border-none text-gray-400 decoration-0"
                }`}
              >
                {tab}
              </Tab>
            </React.Fragment>
          ))}
        </TabList>

        <TabPanel>
          <div className="min-h-screen md:min-h-0">
            <IntegratedTabContent />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen md:min-h-0">
            <IntegratedTabContent />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen md:min-h-0">
            <IntegratedTabContent />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen md:min-h-0">
            <IntegratedTabContent />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-screen md:min-h-0">
            <IntegratedTabContent />
          </div>
        </TabPanel>
      </Tabs> */}

      <div className="w-full mx-auto ">
        
        <div className="flex justify-evenly items-center gap-2 flex-wrap max-w-2xl mx-auto">
          <button
            onClick={() => setTab("integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "integrated"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Integrated
            </span>
          </button>
          <button>|</button>
          <button
            onClick={() => setTab("FMCG")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "FMCG"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              FMCG
            </span>
          </button>
          <button>|</button>

          <button
            onClick={() => setTab("Electronics")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Electronics"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Electronics
            </span>
          </button>
          <button>|</button>

          <button
            onClick={() => setTab("Fash")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Fash"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Fashn & Lifestyle
            </span>
          </button>
          <button>|</button>
          <button
            onClick={() => setTab("food")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "food"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Food & Beverage
            </span>
          </button>
        </div>
      </div>

      <section className="w-full mt-8">
        <div>{tabs === "integrated" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "FMCG" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "Electronics" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "Fash" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "food" ? <IntegratedTabContent /> : null}</div>
      </section>
      
    </div>
  );
};

export default GaleryTab;
