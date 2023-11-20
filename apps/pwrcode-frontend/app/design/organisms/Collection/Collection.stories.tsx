import type { Meta, StoryObj } from '@storybook/react';

import { Component as Collection } from './Collection';
import { MainBox, MainNavbarBox } from '../../molecules/Box/Box.stories';
import { Box } from '../../molecules/Box/Box';
import { Link } from '../../atoms/Link/Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Organisms/Collection',
  component: Collection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control:  'color' },
  },
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainCollection: Story = {
  args: {
    flexDirection: 'column',
    gap: '10px',
    children: <Box {...MainBox.args} />,
  },
};

export const MainNavBarCollection: Story = {
  args: {
    flexDirection: 'column',
    children: <Box {...MainNavbarBox.args} />,
  },
};
