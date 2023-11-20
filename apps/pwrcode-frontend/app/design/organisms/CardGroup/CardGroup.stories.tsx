import type { Meta, StoryObj } from '@storybook/react';

import { Component as CardGroup } from './CardGroup';
import { Card } from '../../molecules/Card/Card';
import { MainCard } from '../../molecules/Card/Card.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Organisms/CardGroup',
  component: CardGroup,
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
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    children: (
      <>
        <Card {...MainCard.args} />
        <Card {...MainCard.args} />
      </>
    ),
  },
};
