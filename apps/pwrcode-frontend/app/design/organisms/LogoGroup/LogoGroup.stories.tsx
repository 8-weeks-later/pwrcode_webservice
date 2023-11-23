import type { Meta, StoryObj } from '@storybook/react';

import { LogoGroup } from './LogoGroup';
import { Logo } from '../../atoms/Logo/Logo';
import { ReactLogo, SvelteLogo, VueLogo } from '../../atoms/Logo/Logo.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Organisms/LogoGroup',
  component: LogoGroup,
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
} satisfies Meta<typeof LogoGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainLogoGroup: Story = {
  args: {
    width: '10vmax',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    children: (
      <>
        <Logo {...ReactLogo.args} />
        <Logo {...VueLogo.args} />
        <Logo {...SvelteLogo.args} />
      </>
    ),
  },
};
