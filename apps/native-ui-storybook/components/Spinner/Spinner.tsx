import { Spinner } from '@utilitywarehouse/native-ui';
import React from 'react';

const SpinnerBasic: any = ({ color, size }: any) => {
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

export { Spinner };
