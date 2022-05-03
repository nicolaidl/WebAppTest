import React from "react";
import Text from "../atoms/text/Text";
import styles from "./HeaderAndText.module.css";

export default function HeaderAndText(props) {
  let divStyle = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div className="header-and-text-molecule" style={divStyle}>
      <div className={styles["text-container"]}>
        {props.header1 ? (
          <Text tag="h1" type="header1" text={props.header1} className={styles.h1} />
        ) : (
          ""
        )}

        {props.header2 ? (
          <Text tag="h2" type="header2" text={props.header2} className={styles.h2} />
        ) : (
          ""
        )}

        {props.header3 ? (
          <Text tag="h3" type="header3" text={props.header3} className={styles.h3} />
        ) : (
          ""
        )}

        {props.header4 ? (
          <Text tag="h4" type="header4" text={props.header4} className={styles.h4}/>
        ) : (
          ""
        )}

        {props.text ? <Text tag="p" text={props.text} /> : ""}
      </div>
    </div>
  );
}

HeaderAndText.defaultProps = {
   type: "body",
  // header1: "Default Header 1",
  // header2: "Default Header 2",
  // header3: "Default Header 3",
  // header4: "Default Header 4",
  // backgroundColor: "#fff",
  // text: "Default text",
  // textColor: "#8A8A8A",
};
