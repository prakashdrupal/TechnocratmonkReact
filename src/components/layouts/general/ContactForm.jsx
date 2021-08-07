import React, { Component } from "react";
import { Link } from "react-router-dom";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itembox: [
        {
          id: 1,
          title: "Wealth Management",
          classicon: "icon-benefit",
          boxcontent:
            "Enim ad minim veniam, quis nostrud exercitation ullamco laboris. Quis nostrud exercitation",
        },
      ],
    };
  }
  render() {
    return (
      <section class="contact-section section-py">
        <div class="container">
          <div class="row mb-n7">
            <div class="col-xl-6 col-lg-6 mb-7">
              <div class="contact-title-section">
                <h3 class="title">Get in touch</h3>
                <p>
                  Top rated construction packages we pleasure rationally
                  encounter
                  <br class="d-none d-xl-block" />
                  consequences interesting who loves or pursue or desires
                </p>
              </div>

              <form
                id="contactForm"
                class="row"
                action="assets/php/contact.php"
                method="POST"
              >
                <div class="col-12 col-sm-6 mb-7">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name*"
                  />
                </div>
                <div class="col-12 col-sm-6 mb-7">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email*"
                  />
                </div>

                <div class="col-12 mb-9">
                  <textarea
                    class="form-control massage-control"
                    name="massage"
                    id="massage"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button
                    id="contactSubmit"
                    type="submit"
                    class="btn btn-dark btn-hover-dark"
                    data-complete-text="Well Done!"
                  >
                    Send Message
                  </button>
                  <p class="form-message mt-3"></p>
                </div>
              </form>
            </div>

            <div class="col-xl-5 col-lg-6 mb-7 offset-xl-1">
              <div class="contact-address text-center">
                <div class="address-list mb-4 mb-xl-10 pb-2">
                  <h4 class="title">Office Addres</h4>
                  <p>
                    245 Southern Street, Apartment no. 174 Central Twon, New
                    Yourk, USa
                  </p>
                </div>
                <div class="address-list mb-4 mb-xl-10 pb-2">
                  <h4 class="title">Phone Number</h4>
                  <ul>
                    <li>
                      <Link class="phone-number" Link="tel:+12345678987">
                        +12345 678 987
                      </Link>
                    </li>
                    <li>
                      <Link class="phone-number" to="tel:+98745612321">
                        +98745 612 321
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="address-list">
                  <h4 class="title">Web Address</h4>
                  <ul>
                    <li>
                      <Link class="mailto" to="mailto:info@example.com">
                        info@example.com
                      </Link>
                    </li>
                    <li>
                      <Link class="mailto" to="mailto:www.example.com">
                        www.example.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
