import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const index = () => {
  return (
    <div className=" w-full overflow-x-hidden mb-16">
      <Navbar />
      <div className=" w-screen relative bg-gray-50 ">
        {/* <div className="absolute inset-0 bg-gray-200 opacity-50"></div> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-center  lg:items-center lg:px-3">
          <div className="max-w-xl text-center sm:text-left text-black">
            <h1 className="lg:text-7xl font-extrabold sm:text-5xl">
              beyond results
            </h1>
            <p className="mt-10 text-center  md:px-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>

      <div class="hidden  mt-10 md:grid grid-cols-3 gap-10 px-32">
        <Link
          href="/internalCaseStudy"
          className="h-auto sm:h-[400px] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative h-full">
            <Image
              src="/assets/perfume.png"
              alt="Retail"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute  p-4 text-white">
              <h3 className="text-lg font-bold">Retail</h3>
              <p className="text-3xl font-bold">Ajmal Perfumes</p>
            </div>
          </div>
        </Link>

        <Link
          href="/internalCaseStudy"
          class="col-span-2  bg-cover bg-center bg-no-repeat"
        >
          <div className="relative h-full">
    <Image
      src="/assets/fifa.png"
      alt="Retail"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute  px-10 pt-3 text-white">
      <h3 className="text-lg font-bold">Electronics</h3>
      <p className="text-3xl font-bold">Hisense FIFA 2022</p>
    </div>
  </div>
        </Link>

        <Link
          href="/internalCaseStudy"
          class="col-span-2  bg-cover bg-center bg-no-repeat"
        >
          <div className="relative h-full">
    <Image
      src="/assets/percil.png"
      alt="Retail"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute  p-4 text-white">
      <h3 className="text-lg font-bold">FMCG</h3>
      <p className="text-3xl font-bold">Percil Gel</p>
    </div>
  </div>
        </Link>

        <Link
          href="/internalCaseStudy"
          class="h-[400px]  bg-cover bg-center bg-no-repeat"
        >
          <div className="relative h-full">
    <Image
      src="/assets/burger.png"
      alt="Retail"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute  p-4 text-white">
      <h3 className="text-lg font-bold">F&B</h3>
      <p className="text-3xl font-bold">Thryve</p>
    </div>
  </div>
        </Link>
      </div>
      {/* mobile screen view  */}
      <div className=" md:hidden  grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <Link href="/internalCaseStudy" className="h-[400px] relative">
          <div className="relative md:w-[500px] flex h-full">
            <img
              src="/assets/perfume.png"
              alt="Your Image"
              className="object-cover hover:cursor-pointer w-full"
            />

            <div className="absolute inset-0 flex   text-white p-4">
              <div>
                <p className="text-xl font-semibold text-left">
                  Retail 
                </p>
                <h2 className="text-4xl font-bold mt-10">
                  Ajmal Perfumes
                </h2>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/internalCaseStudy" className="h-[400px] relative">
          <div className="relative md:w-[500px] flex h-full">
            <img
              src="/assets/fifa.png"
              alt="Your Image"
              className="object-cover hover:cursor-pointer w-full"
            />

            <div className="absolute inset-0 flex   text-white p-4">
            <div className="absolute inset-0 flex   text-white p-4">
              <div>
                <p className="text-xl font-semibold text-left">
                  Electronics 
                </p>
                <h2 className="text-4xl font-bold mt-10">
                  Hisense FIFA 2022
                </h2>
              </div>
            </div>
            </div>
          </div>
        </Link>

        <Link href="/internalCaseStudy" className="h-[400px] relative">
          <div className="relative md:w-[500px] flex h-full">
            <img
              src="/assets/percil.png"
              alt="Your Image"
              className="object-cover hover:cursor-pointer w-full"
            />

            <div className="absolute inset-0 flex   text-white p-4">
            <div className="absolute inset-0 flex   text-white p-4">
              <div>
                <p className="text-xl font-semibold text-left">
                  FMCG
                </p>
                <h2 className="text-4xl font-bold mt-10">
                  Percil Gel
                </h2>
              </div>
            </div>
            </div>
          </div>
        </Link>

        <Link href="/internalCaseStudy" className="h-[400px] relative">
          <div className="relative md:w-[500px] flex h-full">
            <img
              src="/assets/burger.png"
              alt="Your Image"
              className="object-cover hover:cursor-pointer w-full"
            />

            <div className="absolute inset-0 flex   text-white p-4">
            <div className="absolute inset-0 flex   text-white p-4">
              <div>
                <p className="text-xl font-semibold text-left">
                  F&B
                </p>
                <h2 className="text-4xl font-bold mt-10">
                 Thryve
                </h2>
              </div>
            </div>
            </div>
          </div>
        </Link>
      </div>

      <Link href="/internalCaseStudy">
        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-black decoration-2 group-hover:underline font-medium w-full flex justify-center">
          Load more
        </span>
      </Link>
    </div>
  );
};

export default index;
