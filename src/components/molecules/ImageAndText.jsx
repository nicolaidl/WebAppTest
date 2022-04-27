/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import Grid from "../atoms/Grid";
import HeaderAndText from "./HeaderAndText";
import Image from "../atoms/Image";
import defaultImage from "../../images/default-image.jpg";

const style = css`
  @media (max-width: 34em) {
    .grid--2--cols {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

let getContent = (props) => {
  if (props.type === "imageFirst") {
    return (
      <Grid>
        <Image type="grid-image" image={props.image} />
        <HeaderAndText
          header1={props.header}
          text={props.text}
          backgroundColor={"#fff"}
          textColor={"#000"}
        />
      </Grid>
    );
  } else {
    return (
      <Grid>
        <HeaderAndText
          header1={props.header}
          text={props.text}
          backgroundColor={"#fff"}
          textColor={"#000"}
        />
        <Image type="grid-image" image={props.image} />
      </Grid>
    );
  }
};

export default function ImageAndText(props) {
  return (
    <div css={style}>
      <div className="image-and-text">
        <div className="spacer">{getContent(props)}</div>
      </div>
    </div>
  );
}

ImageAndText.defaultProps = {
  type: "imageLast",
  text: "default text",
  header: "default header",
  image: defaultImage,
  children: [
    // <Image type="default-image" image={defaultImage} />,
    // <HeaderAndText text="default text" heading2="default heading 2" />,
  ],
};
{
  /* <GridMolecule>{props.children}</GridMolecule> */
}
