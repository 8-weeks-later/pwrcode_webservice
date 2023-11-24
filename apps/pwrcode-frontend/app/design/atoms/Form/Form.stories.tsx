import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Form',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SkillForm: Story = {
  args: {
    placeholder: 'Skills',
    appearance: 'none',
    background: '#fff',
    border: '1px solid #c2d1d9',
    color: 'black',
  },
};

export const KeyWordForm: Story = {
  args: {
    placeholder: 'type keyword...',
    appearance: 'none',
    background: '#fff',
    border: '1px solid #c2d1d9',
    color: 'black',
  },
};
