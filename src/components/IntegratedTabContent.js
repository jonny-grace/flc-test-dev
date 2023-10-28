import Image from "next/image";
import React from "react";

import TheGirl from "../../public/assets/The-Girl.png";
import Perfume from "../../public/assets/perfume.png";
import Link from "next/link";

const BoxComponent = ({ products }) => {
  let firstImage = {}
  let secondsImage = {}
  let thirdImage = {}
  products && products.map((pr, index) => {
    if (index == 0) {
      firstImage = pr;
    }
    else if (index == 1) {
      secondsImage = pr;
    }
    else if (index == 2) {
      thirdImage = pr;
    }
  })
 
  return (
    // general box
    <div className=" w-full">

      <div className={` md:h-[670px] xxl:h-[1050px]  font-inter ${products.length < 1 ? " bg-slate-200" : " bg-none"
        }`}>
        {products.length == 3 &&


          <div className=" flex flex-col md:flex-row h-full border-l-2">
            <div className=" md:w-[40%] bg-blue-300 h-full">
              <div className="relative lg:w-[500px] xl:w-[610px] md:w-[450px]  xxl:w-[751.36px] flex h-full">
                <Image
                  // src={phoneImage}
                  src={firstImage.attributes.image.data.attributes.url}
                  alt="Your Image"
                  width={1000}
                  height={1000}
                  className="object-cover hover:cursor-pointer w-full"
                />

                <div className="absolute inset-0 flex   bg-slate-900 bg-opacity-50 text-white p-8">
                  <div >
                    <p className=" mt-4 ml-4 font-small opacity-70 text-left">
                      featured // events
                    </p>
                    <h2 className="text-4xl xl:w-[450px] xxl:w-[510px] xxl:text-[45px] font-bold mt-7 px-4">
                      {firstImage.attributes.name}
                    </h2>
                    <p className="mt-6 xxl:w-[420px] xxl:text-[18px] md:w-[380px] font-small  opacity-75 text-sm ml-5  mr-10">
                      {firstImage.attributes.description}
                    </p>
                    <span className=" hover:cursor-pointer mt-2 inline-flex items-center opacity-75 gap-x-1.5 text-sm text-white decoration-2 ml-5 group-hover:underline font-medium">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile view  */}
            <div className=" md:hidden">
              <div className="w-full h-full bg-red-500 overflow-hidden flex flex-col md:flex-row">
                <div className="bg-blue-500 md:flex-grow">
                  <div className="h-full">
                    <div className="h-[45%] bg-orange-500 relative">
                      <div className=" w-full h-full">
                        <Image
                          src={TheGirl}
                          alt="The Girl"
                          width={1000}
                          height={1000}
                          className=" w-full"
                        />
                      </div>
                    </div>

                    <div
                      className="flex-grow pt-80  hover:cursor-pointer"
                      style={{ backgroundColor: "#1B413E" }}
                    >
                      <h2 className="text-4xl font-bold mt-[-300px] w-48 px-10 pt-5 text-white">
                        Undiz Influencers
                      </h2>
                      <p className=" w-96 px-10 pt-5">
                        Duis autem vel eum iriure dolor in
                        hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu
                        feugiat nulla
                      </p>
                      <Link href="#">
                        <span className=" w-96 px-10 hover:cursor-pointer  ">
                          Learn More
                        </span>{" "}
                      </Link>

                    </div>
                  </div>
                </div>
                <div className=" flex-grow">
                  <div className="h-full">
                    <div
                      className="flex-grow pt-72  hover:cursor-pointer text-white"
                      style={{ backgroundColor: "#964a2f" }}
                    >
                      <h2 className="text-4xl xxl:text-[65px] xxl:w-[309px] font-bold mt-[-280px] w-48 px-10">
                        Ajmal Perfumes
                      </h2>
                      <p className=" w-96 px-10 pt-5">
                        you can modify the code to display all the tabs
                        horizontally instead of wrapping them.
                      </p>
                      <Link href="#">
                        <span className=" w-96 px-10 hover:cursor-pointer  ">
                          Learn More
                        </span>{" "}
                      </Link>
                    </div>
                    <div className="h-[45%] bg-black relative">
                      <div className="w-full ">
                        <Image
                          src={Perfume}
                          alt="The Girl"
                          width={1000}
                          height={1000}
                          className=" w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* desktop view  */}
            <div className=" hidden md:block bg-orange-200 w-[60%] h-full ml-5">
              <div className="w-full h-full bg-red-500 overflow-hidden flex flex-col md:flex-row">
                <div className="bg-blue-500 md:flex-grow">
                  <div className="h-full">
                    <div className="h-[45%] bg-orange-500 relative">
                      <div className=" w-full h-full">
                        <Image
                          // src={TheGirl}
                          src={secondsImage.attributes.image.data.attributes.url}

                          alt="The Girl"
                          layout="fill"
                        />
                      </div>
                    </div>

                    <div
                      className="h-[55%] pt-10 relative"
                      style={{ backgroundColor: "#1B413E" }}
                    >
                      <div className=" absolute w-60 ml-5 text-white">
                        <h2 className=" font-bold text-4xl  ">
                          {secondsImage.attributes.name}
                        </h2>
                        <p className=" w-72 px-2 pt-5">
                          {secondsImage.attributes.description}
                        </p>
                        <Link href="#">
                          <span className=" w-72 mt-6 underline px-2 hover:cursor-pointer  ">
                            Learn More
                          </span>{" "}
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex-grow">
                  <div className="h-full">
                    <div
                      className="h-[55%]  pt-10 relative"
                      style={{ backgroundColor: "#964a2f" }}
                    >
                      <div className=" absolute w-60 ml-5 text-white">
                        <h2 className=" font-bold text-5xl w-40">{thirdImage.attributes.name}</h2>
                        <p className=" pt-4 text-sm opacity-75">
                          {thirdImage.attributes.description}
                        </p>
                        <span className=" underline hover:cursor-pointer opacity-75  mt-2 inline-flex items-center gap-x-1.5 text-sm text-white decoration-2 group-hover:underline font-medium">
                          Learn more
                        </span>
                      </div>
                    </div>
                    <div className="h-[45%] bg-black relative">
                      <div className="w-full ">
                        <Image
                          // src={Perfume}
                          src={thirdImage.attributes.image.data.attributes.url}

                          // width={1000}
                          // height={1000}
                          alt="The Girl"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }
      </div>

    </div>
  );
};

export default BoxComponent;
