import React, { Component } from "react";
class FaqList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlegird: [
        {
          id: 1,
          title: "Our Team",
          description:
            "Pleasure rationally encounter consequences are extremely painful great oppurtunity",
          srcimg: "images/team/5.png",
        },
      ],
      boxgrid: [
        {
          id: "1",
          srcimg: "images/team/1.png",
          subtitle: "Founder CEO",
          title: "STEVEN MONROE",
          listsocial: [
            {
              id: "1",
              datatitle: "Facebook",
              classtitle: "facebook",
              classicon: "fa fa-facebook",
            },
            {
              id: "2",
              datatitle: "LinkedIn",
              classtitle: "linkedin",
              classicon: "fa fa-linkedin",
            },
            {
              id: "3",
              datatitle: "Google Plus",
              classtitle: "google-plus",
              classicon: "fa fa-google-plus",
            },
          ],
        },
        {
          id: "2",
          srcimg: "images/team/2.png",
          subtitle: "Founder CEO",
          title: "STEVEN MONROE",
          listsocial: [
            {
              id: "1",
              datatitle: "Facebook",
              classtitle: "facebook",
              classicon: "fa fa-facebook",
            },
            {
              id: "2",
              datatitle: "LinkedIn",
              classtitle: "linkedin",
              classicon: "fa fa-linkedin",
            },
            {
              id: "3",
              datatitle: "Google Plus",
              classtitle: "google-plus",
              classicon: "fa fa-google-plus",
            },
          ],
        },
        {
          id: "3",
          srcimg: "images/team/3.png",
          subtitle: "Finance & Commerce",
          title: "MICHAEL KING",
          listsocial: [
            {
              id: "1",
              datatitle: "Facebook",
              classtitle: "facebook",
              classicon: "fa fa-facebook",
            },
            {
              id: "2",
              datatitle: "LinkedIn",
              classtitle: "linkedin",
              classicon: "fa fa-linkedin",
            },
            {
              id: "3",
              datatitle: "Google Plus",
              classtitle: "google-plus",
              classicon: "fa fa-google-plus",
            },
          ],
        },
        {
          id: "4",
          srcimg: "images/team/4.png",
          subtitle: "Company Director",
          title: "ROMEO ALVAREZ",
          listsocial: [
            {
              id: "1",
              datatitle: "Facebook",
              classtitle: "facebook",
              classicon: "fa fa-facebook",
            },
            {
              id: "2",
              datatitle: "LinkedIn",
              classtitle: "linkedin",
              classicon: "fa fa-linkedin",
            },
            {
              id: "3",
              datatitle: "Google Plus",
              classtitle: "google-plus",
              classicon: "fa fa-google-plus",
            },
          ],
        },
		{
			id: "5",
			srcimg: "images/team/4.png",
			subtitle: "Company Director",
			title: "ROMEO ALVAREZ",
			listsocial: [
			  {
				id: "1",
				datatitle: "Facebook",
				classtitle: "facebook",
				classicon: "fa fa-facebook",
			  },
			  {
				id: "2",
				datatitle: "LinkedIn",
				classtitle: "linkedin",
				classicon: "fa fa-linkedin",
			  },
			  {
				id: "3",
				datatitle: "Google Plus",
				classtitle: "google-plus",
				classicon: "fa fa-google-plus",
			  },
			],
		  },
		  {
			id: "6",
			srcimg: "images/team/4.png",
			subtitle: "Company Director",
			title: "ROMEO ALVAREZ",
			listsocial: [
			  {
				id: "1",
				datatitle: "Facebook",
				classtitle: "facebook",
				classicon: "fa fa-facebook",
			  },
			  {
				id: "2",
				datatitle: "LinkedIn",
				classtitle: "linkedin",
				classicon: "fa fa-linkedin",
			  },
			  {
				id: "3",
				datatitle: "Google Plus",
				classtitle: "google-plus",
				classicon: "fa fa-google-plus",
			  },
			],
		  },
		  {
			id: "7",
			srcimg: "images/team/4.png",
			subtitle: "Company Director",
			title: "ROMEO ALVAREZ",
			listsocial: [
			  {
				id: "1",
				datatitle: "Facebook",
				classtitle: "facebook",
				classicon: "fa fa-facebook",
			  },
			  {
				id: "2",
				datatitle: "LinkedIn",
				classtitle: "linkedin",
				classicon: "fa fa-linkedin",
			  },
			  {
				id: "3",
				datatitle: "Google Plus",
				classtitle: "google-plus",
				classicon: "fa fa-google-plus",
			  },
			],
		  },
		  {
			id: "8",
			srcimg: "images/team/4.png",
			subtitle: "Company Director",
			title: "ROMEO ALVAREZ",
			listsocial: [
			  {
				id: "1",
				datatitle: "Facebook",
				classtitle: "facebook",
				classicon: "fa fa-facebook",
			  },
			  {
				id: "2",
				datatitle: "LinkedIn",
				classtitle: "linkedin",
				classicon: "fa fa-linkedin",
			  },
			  {
				id: "3",
				datatitle: "Google Plus",
				classtitle: "google-plus",
				classicon: "fa fa-google-plus",
			  },
			],
		  },
      ],
    };
  }
  render() {
    return (
      <div>
         <section class="banner-section position-relative">
        <img class="banner-shape" src={process.env.PUBLIC_URL + '/images/banner/shape1.png'} alt="shape" />
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="banner-content banner-padding">
                        <h3 class="title">FAQ</h3>
                        <p>
                            Pleasure rationally encounter consequences <br />
                are extremely painful great oppurtunity
                        </p>
                    </div>
                </div>
                <div class="col-md-6 mt-7 mt-md-0">
                    <div class="banner-content scene banner-img">
                        <div data-depth="0.2">
                            <img src={process.env.PUBLIC_URL + '/images/faq/1.png'} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section section-py">
        <div class="container">
            <div class="row">
                <div class="col-xl-10">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span class="question-tag">Q:</span>What is your process
                                    when you start working with a new client?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span class="question-tag">Q:</span>Why should I use a
                                    Travel Management Ccompany for Business Travel?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span class="question-tag">Q:</span>Where can I find my
                                    itinerary once my trip is booked?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFoure">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span class="question-tag">Q:</span>I need to make a last
                                    minute cancelation or schedule change, what to do?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <span class="question-tag">Q:</span>Can you help with other
                                    parts of my Business, too?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <span class="question-tag">Q:</span>How can I make a
                                    profitable Business deal?
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <span class="question-tag">Q:</span>What is the main
                                    strategy for Stratup Business?
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingEight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    <span class="question-tag">Q:</span>Hom to make Marketing
                                    policy for new Business?
                                </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingNine">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    <span class="question-tag">Q:</span>How much should I
                                    capitalize my business with at the beginning?
                                </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTen">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    <span class="question-tag">Q:</span>Should I require prospective angel or venture capital investors to sign a
                                    Non-Disclosure Agreement (NDA) so they don’t steal my idea?
                                </button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
}

export default FaqList;
