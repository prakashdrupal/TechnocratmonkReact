import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listrecentpost: [
        {
          id: "1",
          title: "Why Do I Need To Use Financial ?",
          srcimg: "images/blog/post/1.png",
          datapost: "July 01, 2021"
        },
        {
          id: "2",
          title: "Why your sales forecast is off",
          srcimg: "images/blog/post/2.png",
          datapost: "June 04, 2021"
        },
        {
          id: "3",
          title: "6 tips to retain your top sales talent",
          srcimg: "images/blog/post/3.png",
          datapost: "January 11, 2021"
        },
        {
          id: "4",
          title: "What the martian can teach sales",
          srcimg: "images/blog/post/1.png",
          datapost: "January 11, 2021"
        },
      ],
      category: [
        {
          id: "1",
          title: "Digital Solution",
          count: "328",
        },
        {
          id: "2",
          title: "Business Plan",
          count: "240",
        },
        {
          id: "3",
          title: "Investment Planning",
          count: "50",
        },
        {
          id: "4",
          title: "Consultancy",
          count: "34",
        },
      ],
      archive: [
        {
          id: "1",
          postdate: "September. 2021",
          count: "328",
        },
        {
          id: "2",
          postdate: "August, 2021",
          count: "240",
        },
        {
          id: "3",
          postdate: "July, 2021",
          count: "50",
        },
        {
          id: "4",
          postdate: "June, 2020",
          count: "34",
        },
      ],
      tabcloud: [
        {
          id: "1",
          tablink: "Corporate",
        },
        {
          id: "2",
          tablink: "Consulting",
        },
        {
          id: "3",
          tablink: "Creative",
        },
        {
          id: "4",
          tablink: "Finanve",
        },
        {
          id: "5",
          tablink: "Insurance",
        },
        {
          id: "6",
          tablink: "Leasing",
        },
        {
          id: "7",
          tablink: "Management",
        },
        {
          id: "8",
          tablink: "Portfolio",
        },
        {
          id: "9",
          tablink: "ThemeForest",
        },
      ],
    };
  }
  render() {
    return (
      <div className="col-xl-3 col-lg-4 mb-7  offset-xl-1">
        <div className="widget-wrapper widget-wrapper-nl">
          <div className="sidebar-widget">
            <h3 className="widget-title">Search</h3>
            <div className="widget-content">
              <div className="widget-search">
                <form action="#">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Type your keyword..."
                  />
                  <button className="widget-search-btn">
                    <i className="icofont-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <div className="widget-list">
              <ul className="list-group list-group-flush">
                {this.state.category.map((data) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={data.id}
                  >
                    {data.title} <span>{data.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3 className="widget-title">popular post</h3>
            {this.state.listrecentpost.map((data) => (
              <div className="widget-post-list">
                <Link to="#" className="post-thumb">
                  <img src={data.srcimg} alt="" />
                </Link>
                <div className="widget-post-content">
                  <h3 className="widget-sub-title">
                    <Link to="#">{data.title}</Link>
                  </h3>
                  <p className="post-meta">{data.datapost}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sidebar-widget">
            <h3 className="widget-title">Archive</h3>
            <div className="widget-list">
              <ul className="list-group list-group-flush">
                {this.state.archive.map((data) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={data.id}
                  >
                    {data.postdate} <span>{data.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3 className="widget-title">Tags</h3>
            <div className="widget-tags">
              {this.state.tabcloud.map((data) => (
                <Link key={data.id} to="#" title="" className="widget-tag-link">
                  {data.tablink}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarBlog;
