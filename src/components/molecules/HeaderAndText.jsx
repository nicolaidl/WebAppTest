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
  }
`;

export default function HeaderAndText(props) {
  return (
    <div css={style} className="header-and-text-molecule">
      <section>
        <div className="text-container">
          <Text text={props} />
        </div>
      </section>
    </div>
  );
}

HeaderAndText.defaultProps = {
  text: "Default text",
  type: "body",
  header1: "Default Header 1",
  header2: "Default Header 2",
  header3: "Default Header 3",
  header4: "Default Header 4",
};
