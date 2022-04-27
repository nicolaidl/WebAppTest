/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  // max-width: 120rem;

  // .grid div {
  //   max-width: 500px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  .container {
    max-width: 120rem;
    padding: 0 3.2rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9.6rem;
  }

  .grid--2--cols {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 59em) {
    .grid--2--cols {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .grid--3--cols {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid--4--cols {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid--1--col-at-mobile {
    @media (max-width: 34em) {
      grid-template-columns: repeat(1fr);
    }
  }

  // .section-how div div {
  //   padding: 100px;
  //   font-size: 50px;
  //   background-color: #333;
  // }
`;

export default function Grid(props) {
  return (
    <div css={style}>
      <div className="grid grid--2--cols">{props.children}</div>
    </div>
  );
}

{
  /* <div className={`grid container ${props.type}`}> */
}

Grid.defaultProps = {
  type: "grid--2--cols",
  children: [
    <div>Test 1</div>,
    <div>Test 2</div>,
    <div>Test 3</div>,
    <div>Test 4</div>,
  ],
};
