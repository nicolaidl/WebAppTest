/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import Text from "../atoms/Text";
import logo from "../../images/Logo-DK3.png";
import Image from "../atoms/Image";
import defaultLogo from "../../images/logo-default.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const style = css`
  * {
    z-index: 1;
  }

  .navigation-container {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }

  .navigation-box1 {
    display: flex;
    // margin-right: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .navigation-box2 {
    display: flex;
  }

  .main-nav-link:link,
  .main-nav-link:visited {
    display: inline-block;
    text-decoration: none;
    color: #333;
    transistion: all 0.3s;
  }

  .main-nav-link:hover,
  .main-nav-link:active {
    color: #cf711f;
    transistion: all 0.3s;
  }

  .a-active-class {
    color: #eeeee4;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid ##95bcf0;
  }

  .image-logo {
    height: 4.4rem;
  }

  // .icon-mobile-nav[name="close-outline"] {
  //   display: none;
  // }

  // .icon-mobile-nav[name="men-outline"] {
  //   display: none;
  // }

  .btn-mobile-nav {
    display: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .icon-mobile-nav {
    color: #333;
    height: 3rem;
    width: 3rem;
  }

  @media (max-width: 59rem) {
    .btn-mobile-nav {
      display: block;
    }

    .icon-mobile-nav[name="close-outline"] {
      display: none;
    }

    .icon-mobile-nav[name="men-outline"] {
      display: block;
    }

    .main-nav-list {
      flex-direction: column;
      gap: 4.8rem;
    }

    .main-nav-link {
      font-size: 3rem;
    }

    .main-nav {
      background-color: rgba(255, 255, 255, 0.97);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      align-itms: center;
      justify-content: center;

    }

    // .btn-mobile-nav {
    //   // display: none;
    //   border: none;
    //   background: none;
    //   cursor: pointer;
    // }
  }
`;

export default function Navigation(props) {
  return (
    <div className="navigation-molecule" css={style}>
      <div className="navigation-container">
        <nav className="navigation-box1">
          <Link to="/Home" className="main-nav-link">
            <Image alt="logo image" image={logo} type="logo" />
          </Link>
        </nav>

        <nav className="navigation-box2">
          <div className="main-nav">
            <ul className="main-nav-list">
              {props.navs.map((object, i) => (
                <li>
                  <NavLink
                    to={object}
                    key={i}
                    // className="link btn"
                    className="main-nav-link"
                    // className="link btn"
                    // activeClassName="a-active-class"
                  >
                    <Text type="p-nav-main" tag="p" text={object} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn-mobile-nav">
            <AiOutlineMenu className="icon-mobile-nav" name="menu-outline" />
            <AiOutlineClose className="icon-mobile-nav" name="close-outline" />
          </button>
        </nav>
      </div>
    </div>
  );
}

Navigation.defaultProps = {
  logo: defaultLogo,
  navs: ["Home", "Services", "Contact", "About"],
};
