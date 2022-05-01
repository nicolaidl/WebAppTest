/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  .spacer-atom {
    max-width: 100%;
    background-color: white;

    padding-left: 8em;
    padding-right: 8rem;

    @media (max-width: 1200px) {
      padding-left: 4em;
      padding-right: 4rem;
    }

    @media (max-width: 600px) {
      padding-left: 2em;
      padding-right: 2rem;
    }
  }
`;

export default function Spacer(props) {
  let divStyle = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div css={style} style={props.style}>
      <div className="spacer-atom" style={divStyle}>
        {props.children}
      </div>
    </div>
  );
}

Spacer.defaultProps = {
  children: <h1>Default Content</h1>,
  text: "Default text",
  textColor: "#8A8A8A",
  style: {},
};
