import React from 'react';
import { Radio, RadioGroup } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';
import { VStack } from '../VStack';

const meta = {
  title: 'Stories / Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
    disabled: false,
    label: '',
    helperText: '',
    validationStatus: 'initial',
    showValidationIcon: true,
    invalidText: 'Invalid text',
    validText: 'Valid text',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    value: 'Option 1',
  },
  render: args => (
    <RadioGroup>
      <Radio
        aria-label="Label 1"
        onChange={(checked: boolean) => {
          console.log(checked, '###');
        }}
        nativeID="Radio-1"
        {...args}
      />
    </RadioGroup>
  ),
};

export const Variants: Story = {
  args: {
    value: 'Option 1',
  },
  render: () => {
    const [value, setValue] = React.useState('Option 1');
    return (
      <VStack space="lg">
        <VariantTitle title="Default">
          <RadioGroup
            aria-label="Radio Group"
            value={value}
            onChange={setValue}
            nativeID="Radio-group"
          >
            <Radio
              value="Option 1"
              aria-label="Option 1"
              onChange={(checked: boolean) => {
                console.log(checked, '###');
              }}
              nativeID="Radio-1"
              label="Option 1"
            />
            <Radio
              value="Option 2"
              aria-label="Option 2"
              onChange={(checked: boolean) => {
                console.log(checked, '###');
              }}
              nativeID="Radio-2"
              label="Option 2"
            />
          </RadioGroup>
        </VariantTitle>
        <VariantTitle title="Disabled">
          <RadioGroup
            aria-label="Radio Group"
            value={value}
            onChange={setValue}
            nativeID="Radio-group"
            disabled
          >
            <Radio
              aria-label="Option 3"
              value="Option 1"
              onChange={(checked: boolean) => console.log(checked, '###')}
              nativeID="Radio-3"
              label="Option 1"
            />
            <Radio
              aria-label="Option 4"
              value="Option 2"
              onChange={(checked: boolean) => console.log(checked, '###')}
              nativeID="Radio-4"
              label="Option 2"
            />
          </RadioGroup>
        </VariantTitle>
      </VStack>
    );
  },
};
