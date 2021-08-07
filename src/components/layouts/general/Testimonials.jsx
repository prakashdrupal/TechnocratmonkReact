import React, { Component } from "react";
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menutab: [
        {
          id: 1,
          title: "Risk Management",
        },
      ],
      titletab: [
        {
          id: 1,
          title: "Our Brochure",
          description:
            "View our 2016 financial prospectus brochure for an easy to read guide on all of the services offered.",
        },
      ],
    };
  }
  render() {
    return (
      // <!-- Testimonial Section Satrt -->
      <section class="testimonial-section section-py position-relative">
        <img
          class="tetimonial-shape"
          src={process.env.PUBLIC_URL + "/images/testimonial/shape.png"}
          alt=""
        />
        <div class="container">
          <div class="row mb-n7">
            <div class="col-xl-7 col-lg-6 mb-7">
              <div class="testimonial-photo scene mt-10 mt-lg-0">
                <div data-depth="0.2">
                  <img
                    src={process.env.PUBLIC_URL + "/images/testimonial/1.png"}
                    alt="photo"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 mb-7">
              <div class="title-section">
                <span class="sub-title">TESTIMONIALS</span>
                <h3 class="title">
                  Don’t Believe us Check
                  <span class="text-primary">Clients</span> word
                </h3>
                <h5 class="happy-customer">
                  More over <span class="font-weight-bold">2500</span> happy
                  customer
                </h5>
              </div>
              {/* <!-- testimonial-slider start --> */}
              <div class="testimonial-carousel position-relative">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    {/* <!-- swiper-slide satrt --> */}
                    <div class="testimonial-slide-item swiper-slide">
                      <span class="quote zmdi zmdi-quote"></span>
                      <p class="testimonial-text mt-2 mb-5">
                        Pleasure rationally encounter consequences that are
                        extremely painful. Nor again is there anyone who loves
                        or pursues or desires maintain
                      </p>
                      <div class="avater d-flex">
                        <div class="avater-profile">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/testimonial/avater.png"
                            }
                            alt=""
                          />
                        </div>
                        <div class="avater-info">
                          <p>David Loyed</p>
                          <span>CEO, Omex</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- swiper-slide end -->
                                        <!-- swiper-slide satrt --> */}
                    <div class="testimonial-slide-item swiper-slide">
                      <span class="quote zmdi zmdi-quote"></span>
                      <p class="testimonial-text mt-2 mb-5">
                        Pleasure rationally encounter consequences that are
                        extremely painful. Nor again is there anyone who loves
                        or pursues or desires maintain
                      </p>
                      <div class="avater d-flex">
                        <div class="avater-profile">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/testimonial/2.png"
                            }
                            alt=""
                          />
                        </div>
                        <div class="avater-info">
                          <p>John Loyed</p>
                          <span>CEO, Omex</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- swiper-slide end -->
                                        <!-- swiper-slide satrt --> */}
                    <div class="testimonial-slide-item swiper-slide">
                      <span class="quote zmdi zmdi-quote"></span>
                      <p class="testimonial-text mt-2 mb-5">
                        Pleasure rationally encounter consequences that are
                        extremely painful. Nor again is there anyone who loves
                        or pursues or desires maintain
                      </p>
                      <div class="avater d-flex">
                        <div class="avater-profile">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/testimonial/avater.png"
                            }
                            alt=""
                          />
                        </div>
                        <div class="avater-info">
                          <p>David Loyed</p>
                          <span>CEO, Omex</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- swiper-slide end --> */}
                  </div>
                </div>
                {/* <!-- swiper navigation --> */}
                <div class="swiper-button-prev">
                  <i class="icofont-rounded-left"></i>prev
                </div>
                <div class="swiper-button-next">
                  Next<i class="icofont-rounded-right"></i>
                </div>
              </div>

              {/* <!-- testimonial-slider end --> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
