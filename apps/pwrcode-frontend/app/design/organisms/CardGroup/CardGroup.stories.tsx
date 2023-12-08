import type { Meta, StoryObj } from '@storybook/react';

import { CardGroup } from './CardGroup';
import { Card } from '../../molecules/Card/Card';
import {
  CardGroupDataServerComponent,
  CardGroupMainDataServerComponent,
  CardGroupSearchDataServerComponent,
} from './CardGroupDataComponent.server';
import {
  DetailCard,
  MainCard,
  // SearchCard,
} from '../../molecules/Card/Card.stories';

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
export const MainCardGroup: Story = {
  args: {
    // primary: true,
    width: '35vmax',
    padding: '1.17rem',
    children: (
      <>
        <CardGroupMainDataServerComponent />
      </>
    ),
  },
};

export const SearchCardGroupStory: Story = {
  args: {
    width: '80vmax',
    justifyContent: 'stretch',
    alignItems: 'center',
    padding: '6.03vmax 1.158vmax 1.158vmax 1.158vmax',
    overflow: 'scroll',
    children: <CardGroupSearchDataServerComponent />,
  },
};

export const DetailCardGroup: Story = {
  args: {
    width: '100vmax',
    height: '80vmax',
    justifyContent: 'stretch',
    alignItems: 'center',
    padding: '1.158vmax',
    children: (
      <>
        <Card {...DetailCard.args} />
      </>
    ),
  },
};
