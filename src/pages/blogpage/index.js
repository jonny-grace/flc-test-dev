import React from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";
import Image from "next/image";

const Index = ({ blogs }) => {
  var feutured = {};
  var otherBlogs = [];

  blogs &&
    blogs.map((blog, index) => {
      if (index == 5) {
        feutured = blog.attributes;
      } else {
        otherBlogs.push(blog);
      }
    });
  return (
    <div className=" mby-20 px-5 md:px-8 lg:px-10">
      <Navbar />
      <div className="p-4 mx-auto mt-20 mb-5 font-inter max-w-8xl xxl:max-w-7xl ">
        <h1 className="text-2xl font-bold mb-4 mx-5">featured articles</h1>

        <div className="grid md:grid-cols-5 md:grid-rows-1">
          <div className=" md:w-full md:col-span-3 col-span-5 md:row-span-1   md:px-4">
            <div className=" ">
              <Image
                src={feutured.thumbnail.data.attributes.url}
                width={1000}
                height={1000}
                className="object-cover md:min-h-[405px] lg:min-h-[468px] lg:max-h[468px] xl:min-h-[400px] xl:max-h-[430px] xxl:min-h-[506px]"
                alt="Blog Banner"
              />
            </div>
            <div className="h-min">
              <h2
                className="ml-12 md:ml-0 mt-10 xl:text-[20px] xxl:text-[25px]"
                style={{ color: "#999999" }}
              >
                {feutured.blog_type.data.attributes.name}
              </h2>
            </div>

            <div>
              <h1 className=" ml-12 md:ml-0 font-bold text-black text-2xl my-5">
                {feutured.title}
              </h1>
            </div>

            <div>
              <h2 className=" ml-12 md:ml-0 text-gray-500 mt-4">
                {feutured?.createdBy?.data?.attributes?.firstname}{" "}
                {feutured?.createdBy?.data?.attributes?.lastname}
              </h2>
            </div>
          </div>
          <div className="w-full col-span-1 h-">
            {otherBlogs &&
              otherBlogs.slice(0, 3).map((blog, index) => {
                return (
                  <div
                    key={index}
                    className="pb-8 md:flex row-span-3  sm:flex-row gap-5"
                  >
                    <Image
                      src={blog.attributes.thumbnail.data.attributes.url}
                      className="md:ml-0 md:min-w-[220px]  min-h-[233.19px] md:min-h-[100px] md:max-h-[190px] lg:min-h-[100px] lg:max-h-[220px] xl:min-h-[100px] xl:max-h-[200px] xxl:min-h-[240px] object-fill "
                      alt="Blog 1"
                      width={1000}
                      height={1000}
                    />
                    <div className="">
                      <h5
                        className=" xl:w-[232px] mt-2 "
                        style={{ color: "#999999" }}
                      >
                        {blog.attributes.blog_type.data.attributes.name}
                      </h5>
                      <h1 className=" font-bold text-2xl lg:my-7 lg:w-[210px] xxl:w-[253px] xxl:text-[37px] hover:cursor-pointer">
                        {blog.attributes.title.slice(0, 18)}
                      </h1>
                      <h3>
                        {feutured?.createdBy?.data?.attributes?.firstname}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className=" md:max-w-6xl  md:mx-auto md:flex-wrap md:flex justify-center">
        <div className=" flex flex-col  md:flex-row justify-center gap-5 ">
          {otherBlogs &&
            otherBlogs.slice(3, 6).map((blog, index) => {
              return (
                <div key={index} className="mb-4 mx-5 md:mx-0 sm:w-1/2">
                  <Image
                    src={blog.attributes.thumbnail.data.attributes.url}
                    className="w-full h-60 md:h-72"
                    alt="Blog 1"
                    width={1000}
                    height={1000}
                  />
                  <div>
                    <h2 className="text-gray-500 mt-4">
                      {blog.attributes.blog_type.data.attributes.name}
                    </h2>
                  </div>

                  <div>
                    <h1 className="font-bold text-lg hover:cursor-pointer">
                      {blog.attributes.title}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  var blogs = {};
  // var footer = {};
  await axios
    .get("https://flc-cms.onrender.com/api/blogs?populate=*")
    .then((res) => {
      blogs = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      blogs,
    },
    revalidate: 3600,
  };
}
