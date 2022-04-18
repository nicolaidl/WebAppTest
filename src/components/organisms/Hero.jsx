import React from "react";
import HeroMolecule from "../molecules/Hero";
import defaultImage from "../../images/default-image.jpg";

export default function Hero(props) {
  return (
    <div className="hero-component">
      <HeroMolecule
        image={props.image}
        header={props.header}
        text={props.text}
      />
    </div>
  );
}

Hero.defaultProps = {
  header: "Default Header",
  text: "Default text",
  textColor: "#8A8A8A",
  image: defaultImage,
};
