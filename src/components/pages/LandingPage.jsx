import React, { Component } from "react";
import HeaderAndText from "../organisms/HeaderAndText";
import Hero from "../organisms/Hero";
import frontImg from "../../images/pexels-desk.jpg";

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
        frontImg: frontImg,
        ctaText: "See all services",
        ctaLink: "/Services",
      },
      headerAndTextContent1: {
        header1: "Landing Page",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
      headerAndTextContent2: {
        header2: "Some random heading 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };

    return (
      <div className="landing-page" style={{ paddingTop: "20px" }}>
        <header>
          <Hero
            image={content.heroContent.frontImg}
            text={content.heroContent.text}
            header={content.heroContent.header}
            shade="rgba(255, 0, 0, 0.2);"
            ctaLink={content.heroContent.ctaLink}
            ctaText={content.heroContent.ctaText}
          />
        </header>
        <section>
          <HeaderAndText
            header1={content.headerAndTextContent1.header1}
            text={content.headerAndTextContent1.text}
            backgroundColor={"#fff"}
            textColor={"#000"}
          />

          <HeaderAndText
            header2={content.headerAndTextContent2.header2}
            text={content.headerAndTextContent2.text}
            backgroundColor={"#f7f7f7"}
            textColor={"#2E2E2E"}
          />
        </section>
      </div>
    );
  }
}
