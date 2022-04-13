/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import defaultImage from "../../images/default-image.jpg";
import { css } from "@emotion/react";

const style = css`
    .image-hero {
      width: 100%;
    }
    .default{
      width: "300px";
      height: "300px";
    }
    .standard: {
      width: "300px";
      height: "300px";
    },
`;

// const style = {
//   hero: {
//     width: "100%",
//   },
//   default: {
//     width: "300px",
//     height: "300px",
//   },
//   standard: {
//     width: "300px",
//     height: "300px",
//   },
// };

export default function Image(props) {
  return (
    <div css={style}>
      <img
        // className={`image${props.type !== "default" ? "-" + props.type : ""}`}
        className={"image-hero"}
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
}

Image.defaultProps = {
  image: defaultImage,
  alt: "default alt",
  type: "default",
};
