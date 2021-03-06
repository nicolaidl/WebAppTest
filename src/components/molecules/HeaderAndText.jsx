/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import Text from "../atoms/Text";

const style = css`
  .text-container {
    margin: 0px auto;
    width: 1200px;
    max-width: 100%;
  }

  @media (min-width: 1201px) {
    h1 {
      margin-bottom: 32px;
    }

    h2 {
      margin-bottom: 48px;
    }

    // p {
    //   margin-bottom: 48px;
    // }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 600px) {
  }
`;

export default function HeaderAndText(props) {
  let divStyle = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div css={style} className="header-and-text-molecule" >
      <div className="text-container" style={divStyle}>
        {props.header1 ? (
          <Text tag="h1" type="header1" text={props.header1} />
        ) : (
          ""
        )}

        {props.header2 ? (
          <Text tag="h2" type="header2" text={props.header2} />
        ) : (
          ""
        )}

        {props.header3 ? (
          <Text tag="h3" type="header3" text={props.header3} />
        ) : (
          ""
        )}

        {props.header4 ? (
          <Text tag="h4" type="header4" text={props.header4} />
        ) : (
          ""
        )}

        {props.text ? <Text tag="p" text={props.text} /> : ""}
      </div>
    </div>
  );
}

HeaderAndText.defaultProps = {
  // type: "body",
  // header1: "Default Header 1",
  // header2: "Default Header 2",
  // header3: "Default Header 3",
  // header4: "Default Header 4",
  // backgroundColor: "#fff",
  // text: "Default text",
  // textColor: "#8A8A8A",
};
