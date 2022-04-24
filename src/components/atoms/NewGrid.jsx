/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  // .spacer {
  //   max-width: 120rem;
  //   padding: 0 3.2rem;
  //   margin: 0 auto;
  // }

  .grid {
    display: grid;
    gap: 9.6rem;
  }

  .grid div {
    padding: 100px;
    font-size: 50px;
  }

  .grid--2--cols {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid--3--cols {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid--4--cols {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid div:nth-child(1) {
    background-color: aqua;
  }
  .grid div:nth-child(2) {
    background-color: blue;
  }
  .grid div:nth-child(3) {
    background-color: violet;
  }
  .grid div:nth-child(4) {
    background-color: yellow;
  }
`;

export default function NewGrid(props) {
  console.log(props);
  return (
    <div css={style}>
      <div className={`grid ${props.type}`}>{props.children}</div>
    </div>
  );
}

NewGrid.defaultProps = {
  type: "grid--2--cols",
  children: [
    <div>Test 1</div>,
    <div>Test 2</div>,
    <div>Test 3</div>,
    <div>Test 4</div>,
  ],
};
