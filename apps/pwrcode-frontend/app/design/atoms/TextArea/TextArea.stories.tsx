import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainTextArea: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: `ABCDEF
      sfsf
    `,
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '0.94rem 0 1rem',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    flexShrink: '0',
  },
};
