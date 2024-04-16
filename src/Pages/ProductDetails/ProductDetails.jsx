import React from "react";
import { useParams } from "react-router-dom";
// get data
import Data from "../../Data";
import "./ProductDetails.css";
import ProductDetailSlider from "../../components/ProductDetailSlider/ProductDetailSlider";
import ProductQuantity from "../../components/ProductQuantity/ProductQuantity";

// icons
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiFlowerThin, PiSunLight } from "react-icons/pi";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Data.find((product) => product.id === parseInt(id));
  if (!product) {
    return (
      <div className="page-boxed">
        <section>Product not found!</section>
      </div>
    );
  }
  return (
    <>
      <div className="page-boxed">
        <section>
          <div className="product-detail-page" key={product.id}>
            <div className="product-detail-page-left">
              <div className="image-slider">
                <ProductDetailSlider />
              </div>
            </div>
            <div className="product-detail-page-right">
              <h1>{product.name}</h1>
              <p className="pr-price">
                <span>${product.price}</span>
                ${product.salePrice}
              </p>
              <h3>Details:</h3>
              <p>
                This plant is native to the tropical forests of Southeast Asia
                and Oceania. For decades, plants in the Croton family were
                considered outdoor-only, needing several hours of direct light
                to thrive.
              </p>
              <p>
                Croton petra plants are susceptible to the bacterial diseases
                crown gall and xanthomonas leaf spot, and the fungal diseases
                anthracnose and stem gall and canker…
              </p>
              <div className="three-columns">
                <div className="column">
                  <p>
                    <MdOutlineWaterDrop /> Maintenance
                  </p>
                  <p className="answer">Low</p>
                </div>
                <div className="column">
                  <p>
                    <PiSunLight /> Sunlight
                  </p>
                  <p className="answer">Medium</p>
                </div>
                <div className="column">
                  <p>
                    <PiFlowerThin /> Flowering
                  </p>
                  <p className="answer">Yes</p>
                </div>
              </div>
              <form action="#">
                <div className="size-select">
                  Size :
                  <select>
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="cart-button-wrapper">
                  <ProductQuantity />
                  <a
                    href="/cart"
                    className="addToCart"
                    type="submit"
                    value="submit"
                  >
                    Add to cart
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
