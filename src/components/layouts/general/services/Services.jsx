import React, { Component } from "react";
import { Link } from "react-router-dom";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleServices: [
        {
          id: 1,
          title: "Our Services",
        },
      ],
    };
  }
  render() {
    return (
      <section class="service-section section-pt position-relative">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-8 mx-auto">
              <div class="title-section mb-10 pb-10 text-center">
                <span class="sub-title">services</span>
                <h3 class="title">
                  Provide best <span class="text-primary">Business</span>{" "}
                  Solution
                </h3>
                <p>
                  Pleasure rationally encounter consequences that are painful.
                  Nor again is there anyone who pursues
                </p>
              </div>
            </div>
          </div>

          {/* <!-- second row start --> */}
          <div class="row mb-n7 align-items-center">
            <div class="col-md-6 col-xl-4 mb-7">
              <div class="service-media-wrapper media-spacing-left">
                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/1.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="digital-solution">Digital Solution</Link>
                    </h4>
                    <p>Pleasure rationally service are anyone who pursues</p>
                  </div>
                </div>
                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/2.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="business-plan">Business Plan</Link>
                    </h4>
                    <p>Pleasure rationally extremy are anyone who loves</p>
                  </div>
                </div>
                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/3.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="creative-strategy">Creative Strategy</Link>
                    </h4>
                    <p>Pleasure rationally service are anyone who loves</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 mb-7 order-md-1 order-xl-0">
              <div class="service-media-img text-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/service/media.png"}
                  alt="images_not_found"
                />
              </div>
            </div>
            <div class="col-md-6 col-xl-4 mb-7">
              <div class="service-media-wrapper media-spacing-right">
                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/4.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="branding">Branding</Link>
                    </h4>
                    <p>Pleasure rationally service are anyone who loves</p>
                  </div>
                </div>

                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/5.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="marketing-policy">Marketing Policy</Link>
                    </h4>
                    <p>Pleasure rationally extremy are anyone who is pursues</p>
                  </div>
                </div>

                <div class="service-media">
                  <img
                    class="logo"
                    src={process.env.PUBLIC_URL + "/images/service/icon/6.png"}
                    alt=" service logo"
                  />
                  <div class="service-media-body">
                    <h4 class="title">
                      <Link to="campaign">Campaign &amp; PR</Link>
                    </h4>
                    <p>Pleasure rationally service are anyone who pursues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- second row end --> */}
        </div>
      </section>
    );
  }
}

export default Services;
