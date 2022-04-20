/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  .spacer-atom {
    max-width: 100%;
    background-color: white;

    @media (min-width: 1201px) {
      // margin-left: 5em;
      // margin-right: 5rem;
      padding-left: 5em;
      padding-right: 5rem;
    }

    @media (max-width: 1200px) {
      margin-left: 3em;
      margin-right: 3rem;
    }

    @media (max-width: 600px) {
      margin-left: 1em;
      margin-right: 1rem;
    }
  }
`;

export default function Spacer(props) {
  return (
    <div css={style}>
      <div className="spacer-atom" css={style}>
        {props.children}
      </div>
    </div>
  );
}

Spacer.defaultProps = {
  children: <h1>Default Content</h1>,
};
