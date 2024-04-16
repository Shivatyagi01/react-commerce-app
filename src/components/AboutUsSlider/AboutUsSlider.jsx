import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutUsSlider = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-4.jpg.webp"
          alt=""
        />
      </div>
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-5.jpg.webp"
          alt=""
        />
      </div>
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-6.jpg.webp"
          alt=""
        />
      </div>
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-3.jpg.webp"
          alt=""
        />
      </div>
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-2.jpg.webp"
          alt=""
        />
      </div>
      <div className="about-slider-images">
        <img
          src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-gallery-1.jpg.webp"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default AboutUsSlider;
