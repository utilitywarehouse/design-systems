import React, { useState } from 'react';
import { Switch } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const SwitchBasic: StoryFn<{
  value: boolean;
  disabled?: boolean;
  size?: '32' | '24';
}> = ({ ...props }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return <Switch {...props} onValueChange={setIsEnabled} accessibilityLabel="Toggle Switch" />;
};

SwitchBasic.argTypes = {
  value: {
    control: 'boolean',
    description: 'Use this value to set the Switch value.',
  },
  size: {
    control: 'select',
    options: ['32', '24'],
    description: 'Use this value to set the Switch size.',
  },
  disabled: {
    control: 'boolean',
    description: 'Use this value to disable the Switch.',
  },
};

SwitchBasic.args = {
  value: false,
  size: '32',
  disabled: false,
};

export default SwitchBasic;

export { Switch };
