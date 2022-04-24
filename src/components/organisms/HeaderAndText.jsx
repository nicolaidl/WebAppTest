/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import HeaderAndTextMolecule from "../molecules/HeaderAndText";
import Spacer from "../atoms/Spacer";

const style = css`
  .spacer-atom {
    padding-top: 3.2rem;
    margin-top: 3.2rem;

    @media (max-width: 1200px) {
      padding-top: 2.4rem;
      margin-top: 2.4rem;
    }

    @media (max-width: 600px) {
      padding-top: 1.6rem;
      margin-top: 1.6rem;
    }
  }
`;

export default function HeaderAndText(props) {
  let colorStyle = {
    // backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div css={style} className="header-and-text-organism">
      <Spacer backgroundColor={props.backgroundColor}>
        <div className="header-and-text-organism-container">
          <HeaderAndTextMolecule
            header1={props.header1}
            header2={props.header2}
            header3={props.header3}
            header4={props.header4}
            text={props.text}
          />
        </div>
      </Spacer>
    </div>
  );
}

HeaderAndText.defaultProps = {
  backgroundColor: "#fff",
  text: "Default text",
  textColor: "#8A8A8A",
};
