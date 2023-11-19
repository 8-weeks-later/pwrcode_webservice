import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ReactLogo: Story = {
  args: {
    width: '10vw',
    src: `react_logo.svg`,
  },
};

export const VueLogo: Story = {
  args: {
    width: '10vw',
    src: `vue_logo.svg`,
  },
};

export const SvelteLogo: Story = {
  args: {
    width: '10vw',
    src: `svelte_logo.svg`,
  },
};
