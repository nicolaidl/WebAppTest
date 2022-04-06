import React from "react";
import Text from "../atoms/Text";

const style = {
  display: "inline",
};

export default function ListItems(props) {
  const elements = ["Item1", "Item2", "Item3"];

  return (
    <div className="NavBar-molucule">
      <ul style={style}>
        {elements.map((object, i) => (
          <li obj={object} key={i}>
            <Text text={object} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ListItems.defaultProps = {
  alt: "default alt",
  type: "default",
};
