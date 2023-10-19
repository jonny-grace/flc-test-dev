import React from "react";
import Navbar from "../../components/Navbar";
import Awards from "../../components/Awards";
import OurValues from "../../components/OurValues";
import Image from "next/image";
import axios from "axios";
import aboutTree from "../../../public/assets/image.jpg";


const index = ({ about, values, awards }) => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <div className=" overflow-x-hidden   md:mx-36 mt-32 mb-10 font-inter">
        <div className=" mx-4">
          <h1 className="text-4xl font-gothamBold mb-10">{about.title}</h1>
          <p className=" xl:text-[14px] xxl:text-[25px] xxl:w-[1432px] xl:w-full text-gray-600 inter opacity-80">{about.descriptionOne}</p>
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
        <div className="my-8 mb-10 mx-3">
          <p className="xl:text-[14px] xxl:text-[25px] xxl:w-[1432px] xl:w-full text-gray-600 inter opacity-78">{about.descriptionTwo}</p>
          <p className="xl:text-[14px] xxl:text-[25px] xxl:w-[1432px] xl:w-full text-gray-600 inter opacity-78"> <br />
            We have the experience of working with companies such as Huawei, Samsung, Hisense, Acer, P&G, Nestle, Aujan Coca Cola, Mondelez, IFFCO, Etude House, Coty Middle East, Estee Lauder – the list goes on.
            From conceptualization to strategy, from consumer engagement to online and on-ground brilliance, we&apos;ve not just kept up with the ever-changing marketing trends; we&apos;ve set the pace.</p>

        </div>
        {/* <AboutUsTimeline about={about} /> */}
        <div className=" md:py-16 sm:py-16 px-2 ">
          <div className="flex  md:gap-5 my-5 xxl:w-[1425.87px] xl:w-[1240] mx-7 lg:mx-28 justify-center ">
            <Image src={aboutTree} alt="logos" width={1000} height={1000} />
          </div>
        </div>
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
