/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    max-width: 100%;
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

  // section {
  //   padding: 96px 0;
  //   background-color: #f7f7f7;
  // }
`;

export default function Text(props) {
  console.log(props);
  console.log(props.text);

  return (
    <div className="text" css={style}>
      {props.header1 ? <h1>props.header1</h1> : ""}
      {props.header2 ? <h2>props.header2</h2> : ""}
      {props.header3 ? <h3>props.header3</h3> : ""}
      {props.header3 ? <h4>props.header3</h4> : ""}

      {props.text ? <p className="text">{props.text}</p> : ""}
    </div>
  );
}

Text.defaultProps = {
  type: "body",
};

// Text.defaultProps = {
//   text: "Default text",
//   type: "Default body",
//   header1: "Default Header 1",
//   header2: "Default Header 2",
//   header3: "Default Header 3",
//   header4: "Default Header 4",
// };
