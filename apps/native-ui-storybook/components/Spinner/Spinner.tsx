import { StoryFn } from '@storybook/react';
import { Spinner } from '@utilitywarehouse/native-ui';
import React from 'react';

const SpinnerBasic: StoryFn<{
  color: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}> = ({ color, size }) => {
  return <Spinner color={color} size={size} />;
};

SpinnerBasic.argTypes = {
  color: {
    control: {
      type: 'color',
    },
    description: 'Color of the spinner',
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
    description: 'Size of the spinner',
  },
};

SpinnerBasic.args = {
  size: 'md',
};

export default SpinnerBasic;
