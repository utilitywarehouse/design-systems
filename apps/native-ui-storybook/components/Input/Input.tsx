import React from 'react';
import { Input } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

import * as Icons from '@utilitywarehouse/react-native-icons';

const InputBasic: StoryFn = ({
  placeholder,
  validationStatus,
  type,
  leadingIcon: leading,
  trailingIcon: trailing,
  ...props
}: any) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const leadingIcon: ComponentType | undefined = leading === 'none' ? undefined : Icons[leading];
  // @ts-expect-error - This is a playground
  const trailingIcon: ComponentType | undefined = trailing === 'none' ? undefined : Icons[trailing];
  return (
    <Input
      {...props}
      placeholder={placeholder}
      type={type}
      validationStatus={validationStatus}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
    />
  );
};

InputBasic.argTypes = {
  placeholder: {
    control: 'text',
    description: 'The Input field placeholder',
    defaultValue: '',
  },
  type: {
    control: 'select',
    options: ['text', 'password'],
    description: 'The Input field type',
    defaultValue: 'text',
  },
  validationStatus: {
    control: 'select',
    options: ['initial', 'valid', 'invalid'],
    description: 'The validation status of the Input component',
    defaultValue: 'initial',
  },
  showValidationIcon: {
    control: 'boolean',
    description: 'Show the validation icon',
    defaultValue: true,
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the Input component',
    defaultValue: false,
  },
  readonly: {
    control: 'boolean',
    description: 'Read only the Input component',
    defaultValue: false,
  },
  focused: {
    control: 'boolean',
    description: 'Focus the Input component',
    defaultValue: false,
  },
  leadingIcon: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The leading icon component for the Input component',
  },
  trailingIcon: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The trailing icon component for the Input component',
  },
};

InputBasic.args = {
  placeholder: 'Input placeholder',
  validationStatus: 'initial',
  showValidationIcon: true,
  type: 'text',
  disabled: false,
  readonly: false,
  focused: false,
  leadingIcon: 'none',
  trailingIcon: 'none',
};

export default InputBasic;
