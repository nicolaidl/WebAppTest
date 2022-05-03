import React from "react";
import Text from "../atoms/text/Text";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles["footer-molecule"]}>
      <Text type="p-footer" text={props.text} />
    </footer>
  );
}


Footer.defaultProps = {
  text: "Copyright © 2022 - Natur Tømrer"
};
