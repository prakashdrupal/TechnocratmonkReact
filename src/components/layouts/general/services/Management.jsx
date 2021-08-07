import React, { Component } from "react";
import HappyClients from "./HappyClients";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";
import Services from "./Services";
import Brand from "./Brand";
import Team from "./Team";

class Management extends Component {
  render() {
    return (
      <div>
        <section class="banner-section position-relative">
          <img
            class="banner-shape"
            src={process.env.PUBLIC_URL + "/images/banner/shape1.png"}
            alt=""
          />
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="banner-content banner-padding">
                  <h3 class="title">Our Services</h3>
                  <p>
                    Pleasure rationally encounter consequences <br />
                    are extremely painful great oppurtunity
                  </p>
                </div>
              </div>
              <div class="col-md-6 mt-7 mt-md-0">
                <div class="banner-content scene banner-img">
                  <div data-depth="0.2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/service/2.png"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Testimonials />
        <HappyClients />
        <Team />
        <Brand />
        <NewsLetter />
      </div>
    );
  }
}

export default Management;
