"use client";
import { Fragment, React, useState } from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";
import CaseStudyCards from "../../components/CaseStudyCards";

import "react-tabs/style/react-tabs.css";
import CustomeTabs from "../../components/CustomeTabs";
import CaseStudyPageComponent from "../../components/CaseStudyPageComponent";

const index = ({ caseStudyStatic, caseStudies }) => {

  
  return (
    <CaseStudyPageComponent caseStudies={caseStudies} caseStudyStatic={caseStudyStatic} />
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
