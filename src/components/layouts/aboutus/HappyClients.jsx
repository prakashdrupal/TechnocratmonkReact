import React, { Component } from 'react';
class HappyClients extends Component {
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
            <section class="funfact-section section-pb position-relative">
            <div class="container">
              <div class="row mb-n7">
                <div class="col-md-3 col-6 mb-7">
                  <div class="fanfact text-md-left text-center">
                    <span class="title">
                      {" "}
                      <span class="counter">1200</span>+
                    </span>
                    <h6 class="sub-title">Projects done</h6>
                  </div>
                </div>
                <div class="col-md-3 col-6 mb-7">
                  <div class="fanfact text-center">
                    <span class="title text-primary">
                      <span class="counter">2354</span>+
                    </span>
                    <h6 class="sub-title">Happy Clients</h6>
                  </div>
                </div>
                <div class="col-md-3 col-6 mb-7">
                  <div class="fanfact text-center">
                    <span class="title">
                      {" "}
                      <span class="counter">3299</span>+
                    </span>
                    <h6 class="sub-title">Cup Coffee</h6>
                  </div>
                </div>
                <div class="col-md-3 col-6 mb-7">
                  <div class="fanfact text-md-right text-center">
                    <span class="title">
                      <span class="counter">101</span>+
                    </span>
                    <h6 class="sub-title">Award Wins</h6>
                  </div>
                </div>
              </div>
            </div>
            <svg
              class="funfact-svg"
              id="funfact"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 535"
            >
              <path
                class="funfact-path"
                d="M1950,327.309S1666,1.64,1336,111.4,906,290.324,671,164.377,120.868,57.118-64,225.351"
              />
              <path
                id="Shape_5_copy"
                data-name="Shape 5 copy"
                class="funfact-path"
                d="M1919.04,532.448s-223.79-369.607-567.75-318.167-454.362,102.4-664.214-62.038S163.566-47.917-47.473,86.059"
              />
            </svg>
          </section>
        )
                                
    }
}

export default HappyClients;