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
    <div className=" mb-20 mt-20">
      <Navbar />
      <div className="p-4 mx-auto mt-20 mb-5 font-inter max-w-6xl xxl:max-w-7xl ">
        <h1 className="text-xl font-bold mb-4 mx-5">featured articles</h1>

        <div className="grid  grid-cols-1 md:grid-cols-5 md:grid-rows-1">
          <div className=" w-full md:col-span-3 md:row-span-1  px-4">
            <div className=" ">
              <Image
                src={feutured.thumbnail.data.attributes.url}
                width={1000}
                height={1000}
                className="fit-cover h-[400px] lg:h-[400px] xl:h-[400px] xxl:h-[506px]"
                alt="Blog Banner"
              />
            </div>
            <div>
              <h2 className="ml-12 md:ml-0 mt-10 xl:text-[20px] xxl:text-[25px]" style={{color:'#999999'}}>
                {feutured.blog_type.data.attributes.name}
              </h2>
            </div>

            <div>
              <h1 className=" ml-12 md:ml-0 font-bold text-black text-2xl my-5">{feutured.title}</h1>
            </div>

            <div>
              <h2 className=" ml-12 md:ml-0 text-gray-500 mt-4">
                {feutured?.createdBy?.data?.attributes?.firstname}{" "}
                {feutured?.createdBy?.data?.attributes?.lastname}
              </h2>
            </div>
          </div>
          <div className="w-full col-span-2 ">
            {otherBlogs &&
              otherBlogs.slice(0,3).map((blog, index) => {
                return (
                  <div key={index} className="  pb-12 flex row-span-3  sm:flex-row gap-5">
                    <Image
                      src={blog.attributes.thumbnail.data.attributes.url}
                      className="w-[350px] ml-12 md:ml-0 md:w-[233px]  h-[233.19px] md:h-[180px]  xl:h-[180.19px] xxl:h-[233.19px] object-fit"
                      alt="Blog 1"
                      width={1000}
                      height={1000}
                    />
                    <div>
                      <h5 className=" xl:w-[232px] mt-2 " style={{color:'#999999'}}>{blog.attributes.blog_type.data.attributes.name}</h5>
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

      <div className=" max-w-6xl  mx-auto flex-wrap flex justify-center">
        <div className=" flex   md:flex-row justify-center gap-5 ">
          {otherBlogs &&
            otherBlogs.slice(3,6).map((blog, index) => {
              return (
                <div key={index} className="mb-4 sm:w-1/2">
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
