/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import ImageAndTextMolecule from "../molecules/ImageAndText";

const style = css`
  // .spacer-atom {
  //   padding-top: 3.2rem;
  //   margin-top: 3.2rem;

  //   @media (max-width: 1200px) {
  //     padding-top: 2.4rem;
  //     margin-top: 2.4rem;
  //   }

  //   @media (max-width: 600px) {
  //     padding-top: 1.6rem;
  //     margin-top: 1.6rem;
  //   }
  // }

  // text-align: center;
`;

export default function ImageAndText(props) {
  let colorStyle = {
    // backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div css={style} className="grid-2-col-img-text-organism spacer">
        <div className="grid-2-col-img-text-organism-container">
          <ImageAndTextMolecule>
            {props.children}
          </ImageAndTextMolecule>
        </div>
    </div>
  );
}

ImageAndText.defaultProps = {
  backgroundColor: "#fff",
  text: "Default text",
  textColor: "#8A8A8A",
};
