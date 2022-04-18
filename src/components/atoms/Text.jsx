/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  .header1 {
    font-size: 52px;
    // margin-bottom: 32px;
  }

  .header2 {
    font-size: 44px;
    // margin-bottom: 48px;
  }

  .header3 {
    font-size: 40px;
    // margin-bottom: 40px;
  }

  .header4 {
    font-size: 32px;
    // margin-bottom: 32px;
  }

  .p1 {
    font-size: 20px;
    line-height: 1.6;
    // margin-bottom: 48px;
  }
`;

export default function Text(props) {
  let renderSwitch = (tag, content) => {
    switch (tag) {
      case "p":
        return <p>{content}</p>;
      case "h1":
        return <h1>{content}</h1>;
      case "h2":
        return <h2>{content}</h2>;
      case "h3":
        return <h3>{content}</h3>;
      case "h4":
        return <h4>{content}</h4>;
      default:
        return <p>Default</p>;
    }
  };

  let getType = (tag, type) => {
    if (type === "default") {
      switch (tag) {
        case "h1":
          return "header1";
        case "h2":
          return "header2";
        case "h3":
          return "header3";
        case "h4":
          return "header4";
        case "p":
          return "p1";
        default:
          return <p>Default</p>;
      }
    } else {
      return type;
    }
  };

  console.log(props);

  return (
    <div className="text-atom" css={style}>
      <div className={`text ${getType(props.tag, props.type)}`}>
        {renderSwitch(props.tag, props.text)}
      </div>
    </div>
  );
}

Text.defaultProps = {
  tag: "p",
  type: "default",
  content: "Default Content",
};
