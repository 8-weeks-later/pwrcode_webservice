import type { Meta, StoryObj } from '@storybook/react';

import { DropDown } from './DropDown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/DropDown',
  component: DropDown,
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
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [{ value: 'a', name: 'a' }],
  },
};

export const MainDropDown: Story = {
  args: {
    appearance: 'none',
    background: '#fff',
    border: '1px solid #c2d1d9',
    color: 'black',
    data: [
      { value: 'React', name: 'React' },
      { value: 'Vue', name: 'Vue' },
      { value: 'Svelte', name: 'Svelte' },
    ],
  },
};
