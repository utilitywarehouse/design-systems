import React from 'react';
import {
  Input,
  InputField,
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
import { Meta, StoryFn } from '@storybook/react';

const FormFieldBasic: StoryFn = ({
  placeholder,
  validationStatus,
  type,
  _showValidationIcon,
  ...props
}: any) => {
  return (
    <FormField validationStatus={validationStatus} {...props}>
      <FormFieldLabel>
        <FormFieldLabelText>Label</FormFieldLabelText>
      </FormFieldLabel>
      <Input>
        <InputField placeholder={placeholder} type={type} />
      </Input>
      <FormFieldHelper>
        <FormFieldHelperText>Helper text</FormFieldHelperText>
      </FormFieldHelper>
      <FormFieldInvalid>
        {_showValidationIcon && <FormFieldInvalidIcon />}
        <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
      </FormFieldInvalid>
      <FormFieldValid>
        {_showValidationIcon && <FormFieldValidIcon />}
        <FormFieldValidText>Valid form field text</FormFieldValidText>
      </FormFieldValid>
    </FormField>
  );
};

FormFieldBasic.argTypes = {
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
  _showValidationIcon: {
    control: 'boolean',
    description:
      'Show the validation icon. \n _Note: this is not a prop of the `FormField` component, just a representation of the `FormFieldInvalidIcon` and `FormFieldValidIcon` component for the Storybook playground._',
    defaultValue: true,
  },
  isDisabled: {
    control: 'boolean',
    description: 'Disable the Input component',
    defaultValue: false,
  },
} as Meta<typeof Input>['argTypes'];

FormFieldBasic.args = {
  placeholder: 'Input placeholder',
  validationStatus: 'initial',
  type: 'text',
  isDisabled: false,
  _showValidationIcon: true,
} as Meta<typeof Input>['args'];

export default FormFieldBasic;
