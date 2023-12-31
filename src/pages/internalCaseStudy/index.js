import React, { useState } from "react";
import Navbar from "../../components/Navbar";
// import Carousel from "../../components/BottomCarousel/Carousel";
import { useRouter } from "next/router";
import axios from "axios";
import Carousel from "../../components/BottomCarousel/Carousel";
import VideoComponent from "../../components/VideoComponent";

const Index = ({ caseStudyDetails }) => {
  console.log(caseStudyDetails)
  const youtubeUrl= caseStudyDetails.thumbnailUrl;
  
  return (
    <div className="mb-20  md:mb-0 w-full ">
      <div className="overflow-hidden ">
        <Navbar />
        <div className="w-screen  xxl:max-w-7px relative bg-gray-50">
          <div className="absolute inset-0 bg-gray-200">
            <div className="w-screen  relative">
              <div className="md:absolute absolute  mx-auto inset-0 md:mx-32 mt-36  h-full">
                <h1 className=" md:text-[33px] md:mb-5 ml-3  md:ml-0 font-gothamBold">
                  {caseStudyDetails?.name}
                </h1>
                  <div className=" flex justify-center"><VideoComponent youtubeUrl={youtubeUrl} /></div>

              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-48 md:py-40 xl:py-5  sm:px-6 lg:flex lg:justify-center md:mb-[400px] xl:mb-[680px] xxl:mb-[800px] lg:items-center lg:px-3"></div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-20 md:mb-0">
        <div className="flex flex-col sm:flex-row gap-8  md:mt-[-50px]">
          <div className="w-full  md:pr-20 sm:w-3/4 flex flex-col gap-2">
            <div>
              <h2 className="text-gray-950 font-gothamMedium">Objectives:</h2>
              <p className="text-gray-500 mt-5">
                {caseStudyDetails?.objective}
              </p>
            </div>

            <div>
              <h2 className="text-gray-950 font-gothamMedium">Idea:</h2>
              <p className="text-gray-600 mt-5">{caseStudyDetails?.idea}</p>
            </div>

            <div>
              <h2 className="text-gray-950 font-gothamMedium">Outcome:</h2>
              <p className="text-gray-600 mt-5">{caseStudyDetails?.outcome}</p>
            </div>
          </div>
          <div className="w-full sm:w-1/4 mt-10">
            <h2 className="text-2xl font-gothamBook">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-28  w-full mb-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const { caseStudyId } = context.query;
  const apiUrl = process.env.APIURL;
  var caseStudyDetails = {};

  await axios
  .get(`${apiUrl}/products/${caseStudyId}?populate=*`)

    
    .then((res) => {
      caseStudyDetails = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      caseStudyDetails,
    },
  };
}
