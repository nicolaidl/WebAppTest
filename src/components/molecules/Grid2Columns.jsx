/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import GridAtom from "../atoms/NewGrid";

const style = css`
  .grid--2--cols {
    @media (max-width: 34em) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default function NewGrid(props) {
  console.log(props);
  return (
    <div className="grid-2-columns" css={style}>
      <GridAtom type="grid--2--cols">{props.children}</GridAtom>
    </div>
  );
}

NewGrid.defaultProps = {
  children: [
    <div>Test 1</div>,
    <div>Test 2</div>,
    <div>Test 3</div>,
    <div>Test 4</div>,
  ],
};
