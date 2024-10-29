import { StoryFn } from '@storybook/react';
import { Divider } from '@utilitywarehouse/native-ui';
import React from 'react';

const DividerBasic: StoryFn<{
  color: string;
}> = ({ color }) => {
  return <Divider color={color} />;
};

DividerBasic.argTypes = {
  color: {
    control: {
      type: 'color',
    },
    description: 'Color of the spinner',
  },
};

DividerBasic.args = {};

export default DividerBasic;
