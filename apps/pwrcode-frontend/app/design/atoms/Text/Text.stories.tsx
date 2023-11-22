import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'ABCDEF',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: '1.3125rem',
    lineHeight: '1.9375rem',
  },
};

export const Title: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'PwrCode',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.3125rem',
    lineHeight: '1.9375rem',
  },
};

export const SubTitle: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Empowering IT Excellence',
    fontStyle: 'normal',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: '1.3125rem',
    lineHeight: '1.9375rem',
  },
};

export const ReactText: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'React',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: '1.3125rem',
    lineHeight: '1.9375rem',
  },
};
