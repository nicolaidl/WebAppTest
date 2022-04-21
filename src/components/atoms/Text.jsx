/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";

const style = css`
  * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  .header1 {
    // font-size: 52px;
    font-size: 5.2rem;
  }

  .header2 {
    // font-size: 44px;
    font-size: 4.4rem;
  }

  .header3 {
    // font-size: 40px;
    font-size: 4rem;
  }

  .header4 {
    // font-size: 32px;
    font-size: 3.2rem;
  }

  .p1 {
    // font-size: 20px;
    font-size: 2rem;
    line-height: 1.6;
  }
`;

export default function Text(props) {
  let renderSwitch = (tag, content) => {
    switch (tag) {
      case "p":
        return (
          <p className={`text ${getType(props.tag, props.type)}`}>{content}</p>
        );
      case "h1":
        return (
          <h1 className={`text ${getType(props.tag, props.type)}`}>
            {content}
          </h1>
        );
      case "h2":
        return (
          <h2 className={`text ${getType(props.tag, props.type)}`}>
            {content}
          </h2>
        );
      case "h3":
        return (
          <h3 className={`text ${getType(props.tag, props.type)}`}>
            {content}
          </h3>
        );
      case "h4":
        return (
          <h4 className={`text ${getType(props.tag, props.type)}`}>
            {content}
          </h4>
        );
      default:
        return (
          <p className={`text ${getType(props.tag, props.type)}`}>Default</p>
        );
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

  return (
    <div className="text-atom" css={style}>
      {renderSwitch(props.tag, props.text)}
    </div>

    // <div className="text-atom" css={style}>
    //   <div className={`text ${getType(props.tag, props.type)}`}>
    //     {renderSwitch(props.tag, props.text)}
    //   </div>
    // </div>
  );
}

Text.defaultProps = {
  tag: "p",
  type: "default",
  content: "Default Content",
};
