/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import HeaderAndTextMolecule from "../molecules/HeaderAndText";
import Spacer from "../atoms/Spacer";

const style = css`
  .header-and-text-organism-container {
    @media (min-width: 1201px) {
      padding-top: 6rem;
      margin-top: 6rem;
    }

    @media (max-width: 1200px) {
      padding-top: 3rem;
      margin-top: 3rem;
    }

    @media (max-width: 600px) {
      padding-top: 1em;
      margin-top: 1rem;
    }

  }
`;

export default function HeaderAndText(props) {
  let colorStyle = {
    // backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (

    <Spacer css={style} backgroundColor={props.backgroundColor} >
      <div className="header-and-text-organism"> 
        <div className="header-and-text-organism-container">
          <HeaderAndTextMolecule
            header1={props.header1}
            header2={props.header2}
            header3={props.header3}
            header4={props.header4}
            text={props.text}
          />
        </div>
      </div>
    </Spacer>
  );
}

HeaderAndText.defaultProps = {
  backgroundColor: "#fff",
  text: "Default text",
  textColor: "#8A8A8A",
};
