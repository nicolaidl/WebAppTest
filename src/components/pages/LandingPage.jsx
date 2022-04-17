import React, { Component } from "react";
import HeaderAndText from "../molecules/HeaderAndText";
import Hero from "../molecules/Hero";

export default class LandingPage extends Component {
  getClick() {
    if (this.state.color === "#4cb96b") this.setState({ color: "#aaa" });
    else this.setState({ color: "#4cb96b" });
  }

  render() {
    let content = {
      headerAndTextContent: {
        header2: "Some random heading",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };

    return (
      <div>
        {/* <Hero /> */}
        <HeaderAndText props={content.headerAndTextContent} />
      </div>
    );
  }
}
