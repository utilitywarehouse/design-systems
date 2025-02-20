import React from 'react';
import { Checkbox, CheckboxGroup } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';

const meta = {
  title: 'Stories / Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      type: 'boolean',
      control: 'boolean',
      description: 'When true, the checkbox will be checked.',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: 'To manually set disable to the checkbox.',
    },
    label: {
      type: 'string',
      control: 'text',
      description: 'The label component for the checkbox.',
    },
    helperText: {
      type: 'string',
      control: 'text',
      description: 'The helper text of the checkbox component',
      defaultValue: 'Helper text',
    },
    validationStatus: {
      control: 'select',
      options: ['initial', 'valid', 'invalid'],
      description: 'The validation status of the checkbox component',
      defaultValue: 'initial',
    },
    showValidationIcon: {
      control: 'boolean',
      description: 'Show the validation icon.',
      defaultValue: true,
    },
    invalidText: {
      control: 'text',
      description: 'The invalid text of the checkbox component',
      defaultValue: 'Invalid text',
    },
  },
  args: {
    value: 'Check, 1, 2',
    checked: false,
    disabled: false,
    label: 'Check, 1, 2',
    helperText: '',
    validationStatus: 'initial',
    showValidationIcon: true,
    invalidText: 'Invalid text',
    validText: 'Valid text',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        value="Check, 1, 2"
        checked={checked}
        onChange={val => {
          console.log('-----');
          setChecked(val);
        }}
        label="Test"
      />
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [values, setValues] = React.useState(['Label 1']);
    return (
      <CheckboxGroup
        aria-label="Checkbox Group"
        value={values}
        onChange={setValues}
        nativeID="checkbox-group"
        style={{ gap: 16 }}
      >
        <VariantTitle title="Checkbox">
          <Checkbox
            value="Label 1"
            aria-label="Label 1"
            onChange={(checked: boolean) => {
              console.log(checked, '###');
            }}
            nativeID="checkbox-1"
          />
        </VariantTitle>
        <VariantTitle title="Checkbox with label">
          <Checkbox
            value="Label 2"
            aria-label="Label 2"
            onChange={(checked: boolean) => {
              console.log(checked, '###');
            }}
            nativeID="checkbox-2"
            label="Label 1"
          />
        </VariantTitle>
        <VariantTitle title="Checkbox disabled">
          <Checkbox
            aria-label="Label 3"
            value="Label 3"
            disabled
            checked
            onChange={(checked: boolean) => console.log(checked, '###')}
            nativeID="checkbox-3"
          />
        </VariantTitle>
        <VariantTitle title="Checkbox disabled with label">
          <Checkbox
            aria-label="Label 4"
            value="Label 4"
            disabled
            onChange={(checked: boolean) => console.log(checked, '###')}
            nativeID="checkbox-4"
            label="Label 2"
          />
        </VariantTitle>
      </CheckboxGroup>
    );
  },
};
