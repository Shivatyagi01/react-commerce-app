import React from "react";
import "./Hero.css";
import Data from "../../Data";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  const uniqueCategories = [...new Set(Data.map((item) => item.category))];

  const categoryDataItems = uniqueCategories.map((category) => (
    <li key={category}>
      <a href={`/product-category/${category}`}>{category} <AiOutlineArrowRight /></a>
    </li>
  ));
  return (
    <>
      <section className="home-section">
        <div className="home-wrapper">
          <div className="left-hero">
            <ul>
              {categoryDataItems}
            </ul>
          </div>
          <div className="slider">
            <img
              src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-slide-1-opt-1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
