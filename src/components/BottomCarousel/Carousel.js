import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getallProducts } from "../../pages/api";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

function Carousel() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await getallProducts(); // Assuming the API endpoint is '/api/getAllProducts'
        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAll();
  }, []);

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <AiOutlineArrowLeft className="text-lg absolute top-0 left-0 mt-[-50px] ml-0 border-spacing-1 border-x-2 border-y-2 w-8 h-8 rounded-full text-gray-600" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <AiOutlineArrowRight className="text-lg absolute top-0 left-0 mt-[-50px] ml-9 border-x-2 border-y-2 w-8 h-8 rounded-full text-gray-600" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1, // Number of slides to show at a time
    // slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2044,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Slider {...settings}>
          {allProducts &&
            allProducts.map((product, index) => (
              <div key={index} className=" ">
                <div className="relative mr-10 ">
                  <Link href={{
                    pathname: "/internalCaseStudy",
                    query: { caseStudyId: product?.id },
                  }}>
                  <Image
                    src={product?.attributes?.image?.data?.attributes?.url}
                    alt=""
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute top-4 w-full">
                    <div className="grid pl-5">
                      <h1 className="text-white text-sm">
                        {product.attributes.product_type.data.attributes.name}
                      </h1>
                      <h5 className="text-white text-2xl">
                        {product.attributes.name}
                      </h5>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
