import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { Text } from '../../atoms/Text/Text';
import { Form, SearchForm } from '../../atoms/Form/Form';
import {
  KeyWordForm,
  SearchKeyWordForm,
  SkillForm,
} from '../../atoms/Form/Form.stories';
import { SubTitle, Title } from '../../atoms/Text/Text.stories';
import { Link } from '../../atoms/Link/Link';
import {
  NavbarCodeBoxLink,
  NavbarComputerScienceLink,
  NavbarHomeLink,
  NavbarKnowledgeLink,
  NavbarTitleLink,
} from '../../atoms/Link/Link.stories';
import { Button } from '../../atoms/Button/Button';
import { MainFormButton } from '../../atoms/Button/Button.stories';

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
    flexDirection: 'row',
    children: (
      <>
        <SearchForm {...KeyWordForm.args} />
        <Button {...MainFormButton.args} />
      </>
    ),
  },
};

export const MainNavbarBox: Story = {
  args: {
    flexDirection: 'row',
    gap: '3.958vmax',
    padding: '0 0 0 12.37vmax',
    height: '5.03vmax',
    justifyContent: 'start',
    alignItems: 'center',
    flexShrink: '0',
    background: '#B0A695',
    children: (
      <>
        <Link {...NavbarTitleLink.args} />
        <Link {...NavbarHomeLink.args} />
        <Link {...NavbarKnowledgeLink.args} />
        <Link {...NavbarComputerScienceLink.args} />
        <Link {...NavbarCodeBoxLink.args} />
      </>
    ),
  },
};

export const SearchBottomBox: Story = {
  args: {
    flexDirection: 'row',
    gap: '10px',
    width: '10vmax',
    children: (
      <>
        <SearchForm {...SearchKeyWordForm.args} />
      </>
    ),
  },
};
