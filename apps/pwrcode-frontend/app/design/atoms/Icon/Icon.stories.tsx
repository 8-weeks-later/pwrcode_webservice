import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const triangleDownIcon: Story = {
  args: {
    data: 'icon/triangle-down.svg',
    width: '50vw',
  },
};

export const triangleUpIcon: Story = {
  args: {
    data: 'icon/triangle-up.svg',
    width: '50vw',
  },
};

export const triangleLeftIcon: Story = {
  args: {
    data: 'icon/triangle-left.svg',
    width: '50vw',
  },
};

export const triangleRightIcon: Story = {
  args: {
    data: 'icon/triangle-Right.svg',
    width: '50vw',
  },
};
