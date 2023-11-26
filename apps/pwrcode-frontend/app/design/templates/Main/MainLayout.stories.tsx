import type { Meta, StoryObj } from '@storybook/react';

import { Collection } from '../../organisms/Collection/Collection';
import { LogoGroup } from '../../organisms/LogoGroup/LogoGroup';
import {
  MainCollection,
  MainNavBarCollection,
} from '../../organisms/Collection/Collection.stories';
import { CardGroup } from '../../organisms/CardGroup/CardGroup';
import { MainLogoGroup } from '../../organisms/LogoGroup/LogoGroup.stories';
import { MainCardGroup } from '../../organisms/CardGroup/CardGroup.stories';
import { MainLayout } from './MainLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Templates/MainLayout',
  component: MainLayout,
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
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainLayoutStory: Story = {
  args: {
    display: 'flex',
    zIndex: '1',
    position: 'fixed',
    width: '100vmax',
    height: '100vmin',
    background: 'linear-gradient(0deg, #F2F5F7 50%, #EBE3D5 50%,#F3EEEA 100%)',
    children: (
      <>
        <LogoGroup {...MainLogoGroup.args} />
        <Collection {...MainCollection.args} />
        <CardGroup {...MainCardGroup.args} />
      </>
    ),
  },
};
