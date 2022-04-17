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
      headerAndTextContent1: {
        header1: "Some random heading 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
      headerAndTextContent2: {
        header2: "Some random heading 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };

    return (
      <div>
        {/* <Hero /> */}
        <HeaderAndText
          header1={content.headerAndTextContent1.header1}
          text={content.headerAndTextContent1.text}
        />

        <HeaderAndText
          header2={content.headerAndTextContent2.header2}
          text={content.headerAndTextContent2.text}
        />
      </div>
    );
  }
}
