import Image from "next/image";
import React from "react";
import phoneImage from "../../public/assets/DPOufH.png";
import TheGirl from "../../public/assets/The-Girl.png";

import Perfume from "../../public/assets/perfume.png";
import Link from "next/link";

const BoxComponent = () => {
  return (
    // general box
    <div className=" w-full bg-green-50">
      <div className=" mt-5  md:w-[100%]  bg-gray-500 md:h-[670px] font-inter">
        <div className=" flex flex-col md:flex-row h-full">
          <div className=" md:w-[40%] bg-blue-300 h-full">
            <div className="relative lg:w-[500px] xl:w-[610px] md:w-[450px]  xxl:w-[751.36px] flex h-full">
              <Image
                src={phoneImage}
                alt="Your Image"
                width={1000}
                height={1000}
                className="object-cover hover:cursor-pointer w-full"
              />

              <div className="absolute inset-0 flex   bg-slate-900 bg-opacity-50 text-white p-4">
                <div >
                  <p className=" mt-4 ml-4 font-medium text-left">
                    featured // events
                  </p>
                  <h2 className="text-4xl xl:w-[450px] xxl:w-[566px] xxl:text-[65px] font-bold mt-10 px-4">
                    Honor <br/> Magic Pro Launch
                  </h2>
                  <p className="mt-6 xxl:w-[596px] xxl:text-[18px] md:w-[380px]  opacity-75 text-sm ml-5  mr-10">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla
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
                        src={TheGirl}
                        // width={1000}
                        // height={1000}
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
                        Undiz Influencers
                      </h2>

                      
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
                      <h2 className=" font-bold text-5xl w-40">Ajmal Perfumes</h2>
                      <p className=" pt-4 text-sm">
                        Duis autem vel eum iriure dolor in hendrerit in
                        vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla
                      </p>
                      <span className=" hover:cursor-pointer  mt-2 inline-flex items-center gap-x-1.5 text-sm text-white decoration-2 group-hover:underline font-medium">
                        Learn more
                      </span>
                    </div>
                  </div>
                  <div className="h-[45%] bg-black relative">
                    <div className="w-full ">
                      <Image
                        src={Perfume}
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
       
      </div>
    </div>
  );
};

export default BoxComponent;
