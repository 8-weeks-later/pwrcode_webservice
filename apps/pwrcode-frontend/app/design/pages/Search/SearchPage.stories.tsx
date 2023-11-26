import type { Meta, StoryObj } from '@storybook/react';

import { SearchPage } from './SearchPage';
import { SearchTemplate } from '../../templates/Search/SearchTemplate';
import { SearchTemplateStory } from '../../templates/Search/SearchTemplate.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Pages/SearchPage',
  component: SearchPage,
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
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SearchPageStory: Story = {
  args: {
    children: <SearchTemplate {...SearchTemplateStory.args} />,
  },
};
