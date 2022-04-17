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
      heroContent: {
        header: "A healthy meal delivered to your door, every single day",
        text: "The smart 365-days-per-yer food sub that will make Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
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
        <Hero
          text={content.heroContent.text}
          header={content.heroContent.header}
        />
        {/* <HeaderAndText
          header1={content.headerAndTextContent1.header1}
          text={content.headerAndTextContent1.text}
          backgroundColor={"#fff"}
          textColor={"#000"}
        /> */}

        {/* <section>
          <HeaderAndText
            header2={content.headerAndTextContent2.header2}
            text={content.headerAndTextContent2.text}
            backgroundColor={"#f7f7f7"}
            textColor={"#2E2E2E"}
          />
        </section> */}
      </div>
    );
  }
}
