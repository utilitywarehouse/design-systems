import React from 'react';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  FormField,
  FormFieldHelper,
  FormFieldHelperText,
  FormFieldLabel,
  FormFieldLabelText,
  FormFieldInvalidIcon,
  FormFieldInvalid,
  FormFieldInvalidText,
  FormFieldValidIcon,
  FormFieldValid,
  FormFieldValidText,
} from '@utilitywarehouse/native-ui';
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
    <FormField validationStatus={validationStatus} {...props}>
      <FormFieldLabel>
        <FormFieldLabelText>Label</FormFieldLabelText>
      </FormFieldLabel>
      <Input>
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
      <FormFieldHelper>
        <FormFieldHelperText>Helper text</FormFieldHelperText>
      </FormFieldHelper>
      <FormFieldInvalid>
        <FormFieldInvalidIcon />
        <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
      </FormFieldInvalid>
      <FormFieldValid>
        <FormFieldValidIcon />
        <FormFieldValidText>Valid form field text</FormFieldValidText>
      </FormFieldValid>
    </FormField>
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
  isDisabled: {
    control: 'boolean',
    description: 'Disable the Input component',
    defaultValue: false,
  },
  isReadOnly: {
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
  isDisabled: false,
  isReadOnly: false,
  isFocused: false,
  _showIconLeft: false,
  _showIconRight: false,
} as Meta<typeof Input>['args'];

export default InputBasic;