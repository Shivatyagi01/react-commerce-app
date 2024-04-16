import React from "react";
import "./Contact.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="page-boxed">
        <div className="page-title">
          <p className="breadcrumb-title">Contact us</p>
        </div>
        <section className="contactSection">
          <div className="row">
            <div className="column">
              <h1>Get answers to all your questions you might have.</h1>
              <p>
                We will answer any questions you may have about our online sales
                right here. Monday to Friday from 09:00 to 21:00 UTC +2
              </p>
              <a href="/" className="primary-btn">
                Write a message
              </a>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="contactImg">
                <img
                  src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-contact-us-img.jpg.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
