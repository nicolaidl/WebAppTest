/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import Text from "../atoms/Text";
import logo from "../../images/logo-default.png";
import Image from "../atoms/Image";
import defaultLogo from "../../images/logo-default.png";

const style = css`
  * {
    z-index: 1;
  }

  .navigation-container {
    position: absolute;
    left: 0;
    display: flex;


    max-width: 80%;

    padding-top: 32px;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
    margin: 0 15%;
  }

  .navigation-box1 {
    display: flex;
    margin-right: 100%;
  }

  .navigation-box2 {
    display: flex;
    justify-content: space-evenly;
  }

  .btn {
    color: #95bcf0;
  }

  .link {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .a-active-class {
    color: #eeeee4;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }
`;

export default function Navigation(props) {
  return (
    <div
      className="navigation-molecule"
      css={style}
      style={{ position: "absolute;" }}
    >
      <div className="navigation-container">
        <nav className="navigation-box1">
          <Link to="/Home" className="btn">
            {/* <Link to="/Home" className="btn" activeClassName="a-active-class"> */}
            {/* <Link to="/Home" className={(navData) => (navData.isActive ? "a-active-class" : "btn")} > */}
            {/* <Image alt="logo image" image={logo} type="logo" /> */}
            <Text type="p1" tag="p" text={"Nature"} />
            <Text type="p1" tag="p" text={"Art"} />
            <Text type="p1" tag="p" text={"Carpentry"} />
          </Link>
        </nav>

        <nav className="navigation-box2">
          {props.navs.map((object, i) => (
            <NavLink
              to={object}
              key={i}
              className="link btn"
              // activeClassName="a-active-class"
            >
              <Text type="p1" tag="p" text={object} />
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
