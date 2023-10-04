"use client";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import axios from "axios";
import CaseStudyCards from "../../components/CaseStudyCards";

const index = ({ caseStudyStatic, caseStudies }) => {

  return (
    <div className=" w-full overflow-x-hidden mb-16 font-inter">
      <Navbar />
      <div
        className=" w-screen relative "
        style={{ backgroundColor: "#E6E6E6" }}
      >
        {/* <div className="absolute inset-0 bg-gray-200 opacity-50"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex sm:items-center sm:justify-center lg:justify-center  lg:items-center lg:px-3">
          <div className="max-w-2xl  text-center  text-black">
            <h1 className=" font-extrabold text-[30px] sm:text-[75px]">
              {caseStudyStatic.title.toLowerCase()}
            </h1>
            <p className="mt-10 text-center  ">{caseStudyStatic.description}</p>
          </div>
        </div>
      </div>

      <div className=" mx-20"><CaseStudyCards caseStudies={caseStudies}  /></div>
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
