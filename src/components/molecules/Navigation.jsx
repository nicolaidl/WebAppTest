/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import defaultLogo from "../../images/logo-default.png";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  .navigation-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1000px;
    padding-top: 32px;
    left: 50%;
  }

  .navigation-box2 {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    // max-width: 1200px;
    // padding-top: 32px;
    // left: 50%;
  }

  //position: absolute;
  //transform: translate(-50%, 0);
  //color: #fff;

  .a-active-class {
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }
`;

export default function Navigation(props) {
  return (
    <div className="navigation-molecule" css={style}>
      {/* </header>
      <header> ??? */}

      <div className="navigation-container">
        <nav className="navigation-box1">
          <Link to="/Home" className="btn">
            {"Logo"}
          </Link>
        </nav>

        <nav className="navigation-box2">
          {props.navs.map((object, i) => (
            <NavLink
              to={object}
              className="btn"
              key={i}
              activeClassName="a-active-class"
            >
              {object}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

Navigation.defaultProps = {
  logo: defaultLogo,
  navs: ["Home", "Services", "Contact", "About"],
};
