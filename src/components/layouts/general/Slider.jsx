import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Slider extends Component {
    render() {
        return (
            // <!-- Hero Slider Start -->
            <section class="section position-relative">
                {/* <!-- hero-shape one start --> */}
                <div class="hero-shape1">
                    <img src={process.env.PUBLIC_URL + '/images/slider/shape/shape1.png'} alt="" />
                </div>
                {/* <!-- hero-shape one end -->
                <!-- hero-shape two start --> */}
                <div class="hero-shape2">
                    <img src={process.env.PUBLIC_URL + '/images/slider/shape/shape2.png'} alt="" />
                </div>
                {/* <!-- hero-shape two end -->
                <!-- hero-slider start --> */}
                <div class="hero-slider">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="hero-slide-content">
                                    <h2 class="title animated">
                                        Full Solution <br />for your
                                        <span class="text-decoration-underline">Business</span>
                                        <br /> Development
                                    </h2>
                                    <Link to="business-plan" class="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0">Get Started</Link>
                                    <Link to="marketing-policy" class="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0">Book a Meeting</Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="hero-img scene mt-10 mt-lg-0">
                                    <div data-depth="0.2">
                                        <img class="animated" src={process.env.PUBLIC_URL + '/images/slider/slide2.png'} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- hero-slider end --> */}
            </section>
            // <!-- Hero Slider End -->
        );
    }
}

export default Slider;