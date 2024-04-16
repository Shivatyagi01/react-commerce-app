import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data";
import "./CategoryPage.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCategoryPage = () => {
  const { category } = useParams();

  const filteredProducts = Data.filter(
    (product) => product.category === category
  );

  return (
    <div className="page-boxed">
      <section>
        <div className="title-section">
          <h2>Products in {category} category:</h2>
        </div>
        <div className="grid">
          {filteredProducts.map((product) => (
            <div className="productBox" key={product.id}>
              <div className="product-img">
                <a href={`/product/${product.id}`}>
                  <img src={product.imageUrl} alt="{product.name}" />
                </a>
              </div>
              <div className="product-content">
                <a href={`/product/${product.id}`} className="product-name">
                  {product.name}
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
                  <span>${product.price}</span>${product.salePrice}
                </p>
                <div>
                  <a href={`/product/${product.id}`} className="buy-btn">
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

export default ProductCategoryPage;
