/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import defaultLogo from "../../images/logo-default.png";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  nav {
    font-family: 'Rubik',sans-serif;
    font-size: 20px;
    font-weight: 700;
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding-top: 32px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
  }
`;

export default function Navigation(props) {
  return (
    <div className="navigation-molecule" css={style}>
      {/* </header>
      <header> ??? */}
      <nav className="navigation">
        <div>LOGO</div>
        {props.navs.map((object, i) => (
          <p obj={object} key={i}>
            {object}
          </p>
        ))}
      </nav>
    </div>
  );
}

Navigation.defaultProps = {
  logo: defaultLogo,
  navs: ["Home", "Services", "About"],
};
