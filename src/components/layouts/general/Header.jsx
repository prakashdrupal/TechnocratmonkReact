import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import menus from "../menu";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linklogo: "/",
    };
  }

  render() {
    const { location } = this.props;
    return (
      // <div className="modal fade offcanvas-modal" id="exampleModal">
      //   <div className="modal-dialog offcanvas-dialog">
      //     <div className="modal-content">
      //       <div className="modal-header offcanvas-header">
      //   <Link className="offcanvas-logo" to="/" onClick={() => {window.location.to=this.state.linklogo}}><img src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="Logo" width={157} height={29}
      //               data-retina="images/logo.png" data-width={157} data-height={29} />
      //   </Link>
      //         <button
      //           type="button"
      //           className="btn-close"
      //           data-bs-dismiss="modal"
      //           aria-label="Close"
      //         ></button>
      //       </div>

      //       <nav id="offcanvasNav" className="offcanvas-menu">
      //         <ul>
      //           <li>
      //             <Link to="/">Home</Link>
      //           </li>
      //           <li>
      //             <Link to="about">About</Link>
      //           </li>
      //           <li>
      //             <Link to="javascript:void(0)">Service</Link>
      //             <ul>
      //               <li>
      //                 <Link to="service">service</Link>
      //               </li>
      //               <li>
      //                 <Link to="single-service">single service</Link>
      //               </li>
      //             </ul>
      //           </li>
      //           <li>
      //             <Link to="javascript:void(0)">Pages</Link>
      //             <ul>
      //               <li>
      //                 <Link to="faq">faq</Link>
      //               </li>
      //               <li>
      //                 <Link to="team">team</Link>
      //               </li>
      //             </ul>
      //           </li>
      //           <li>
      //             <Link to="javascript:void(0)">Blog</Link>
      //             <ul>
      //               <li>
      //                 <Link to="blog">blog</Link>
      //               </li>
      //               <li>
      //                 <Link to="blog-grid-left-sidebar">
      //                   blog grid left sidebar
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link to="blog-grid-right-sidebar">
      //                   blog grid right sidebar
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link to="blog-details">blog details</Link>
      //               </li>
      //             </ul>
      //           </li>
      //           <li>
      //             <Link to="contact">Contact</Link>
      //           </li>
      //         </ul>
      //       </nav>
      //     </div>
      //   </div>
      // </div>

      <header id="active-sticky" class="header-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <div class="header-logo">
                <Link
                  className="offcanvas-logo"
                  to="/"
                  onClick={() => {
                    window.location.to = this.state.linklogo;
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/logo/logo.png"}
                    alt="Logo"
                    width={157}
                    height={29}
                    data-retina="images/logo.png"
                    data-width={157}
                    data-height={29}
                  />
                </Link>
              </div>
            </div>
            <div class="col text-end">
              <nav class="main-menu d-none d-lg-block">
                <ul class="d-flex">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="about-us">About</Link>
                  </li>
                  <li>
                    <Link to="services-v2">Service</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul class="sub-menu">
                      <li class="sub-menu-item">
                        <Link class="sub-menu-link" to="faq">
                          FAQ
                        </Link>
                      </li>
                      <li class="sub-menu-item">
                        <Link class="sub-menu-link" to="team">
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="blog-grid">Blog</Link>
                    {/*<ul class="sub-menu">
                       <li class="sub-menu-item">
                        <Link
                          class="sub-menu-link"
                          to="blog-grid-left-sidebar.html"
                        >
                          blog grid left sidebar
                        </Link>
                      </li>
                      <li class="sub-menu-item">
                        <Link
                          class="sub-menu-link"
                          to="blog-grid-right-sidebar.html"
                        >
                          blog grid right sidebar
                        </Link>
                      </li> 
                      <li class="sub-menu-item">
                        <Link class="sub-menu-link" to="blog-details.html">
                          blog details
                        </Link>
                      </li>
                    </ul>*/}
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <button
                class="toggle"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span class="icon-top"></span>
                <span class="icon-middle"></span>
                <span class="icon-bottom"></span>
              </button>
            </div>
            {/* <!-- Header Menu End --> */}
          </div>
        </div>
        {/* <!-- Header  End --> */}
      </header>
    );
  }
}

export default withRouter(Header);
