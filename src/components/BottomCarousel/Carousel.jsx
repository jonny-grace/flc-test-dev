import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="">
        <Slider {...settings}>
          <div>
            <div className="relative mx-2">
              <Image
                src="/bannerService.jpg"
                height={1000}
                width={1000}
                className="h-64 w-full object-cover"
              />
              <div className="absolute top-4 w-full">
                <div className="grid pl-5">
                  <h1 className="text-white text-xl">Retail</h1>
                  <h5 className="text-white text-3xl">Ajmal Perfumes</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mx-2">
              <Image
                src="/bannerService.jpg"
                height={1000}
                width={1000}
                className="h-64 w-full object-cover"
              />
              <div className="absolute top-4 w-full">
                <div className="grid pl-5">
                  <h1 className="text-white text-xl">FMCG</h1>
                  <h5 className="text-white text-3xl">Persil Gel</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mx-2">
              <Image
                src="/bannerService.jpg"
                height={1000}
                width={1000}
                className="h-64 w-full object-cover"
              />
              <div className="absolute top-4 w-full">
                <div className="grid pl-5">
                  <h1 className="text-white text-xl">F& B</h1>
                  <h5 className="text-white text-3xl">Thryve</h5>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
