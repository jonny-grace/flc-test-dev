import React from "react";
import Navbar from "../../components/Navbar";
import Awards from "../../components/Awards";
import OurValues from "../../components/OurValues";
import Image from "next/image";
import AboutUsTimeline from "../../components/AboutUsTimeline";
import axios from "axios";
const index = ({ about, values, awards }) => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <div className=" overflow-x-hidden  p-4 md:mx-36 mt-32 mb-10 font-inter">
        <div>
          <h1 className="text-4xl font-bold mb-10">{about.title}</h1>
          <p className=" xl:text-[14px] xxl:text-[22px] xxl:w-[1432px] xl:w-full text-gray-600">{about.descriptionOne}</p>
           </div>
        <div>
          <Image
            src={about?.image?.data.attributes.url}
            alt="banner image"
            width={1000}
            height={1000}
            className=" w-full  h-48 md:h-96 object-cover mt-10"
          />
        </div>
        <div className="my-8 mb-10">
          <p className="xl:text-[14px] xxl:text-[22px] xxl:w-[1432px] xl:w-full text-gray-600">{about.descriptionTwo}</p>
          <p className="xl:text-[14px] xxl:text-[22px] xxl:w-[1432px] xl:w-full text-gray-600"> <br />
We have the experience of working with companies such as Huawei, Samsung, Hisense, Acer, P&G, Nestle, Aujan Coca Cola, Mondelez, IFFCO, Etude House, Coty Middle East, Estee Lauder – the list goes on. 
From conceptualization to strategy, from consumer engagement to online and on-ground brilliance, we&apos;ve not just kept up with the ever-changing marketing trends; we`&apos;` ve set the pace.</p>
       
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
