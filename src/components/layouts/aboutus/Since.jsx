import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Since extends Component {
	constructor(props) {
        super(props);
        this.state = {
            menutab: [
                {
                    id: 1,
					title: 'Risk Management',
                },
				
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
            <section class="about-us position-relative">
            <div class="container">
                <div class="row mb-n7 align-items-center">
                    <div class="col-xl-5 col-md-6 offset-xl-1 mb-7">
                        <div class="title-section">
                            <span class="sub-title">ABOUT US</span>
                            <h3 class="title">
                                Best <span class="text-primary">Digital Agency</span><br class="d-none d-xl-block" />in the Town
                            </h3>
                            <span class="date-meta">Scince 2001 <span class="hr"></span>
                            </span>
                            <p class="mb-5">
                                Pleasure rationally encounter consequences that are extremely
                                painful. Nor again is there anyone who loves or pursues or
                                desires to obtain
                            </p>
                            <p class="high-light mb-8">
                                Pleasure rationally encounter consequences that are extremely
                                painful. Nor again is there
                            </p>
                            <Link to="#" class="btn btn-lg btn-dark btn-hover-dark">Learn more</Link>
                        </div>
                    </div>
                    <div class="col-xl-6 order-lg-first col-md-6 mb-7">
                        <div class="about-photo scene text-center text-lg-left">
                            <div data-depth="0.1">
                                <img src={process.env.PUBLIC_URL + '/images/about/2.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
                                
    }
}

export default Since;