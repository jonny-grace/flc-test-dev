import React from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";

const Index = ({ blogs }) => {
  var feutured = {};
  var otherBlogs = [];

  blogs.map((blog, index) => {
    if (index == 0) {
      feutured = blog.attributes;
    } else {
      otherBlogs.push(blog);
    }
  });
  return (
    <div className=" mb-20">
      <Navbar />
      <div className="p-4 md:mx-12 mt-20 mb-5 font-inter">
        <h1 className="text-xl font-bold mb-4 mx-6">Featured Articles</h1>

        <div className="flex flex-col sm:flex-row ">
          <div className="w-[120vw]  px-4">
            <div className=" ">
              <img
                src={feutured.thumbnail.data.attributes.url}
              
                className="w-[100%] fit-content"
                alt="Blog Banner"
              />
            </div>
            <div>
              <h2 className="text-gray-500 mt-4">
                {feutured.blog_type.data.attributes.name}
              </h2>
            </div>

            <div>
              <h1 className="font-bold text-2xl">{feutured.title}</h1>
            </div>

            <div>
              <h2 className="text-gray-500 mt-4">Nidhi Sehgal</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto h-[40%]">
            {otherBlogs.map((blog,index)=>{
              return(
                <div key={index} className="mb-4 flex  sm:flex-row gap-5">
              <img
               src={blog.attributes.thumbnail.data.attributes.url}
                className="w-[180px] h-[188px]"
                alt="Blog 1"
              />
              <div>
                <h5>{blog.attributes.blog_type.data.attributes.name}</h5>
                <h1 className=" font-bold hover:cursor-pointer">
                  {blog.attributes.title}
                </h1>
                <h3>author</h3>
              </div>
            </div>
              )
            })}
            
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full flex flex-col  md:mx-16 mx-4 sm:flex-row justify-center gap-5 pl-4">
          {otherBlogs.map((blog, index) => {
            return (
              <div key={index} className="mb-4 sm:w-1/3">
                <img
                  src={blog.attributes.thumbnail.data.attributes.url}
                  className="w-full h-72"
                  alt="Blog 1"
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
