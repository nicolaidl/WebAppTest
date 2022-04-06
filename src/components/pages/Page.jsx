// Importing combination
import React, { Component } from "react";
//import MediaQuery from "../../utils/MediaQuery";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = { pages: [] };
  }

  getClick() {
    if (this.state.color === "#4cb96b") this.setState({ color: "#aaa" });
    else this.setState({ color: "#4cb96b" });
  }

  render() {
    return (
      <div>
        <h1>Page</h1>
      </div>
    );
  }
}
