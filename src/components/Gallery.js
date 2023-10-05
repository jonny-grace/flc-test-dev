import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import IntegratedTabContent from "./IntegratedTabContent";

const GaleryTab = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=" flex flex-col  mx-16  font-inter">
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
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
              {/* Add horizontal line */}
              <Tab
                dec
                className={`px-2 ${
                  activeTab === index
                    ? " border-none text-gray-900 font-bold decoration-none"
                    : " border-none text-gray-400 decoration-none"
                }`}
              >
                {tab}
              </Tab>
            </React.Fragment>
          ))}
        </TabList>

        {/* TabPanel components */}
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
      </Tabs>
    </div>
  );
};

export default GaleryTab;
