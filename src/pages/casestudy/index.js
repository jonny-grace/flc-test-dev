"use client";
import Link from "next/link";
import { Fragment, React, useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import axios from "axios";
import CaseStudyCards from "../../components/CaseStudyCards";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CustomeTabs from "../../components/CustomeTabs";

const index = ({ caseStudyStatic, caseStudies }) => {
  return (
    <div className=" w-full overflow-x-hidden mb-16 font-inter">
      <Navbar />
      <div
        className=" w-screen relative "
        style={{ backgroundColor: "#E6E6E6" }}
      >
        {/* <div className="absolute inset-0 bg-gray-200 opacity-50"></div> */}

        <div className=" max-w-screen mx-auto w-full  px-5 py-32  lg:px-3">
          <div className="grid max-w-3xl  text-center mx-auto w-full">
            <h1 className=" font-extrabold text-[30px] sm:text-[75px] lg:text-[78px] lowercase text-black">
              {caseStudyStatic.title}
            </h1>

            <p className="mt-10 text-center text-black">
              {caseStudyStatic.description}
            </p>
          </div>
          <div className="mt-8 w-full">
            <CustomeTabs />
          </div>
          <div className=" flex flex-col  mx-16  font-inter"></div>
        </div>
      </div>

      <div className=" mx-20">
        <CaseStudyCards caseStudies={caseStudies} />
      </div>
      <div className="mt-8">
        <h1 className="text-center hover:cursor-pointer font-bold text-xl">load more</h1>
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  var caseStudyStatic = {};

  var caseStudies = {};

  // case study static data
  await axios
    .get("https://flc-cms.onrender.com/api/case-study?populate=*")
    .then((res) => {
      caseStudyStatic = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  // case studies detail from api
  await axios
    .get("https://flc-cms.onrender.com/api/products?populate=*")
    .then((res) => {
      caseStudies = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      caseStudyStatic,
      caseStudies,
    },
    revalidate: 3600,
  };
}
