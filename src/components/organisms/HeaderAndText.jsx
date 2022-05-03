import React from "react";
import HeaderAndTextMolecule from "../molecules/HeaderAndText";
import styles from "./HeaderAndText.module.css";

export default function HeaderAndText(props) {
  let colorStyle = {
    // backgroundColor: `${props.backgroundColor}`,
    color: `${props.textColor}`,
  };

  return (
    <div
      className={`${styles["header-and-text-organism"]} ${styles["container"]}`}
      style={{ backgroundColor: `${props.backgroundColor}` }}
    >
      <HeaderAndTextMolecule
        header1={props.header1}
        header2={props.header2}
        header3={props.header3}
        header4={props.header4}
        text={props.text}
      />
    </div>
  );
}

HeaderAndText.defaultProps = {
  backgroundColor: "#fff",
  text: "Default text",
  textColor: "#8A8A8A",
};
