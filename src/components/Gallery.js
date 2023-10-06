import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Inter } from "next/font/google";

import IntegratedTabContent from "./IntegratedTabContent";
import { LeftArrow } from "../../assets/Icons/LeftArrow";
import { RightArrow } from "../../assets/Icons/RightArrow";
const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400"],
});
const interBold = Inter({
  subsets: ["cyrillic"],
  weight: ["500"],
});

const GaleryTab = ({ caseStudy }) => {
  const tabsItems = [
    "Integrated",
    "FMCG",
    "Electronics",
    "Fashn & Lifestyle",
    "Food & Beverage",
  ];

  const [tabs, setTab] = useState("Integrated");

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLeft = (tab) => {
    let indexOfCurrentTab = tabsItems.indexOf("tab");
    for (let i = 0; i < tabsItems.length; i++) {
      if (tabsItems[i] === tab) {
        if (i === 0) {
          setTab(tabsItems[i]);
        } else {
          setTab(tabsItems[i - 1]);
        }
      }
    }
  };
  const handleRight = (tab) => {
    for (let i = 0; i < tabsItems.length; i++) {
      if (tabsItems[i] === tab) {
        if (i === tabsItems.length - 1) {
          setTab(tabsItems[i]);
        } else {
          setTab(tabsItems[i + 1]);
        }
      }
    }
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
            onClick={() => setTab("Integrated")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Integrated"
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
            onClick={() => setTab("Fashn & Lifestyle")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Fashn & Lifestyle"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Fashn & Lifestyle
            </span>
          </button>
          <button>|</button>
          <button
            onClick={() => setTab("Food & Beverage")}
            className="flex md:items-center md:justify-center flex-col md:flex-row gap-2"
          >
            <span
              className={
                tabs === "Food & Beverage"
                  ? `${inter.interBold} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-600 whitespace-nowrap`
                  : `${inter.className} font-bold text-sm md:text-lg xxl:text-[22px] text-gray-500 whitespace-nowrap`
              }
            >
              Food & Beverage
            </span>
          </button>
        </div>
      </div>
      <section className="w-full mt-8 min-h-screen">
        <div>{tabs === "Integrated" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "FMCG" ? <IntegratedTabContent /> : null}</div>
        <div>{tabs === "Electronics" ? <IntegratedTabContent /> : null}</div>
        <div>
          {tabs === "Fashn & Lifestyle" ? <IntegratedTabContent /> : null}
        </div>
        <div>
          {tabs === "Food & Beverage" ? <IntegratedTabContent /> : null}
        </div>
      </section>
      <div className="flex justify-end gap-3 mt-5">
        <button
          className="flex justify-center items-center h-12 w-12 border-[1px] rounded-full hover:border-2 hover:border-gray-600"
          onClick={() => handleLeft(tabs)}
        >
          <span className="text-gray-600">
            <LeftArrow />
          </span>
        </button>
        <button
          className="flex justify-center items-center h-12 w-12 border-[1px] rounded-full hover:border-2 hover:border-gray-600"
          onClick={() => handleRight(tabs)}
        >
          <span className="text-gray-600">
            <RightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GaleryTab;
