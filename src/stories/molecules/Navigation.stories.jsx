import React from 'react';
import Navigation from '../../components/molecules/Navigation'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/NavBar',
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navigation {...args} />;
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

