import React, { useState } from "react";
import "./Cart.css";
import img1 from "../../assets/images/product.jpg";
import img2 from "../../assets/images/product-1.jpg";
import img3 from "../../assets/images/product-2.jpg";
//icons
import { GoArrowRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: img1,
      name: "Product 1",
      pricePerUnit: 10,
      quantity: 1,
    },
    {
      id: 2,
      image: img2,
      name: "Product 2",
      pricePerUnit: 15,
      quantity: 1,
    },
    {
      id: 3,
      image: img3,
      name: "Product 3",
      pricePerUnit: 20,
      quantity: 1,
    },
  ]);

  const increaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };
  // totalcombined price of full cart
  const totalCombinedPrice = products
    .reduce((total, product) => {
      return total + product.pricePerUnit * product.quantity;
    }, 0)
    .toFixed(2);
  // table row for showing content of carts
  const arrayDataItems = products.map((product) => (
    <tr key={product.id}>
      <td>
        <a href="/" className="remove-product">
          <IoMdClose />
        </a>
      </td>
      <td>
        <div className="table-img">
          <img src={product.image} alt="" />
        </div>
      </td>
      <td>
        <p className="product-name">{product.name}</p>
      </td>
      <td>
        <p className="price">{product.pricePerUnit}</p>
      </td>
      <td>
        <div className="quantityInput">
          <button onClick={() => decreaseQuantity(product.id)} type="button">
            -
          </button>
          <input
            type="text"
            value={product.quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
          />
          <button onClick={() => increaseQuantity(product.id)} type="button">
            +
          </button>
        </div>
      </td>
      <td>
        <div className="subtotal">
          ${(product.pricePerUnit * product.quantity).toFixed(2)}
        </div>
      </td>
    </tr>
  ));
  //   cash on delivery options
  const [selectedOption, setSelectedOption] = useState("option1");
  // Function to handle change in radio selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="page-boxed">
        <div className="cart-page-title">
          <a href="/cart" style={{ textDecoration: "underline" }}>
            Shopping Cart
          </a>
          <GoArrowRight />
          <a href="/checkout">Checkout</a>
          <GoArrowRight />
          <a href="/order-complete">Order Complete</a>
        </div>
        <section className="cart-data">
          <div className="row">
            <div className="column-two-third">
              <table className="cartTable" border={0} cellSpacing={0}>
                <thead>
                  <tr>
                    <th colSpan={3}>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>{arrayDataItems}</tbody>
              </table>
            </div>
            <div className="column-one-third">
              <div className="cart-info">
                <h3>Cart Totals</h3>
                <div className="subtotal-cont">
                  <p>
                    Subtotal <span className="subtotal-price">$127.00</span>
                  </p>
                </div>
                <div className="shipping-cont">
                  <div className="row">
                    <div className="column">
                      <p>Shipping</p>
                    </div>
                    <div className="column">
                      <ul id="shipping_method">
                        <li>
                          <label>Flat rate</label>
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                          />
                        </li>
                        <li>
                          <label>Free Shipping</label>
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                          />
                        </li>
                        <li>
                          <label>Flat rate</label>
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="shipping-total">
                  <p>
                    Total<span>${totalCombinedPrice}</span>
                  </p>
                </div>
                <a href="/checkout" className="primary-btn w-100">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
