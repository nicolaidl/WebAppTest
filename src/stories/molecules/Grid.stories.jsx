import React from "react";
import Image from "../../components/atoms/Image";
import Navigation from "../../components/molecules/Grid2Columns";
import defaultImage from "../../images/default-image.jpg";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Grid",
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navigation {...args} />;
// const Template = (args) => <Image/>;
//const Template = () => <Image/>;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: [
    <div>hej1</div>,
    <div>hej2</div>,
    <div>hej3</div>,
    <div>hej4</div>,
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: [
    <Image image={defaultImage}/>,
    <Image image={defaultImage}/>,
    <div>hej2</div>,
    <div>hej3</div>,
    <div>hej4</div>,
  ],
};
