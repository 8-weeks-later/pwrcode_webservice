import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

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
    href: '#',
    afterIcon: '->',
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '0 11.19rem 3.25rem',
    whiteSpace: 'nowrap',
    textDecorationLine: 'none',
    color: 'black',
  },
};

export const NavbarHomeLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Home',
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '0',
  },
};
export const NavbarKnowledgeLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Knowledge'.toUpperCase(),
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '0',
  },
};
export const NavbarComputerScienceLink: Story = {
  args: {
    fontFamily: 'Ubuntu',
    text: 'Computer Science'.toUpperCase(),
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '0',
  },
};
