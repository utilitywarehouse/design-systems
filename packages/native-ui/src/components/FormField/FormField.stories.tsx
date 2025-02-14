import React from 'react';
import {
  FormField,
  FormFieldHelperText,
  FormFieldInvalid,
  FormFieldInvalidText,
  FormFieldLabelText,
  FormFieldValid,
  FormFieldValidText,
} from '.';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { VariantTitle } from '../../../docs/components';
import { Input } from '../Input';
import { VStack } from '../VStack';
import FormFieldLabel from './FormFieldLabel';
import FormFieldHelper from './FormFieldHelper';

const meta = {
  title: 'Stories / FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  },
  args: {
    validationStatus: 'initial',
    disabled: false,
    showValidationIcon: false,
    label: 'Label',
    helperText: 'Helper text',
    helperIcon: undefined,
    helperPosition: 'top',
    validText: 'Valid text',
    invalidText: 'Invalid error text',
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ validationStatus, helperIcon: icon, ...props }) => {
    // @ts-expect-error - This is a playground
    const helperIcon = icon === 'none' ? undefined : Icons[icon];
    return (
      <FormField validationStatus={validationStatus} helperIcon={helperIcon} {...props}>
        <Input />
      </FormField>
    );
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <VStack space="lg">
        <VariantTitle title="Default">
          <FormField>
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <Input />
          </FormField>
        </VariantTitle>
        <VariantTitle title="With helper text bottom">
          <FormField>
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <Input />
            <FormFieldHelper>
              <FormFieldHelperText>Helper text</FormFieldHelperText>
            </FormFieldHelper>
          </FormField>
        </VariantTitle>
        <VariantTitle title="With helper text top">
          <FormField>
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <FormFieldHelper>
              <FormFieldHelperText>Helper text</FormFieldHelperText>
            </FormFieldHelper>
            <Input />
          </FormField>
        </VariantTitle>
        <VariantTitle title="Valid with valid text">
          <FormField validationStatus="valid">
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <FormFieldHelper>
              <FormFieldHelperText>Helper text</FormFieldHelperText>
            </FormFieldHelper>
            <Input />
            <FormFieldValid>
              <FormFieldValidText>Valid form field text</FormFieldValidText>
            </FormFieldValid>
          </FormField>
        </VariantTitle>
        <VariantTitle title="Invalid with invalid text">
          <FormField validationStatus="invalid">
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <FormFieldHelper>
              <FormFieldHelperText>Helper text</FormFieldHelperText>
            </FormFieldHelper>
            <Input />
            <FormFieldInvalid>
              <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
            </FormFieldInvalid>
          </FormField>
        </VariantTitle>
        <VariantTitle title="Disabled">
          <FormField disabled>
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <Input />
            <FormFieldHelper>
              <FormFieldHelperText>Helper text</FormFieldHelperText>
            </FormFieldHelper>
          </FormField>
        </VariantTitle>
      </VStack>
    );
  },
};
