import "./Checkout.css";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { IoMdClose } from "react-icons/io";

const Checkout = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  //checkout Products
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-4-0.jpg",
      name: "Product 1",
      pricePerUnit: 10.01,
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-4-0.jpg",
      name: "Product 2",
      pricePerUnit: 15.3,
      quantity: 2,
    },
    {
      id: 3,
      image:
        "https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-4-0.jpg",
      name: "Product 3",
      pricePerUnit: 20.7,
      quantity: 1,
    },
  ]);
  // increase qunatity and price of product
  const increaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  // decrease qunatity and price of product
  const decreaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };
  // total combined prices of all products
  const totalCombinedPrice = products
    .reduce((total, product) => {
      return total + product.pricePerUnit * product.quantity;
    }, 0)
    .toFixed(2);
  //  showing cart data on checkout page from the array of products
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
  // show hide div
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
    <>
      <div className="page-boxed checkout-page">
        <section className="coupon-top">
          <div>
            <p>
              Have a coupon?&nbsp;
              <a href="#" onClick={handleClick}>
                Click here to enter your code
              </a>
            </p>
            {showDiv && (
              <div className="coupon-enter">
                <p>If you have a coupon code, please apply it below.</p>
                <form>
                  <input type="text" placeholder="Coupon code" />
                  <button className="primary-btn">Apply coupon</button>
                </form>
              </div>
            )}
          </div>
        </section>
        <section>
          <div className="row">
            <div className="column">
              <div className="checkout-form-section">
                <div className="title-section underline">
                  <h2>Billing details</h2>
                </div>
                <form>
                  <div className="form-two-column form-group">
                    <label htmlFor="Name">First Name*</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="form-two-column form-group">
                    <label htmlFor="Name">Last name *</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Name">Company name (optional)</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Name">Country / Region *</label>
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="form-group stree-two">
                    <label htmlFor="Name">Street address *</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="House number and street name"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Apartment, suite, unit,etc,(Optional)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Name">Town / City *</label>
                    <input type="text" name="" id="" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Name">Postcode *</label>
                    <input type="text" name="" id="" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Name">Phone *</label>
                    <input type="text" name="" id="" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Name">Email address *</label>
                    <input type="text" name="" id="" />
                  </div>
                </form>
              </div>
            </div>
            <div className="column">
              <div className="your-order-section">
                <div className="title-section underline">
                  <h2>Your order</h2>
                </div>
                <div className="products-checkout">
                  <table border={0} cellPadding={0}>
                    <thead>
                      <tr>
                        <th className="table-th-1" colSpan={3}>
                          PRODUCT
                        </th>
                        <th className="table-th-2">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>{arrayDataItems}</tbody>
                  </table>
                  <div className="checkoutTotalPrice">
                    <p>
                      Total Price : <span>${totalCombinedPrice}</span>
                    </p>
                  </div>
                  <div className="title-section underline">
                    <h2>Payment information</h2>
                  </div>
                  <div className="form-payment-methods">
                    <form>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                          />
                          &nbsp; Direct bank transfer
                        </label>
                        {selectedOption === "option1" && (
                          <div className="payment-desc">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                          />
                          &nbsp; Check payments
                        </label>
                        {selectedOption === "option2" && (
                          <div className="payment-desc">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                          />
                          &nbsp; Cash On Delivery
                        </label>
                        {selectedOption === "option3" && (
                          <div className="payment-desc">
                            <p>Pay with cash upon delivery.</p>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="checkout-btn">
                    <a href="/" className="primary-btn w-100">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
