import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Link } from '../../atoms/Link/Link';
import { Text } from '../../atoms/Text/Text';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { MainTextArea } from '../../atoms/TextArea/TextArea.stories';
import { ReactText } from '../../atoms/Text/Text.stories';
import { MainLink } from '../../atoms/Link/Link.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { : 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainCard: Story = {
  args: {
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30vmax',
    height: '40vmax',
    border: '10px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    animation: '15s linear 1s infinite running slideintest',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <Link {...MainLink.args} />
      </>
    ),
  },
};

export const SearchCard: Story = {
  args: {
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75vmax',
    height: '40vmax',
    border: '10px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <Link {...MainLink.args} />
      </>
    ),
  },
};

export const DetailCard: Story = {
  args: {
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'center',
    width: '90vmax',
    height: '60vmax',
    border: '10px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <TextArea {...MainTextArea.args} />
        <Link {...MainLink.args} />
      </>
    ),
  },
};

export const DetailErrorCard: Story = {
  args: {
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90vmax',
    height: '20vmax',
    border: '10px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <Link {...MainLink.args} />
      </>
    ),
  },
};
