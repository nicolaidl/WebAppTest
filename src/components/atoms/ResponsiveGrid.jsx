import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

export default function ResponsiveGrid(props) {
  // layout is an array of objects, see the demo for more complete usage

  const ResponsiveGridLayout = WidthProvider(Responsive);

  // {lg: layout1, md: layout2, ...}
  const layout3Equal = [
    { i: "1", x: 0, y: 0, w: 3, h: 2 },
    { i: "2", x: 1, y: 2, w: 3, h: 2, },
    { i: "3", x: 2, y: 1, w: 3, h: 2, },
  ];
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layout3Equal}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={1200}
    >
      <div key="1">11</div>
      <div key="2">22</div>
      <div key="3">33</div>
    </ResponsiveGridLayout>
  );
}

ResponsiveGrid.defaultProps = {
  type: "default",
};
