/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import Image from "../atoms/Image";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import HeaderAndText from "./HeaderAndText";
import defaultImage from "../../images/default-image.jpg";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    max-width: 100%;
  }

  .container {
    margin: 0px auto;
    max-width: 100%;
  }

  header {
    flex-flow: column wrap;
    overflow: hidden;
    max-width: 100%;
    height: 100vh;
    position: relative;
    color: rgba(34, 34, 34, 0.6);
    // background-size: cover;
  }

  .header-container {
    max-width: 100%;
    position: absolute;
    /*in relation to Parent size*/
    left: 15%;
    top: 40%;

    /*in relation to ELEMENT size*/
    // transform: translate(-50%, -50%);
    // left: 50%;
    // top: 50%;
  }

  .header-container-inner {
    width: 50%;
  }

  // h1 {
  //   margin-bottom: 32px;
  // }

  // h2 {
  //   margin-bottom: 48px;
  // }

  // p {
  //   margin-bottom: 48px;
  // }

  section {
    padding: 96px 0;
    background-color: #f7f7f7;
  }

  .btn:link,
  .btn:visited {
    border-radius: 9px;
    font-size: 20px;
    font-weight: 600;
    background-color: #e67e22;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 16px 32px;
  }

  .pickgradient {
    // height: 100%;
    height: 100vh;
    display: inline-block;
    background: -moz-linear-gradient(
      top,
      rgba(34, 34, 34, 0.6) 0%,
      rgba(34, 34, 34, 0.6) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(34, 34, 34, 0.6)),
      color-stop(100%, rgba(34, 34, 34, 0.6))
    ); /* Chrome,Safari4+ */
    background: -o-linear-gradient(
      top,
      rgba(34, 34, 34, 0.6) 0%,
      rgba(34, 34, 34, 0.6) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(34, 34, 34, 0.6) 0%,
      rgba(34, 34, 34, 0.6) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.6) 0%,
      rgba(34, 34, 34, 0.6) 100%
    ); /* W3C */
    background: -webkit-linear-gradient(
      top,
      rgba(34, 34, 34, 0.6) 0%,
      rgba(34, 34, 34, 0.6) 100%
    ); /* Chrome10+,Safari5.1+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }

  img {
    position: relative;
    z-index: -1;
  }
`;

export default function Hero(props) {
  return (
    <div css={style} className="hero-molecule">
        <header>

        <div className="pickgradient">
          <Image image={props.image} type="hero" alt="A desk full of tools" />
        </div>

        <div className="header-container">
          <div className="header-container-inner">
            <HeaderAndText
              header1={props.header}
              text={props.text}
              textColor={"#fff"}
            />

            <Link to="/Services" className="btn">
              {"See all services "}&rarr;
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

Hero.defaultProps = {
  header: "Default Header",
  text: "Default text",
  textColor: "#8A8A8A",
  image: defaultImage,
};
