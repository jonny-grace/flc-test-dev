import Image from "next/image";
import { Fragment, React, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import IntegratedTabContent from "./IntegratedTabContent";

const Client = ({ clientsDetail }) => {
  const logos = clientsDetail?.logos;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container mx-auto mt-14 mb-10 font-inter">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4 lowercase">
          {clientsDetail.title}
        </h1>
      </div>
      <p className="text-base font-semibold md:text-lg lg:text-xl text-center text-gray-600 xxl:w-[1606px] xxl:text-[26.63px] px-6 xl:w-12/12 xl:mx-48 mb-9">
        {clientsDetail.desc}
      </p>

      <div className=" flex flex-col  mx-16  font-inter pt-8">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <TabList className="flex justify-center hover:cursor-pointer  flex-wrap ">
            {[
              "FMCG",
              "Electronics",
              "Fashion & Lifestyle",
              "Food & Beverage",
              "Luxury",
            ].map((tab, index) => (
              <Fragment key={tab}>
                {index > 0 && (
                  <div className=" border-l-2 hidden md:block active:font-bold" />
                )}{" "}
                {/* Add horizontal line */}
                <Tab
                  className={`px-2  ${
                    activeTab === index
                      ? " border-none font-bold"
                      : " border-none text-gray-600"
                  }`}
                >
                  {tab}
                </Tab>
              </Fragment>
            ))}
          </TabList>

          {/* TabPanel components */}
          <TabPanel>
            <div className="min-h-screen md:min-h-0">
              {/* <IntegratedTabContent /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-screen md:min-h-0">
              {/* <IntegratedTabContent /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-screen md:min-h-0">
              {/* <IntegratedTabContent /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-screen md:min-h-0">
              {/* <IntegratedTabContent /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-screen md:min-h-0">
              {/* <IntegratedTabContent /> */}
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-2 md:px-24">
        <div className="flex  flex-wrap  md:gap-5 my-5 xxl:w-[1425.87px] justify-center">
          {logos &&
            logos.map((logo, index) => (
              <div key={index} className="w-1/7  p-2">
                <Image
                  src={logo.attributes.url}
                  width={1000}
                  height={1000}
                  // width={logo.attributes.width}
                  // height={logo.attributes.height}
                  alt="Company Logo"
                  className="w-full h-14 object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
