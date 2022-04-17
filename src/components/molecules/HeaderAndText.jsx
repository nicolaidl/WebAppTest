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
    background-color: #f7f7f7;
    // background-color: lightgrey;
  }
`;

export default function HeaderAndText(props) {
  console.log(props.text);

  return (
    <div css={style} className="header-and-text-molecule">
      <section>
        <div className="text-container">
          {props.header1 ? (
            <Text tag="h1" type="header1" text={props.text} />
          ) : (
            ""
          )}

          {props.header2 ? (
            <Text tag="h2" type="header2" text={props.text} />
          ) : (
            ""
          )}

          {props.header3 ? (
            <Text tag="h3" type="header3" text={props.text} />
          ) : (
            ""
          )}

          {props.header4 ? (
            <Text tag="h4" type="header4" text={props.text} />
          ) : (
            ""
          )}

          {props.text ? <Text tag="p" text={props.text} /> : ""}
        </div>
      </section>
    </div>
  );
}

HeaderAndText.defaultProps = {
  // type: "body",
  // text: "Default text",
  // header1: "Default Header 1",
  // header2: "Default Header 2",
  // header3: "Default Header 3",
  // header4: "Default Header 4",
  color: "grey",
};
