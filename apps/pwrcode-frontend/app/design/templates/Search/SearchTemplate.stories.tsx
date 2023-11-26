import type { Meta, StoryObj } from '@storybook/react';

import { SearchTemplate } from './SearchTemplate';
import { Collection } from '../../organisms/Collection/Collection';
import { LogoGroup } from '../../organisms/LogoGroup/LogoGroup';
import {
  MainCollection,
  MainNavBarCollection,
} from '../../organisms/Collection/Collection.stories';
import { CardGroup } from '../../organisms/CardGroup/CardGroup';
import { MainLogoGroup } from '../../organisms/LogoGroup/LogoGroup.stories';
import { MainCardGroup } from '../../organisms/CardGroup/CardGroup.stories';
import { SearchLayoutStory } from './SearchLayout.stories';
import { SearchLayout } from './SearchLayout';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Templates/SearchTemplate',
  component: SearchTemplate,
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
} satisfies Meta<typeof SearchTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SearchTemplateStory: Story = {
  args: {
    height: '100vmin',
    children: (
      <>
        <Collection {...MainNavBarCollection.args} />
        <SearchLayout {...SearchLayoutStory.args} />
      </>
    ),
  },
};
