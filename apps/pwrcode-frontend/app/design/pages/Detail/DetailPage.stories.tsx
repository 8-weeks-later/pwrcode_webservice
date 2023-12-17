import type { Meta, StoryObj } from '@storybook/react';

import { DetailPage } from './DetailPage';
import { DetailTemplateStory } from '../../templates/Detail/DetailTemplate.stories';
import { DetailTemplate } from '../../templates/Detail/DetailTemplate';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Pages/DetailPage',
  component: DetailPage,
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
} satisfies Meta<typeof DetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DetailPageStory: Story = {
  args: {
    children: <DetailTemplate {...DetailTemplateStory.args} />,
  },
};
