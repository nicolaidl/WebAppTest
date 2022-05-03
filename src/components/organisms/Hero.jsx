import React from "react";
import HeroMolecule from "../molecules/Hero";
import defaultImage from "../../images/default-image.jpg";

export default function Hero(props) {
  return (
    <div className="hero-organism">
      <HeroMolecule
        image={props.image}
        header={props.header}
        text={props.text}
        shade={props.shade}
        ctaLink={props.ctaLink}
        ctaText={props.ctaText}
      />
    </div>
  );
}

Hero.defaultProps = {
  header: "Default Header",
  text: "Default text",
  ctaLink: "/",
  textColor: "#8A8A8A",
  image: defaultImage,
  shade: "rgba(0, 0, 0, 0);",
};
