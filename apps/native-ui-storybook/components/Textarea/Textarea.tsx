import React from 'react';
import { Textarea } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

import * as Icons from '@utilitywarehouse/react-native-icons';

const TextareaBasic: StoryFn = ({
  placeholder,
  validationStatus,
  leadingIcon: leading,
  trailingIcon: trailing,
  ...props
}: {
  placeholder?: string;
  validationStatus?: 'initial' | 'valid' | 'invalid';
  leadingIcon?: string;
  trailingIcon?: string;
}) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const leadingIcon = leading === 'none' ? undefined : Icons[leading];
  // @ts-expect-error - This is a playground
  const trailingIcon = trailing === 'none' ? undefined : Icons[trailing];
  return (
    <Textarea
      {...props}
      placeholder={placeholder}
      validationStatus={validationStatus}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
    />
  );
};

TextareaBasic.argTypes = {
  placeholder: {
    control: 'text',
    description: 'The Textarea field placeholder',
    defaultValue: '',
  },
  validationStatus: {
    control: 'select',
    options: ['initial', 'valid', 'invalid'],
    description: 'The validation status of the Textarea component',
    defaultValue: 'initial',
  },
  showValidationIcon: {
    control: 'boolean',
    description: 'Show the validation icon',
    defaultValue: true,
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the Textarea component',
    defaultValue: false,
  },
  readonly: {
    control: 'boolean',
    description: 'Read only the Textarea component',
    defaultValue: false,
  },
  focused: {
    control: 'boolean',
    description: 'Focus the Textarea component',
    defaultValue: false,
  },
  leadingIcon: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The leading icon component for the Textarea component',
  },
  trailingIcon: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The trailing icon component for the Textarea component',
  },
};

TextareaBasic.args = {
  placeholder: 'Textarea placeholder',
  validationStatus: 'initial',
  showValidationIcon: true,
  type: 'text',
  disabled: false,
  readonly: false,
  focused: false,
  leadingIcon: 'none',
  trailingIcon: 'none',
};

export default TextareaBasic;
