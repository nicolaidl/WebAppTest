import React, { Component } from "react";
import HeaderAndText from "../organisms/HeaderAndText";
import Hero from "../organisms/Hero";
import heroImg from "../../images/services-1.jpg";

export default class ServicesPage extends Component {
  render() {
    let content = {
      headerAndTextContent1: {
        header1: "Services",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
      headerAndTextContent2: {
        header2: "Some random heading 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };
    return (
      <div style={{ paddingTop: "50px" }}>
        <header>
          <Hero
            image={heroImg}
            header={content.headerAndTextContent1.header1}
            text={content.headerAndTextContent1.text}
            shade="rgba(255, 0, 0, 0.2);"
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
