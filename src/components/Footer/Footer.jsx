import React from "react";
import footerLogo from "../../assets/images/logo.svg";
import "./Footer.css";
//icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="row">
            <div className="footer-about-column">
              <img className="footer-logo" src={footerLogo} alt="" />
              <h3>
                Join our newsletter to stay up to date on features and releases.
              </h3>
              <form action="/">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your email address"
                />
                <button type="submit">Sign Up</button>
              </form>
              <p>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
              <div className="social-icons">
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h3>Shop</h3>
              <ul>
                <li>
                  <a href="/">Plants</a>
                </li>
                <li>
                  <a href="/">Planters</a>
                </li>
                <li>
                  <a href="/">Plant Cares</a>
                </li>
                <li>
                  <a href="/">Gift Ideas</a>
                </li>
                <li>
                  <a href="/">Pet Friends</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Contacts</h3>
              <ul className="contact-list">
                <li>
                  <a href="mailto:info@greenonutritions.com">
                    info@greenonutritions.com
                  </a>
                </li>
                <li>
                  <a href="tel:064332-1233">(064) 332-1233</a>
                </li>
                <li>
                  <a href="/">20 Auburn Ave NE, Atlanta, USA</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          © 2024 JELLYFISH TECHNOLOGIES . ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
};

export default Footer;
