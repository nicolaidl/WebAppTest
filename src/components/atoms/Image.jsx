import React from "react";
import defaultImage from '../../images/default-image.jpg'

const style = {
  hero: {
    width: "100%",
  },
  default: {
    width: "300px",
    height: "300px",
  },
  standard: {
    width: "300px",
    height: "300px",
  },
};

export default function Image(props) {

  console.log(props.image);

  return (
    <img
      className="image"
      src={props.image}
      alt="default alt"
      style={ props.type === "hero" ? style.hero : style.default}
    />
  );
}

Image.defaultProps = {
  image: defaultImage,
  alt: "default alt",
  type: "default",
};
