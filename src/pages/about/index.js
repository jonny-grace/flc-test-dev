import React from "react";
import Navbar from "../../components/Navbar";
import Awards from "../../components/Awards";
import OurValues from "../../components/OurValues";
import Image from "next/image";
import AboutUsTimeline from "../../components/AboutUsTimeline";
import axios from "axios";
const index = ({ about, values, awards }) => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div className=" overflow-x-hidden  p-4 md:mx-36 mt-20 mb-10 font-inter">
        <div>
          <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
          <p className="text-lg xxl:w-[1432px] xl:w-full text-gray-600">{about.descriptionOne}</p>
        </div>
        <div>
          <Image
            src={about.image.data.attributes.url}
            alt="banner image"
            width={1000}
            height={1000}
            className=" w-full  h-48 md:h-96 object-cover mt-10"
          />
        </div>
        <div className="my-8">
          <p className="text-lg  text-gray-600">{about.descriptionTwo}</p>
        </div>
        <AboutUsTimeline about={about} />
      </div>
      <OurValues title={about.value} values={values} />
      <Awards title={about.award} awards={awards} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  var about = {};
  var values = {};
  var awards = {};
  await axios
    .get("https://flc-cms.onrender.com/api/about?populate=*")
    .then((res) => {
      about = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

  //   our values
  await axios
    .get("https://flc-cms.onrender.com/api/values?populate=*")
    .then((res) => {
      values = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  // awards
  await axios
    .get("https://flc-cms.onrender.com/api/awards?populate=*")
    .then((res) => {
      awards = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      about,
      values,
      awards,
    },
    revalidate: 3600,
  };
}
