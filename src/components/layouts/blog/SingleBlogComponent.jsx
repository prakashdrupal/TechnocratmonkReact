import React, { Component } from "react";
import { Link } from "react-router-dom";
class SingleBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [
        {
          id: 1,
          numb: "1",
          class: "active",
          style: "page-item",
        },
        {
          id: 2,
          numb: "2",
        },
        {
          id: 3,
          numb: ">",
        },
      ],
      datablog: [
        {
          id: "1",
          srcimg: "images/blog/1.png",
          title: "Business Development Conferrence 2021",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem... ",
          day: "11",
          month: "July",
          year: "2021",
          author: "Tej Prakash",
        },
        {
          id: "2",
          srcimg: "images/blog/2.png",
          title: "Investment Planning for your Business",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...",
          day: "11",
          month: "August",
          year: "2021",
          author: "Ajeet Kumar",
        },
        {
          id: "3",
          srcimg: "images/blog/3.png",
          title: "New Strategy for new Startup Business",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...",
          day: "11",
          month: "September",
          year: "2021",
          author: "Manish Kumar",
        },
        {
          id: "4",
          srcimg: "images/blog/1.png",
          title: "Business Development Conferrence 2021",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem... ",
          day: "11",
          month: "July",
          year: "2021",
          author: "Tej Prakash",
        },
        {
          id: "5",
          srcimg: "images/blog/2.png",
          title: "Investment Planning for your Business",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...",
          day: "11",
          month: "August",
          year: "2021",
          author: "Sristy Gupta",
        },
        {
          id: "6",
          srcimg: "images/blog/3.png",
          title: "New Strategy for new Startup Business",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, sem...",
          day: "11",
          month: "September",
          year: "2021",
          author: "Nitish Kumar",
        },
      ],
    };
  }
  render() {
    return (
      <section class="blog-section section-py">
        <div class="container">
          <div class="row mb-n7">
            {this.state.datablog.map((data) => (
              <div class="col-lg-4 col-sm-6 mb-7" key={data.id}>
                <div class="blog-card">
                  <div class="thumb bg-light p-0 text-center">
                    <Link to="blog-single">
                      <img src={data.srcimg} alt="img" />
                    </Link>
                  </div>
                  <div class="blog-content">
                    <span class="blog-meta">
                      {data.author} - {data.day} {data.month}, {data.year}
                    </span>
                    <h3 class="title">
                      <Link to="blog-single">{data.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="row mt-10">
            <div class="col-12">
              <nav aria-label="Page navigation example">
                {/* <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#"><span class="pagination-hr"></span></a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                    </ul> */}
                <ul className="pagination justify-content-center">
                  {this.state.pagination.map((data) => (
                    <li className="page-item" key={data.id}>
                      <Link
                        className="page-link"
                        to="#"
                        className={data.class}
                        title=""
                      >
                        {data.numb}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleBlogComponent;
