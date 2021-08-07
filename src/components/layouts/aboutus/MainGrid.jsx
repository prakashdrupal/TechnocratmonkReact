import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainGrid extends Component {
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
          <img
            class="banner-shape"
            src={process.env.PUBLIC_URL + "/images/banner/shape1.png"}
            alt="shape"
          />
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                {this.state.titlegird.map((data) => (
                  <div class="banner-content banner-padding" key={data.id}>
                    <h3 class="title">{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                ))}
              </div>
              <div class="col-md-6 mt-7 mt-md-0">
                <div class="banner-content scene banner-img">
                  <div data-depth="0.2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/team/5.png"}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="service-section section-py">
          <div class="container">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n7">
              {this.state.boxgrid.map((data) => (
                <div
                  class="col col-md-6 col-lg-4 col-xl-3 text-center mb-7"
                  key={data.id}
                >
                  <div class="team-card">
                    <div class="thumb">
                      <Link href="team">
                        <img src={data.srcimg} alt={data.title} />
                      </Link>
                    </div>
                    <div class="content">
                      <h3 class="title">
                        <Link href="#">{data.title}</Link>
                      </h3>
                      <span>{data.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainGrid;
