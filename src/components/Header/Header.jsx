import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "./Header.css";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    event.preventDefault();
    setShowDiv(!showDiv);
  };
  return (
    <>
      {showDiv && (
        <div className="top-header">
          <p>Sign up for our newsletter to get upto 10% off.</p>
          <a href="/" onClick={handleClick}>
            X
          </a>
        </div>
      )}
      <header>
        <div className="header-cont">
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="logo-wrapper">
            <a href="/">
              <img src={Logo} alt="" className="logo" />
            </a>
          </div>
          <div className="side-wrapper">
            <ul>
              <li>
                <a href="/my-account/">Login/Register</a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineSearch />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineHeart /> 0
                </a>
              </li>
              <li>
                <a href="/cart">
                  <AiOutlineShoppingCart /> 0 &nbsp;/&nbsp; $0.00
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
