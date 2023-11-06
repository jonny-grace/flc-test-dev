import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import videoLink from "../../public/assets/Showreel_6.mp4";
import VideoBanner from './VideoBanner';
import Hero from './Hero';
const BannerSlider = ({banner,hero}) => {
  banner?.map((bn)=>{
    
   })
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 7000,
    dots:true,
  };

  return (
    <div className="-mt-4 overflow-hidden h-[70vw] md:h-[42vw] ">
      <Slider {...settings}>
       {banner?.map((bn) => {

        if(bn.attributes.ext==='.mp4'){
          console.log('video link',bn.attributes.url)
          return(
        <div className=' h-full w-screen overflow-hidden '>
         <div >
          <div className="h-full relative">
            <div className="md:h-[47vw]  w-full">
            <VideoBanner videoLink={bn.attributes.url} />
            </div>
            <div className="absolute top-1/3 w-full ">
            <div className="flex flex-col justify-start pl-5 ">   
              </div>
            </div>
          </div>
        </div>
   </div>)
        }
        else if(bn.attributes.ext==='.png' || bn.attributes.ext ==='.img'){
         
          return(
            <div className=' w-screen overflow-hidden '>
             <div >
              <div className="relative">
                <div className="h-[47vw] bg-green-600 w-screen">
                <Hero title={hero.title} banner={bn} />
                </div>
                <div className="absolute  w-full ">
                <div className="flex flex-col justify-start pl-5 ">
                    
                    
                  </div>
                </div>
              </div>
            </div>
       </div>)
        }
        
   

       })}
   

        
      </Slider>
    </div>
  );
};

export default BannerSlider;
