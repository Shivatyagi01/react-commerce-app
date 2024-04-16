import React from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductDetailSlider.css";
import Data from "../../Data";

const ProductDetailSlider = () => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };
  const { id } = useParams();
  const product = Data.find((product) => product.id === parseInt(id));
  if (!product) {
    return (
      <div className="page-boxed">
        <section>No image found not found!</section>
      </div>
    );
  }

  return (
    <Slider {...settings} className="slider-2">
      <div className="images-product">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="images-product">
        <img src={product.imageUrl} alt="" />
      </div>
    </Slider>
  );
};

export default ProductDetailSlider;
