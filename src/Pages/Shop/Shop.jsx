import React from "react";
import Data from "../../Data";
import "./Shop.css";
import Category from "../../components/Category/Category";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Shop = (props) => {
  return (
    <div className="page-boxed">
      <section className="shop-filter">
        <div className="title-section">
          <h2>Most popular products</h2>
        </div>
        <Category />
      </section>
      <section className="shop-page">
        <div className="title-section">
          <h2>Most popular products</h2>
        </div>
        <div className="grid">
          {Data.map((image, index) => (
            <div className="productBox" key={image.id}>
              <div className="product-img">
                <a href={`/product/${image.id}`}>
                  <img src={image.imageUrl} alt="{image.name}" />
                </a>
              </div>
              <div className="product-content">
                <a href={`/product/${image.id}`} className="product-name">
                  {image.name}
                </a>
                <div className="star-rating">
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                  </ul>
                </div>
                <p className="price-tag">
                  <span>${image.price}</span>${image.salePrice}
                </p>
                <div>
                  <a href="/productDetail" className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
