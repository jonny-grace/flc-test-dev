import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/BottomCarousel/Carousel";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

const Index = ({ caseStudyDetails }) => {
  
  return (
    <div className="mb-20 w-full font-inter">
      <div className="overflow-hidden ">
        <Navbar />
        <div className="w-screen  relative bg-gray-50">
          <div className="absolute inset-0 bg-gray-200">
            <div className="w-screen relative">
              <div className="md:absolute inset-0 md:mx-32 mt-48  h-full">
                <h1 className=" md:text-[48px] md:mb-10 font-bold">
                  {caseStudyDetails?.name}
                </h1>
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    src={caseStudyDetails?.thumbnail?.data?.attributes?.url}
                    alt="Hisense"
                    className="w-full "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-48 sm:px-6 lg:flex lg:justify-center md:mb-[400px] lg:items-center lg:px-3"></div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-20">
        <div className="flex flex-col sm:flex-row gap-8 mt-5">
          <div className="w-full sm:w-3/4 flex flex-col gap-5">
            <div>
              <h2>Objectives:</h2>
              <p>
                {caseStudyDetails?.objective}
              </p>
            </div>

            <div>
              <h2>Idea:</h2>
              <p>
                {caseStudyDetails?.idea}
              </p>
            </div>

            <div>
              <h2>Outcome:</h2>
              <p>
                {caseStudyDetails?.outcome}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/4 mt-10">
            <h2 className="text-2xl">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </h2>
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const { caseStudyId } = context.query;

  var caseStudyDetails = {};

  await axios
    .get(`https://flc-cms.onrender.com/api/products/${caseStudyId}?populate=*`)
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
