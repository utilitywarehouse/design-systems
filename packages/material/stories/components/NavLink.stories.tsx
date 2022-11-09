import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavLink, NavLinkProps } from '../../src';
import { BackgroundStack, typographyVariants } from '../utils';

export default {
  title: 'Components/Links',
  components: NavLink,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: typographyVariants,
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: 'navigation link',
    variant: 'body',
    disabled: false,
    active: false,
    textTransform: 'capitalize',
  },
} as Meta;

export const NavLinkStory: Story<NavLinkProps> = args => {
  return (
    <BackgroundStack>
      <NavLink href="#" {...args} />
    </BackgroundStack>
  );
};

NavLinkStory.storyName = 'NavLink';
