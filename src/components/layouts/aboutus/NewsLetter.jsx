import React, { Component } from 'react';
class NewsLetter extends Component {
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
          <section class="news-letter-section section-pb">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-xl-6 mx-auto">
                  <div class="title-section mb-10 text-center">
                    <span class="sub-title">NEWSLETTER</span>
                    <h3 class="title mb-0">
                      Subscribe <span class="text-primary">Newsletter</span> &
                      <br class="d-none d-xl-block" />
                      get latest update...
                    </h3>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-10 mx-auto">
                  <form id="mc-form" class="news-letter-form d-flex">
                    <input
                      id="mc-email"
                      class="form-control"
                      type="email"
                      placeholder="Enter Email here"
                      name="email"
                      required=""
                    />
                    <button class="search-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default NewsLetter;