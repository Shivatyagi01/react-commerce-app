import React from "react";
import Hero from "../../components/Hero/Hero";
import ProductSlider from "../../components/productSlider/ProductSlider";
import Instagram from "../../components/Instagram/Instagram";
// icons
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="page-boxed">
        <Hero />
        <section>
          <div className="title-section">
            <h2>Most popular products</h2>
            <a href="/shop">
              View All <IoIosArrowRoundForward />
            </a>
          </div>
          <ProductSlider />
        </section>
        <section>
          <div className="title-section">
            <h2>View our instagram</h2>
            <a href="/shop">
              Follow Us <IoIosArrowRoundForward />
            </a>
          </div>
          <Instagram />
        </section>
      </div>
    </>
  );
};

export default Home;
