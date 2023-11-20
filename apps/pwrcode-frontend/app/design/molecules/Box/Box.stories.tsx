import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { Text } from '../../atoms/Text/Text';
import { Form } from '../../atoms/Form/Form';
import { KeyWordForm, SkillForm } from '../../atoms/Form/Form.stories';
import { SubTitle, Title } from '../../atoms/Text/Text.stories';
import { Link } from '../../atoms/Link/Link';
import {
  NavbarComputerScienceLink,
  NavbarHomeLink,
  NavbarKnowledgeLink,
} from '../../atoms/Link/Link.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Box',
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainBox: Story = {
  args: {
    flexDirection: 'column',
    children: (
      <>
        <Text {...Title.args} />
        <Text {...SubTitle.args} />
      </>
    ),
  },
};

export const MainBottomBox: Story = {
  args: {
    flexDirection: 'column',
    children: (
      <>
        <Form {...SkillForm.args} />
        <Form {...KeyWordForm.args} />
      </>
    ),
  },
};

export const MainNavbarBox: Story = {
  args: {
    flexDirection: 'row',
    gap: '20px',
    children: (
      <>
        <Link {...NavbarHomeLink.args} />
        <Link {...NavbarKnowledgeLink.args} />
        <Link {...NavbarComputerScienceLink.args} />
      </>
    ),
  },
};
