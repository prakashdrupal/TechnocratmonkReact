import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";
import { SingleBlogComponent } from '../layouts/blog';
class BlogGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Blog Gird',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Blog Gird'
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
                    title: 'Blog Gird',
                    classicon: '',
                    aria: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body">
                <div className="boxed">
                <Loader />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                 <section class="banner-section position-relative">
                    <img class="banner-shape" src={process.env.PUBLIC_URL + '/images/banner/shape1.png'} alt="shape" />
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="banner-content banner-padding">
                                    <h3 class="title">Blog Post</h3>
                                    <p>Pleasure rationally encounter consequences <br />are extremely painful great oppurtunity
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
                <SingleBlogComponent />
                <Footer />
                </div>
            </div>
            
        );
    }
}

export default BlogGrid;