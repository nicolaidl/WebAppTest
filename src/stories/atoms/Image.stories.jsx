import React from 'react';
import Image from '../../components/atoms/Image'
import heroImage from '../assets/image-hero.jpg'
import standardImage from '../assets/image-standard.jpg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;
// const Template = (args) => <Image/>;
//const Template = () => <Image/>;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "hero",
  image: heroImage
};

export const Standard = Template.bind({});
Standard.args = {
  type: "standard",
  image: standardImage
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
