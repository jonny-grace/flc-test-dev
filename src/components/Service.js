import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic"], weight: ["400"] });

const Service = ({ serviceSection, services }) => {
  function getColorByIndex(index) {
    switch (index) {
      case 0:
        return "#E20423";
      case 1:
        return "#AE127E";
      case 2:
        return "#006BB2";
      case 3:
        return "#55bf0f";
      default:
        return "";
    }
  }
  return (
    <div className="md:max-w-[80rem] px-4 m-5  lg:px-16 lg:py-8 mx-auto mb-5">
      <div className="font-bold justify-center items-center text-center ">
        {/* w-56  text-center lg:w-96   text-white */}
        <div className=" text-center w-full flex justify-center">
          <h1 className="text-5xl xxl:text-[78px] xl:text-[70px] lg:text-[60px] md:text-[60px] xxl:w-[400px]  xl:w-[380px] lg:text-5xl md:pl-10 text-center w-96 md:mx-56 lowercase">
            {serviceSection?.title}
          </h1>
        </div>
      </div>
      <div className=" flex justify-center text-center ">
        <p className="mt-12 xxl:text-[26px] xl:w-[580px]  xxl:w-[922px]  font-normal text-1xl   md:text-center   md:mx-40 text-gray-800">
          {serviceSection?.desc}
        </p>
      </div>

      <div className="grid sm:grid-cols-1  md:mx-16 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 mt-10 ">
        {services &&
          services.map((service, index) => {
            return (
              <div key={index} className="h-80 md:h-84 px-10 md:px-0  rounded-xl ">
                <Link
                  className="group flex flex-col justify-center   items-center md:justify-start md:items-start p-4 md:p-7"
                  href="/services"
                >
                  <div className=" w-full  py-4 flex">
                    <div className=" h-28  mb-3 flex flex-col">
                      <Image
                        src={service?.attributes?.image?.data?.attributes?.url}
                        alt="Your Image"
                        width={1000}
                        height={1000}
                        className="w-full h-full "
                      />
                    </div>
                  </div>

                  <div className="h-56 xxl:w-[246px] lg:w-[180px] ">
                    <h3
                      className=" xxl:text-[18px]   font-semibold "
                      style={{ color: getColorByIndex(index) }}
                    >
                      {service.attributes.name}
                    </h3>
                    <p className={` text-sm mt-3 text-gray-800`}>
                      <span className={inter.className}>
                        {service.attributes.description.slice(0, 100)}
                      </span>
                    </p>
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                      Learn more
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Service;
