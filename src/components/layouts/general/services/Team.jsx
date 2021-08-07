import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Team extends Component {
	constructor(props) {
        super(props);
        this.state = {
            itembox: [
                {
                    id: 1,
					title: 'Wealth Management',
					classicon: 'icon-benefit',
					boxcontent: 'Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation'
				},
            ]
        }
    }
    render() {
        return (
			
            <section class="team-section section-pb overflow-hidden">
            <div class="container position-relative">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="title-section">
                            <span class="sub-title">TEAM</span>
                            <h3 class="title">
                                People, <span class="text-primary">Behind</span> the Screen
                            </h3>
                            <p class="mb-5">
                                Pleasure rationally encounter consequences that are extremely
                                painful. Nor again is there anyone who loves or pursues or
                                desires to obtain
                            </p>
                            <p class="high-light mb-8">
                                Pleasure rationally encounter consequences that are extremely
                                painful. Nor again is there
                            </p>
                            <Link to="team" class="btn btn-lg btn-dark btn-hover-dark">View more</Link>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="new-team-members">
                            <div class="new-team-members-list">
                                <img src={process.env.PUBLIC_URL + '/images/team/rounded-img1.png'} alt="" />
                                <h3 class="title"><Link to="team">Cristopher Williams</Link></h3>
                                <span>Head of Idea</span>
                            </div>
                            <div class="new-team-members-list">
                                <img src={process.env.PUBLIC_URL + '/images/team/rounded-img2.png'} alt="" />
                                <h3 class="title"><Link to="team">Rebeca Smith</Link></h3>
                                <span>Head of HR</span>
                            </div>
                            <div class="new-team-members-list">
                                <img src={process.env.PUBLIC_URL + '/images/team/rounded-img3.png'} alt="" />
                                <h3 class="title"><Link to="team">Ricardo Powel</Link></h3>
                                <span>Head of Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Team;