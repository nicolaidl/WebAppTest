import React from "react";
import Text from "../atoms/Text";

const style = {
  position: "absolute",
  width: "100%",
  zIndex: "1000",
  top: "0",
};

export default function Navigation(props) {
  return (
    <div className="NavBar-molucule">
      <p>snap</p>
    </div>
  );
}

Navigation.defaultProps = {
  alt: "default alt",
  type: "default",
};
