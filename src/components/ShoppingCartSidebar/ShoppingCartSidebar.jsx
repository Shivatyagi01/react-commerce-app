import React, { useState } from "react";
import "./ShoppingCartSidebar.css";
import { IoCloseOutline } from "react-icons/io5";

const ShoppingCartSidebar = () => {
  return (
    <>
      <div className="ShoppingCartSidebar">
        <div className="ShoppingCartSidebarHeader">
          <h3>Shopping Cart</h3>
          <a href="/">
            <IoCloseOutline /> Close
          </a>
        </div>
        <div className="ShoppingCartSidebarContent">
          <ul className="mini-cart">
            <li className="mini-cart-item">
              <a href="/productDetails" className="cart-item-image">
                <img
                  src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-4-3.jpg"
                  alt=""
                />
              </a>
              <div className="cart-info">
                <span className="entity-title">
                  Anthurium - King of hearts - Small, Silver
                </span>
                <span className="quantity">
                  1 x<span className="mini-product-amount">$79.00</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="ShoppingCartSidebarFooter">
          <div className="subtotal">
            <p>
              Subtotal: <span>$79.00</span>
            </p>
          </div>
          <a href="/cart" className="view-cart-btn">
            View cart
          </a>
          <a href="/checkout" className="checkout-btn">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartSidebar;
