import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ serviceSection, services }) => {
  // console.log(services);
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:py-14 mx-auto font-inter mb-5">
      <div className="font-bold justify-center items-center text-center ">
        {/* w-56  text-center lg:w-96   text-white */}
        <h1 className="text-5xl lg:text-7xl md:pl-10 font-extrabold text-center md:mx-56 ">
          {serviceSection?.title}
        </h1>

        <p className="mt-12 font-semibold text-1xl   md:text-center text-start md:mx-32">
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
                  <div
                    className={`  ${index == 2 || index == 3 ? "pt-5" : null} `}
                  >
                    <div className="flex  w-28 h-full   ">
                      <Image
                        src={service.attributes.image.data.attributes.url}
                        alt="Your Image"
                        width={1000}
                        height={1000}
                        className="object-cover w-full py-1"
                      />
                    </div>
                  </div>

                  <div className="mt-7  ">
                    <h3
                      className="text-lg font-semibold "
                      style={{ color: getColorByIndex(index) }}
                    >
                      {service.attributes.name}
                    </h3>
                    <p className="mt-3 text-gray-800">
                      {service.attributes.description.slice(1, 120)}
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
