import type { Meta, StoryObj } from '@storybook/react';

import { Collection } from './Collection';
import {
  MainBottomBox,
  MainBox,
  MainNavbarBox,
  SearchBottomBox,
} from '../../molecules/Box/Box.stories';
import { Box } from '../../molecules/Box/Box';
// import { Link } from '../../atoms/Link/Link';
import { DropDown } from '../../molecules/DropDown/DropDown';
import {
  MainDropDown,
  SelectDropDown,
} from '../../molecules/DropDown/DropDown.stories';
import { Logo } from '../../atoms/Logo/Logo';
import { ReactLogo } from '../../atoms/Logo/Logo.stories';
import { SearchCollection } from './Collection';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Organisms/Collection',
  component: Collection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control:  'color' },
  },
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainCollection: Story = {
  args: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '45vmax',
    gap: '3vmax',
    component: 'MainCollection',
    children: (
      <>
        <Box {...MainBox.args} />
        <Box {...MainBottomBox.args} />
      </>
    ),
  },
};

export const MainNavBarCollection: Story = {
  args: {
    flexDirection: 'column',
    position: 'fixed',
    zIndex: '3',
    width: '100vmax',
    children: <Box {...MainNavbarBox.args} />,
  },
};

export const ComputerScienceNavBarCollection: Story = {
  args: {
    flexDirection: 'column',
    position: '',
    zIndex: '3',
    width: '100vmax',
    children: <Box {...MainNavbarBox.args} />,
  },
};

export const SearchLogoAndFormCollection: Story = {
  args: {
    children: (
      <SearchCollection
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="20vmax"
        height="100vmin"
        gap="5vmax"
      />
    ),
  },
};

export const DetailLogoAndFormCollection: Story = {
  args: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vmax',
    height: '20vmax',
    gap: '5vmax',
    children: (
      <>
        <Logo {...ReactLogo.args} />
        <DropDown {...SelectDropDown.args} />
        <Box {...SearchBottomBox.args} />
      </>
    ),
  },
};
