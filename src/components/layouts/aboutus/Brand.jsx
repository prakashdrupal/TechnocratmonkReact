import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Brand extends Component {
	constructor(props) {
        super(props);
        this.state = {
            menutab: [
                {
                    id: 1,
					title: 'Risk Management',
                }
				
            ],
            titletab: [
                {
                    id: 1,
                    title: 'Our Brochure',
                    description: 'View our 2016 financial prospectus brochure for an easy to read guide on all of the services offered.'
                }
            ]
        }
    }
    render() {
        return (
		    <div className="brand-section section-py">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="brand-carousel">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="single-brand">
                                                <Link to="#" className="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/1.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="single-brand">
                                                <Link to="#" className="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/2.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="single-brand">
                                                <Link to="#" className="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/3.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="single-brand">
                                                <Link to="#" className="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/4.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination d-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )                           
    }
}

export default Brand;