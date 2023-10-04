import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        return "#006BB2";
      default:
        return "";
    }
  }
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:py-8 mx-auto font-inter mb-5">
      <div className="font-bold justify-center items-center text-center ">
        {/* w-56  text-center lg:w-96   text-white */}
        <div className=" flex justify-center">
          <h1 className="text-5xl lg:text-5xl md:pl-10 font-bold text-center w-96 md:mx-56 ">
            {serviceSection?.title.toLowerCase()}
          </h1>
        </div>

        <p className="mt-12 font-semibold text-1xl   md:text-center text-start  md:mx-40">
          {serviceSection?.desc}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 mt-10 ">
        {services &&
          services.map((service, index) => {
            return (
              <div key={index} className="h-84  hover:bg-gray-200 rounded-xl ">
                <Link
                  className="group flex flex-col justify-center   items-center md:justify-start md:items-start     p-4 md:p-7 dark:hover:bg-slate-800"
                  href="/services"
                >
                  <div className=" w-full  py-4 flex">
                    <div className=" h-28 flex flex-col">
                      <Image
                        src={service?.attributes?.image?.data?.attributes?.url}
                        alt="Your Image"
                        width={1000}
                        height={1000}
                        className="w-full h-full "
                      />
                    </div>
                  </div>

                  <div className="h-56 ">
                    <h3
                      className="text-lg font-semibold "
                      style={{ color: getColorByIndex(index) }}
                    >
                      {service.attributes.name}
                    </h3>
                    <p className="mt-3 text-gray-800">
                      {service.attributes.description.slice(0, 100)}
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
