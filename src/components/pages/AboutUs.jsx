import React, { Component } from 'react';
import { Header, Footer, Loader } from '../layouts/general';
import Features from "../layouts/aboutus/Features";
import Brand from "../layouts/aboutus/Brand";
import Since from "../layouts/aboutus/Since";
import HappyClients from "../layouts/aboutus/HappyClients";
import Testimonials from "../layouts/aboutus/Testimonials";
import Services from "../layouts/aboutus/Services";
import NewsLetter from "../layouts/aboutus/NewsLetter";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Pages'
                }
            ],
            dataBanner: [
                {
                    id: 1,
                    classNameename01: 'flat-title-page parallax parallax7 style3',
                    classNameename02: 'container wrap-title-page ',
                    links: '/about-us',
                    names: 'About Us'
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }

                    <section className="banner-section position-relative">
                        <img className="banner-shape" src={process.env.PUBLIC_URL + '/images/banner/shape1.png'} alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner-content banner-padding">
                                        <h3 className="title">About us</h3>
                                        <p>Pleasure rationally encounter consequences are extremely painful great oppurtunity.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-7 mt-md-0">
                                    <div className="banner-content scene  banner-img">
                                        <div data-depth="0.2">
                                            <img alt="img" src={process.env.PUBLIC_URL + '/images/banner/1.png'} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Features/>
                    <Brand/>
                    <Since/>
                    <Services/>
                    <Testimonials/>
                    <HappyClients/>
                    <NewsLetter/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AboutUs;