import Image from "next/image";
import React from "react";
import img3 from "../../public/assets/Ellipse.png";
const Blog = ({ blogSectionTop, blogs }) => {
  
  return (
    <div
      class="max-w-full  px-4 py-16 sm:px-6 lg:px-8 lg:py-14 mx-auto md:mx-10 mb-14 font-inter"
      style={{ backgroundColor: "#E6E6E6" }}
    >
      <div class="max-w-2xl mx-auto text-left ml-10 mb-10 lg:mb-14">
        <p class="mt-1 text-black text-2xl mb-4 ">{blogSectionTop.header}</p>
        <h2 class="text-2xl font-bold md:text-6xl md:leading-tight text-black">
          {blogSectionTop.title}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:grid-cols-2 ml-10 md:ml-1">
        {blogs.map((blog,index)=>{
           
          return(
            <a key={index}
          class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
          href="#"
        >
          <div class="mt-auto items-center gap-x-6">
            <Image
              class="w-20 h-20 rounded-full"
              src={img3}
              alt="Image Description"
            />
            <div className="mt-6 flex items-center justify-start  w-64">
              <span className="mr-2">by Nidhi</span>
              <div className="border-r border-gray-400 h-4 mr-2" />
              <span className="mr-4"> {blog.attributes.blog_type.data.attributes.name}</span>
            </div>
          </div>
          <h3 class="mt-5 text-xl text-black font-bold">
            {blog.attributes.title.substring(0, 27)}...
          </h3>
          <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-black">
            Read more
          </p>
        </a>
          )
        })}
        

       
      </div>
    </div>
  );
};

export default Blog;
