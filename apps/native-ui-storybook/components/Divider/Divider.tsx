import { StoryFn } from '@storybook/react';
import { colors } from '@utilitywarehouse/colour-system';
import { Divider } from '@utilitywarehouse/native-ui';
import type { ColorValue } from '@utilitywarehouse/native-ui/types';
import React from 'react';

const DividerBasic: StoryFn<{
  color: string;
  space: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}> = ({ color, space }) => {
  return <Divider color={color ? (`$${color}` as ColorValue) : undefined} space={space} />;
};

DividerBasic.argTypes = {
  color: {
    options: [...Object.keys(colors)],
    control: 'select',
    description: 'Color of the divider',
  },
  space: {
    options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    control: 'select',
    description: 'Space between the divider',
  },
};

DividerBasic.args = { space: 'none' };

export default DividerBasic;
