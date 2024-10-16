import React from 'react';
import { Input, InputField, InputIcon, InputSlot } from '@utilitywarehouse/native-ui';
import { EmailMediumIcon, EyeMediumIcon } from '@utilitywarehouse/react-native-icons';
import { Meta, StoryFn } from '@storybook/react';

const InputBasic: StoryFn = ({
  placeholder,
  validationStatus,
  type,
  _showIconLeft,
  _showIconRight,
  ...props
}: any) => {
  return (
    <Input {...props} validationStatus={validationStatus}>
      {_showIconLeft && (
        <InputSlot>
          <InputIcon as={EmailMediumIcon} />
        </InputSlot>
      )}
      <InputField placeholder={placeholder} type={type} />
      {_showIconRight && (
        <InputSlot>
          <InputIcon as={EyeMediumIcon} />
        </InputSlot>
      )}
    </Input>
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
  isFocused: {
    control: 'boolean',
    description: 'Focus the Input component',
    defaultValue: false,
  },
  _showIconLeft: {
    control: 'boolean',
    description:
      'Show icon left. \n _Note: this is not a prop of the `Input` component, just a representation of the `InputSlot` and `InputIcon` component for the Storybook playground._',
  },
  _showIconRight: {
    control: 'boolean',
    description:
      'Show icon right. \n _Note: this is not a prop of the `Input` component, just a representation of the `InputSlot` and `InputIcon` component for the Storybook playground._',
  },
} as Meta<typeof Input>['argTypes'];

InputBasic.args = {
  placeholder: 'Input placeholder',
  validationStatus: 'initial',
  showValidationIcon: true,
  type: 'text',
  disabled: false,
  readonly: false,
  isFocused: false,
  _showIconLeft: false,
  _showIconRight: false,
} as Meta<typeof Input>['args'];

export default InputBasic;
