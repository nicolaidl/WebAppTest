import React, { Component } from "react";
import Grid2ColImageAndText from "../organisms/ImageAndText";
import Image from "../atoms/Image";
import HeaderAndText from "../organisms/HeaderAndText";
import img1 from "../../images/work-done1.jpg";
import img2 from "../../images/work-done2.jpg";
import img3 from "../../images/work-done3.jpg";

import Grid from "../atoms/Grid";
import ImageAndText from "../molecules/ImageAndText";

export default class WorkDonePage extends Component {
  render() {
    let content = {
      headerAndTextContent1: {
        header1: "Work Done Page",
        text: "This page is for showcasing some projects.",
      },
      text1: {
        header: "Step 1",
        text: "Work work 1",
      },
      text2: {
        header: "Step 2",
        text: "Work work 2",
      },
      text3: {
        header: "Step 3",
        text: "Work work 3",
      },
    };

    return (
      <div style={{ paddingTop: "50px" }}>
        <HeaderAndText
          header1={content.headerAndTextContent1.header1}
          text={content.headerAndTextContent1.text}
          backgroundColor={"#fff"}
          textColor={"#000"}
        />

        <section>
          <ImageAndText
            image={img1}
            text={content.text1.text}
            header={content.text1.header}
          />
          <ImageAndText
            type="imageFirst"
            image={img2}
            text={content.text2.text}
            header={content.text2.header}
          />
          <ImageAndText
            image={img3}
            text={content.text3.text}
            header={content.text3.header}
          />
        </section>
      </div>
    );
  }
}
