import React from "react";
import GridLayout from "react-grid-layout";
import ResponsiveReactGridLayout from "react-grid-layout/build/ResponsiveReactGridLayout";
import { Responsive, WidthProvider } from "react-grid-layout";

export default function Grid(props) {
  // layout is an array of objects, see the demo for more complete usage

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const layoutDefault = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 2,
      minW: 6,
      maxW: 12,
      background: "aliceblue",
    },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 6, maxW: 12 },
  ];

  const layout3Equal = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, static: true },
    { i: "c", x: 4, y: 0, w: 1, h: 2, minW: 2, maxW: 4, static: true },
  ];

  console.log(props.type);

  return (
    <div>
      {props.type === "default" || props.type === "" ? (
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
            a
          </div>

          <div
            key="b"
            data-grid={{
              x: 1,
              y: 0,
              w: 3,
              h: 2,
              minW: 2,
              maxW: 4,
              static: true,
            }}
          >
            b
          </div>
        </GridLayout>
      ) : (
        <GridLayout
          className="layout"
          layout={layout3Equal}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      )}
    </div>
  );
}

Grid.defaultProps = {
  type: "default",
};
