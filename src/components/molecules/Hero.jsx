/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import startImage from "../../images//pexels-desk.jpg";
import { css } from "@emotion/react";
import frontImg from "../../images/pexels-desk.jpg";
// const style = {
//   hero: {
//     width: "100%",
//   },
//   default: {
//     width: "300px",
//     height: "300px",
//   },
//   header: {
//     position: "absolute",
//     p: {
//       color: "blue"
//     }
//   },
// };

// font-family: 'Rubik', sans-serif;

const style = css`
   
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container {
      margin: 0px auto;
      width: 1200px;
    }

    header {
      height: 100vh;
      position: relative;
      background-image: url("../hero-image.jpg");
      background-size: cover;
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

    nav {
      font-size: 20px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      background-color: green;
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
}
`;

export default function Hero(props) {
  return (
    <div>
      <div css={style}>
        <header>
          <nav className="container">
            <div>LOGO</div>
            <div>NAVIGATION</div>
          </nav>

          <Image className="he" image={frontImg} type="hero" alt="some table" />

          <div className="header-container">
            <div className="header-container-inner">
              <h1>A healthy meal delivered to your door, every single day </h1>
              <p className={"text"}>
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

    // <div className="hero-molucule">
    //   <div style={style.header}>
    //     <Text header1 text={"My web page header1"} type={"header1"} />
    //   </div>
    //   <Image image={startImage} type={"hero"} />;
    // </div>
  );
}

// Hero.defaultProps = {
//   alt: "default alt",
//   type: "default",
// };

// const style = {
//   hero: {
//     width: "100%",
//   },
//   default: {
//     width: "300px",
//     height: "300px",
//   },
//   header: {
//     position: "absolute",
//     p: {
//       color: "blue"
//     }
//   },
// };

// export default function Hero(props) {
//   return (
//     <div className="hero-molucule">
//       <div style={style.header}>
//         <Text header1 text={"My web page header1"} type={"header1"} />
//       </div>
//       <Image image={startImage} type={"hero"} />;
//     </div>
//   );
// }

// Hero.defaultProps = {
//   alt: "default alt",
//   type: "default",
// };
