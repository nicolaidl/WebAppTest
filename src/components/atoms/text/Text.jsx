import React from "react";
import styles from "./Text.module.css";

export default function Text(props) {
  let renderSwitch = (tag, content) => {
    let pClassName = `${getType(props.tag, props.type)}`;
    switch (tag) {
      case "p":
        return <p className={styles[pClassName]}>{content}</p>;
      case "h1":
        return <h1 className={styles[pClassName]}>{content}</h1>;
      case "h2":
        return <h2 className={styles[pClassName]}>{content}</h2>;
      case "h3":
        return <h3 className={styles[pClassName]}>{content}</h3>;
      case "h4":
        return <h4 className={styles[pClassName]}>{content}</h4>;
      default:
        return <p className={styles[pClassName]}>"content"</p>;
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

  return <div className="text-atom">{renderSwitch(props.tag, props.text)}</div>;
}

Text.defaultProps = {
  tag: "p",
  type: "default",
  content: "Default Content",
};
