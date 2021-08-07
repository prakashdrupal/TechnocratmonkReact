import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import Management from "../layouts/general/services/Management";
class Consultancy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Pages",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Services Grid",
        },
      ],
    };
  }
  render() {
    return (
      <div className="bg-body3">
      <div className="boxed">
        <Loader />
        {this.state.headers.map((data) => (
          <Header data={data} key={data.id} />
        ))}

        <section className="banner-section position-relative">
          <img
            className="banner-shape"
            src={process.env.PUBLIC_URL + "/images/banner/shape1.png"}
            alt="shape"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-content banner-padding">
                  <h3 className="title">Consultancy</h3>
                  <p>
                    Pleasure rationally encounter consequences <br />
                    are extremely painful great oppurtunity
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-10 mt-md-0">
                <div className="banner-content scene banner-img">
                  <div data-depth="0.2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/service/2.png"}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-service section-py">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-thumb bg-light text-center">
                  <img
                    src={process.env.PUBLIC_URL + "/images/service/7.png"}
                    alt=""
                  />
                </div>
                <div className="title-section">
                  <h3 className="title pb-2">Consultancy</h3>
                  <p className="text-primary fw-semi-bold mb-6">
                    Pleasure rationally encounter consequences that are
                    extremely painful. Nor again{" "}
                    <br className="d-none d-xl-block" />
                    is there occasionally circumstances occur in which toil
                    and pain can procure
                  </p>
                  <p className="mb-8">
                    Pleasure rationally encounter consequences that are
                    extremely painful. Nor again there anyone who loves or
                    pursues or desires to obtain voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit
                  </p>
                </div>

                <div className="single-service-list">
                  <p>
                    <i className="fa fa-angle-double-right"></i> Most confortable
                    Business Plan for your Business
                  </p>
                  <p>
                    <i className="fa fa-angle-double-right"></i>Quisquam est qui
                    dolorem ipsum quia dolor sit amet consectetur
                  </p>
                  <p>
                    <i className="fa fa-angle-double-right"></i>These cases are
                    perfectly simple and easy to distinguish
                  </p>
                  <p>
                    <i className="fa fa-angle-double-right"></i>Quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 offset-xl-1">
                <div className="sidbar-widget">
                  <div className="sidbar-menu">
                    <ul>
                      <li>
                        <Link className="active" to="digital-solution">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/1.png"
                            }
                            alt="logo"
                          />
                          Digital Solution
                        </Link>
                      </li>
                      <li>
                        <Link to="business-plan">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/2.png"
                            }
                            alt="logo"
                          />
                          Business Plan
                        </Link>
                      </li>
                      <li>
                        <Link to="creative-strategy">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/3.png"
                            }
                            alt="logo"
                          />
                          Creative Strategy
                        </Link>
                      </li>
                      <li>
                        <Link to="branding">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/4.png"
                            }
                            alt="logo"
                          />
                          Branding
                        </Link>
                      </li>
                      <li>
                        <Link to="investmet-plans">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/5.png"
                            }
                            alt="logo"
                          />
                          Investmet Plans
                        </Link>
                      </li>
                      <li>
                        <Link to="consultancy">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/6.png"
                            }
                            alt="logo"
                          />
                          Consultancy
                        </Link>
                      </li>
                      <li>
                        <Link to="marketing-policy">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/7.png"
                            }
                            alt="logo"
                          />
                          Marketing Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="campaign">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/8.png"
                            }
                            alt="logo"
                          />
                          Campaign & PR
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/9.png"
                            }
                            alt="logo"
                          />
                          Brochure.PDF
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/service/icon/small/10.png"
                            }
                            alt="logo"
                          />
                          Brochure.DOC
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row sub-section-mb mt-7 mt-lg-0">
              <div className="col-xl-4 col-md-7">
                <div className="sub-section-title">
                  <h3 className="title">Analysis</h3>
                  <p>
                    Pleasure rationally service are extremely are anyone who
                    loves or pursues These cases are perfectly simple and easy
                    to a distinguish. In a free hour, when our power of choice
                    is untrammelled a circumstances and owing to the claims of
                    duty
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-md-4 text-center mt-7 mt-md-0 offset-lg-1">
                <img
                  className="mt-xl-n3 ml-n2"
                  src={process.env.PUBLIC_URL + "/images/service/4.png"}
                  alt="service"
                />
              </div>
            </div>

            <div className="row sub-section-mb70">
              <div className="col-xl-4 col-md-5 order-last order-lg-first text-center">
                <img
                  className="mr-n2 mt-7 mt-md-0"
                  src={process.env.PUBLIC_URL + "/images/service/5.png"}
                  alt="service"
                />
              </div>
              <div className="col-xl-4 col-md-6 offset-lg-1">
                <div className="sub-section-title">
                  <h3 className="title">Make the Business Plan</h3>
                  <p>
                    Pleasure rationally service are extremely are anyone who
                    loves or pursues These cases are perfectly simple and easy
                    to a distinguish. In a free hour, when our power of choice
                    is untrammelled a circumstances and owing to the claims of
                    duty
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p>
                Pleasure rationally encounter consequences that are extremely
                painful. Nor again there anyone who loves or pursues or
                desires to obtain voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
    );
  }
}

export default Consultancy;
