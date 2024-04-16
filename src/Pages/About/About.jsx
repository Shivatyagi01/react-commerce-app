import React from "react";
import "./About.css";
import AboutUsSlider from "../../components/AboutUsSlider/AboutUsSlider";
//icons
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="page-boxed">
        <div className="page-title">
          <p className="breadcrumb-title">About us</p>
        </div>
        <div className="about-hero">
          <h1>Welcome to our cozy store</h1>
          <div className="about-img">
            <img
              src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-top-img.png.webp"
              alt=""
            />
          </div>
        </div>
        <section className="about-us">
          <div className="row">
            <div className="about-column">
              <div className="about-cont">
                <h1>From a small hobby to own chain of stores</h1>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                </p>
                <p>
                  When, while the lovely valley teems with vapour around me, and
                  the meridian sun strikes the upper surface of the impenetrable
                  foliage of my trees.
                </p>
              </div>
            </div>
            <div className="about-column">
              <ul>
                <li>
                  Establishing a brand<span>2018</span>
                </li>
                <li>
                  Opening of the first store
                  <span>2019</span>
                </li>
                <li>
                  Opening of the second store
                  <span>2020</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="about-slider">
          <AboutUsSlider />
        </div>
        <section className="team-section">
          <div className="row">
            <div className="column">
              <div className="team-content">
                <h1>Get answers to all your questions you might have.</h1>
                <p>
                  We will answer any questions you may have about our online
                </p>
                <a href="/contact" className="primary-btn">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="column">
              <div className="team-box">
                <div className="team-img">
                  <img
                    src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-teammember-1.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="team-box-content">
                  <h3>Jenny Wilson</h3>
                  <p className="position">Founder</p>
                  <ul className="social-icons-team">
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="team-box">
                <div className="team-img">
                  <img
                    src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-teammember-1.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="team-box-content">
                  <h3>Jenny Wilson</h3>
                  <p className="position">Founder</p>
                  <ul className="social-icons-team">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
