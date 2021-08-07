import React, { Component } from "react";
import { Header, Footer, Loader } from "../layouts/general";
import  FaqList  from "../layouts/general/FaqList";
class Faq extends Component {
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
          <FaqList />

          <Footer />
        </div>
      </div>
    );
  }
}

export default Faq;
