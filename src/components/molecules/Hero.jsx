import React from "react";
import Image from "../atoms/Image";
import { Link } from "react-router-dom";
import HeaderAndText from "./HeaderAndText";
import defaultImage from "../../images/default-image.jpg";
import styles from "./Hero.module.css";
import windowDimension from "../../utils/MediaQuery.jsx";

export default function Hero(props) {
  let renderCta = (props) => {
    return props.ctaText ? (
      <Link to={props.ctaLink} className={styles["nav-btn"]}>
        {props.ctaText} &rarr;
      </Link>
    ) : (
      ";"
    );
  };

  return (
    <div className={styles["hero-molecule"]}>
      {windowDimension() !== "phone" ? (
        <div>
          <div className={styles.pickgradient}>
            <Image
              image={props.image}
              type="image-hero"
              alt="A desk full of tools"
            />
          </div>

          <div className={styles["header-container"]}>
            <div className={styles["header-container-inner"]}>
              <HeaderAndText
                header1={props.header}
                text={props.text}
                textColor={"#fff"}
              />
              {renderCta(props)}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles["header-container-inner"]}>
            <HeaderAndText
              header1={props.header}
              text={props.text}
              textColor={"#333"}
            />

            {renderCta(props)}
          </div>

          <div className={styles.pickgradient}>
            <Image
              image={props.image}
              type="image-hero"
              alt="A desk full of tools"
            />
          </div>
        </div>
      )}
    </div>
  );
}

Hero.defaultProps = {
  header: "Default Header",
  text: "Default text",
  ctaLink: "/",
  textColor: "#8A8A8A",
  image: defaultImage,
  shade: "rgba(0, 0, 0, 0)",
};
