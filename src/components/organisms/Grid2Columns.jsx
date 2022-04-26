/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import Grid2ColumnsMolecule from "../molecules/Grid2Columns";
import Image from "../atoms/Image";
import defaultImage from "../../images/default-image.jpg";
const style = css`
  padding-top: 30px;
  // .grid--2--cols {
  //   @media (max-width: 34em) {
  //     grid-template-columns: repeat(1, 1fr);
  //   }
  // }
`;

export default function Grid2Columns(props) {
  return (
    <div className="grid-organism spacer" css={style}>
      <Grid2ColumnsMolecule>
        <Image image={defaultImage} />
        <Image image={defaultImage} />
        <Image image={defaultImage} />
        <Image image={defaultImage} />
        <Image image={defaultImage} />
      </Grid2ColumnsMolecule>
    </div>
  );
}

Grid2Columns.defaultProps = {
  children: [
    <div>Test 1</div>,
   
  ],
};
