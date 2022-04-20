/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import defaultImage from "../../images/default-image.jpg";
import { css } from "@emotion/react";

const style = css`
  .image-hero {
    object-fit: cover;
    width: 100%;
  }
  .image-logo {
    width: 50px;
    width: 50px;
  }
  .default {
    width: "300px";
    height: "300px";
  }
  .standard: {
    width: "300px";
    height: "300px";
  }
`;

export default function Image(props) {
  return (
    <div className="image-atom" css={style}>
      <div className="image-container">
        <img
          className={`image${props.type !== "default" ? "-" + props.type : ""}`}
          src={props.image}
          alt={props.alt}
        />
      </div>
    </div>
  );
}

Image.defaultProps = {
  image: defaultImage,
  alt: "default alt",
  type: "default",
};
