/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import Image from "../atoms/Image";
import { css } from "@emotion/react";
import frontImg from "../../images/pexels-desk.jpg";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  .container {
    margin: 0px auto;
    width: 1200px;
  }

  header {
    height: 100vh;
    position: relative;
    z-index: -1;
    transform: translate(0%, -5%);
    color: #fff;
  }

  .header-container {
    width: 1200px;
    position: absolute;
    /*in relation to Parent size*/
    left: 50%;
    top: 50%;
    /*in relation to ELEMENT size*/
    transform: translate(-50%, -50%);
  }

  .header-container-inner {
    width: 50%;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 48px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 48px;
  }

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
      <div css={style}>
        <header>
          <div className="pickgradient">
            <Image image={frontImg} type="hero" alt="A desk full of tools" />
          </div>

          <div className="header-container">
            <div className="header-container-inner">
              <h1>A healthy meal delivered to your door, every single day </h1>
              <p>
                The smart 365-days-per-yer food sub that will make Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <a href="/" className="btn">
                See all services
              </a>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <h2>Some random heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod
              atque, cum molestias obcaecati maxime! Esse minima reprehenderit
              natus maxime saepe autem eveniet exercitationem recusandae quo!
              Perspiciatis non et nulla?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
