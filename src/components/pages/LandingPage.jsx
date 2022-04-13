import React, { Component } from "react";
//import MediaQuery from "../../utils/MediaQuery";
import Hero from '../molecules/Hero'
export default class LandingPage extends Component {
 

  getClick() {
    if (this.state.color === "#4cb96b") this.setState({ color: "#aaa" });
    else this.setState({ color: "#4cb96b" });
  }

  render() {
    return (
      <div>

        <Hero></Hero>
        <h1>LandingPage</h1>
      </div>
    );
  }
}
