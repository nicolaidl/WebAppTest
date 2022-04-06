import React from "react";
import HeroMolecule from "../molecules/Hero";

const style = {
  hero: {
    paddingTop: "128px",
  },
};

export default function Hero(props) {
  return (
    <div className="hero-component" style={style.hero}>
      <HeroMolecule />
    </div>
  );
}

Hero.defaultProps = {
  alt: "default alt",
  type: "default",
};
