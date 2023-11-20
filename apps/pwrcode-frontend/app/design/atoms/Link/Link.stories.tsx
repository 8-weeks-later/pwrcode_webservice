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
    font: 'Ubuntu',
    text: 'Learn More',
    href: '#',
    afterIcon: '->',
    fontStyle: 'normal',
    fontWeight: '400',
  },
};

export const NavbarHomeLink: Story = {
  args: {
    font: 'Ubuntu',
    text: 'Home',
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
  },
};
export const NavbarKnowledgeLink: Story = {
  args: {
    font: 'Ubuntu',
    text: 'Knowledge'.toUpperCase(),
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
  },
};
export const NavbarComputerScienceLink: Story = {
  args: {
    font: 'Ubuntu',
    text: 'Computer Science'.toUpperCase(),
    href: '#',
    fontStyle: 'normal',
    fontWeight: '400',
  },
};
