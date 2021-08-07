import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Featured extends Component {
    render() {
        return (
            <section class="feature-section section-pt position-relative">
            <img class="path-img2" src={process.env.PUBLIC_URL + '/images/feature/shape.png'} alt="images_not_found" />
            <div class="container custom-container">
                <div class="row g-0 align-items-center">
                    <div class="col-xl-6 col-lg-8 mx-auto">
                        <div class="title-section mb-3 text-center">
                            <span class="sub-title">FEATURES</span>
                            <h3 class="title">
                                We are <span class="text-primary">different</span> because...
                            </h3>
                            <p class="mb-10">
                                Pleasure rationally encounter consequences that are extremely
                                painful. Nor again is there anyone who loves or pursues or
                                desires to obtain
                            </p>
                            <Link to="business-plan" class="btn btn-lg btn-dark btn-hover-dark">Get Started</Link>
                        </div>
                    </div>

                    <div class="col-12">
                        <div id="grid" class="grid row mb-n7">
                            <div class="grid-item mb-7">
                                <div class="feature-card bg-light">
                                    <span class="card-shape card-shape-light"></span>
                                    <span class="card-shape card-shape-dark"></span>
                                    <img class="logo" src={process.env.PUBLIC_URL + '/images/feature/logo/1.png'} alt=" feature logo" />
                                    <h4 class="title my-6"><Link to="marketing-policy">Strong Security</Link></h4>
                                    <p>
                                        Pleasure rationally encounter are extremely painful anyone
                                        who loves or pursues
                                    </p>
                                </div>
                            </div>
                            <div class="grid-item card-mt-75 mb-7">
                                <div class="feature-card bg-light">
                                    <span class="card-shape card-shape-light"></span>
                                    <span class="card-shape card-shape-dark"></span>
                                    <img class="logo" src={process.env.PUBLIC_URL + '/images/feature/logo/2.png'} alt=" feature logo" />
                                    <h4 class="title my-6"><Link to="creative-strategy">Creative Idea</Link></h4>
                                    <p>
                                        Pleasure rationally encounter are extremely painful anyone
                                        who loves or pursues
                                    </p>
                                </div>
                            </div>
                            <div class="grid-item mb-7">
                                <div class="feature-card bg-light">
                                    <span class="card-shape card-shape-light"></span>
                                    <span class="card-shape card-shape-dark"></span>
                                    <img class="logo" src={process.env.PUBLIC_URL + '/images/feature/logo/3.png'} alt=" feature logo" />
                                    <h4 class="title my-6"><Link to="business-plan">Best Service</Link></h4>
                                    <p>
                                        Pleasure rationally encounter are extremely painful anyone
                                        who loves or pursues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Featured;