import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-section">
          <div className="footer-top position-relative">
            <img
              className="footer-shape"
              src={process.env.PUBLIC_URL + "/images/footer/1.png"}
              alt="shape"
            />
            <div className="container">
              <div className="row mb-n7">
                <div className="col-lg-3 col-sm-6 mb-7">
                  <div className="footer-widget">
                    <Link className="footer-logo mb-9" to="/">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/logo/logo-footer.png"
                        }
                        alt="footer-logo"
                      />
                    </Link>
                    <p>
                      Pleasure rationally encounter consequences that extremely
                      painful. Nor again is there
                    </p>
                    <ul className="footer-social-links">
                      <li>
                        <Link className="footer-social-link" to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-social-link" to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-social-link" to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-social-link" to="#">
                          <i className="icofont-whatsapp"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                  <div className="footer-widget">
                    <h4 className="title">Quick Link</h4>
                    <ul className="footer-menu">
                      <li>
                        <Link className="footer-link" to="about-us">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="#">
                          Pricing Plan
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="#">
                          Conditions
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="#">
                          Blog Post
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="#">
                          Our Clients
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="contact">
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 mb-7">
                  <div className="footer-widget">
                    <h4 className="title">Services</h4>
                    <ul className="footer-menu">
                      <li>
                        <Link className="footer-link" to="business-plan">
                          Business Plan
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="creative-strategy">
                          Creative Strategy
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="branding">
                          Branding
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="digital-solution">
                          Digital Solution
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="marketing-policy">
                          Marketing Policy
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="campaign">
                          Campaign & PR
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-7">
                  <div className="footer-widget">
                    <h4 className="title">Contact info</h4>
                    <p>Chapra, Bihar, India</p>
                    <ul className="address">
                      <li>
                        <Link className="address-link" to="tel:+91-9835030789">
                          +91-9835030789
                        </Link>
                      </li>
                      <li>
                        <Link className="address-link" to="tel:+91-9835030789">
                          +91-9835030789
                        </Link>
                      </li>
                      <li>
                        <Link className="address-link" to="mailto:info@doamin.com">
                          info@example.com
                        </Link>
                      </li>
                      <li>
                        <Link className="address-link" to="mailto:info@doamin.com">
                          www.example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="copyright-info text-center">
                            <p>
                                Copyright &copy; <span id="currentYear"></span>
                                Made with <i className="icofont-heart-alt"></i> By
                                <Link to="https://itsoftwarepoint.com/" target="_blank">
                                    IT Software Point</Link>, All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
