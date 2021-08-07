import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/blog/1.png',
                    classname:'post style2',
                    title: 'Business Development Conferrence 2021',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    author: 'Tej Prakash',
                    day: '11',
                    month: 'July',
                    year: '2021'
                },
                {
                    id: 2,
                    srcimg: 'images/blog/2.png',
                    classname:'post style2',
                    title: 'Game Development Conferrence 2021',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    author: 'Ajeet Kumar',
                    day: '20',
                    month: 'September',
                    year: '2021'
                },
                {
                    id: 3,
                    srcimg: 'images/blog/3.png',
                    classname:'post style2',
                    title: 'Apps Development Conferrence 2021',
                    description:'Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, ...',
                    author: 'Manish',
                    day: '25',
                    month: 'September',
                    year: '2021'
                },
            ]
        }
    }
    
    render() {
        return (
            <section class="blog-section section-pb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4">
                            <div class="title-section mb-lg-10 pb-lg-1">
                                <span class="sub-title">BLOG POST</span>
                                <h3 class="title mb-lg-0">
                                    Latest<span class="text-primary">Post</span> from Blog
                                </h3>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                            <div class="title-section pl-xl-5">
                                <p class="mt-lg-10 pt-lg-3 mb-10 mb-lg-0">
                                    Pleasure rationally encounter consequences that are extremely
                                    painful. Nor again is there anyone who loves or pursues or
                                    desires to obtain
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-n7">
                        {
                            this.state.datanewBox.map(data => (
                                <div class="col-lg-4 col-sm-6 mb-7" key={data.id}>
                                    <div class="blog-card">
                                        <div class="thumb bg-light text-center">
                                            <Link to="blog-single">
                                            <img src={data.srcimg} alt="" />
                                            </Link>
                                        </div>
                                        <div class="blog-content">
                                            <Link to="#"><span class="blog-meta">{data.author} - {data.day} {data.month}, {data.year}</span></Link>
                                            <h3 class="title">
                                            <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
           </section>                   
        );
    }
}

export default BlogFeatured;