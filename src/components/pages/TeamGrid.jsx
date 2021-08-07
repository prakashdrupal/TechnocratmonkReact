import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { MainGrid } from "../layouts/aboutus";
class TeamGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Pages",
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

          <MainGrid />

          <Footer />
        </div>
      </div>
    );
  }
}

export default TeamGrid;
