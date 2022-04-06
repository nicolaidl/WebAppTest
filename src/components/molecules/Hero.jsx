import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import startImage from "../../images//pexels-desk.jpg";

const style = {
  hero: {
    width: "100%",
  },
  default: {
    width: "300px",
    height: "300px",
  },
  header: {
    position: "absolute",
    p: {
      color: "blue"
    }
  },
};


export default function Hero(props) {
  return (
    <div className="hero-molucule">
      <div style={style.header}>
        <Text header1 text={"My web page header1"} type={"header1"} />
      </div>
      <Image image={startImage} type={"hero"} />;
    </div>
  );
}

Hero.defaultProps = {
  alt: "default alt",
  type: "default",
};
