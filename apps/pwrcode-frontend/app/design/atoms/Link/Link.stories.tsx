import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink as Link } from './Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Learn More',
    href: '/',
    afterIcon: '->',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.5vmin',
    whiteSpace: 'nowrap',
    textDecorationLine: 'none',
    color: 'black',
    padding: '1vh 2vw',
    border: '3px solid #c2d1d9',
    borderRadius: '10px',
  },
};

export const NavbarSearchLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Search'.toUpperCase(),
    href: 'search',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '0.75rem',
    margin: '0',
    textDecorationLine: 'none',
    color: 'black',
  },
};
export const NavbarKnowledgeLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Knowledge'.toUpperCase(),
    href: 'knowledge',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '0.75rem',
    margin: '0',
    textDecorationLine: 'none',
    color: 'black',
  },
};
export const NavbarComputerScienceLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Computer Science'.toUpperCase(),
    href: 'computer_science',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '0.75rem',
    margin: '0',
    textDecorationLine: 'none',
    color: 'black',
  },
};
export const NavbarCodeBoxLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'CodeBox'.toUpperCase(),
    href: 'codebox',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '0.75rem',
    margin: '0',
    textDecorationLine: 'none',
    color: 'black',
  },
};
export const NavbarTitleLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'PwrCode',
    href: '/',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.5625rem',
    margin: '0',
    textDecorationLine: 'none',
    color: 'black',
  },
};
