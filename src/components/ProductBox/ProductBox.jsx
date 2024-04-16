import React from "react";
import "./ProductBox.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductBox = () => {
  return (
    <>
      <div className="productBox">
        <div className="product-img">
          <a href="/productDetail">
          <img
            src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-1-0-351x401.jpg"
            alt=""
          />
          </a>
        </div>
        <div className="product-content">
          <a href="/productDetail" className="product-name">
            Golden Petra
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
            <span>$70.00</span>$139.00
          </p>
          <div>
            <a href="/productDetail" className="buy-btn">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
