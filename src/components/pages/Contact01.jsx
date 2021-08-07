import React, { Component } from "react";
import { Header, Footer, Loader } from "../layouts/general";
import ContactForm from "../layouts/general/ContactForm";
class Contact01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Blog",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Contact",
        },
      ],
      breadcrumbs: [
        {
          id: 1,
          title: "Home",
          classicon: "fa fa-angle-right",
          aria: "true",
        },
        {
          id: 2,
          title: "Contact",
          classicon: "",
          aria: "",
        },
      ],
      contactinfo: [
        {
          id: "1",
          title: "Address",
          info: "PO Box 16122 Collins Street West,Victoria 8007 Australia",
        },
        {
          id: "2",
          title: "Phone number",
          info: "Call us: 190 140 2468",
        },
        {
          id: "3",
          title: "E-mail address",
          info: "support@themesflat.com",
        },
      ],
    };
  }
  render() {
    return (
      <div className="bg-body3">
        <div className="boxed">
          <Loader />
          {this.state.headers.map((data) => (
            <Header data={data} key={data.id} />
          ))}
          <section class="banner-section position-relative">
            <img
              class="banner-shape"
              src={process.env.PUBLIC_URL + "/images/banner/shape1.png"}
              alt=""
            />
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="banner-content banner-padding">
                    <h3 class="title">Contact us</h3>
                    <p>
                      Pleasure rationally encounter consequences <br />
                      are extremely painful great oppurtunity
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mt-7 mt-md-0">
                  <div class="banner-content scene banner-img">
                    <div data-depth="0.2">
                      <img
                        src={process.env.PUBLIC_URL + "/images/contact/1.png"}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ContactForm />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact01;
