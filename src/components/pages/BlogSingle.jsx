import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";
import { SidebarBlog} from '../layouts/blog';
class BlogGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Conference on how to make profitable Business Deals',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Why Do I Need To Use Financial ?'
                }
            ],
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Home',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 2,
                    title: 'Why Do I Need To Use Financial ?',
                    classicon: '',
                    aria: ''
                }
            ],
            list: [
                {
                    id: 1,
                    text: 'Customer experience, which includes the impression the homepage and overall design style give the customers their satisfaction when they interact with the site and perform tasks.'

                },
                {
                    id: 2,
                    text: 'Service-level, which looks at responsiveness and reliability of websites – scores them on how quickly they respond to user commands and such factors as average downtime.'
                },
                {
                    id: 3,
                    text: 'Best practices, such as ease of use, quality, availability and security – site managers must be compliant with data laws requiring them to protect customer information and the integrity of customer accounts.'
                }
            ],
            datablog: [
                {
                    id: '1',
                    srcimg: 'images/blog-details/1.png',
                    title: 'Conference on how to make profitable Business Deals',
                    time: '25 September, 2021',
                    author: 'Tej Prakash Prasad',
                    category: 'Business',
                    comments: 'No comment',
                    description: 'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, semper ligula. Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor. Integer et mi sed dolor eleifend pretium quis ut velit. Nam sit amet arcu feugiat, consequat orci at, ultrices magna ',
                    description1: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
                    description2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
                },
            ],
            tabcloud: [
                {
                    id: '1',
                    tablink: 'Creative'
                },
                {
                    id: '2',
                    tablink: 'Portfolio'
                },
                {
                    id: '3',
                    tablink: 'ThemeForest'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Loader />
                {this.state.headers.map((data) => (
                <Header data={data} key={data.id} />
                ))}
            <section class="banner-section position-relative">
            <img class="banner-shape" src={process.env.PUBLIC_URL + '/images/banner/shape1.png'} alt="shape" />
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="banner-content banner-padding">
                            <h3 class="title">Blog Details</h3>
                            <p>
                                Pleasure rationally encounter consequences <br />are extremely painful great oppurtunity
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 mt-7 mt-md-0">
                        <div class="banner-content scene banner-img">
                            <div data-depth="0.2">
                                <img src={process.env.PUBLIC_URL + '/images/blog/banner.png'} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blog-section section-py">
            <div class="container">
                <div class="row mb-n7">
                    <div class="col-xl-8 col-lg-8 mb-7">
                    {
                                this.state.datablog.map(data =>(
                    <div class="blog-details-content" key={data.id}>
                        <div class="blog-details-thumb">
                            <img src={data.srcimg} alt="financial" />
                        </div>
                        <p class="blog-details-meta">{data.author} - {data.time}</p>
                        <h3 class="blog-details-title">{data.title}</h3>
                        <p class="pb-2">
                        {data.description}
                                            <br class="d-none d-xl-block" />{data.description1}
                        </p>
                        <div class="blog-details-list">
                            <p>
                                <i class="fa fa-angle-double-right"></i>

                                Quisquam est qui dolorem ipsum quia dolor sit amet consectetur
                            </p>
                            <p>
                                <i class="fa fa-angle-double-right"></i>
                                These cases are perfectly simple and easy to distinguish
                            </p>
                        </div>
                        <div class="blog-qutation">
                            <p>
                            {data.description2}
                            </p>
                            <i class="icofont-quote-right"></i>
                        </div>
                        <div class="blog-details-grid">
                            <div class="row mb-n7">
                                <div class="col mb-7">
                                    <p>
                                        Pleasure rationally service are extremely are anyone who
                                        loves or pursues These cases are perfectly simple and easy
                                        to a distinguish. In a free hour, when our power of choice
                                        is untrammelled a circumstances and owing to the claims of
                                        duty some of the maintain detials for the Business
                                    </p>
                                </div>
                                <div class="col mb-7 text-end">
                                    <img class="d-block mx-auto mx-lg-0" src={process.env.PUBLIC_URL + '/images/blog-details/2.png'} alt="img" />
                                </div>
                                <div class="col-12 mb-7">
                                    <p class="pt-2">
                                        Pleasure rationally encounter consequences that are
                                        extremely painful. Nor again there who loves or pursues or
                                        desires to obtain voluptas sit aspernatur aut odit aut
                                        fugit, sed consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="social-tags d-sm-flex justify-content-between align-items-center">
                           {
                                this.state.tabcloud.map(data =>(
                                <p class="mb-4 mb-sm-0" key={data.id}>{data.tablink}</p>
                                ))
                            }

                            <ul class="social-links d-flex">
                                <li class="share"><span>Share</span></li>
                                <li>
                                    <a href="#"><i class="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="icofont-instagram"></i></a>
                                </li>
                            </ul>

                        </div>
                        <div class="blog-comments">
                            <h3 class="blog-comment-title">{data.comments}</h3>
                        </div>
                        
                        <form id="contactForm" action="assets/php/contact.php" method="POST" class="row">
                            <div class="col-12 col-sm-6 col-md-4 mb-7">
                                <input type="text" class="form-control" id="name" placeholder="Your Name*" name="name" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 mb-7">
                                <input type="text" class="form-control" id="email" placeholder="Your Email*" name="email" />
                            </div>

                            <div class="col-12 col-sm-6 col-md-4 mb-7">
                                <input type="text" class="form-control" id="number" placeholder="Phone number" name="number" />
                            </div>

                            <div class="col-12 mb-9">
                                <textarea class="form-control massage-control" name="massage" id="massage" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button id="contactSubmit" type="submit" class="btn btn-lg btn-dark btn-hover-dark" data-complete-text="Well Done!">
                                    Submit
                                </button>
                                <p class="form-message mt-3"></p>
                            </div>
                        </form>

                    </div>
                    ))
                }
                    </div>

                    <SidebarBlog />
                </div>
            </div>
        </section>
        <Footer />
        </div>
        );
    }
}

export default BlogGrid;