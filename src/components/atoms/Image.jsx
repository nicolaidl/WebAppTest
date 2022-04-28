/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import defaultImage from "../../images/default-image.jpg";
import { css } from "@emotion/react";

const style = css`
  .grid-image {
    width: 100%;
  }
  .image-hero {
    object-fit: cover;
    width: 100%;
    min-width: 100%;
  }
  .image-logo {
    height: 6.2rem;
  }
  .image-default {
    width: 100%;
  }
  .logo {
    width: 40rem;

    @media (max-width: 59em) {
      width: 30rem;
    }
  }
  .standard: {
    width: "300px";
    height: "300px";
  }
`;

//className={`image ${props.type !== "default" ? "-" + props.type : ""}`}

export default function Image(props) {
  console.log(props);

  return (
    <div className="image-atom" css={style}>
      <img className={`${props.type}`} src={props.image} alt={props.alt} />
    </div>
  );
}

Image.defaultProps = {
  image: defaultImage,
  alt: "default alt",
  type: "image-default",
};
