import React from 'react';
import ListItems from '../../components/molecules/ListItems'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/ListItems',
  component: ListItems,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListItems {...args} />;
// const Template = (args) => <Image/>;
//const Template = () => <Image/>;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: "hero",
// };

