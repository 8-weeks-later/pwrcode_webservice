import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { CustomLink } from '../../atoms/Link/Link';
import { Text } from '../../atoms/Text/Text';
import { TextArea } from '../../atoms/TextArea/TextArea';
import {
  MainTextArea,
  SearchTextArea,
} from '../../atoms/TextArea/TextArea.stories';
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
    display: 'flex',
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30vmax',
    height: '50vmin',
    border: '2px solid rgba(176, 166, 149, 0.50)',
    // padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    // animation: '15s linear 1s infinite running slideintest',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <CustomLink {...MainLink.args} />
      </>
    ),
  },
};

// const SearchCardTemplate: Story = {
//   render: ({ data, ...args }) => {
//     return (
//       // <Card {...SearchCard.args} data={data} />
//       <Card>
//           <Text {...ReactText.args} text={data.title} />
//           <TextArea {...SearchTextArea.args} text={data.content} />
//           <Link {...MainLink.args} href={data.link} />
//       </Card>
//     );
//   },
// };

export const SearchCardStory: Story = {
  args: {
    display: 'flex',
    flexShrink: '0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75vmax',
    height: '85vmin',
    border: '2px solid rgba(176, 166, 149, 0.50)',
    // padding: '1.19rem 0 3.25rem 0',
    background: '#F2F5F7',
    data: '',
    // children: ((data: any) => (
    //   <>

    //   </>
    // ))(args.data),
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
    border: '2px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <TextArea {...MainTextArea.args} />
        <CustomLink {...MainLink.args} />
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
    border: '2px solid rgba(176, 166, 149, 0.50)',
    padding: '1.19rem 1.75rem 3.25rem 1.75rem',
    background: '#F2F5F7',
    children: (
      <>
        <Text {...ReactText.args} />
        <TextArea {...MainTextArea.args} />
        <CustomLink {...MainLink.args} />
      </>
    ),
  },
};
