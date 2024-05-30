import React from 'react';
import { Input, InputField, InputIcon } from '@utilitywarehouse/native-ui';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { Meta, StoryFn } from '@storybook/react';

const InputBasic: StoryFn = ({ text = 'NEW FEATURE', icon = false, ...props }: any) => {
  return (
    <Input {...props}>
      <InputField />
      {icon && <InputIcon as={AddSmallIcon} />}
    </Input>
  );
};

InputBasic.argTypes = {
  colorScheme: {
    control: 'select',
    options: ['cyan', 'red', 'green', 'gold', 'grey'],
  },
  borderless: {
    control: 'boolean',
  },
  strong: {
    control: 'boolean',
  },
  size: {
    control: 'select',
    options: ['large', 'small'],
  },
  text: {
    control: 'text',
  },
} as Meta<typeof Input>['argTypes'];

InputBasic.args = {
  text: 'New Feature',
  strong: false,
  borderless: false,
  colorScheme: 'cyan',
  size: 'large',
} as Meta<typeof Input>['args'];

export default InputBasic;
