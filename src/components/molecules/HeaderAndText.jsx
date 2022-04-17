/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import Text from "../atoms/Text";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
  }

  .text-container {
    margin: 0px auto;
    width: 1200px;
    max-width: 100%;
  }

  section {
    padding: 96px 0;
    // background-color: #f7f7f7;
    // background-color: lightgrey;
  }
`;

export default function HeaderAndText(props) {
  let divStyle = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  console.log(props);

  return (
    <div css={style} className="header-and-text-molecule" style={divStyle}>
      <div className="text-container">
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
  text: "Default text",
  textColor: "#8A8A8A",
};
