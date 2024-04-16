import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductSlider.css'
// product boxes
import ProductBox from "../ProductBox/ProductBox";

const ProductSlider = () => {
  var settings = {
    dots: false,
    arrow:true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
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
    <Slider {...settings} className="slider-1">
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
      <div>
        <ProductBox />
      </div>
    </Slider>
  );
};

export default ProductSlider;
