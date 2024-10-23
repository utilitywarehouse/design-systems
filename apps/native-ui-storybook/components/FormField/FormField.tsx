import React from 'react';
import { Input, FormField } from '@utilitywarehouse/native-ui';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { Meta, StoryFn } from '@storybook/react';

const FormFieldBasic: StoryFn = ({ validationStatus, helperIcon: icon, ...props }: any) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const helperIcon: ComponentType | undefined = icon === 'none' ? undefined : Icons[icon];
  return (
    <FormField validationStatus={validationStatus} helperIcon={helperIcon} {...props}>
      <Input />
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
  label: {
    control: 'text',
    description: 'The label of the Input component',
    defaultValue: 'Label',
  },
  helperText: {
    control: 'text',
    description: 'The helper text of the Input component',
    defaultValue: 'Helper text',
  },
  helperIcon: {
    control: 'select',
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    description: 'The helper text icon of the Input component',
    defaultValue: 'Helper text icon',
  },
  helperPosition: {
    control: 'select',
    options: ['top', 'bottom'],
    description: 'The helper text position of the Input component',
    defaultValue: 'bottom',
  },
  validText: {
    control: 'text',
    description: 'The valid text of the Input component',
    defaultValue: 'Valid text',
  },
  invalidText: {
    control: 'text',
    description: 'The invalid text of the Input component',
    defaultValue: 'Invalid text',
  },
} as Meta<typeof Input>['argTypes'];

FormFieldBasic.args = {
  validationStatus: 'initial',
  disabled: false,
  showValidationIcon: false,
  label: 'Label',
  helperText: 'Helper text',
  helperIcon: 'none',
  helperPosition: 'top',
  validText: 'Valid text',
  invalidText: 'Invalid error text',
} as Meta<typeof Input>['args'];

export default FormFieldBasic;
