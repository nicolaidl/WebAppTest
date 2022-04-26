import React from 'react';
import Grid from '../../components/atoms/Grid'
import heroImage from '../assets/image-hero.jpg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Grids',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} />;
// const Template = (args) => <Image/>;
//const Template = () => <Image/>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: "hero",
//   image: heroImage
// };

// export const Standard = Template.bind({});
// Standard.args = {
//   type: "standard",
//   image: standardImage
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
