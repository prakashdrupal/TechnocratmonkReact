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
		    <div class="brand-section section-py">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="brand-carousel">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="single-brand">
                                                <Link to="#" class="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/1.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-brand">
                                                <Link to="#" class="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/2.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-brand">
                                                <Link to="#" class="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/3.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-brand">
                                                <Link to="#" class="thumb"><img src={process.env.PUBLIC_URL + '/images/brand-logo/4.png'} alt="brand logo" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination d-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )                           
    }
}

export default Brand;