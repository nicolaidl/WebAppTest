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
    display: flex;

    width: 100%;
    width: 1200px;

    padding-top: 32px;
    left: 18.5%;
  }

  .navigation-box1 {
    display: flex;
  }

  .navigation-box2 {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }

  .btn {
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }

  .a-active-class {
    color: #eeeee4;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }
`;

export default function Navigation(props) {
  return (
    <div className="navigation-molecule" css={style}>
      <div className="navigation-container">
        <nav className="navigation-box1">
          <Link to="/Home" className="btn" activeClassName="a-active-class">
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
              className="btn"
              activeClassName="a-active-class"
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
