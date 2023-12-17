import type { Meta, StoryObj } from '@storybook/react';

import { DetailTemplate } from './DetailTemplate';
import { Collection } from '../../organisms/Collection/Collection';
import { LogoGroup } from '../../organisms/LogoGroup/LogoGroup';
import {
  DetailLogoAndFormCollection,
  MainCollection,
  MainNavBarCollection,
  SearchLogoAndFormCollection,
} from '../../organisms/Collection/Collection.stories';
import { CardGroup } from '../../organisms/CardGroup/CardGroup';
import { MainLogoGroup } from '../../organisms/LogoGroup/LogoGroup.stories';
import {
  DetailCardGroup,
  MainCardGroup,
  SearchCardGroup,
} from '../../organisms/CardGroup/CardGroup.stories';
import { DetailLayout } from './DetailLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Templates/DetailLayout',
  component: DetailLayout,
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
} satisfies Meta<typeof DetailLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DetailLayoutStory: Story = {
  args: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: '1',
    padding: '5vmax 0 0 0',
    position: 'fixed',
    width: '100vmax',
    height: '100vmin',
    background: 'linear-gradient(0deg, #F2F5F7 50%, #EBE3D5 50%,#F3EEEA 100%)',
    children: (
      <>
        <Collection {...DetailLogoAndFormCollection.args} />
        <CardGroup {...DetailCardGroup.args} />
      </>
    ),
  },
};
