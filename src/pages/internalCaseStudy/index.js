import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/BottomCarousel/Carousel";


const index = () => {
  return (
    <div className=" w-full overflow-x-hidde mb-16">
      <Navbar />
      <div className=" w-screen relative bg-gray-50 ">
        <div className="absolute inset-0 bg-gray-200 ">
          <div className=" w-screen relative">
            <div className="absolute inset-0  mx-32 mt-48   h-full ">
              <div>
                <img src="/assets/hisence.png" />

                <div className=" flex gap-32 mt-5">
                  <div className=" w-[70%]  flex flex-col gap-5">
                    {/* here add the objectives  */} 
                    <div>
                      <h2>Objectives:</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>

                    <div>
                      <h2>Idea:</h2>
                      <p>
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem vel eum iriure dolor in
                        hendrerit in vulputate velit esse molestie consequat,
                        vel illum dolore eu feugiat nulla facilisis at vero eros
                        et accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi.
                      </p>
                    </div>

                    <div>
                      <h2>Outcome:</h2>
                      <p>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo
                      </p>
                    </div>
                  </div>
                  <div className=" w-[30%]  mt-10">
                    {/* here add rondom text a big font  */}
                    <h2 className=" text-4xl ">
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                      commodo
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-48 sm:px-6 lg:flex lg:justify-center mb-[900px]  lg:items-center lg:px-3">
          
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default index;
