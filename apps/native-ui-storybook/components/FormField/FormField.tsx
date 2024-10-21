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

const FormFieldBasic: StoryFn = ({ validationStatus, showValidationIcon, ...props }: any) => {
  return (
    <FormField validationStatus={validationStatus} {...props}>
      <FormFieldLabel>
        <FormFieldLabelText>Label</FormFieldLabelText>
      </FormFieldLabel>
      <Input>
        <InputField />
      </Input>
      <FormFieldHelper>
        <FormFieldHelperText>Helper text</FormFieldHelperText>
      </FormFieldHelper>
      <FormFieldInvalid>
        {showValidationIcon && <FormFieldInvalidIcon />}
        <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
      </FormFieldInvalid>
      <FormFieldValid>
        {showValidationIcon && <FormFieldValidIcon />}
        <FormFieldValidText>Valid form field text</FormFieldValidText>
      </FormFieldValid>
    </FormField>
  );
};

FormFieldBasic.argTypes = {
  validationStatus: {
    control: 'select',
    options: ['initial', 'valid', 'invalid'],
    description: 'The validation status of the Input component',
    defaultValue: 'initial',
  },
  showValidationIcon: {
    control: 'boolean',
    description: 'Show the validation icon.',
    defaultValue: true,
  },
  disabled: {
    control: 'boolean',
    description: 'Disable the Input component',
    defaultValue: false,
  },
} as Meta<typeof Input>['argTypes'];

FormFieldBasic.args = {
  validationStatus: 'initial',
  disabled: false,
  showValidationIcon: false,
} as Meta<typeof Input>['args'];

export default FormFieldBasic;
