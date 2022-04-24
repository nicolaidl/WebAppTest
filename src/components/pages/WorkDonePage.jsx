import React, { Component } from "react";
import GridContent from "../organisms/Grid2Columns";
import HeaderAndText from "../organisms/HeaderAndText";


export default class WorkDonePage extends Component {
  render() {
    let content = {
      headerAndTextContent1: {
        header1: "Work Done Page",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
      headerAndTextContent2: {
        header2: "Some random heading 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod atque, cum molestias obcaecati maxime! Esse minima reprehenderit natus maxime saepe autem eveniet exercitationem recusandae quo! Perspiciatis non et nulla?",
      },
    };
    return (
      <div style={{ paddingTop: "150px" }}>
        <HeaderAndText
          header1={content.headerAndTextContent1.header1}
          text={content.headerAndTextContent1.text}
          backgroundColor={"#fff"}
          textColor={"#000"}
        />

        <section>
          <GridContent />
        </section>
      </div>
    );
  }
}
