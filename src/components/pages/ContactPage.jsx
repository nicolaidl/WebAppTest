import React, { Component } from "react";
import HeaderAndText from "../organisms/HeaderAndText";

export default class ContactPage extends Component {
  render() {
    let content = {
      headerAndTextContent1: {
        header1: "Contact Page",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
      headerAndTextContent2: {
        header2: "Some random heading 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };
    return (
      <div className="contact-page" style={{ paddingTop: "20px" }}>
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
