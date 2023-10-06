import Image from "next/image";
import { Fragment, React, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CustomeTabs from "./CustomeTabs";
import IntegratedTabContent from "./IntegratedTabContent";
import CustomeTabs2 from "./CustomeTabs2";
import logoss from "../../public/assets/client-logo.png";


const Client = ({ clientsDetail }) => {
  const logos = clientsDetail?.logos;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container mx-auto mt-17  font-inter">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className="xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4 lowercase">
          {clientsDetail.title}
        </h1>
      </div>
      <p className="text-base font-semibold md:text-lg lg:text-xl text-center text-gray-600 xxl:w-[1606px] xxl:text-[26.63px] px-6 xl:w-12/12 xl:mx-48 mb-9">
        {clientsDetail.desc}
      </p>

      <div className=" flex flex-col  mx-16  font-inter pt-8">
        <CustomeTabs2 />
      </div>

      <div className="xl:py-8 lg:py-8 md:py-16 sm:py-16 px-2 ">
        <div className="flex  flex-wrap  md:gap-5 my-5 xxl:w-[1425.87px] justify-center">
         <Image src={logoss} alt="logos"  width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default Client;
