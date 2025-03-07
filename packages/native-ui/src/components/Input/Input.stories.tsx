import React from 'react';
import { Input } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { VStack } from '../VStack';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';

const meta = {
  title: 'Stories / Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  },
  args: {
    placeholder: 'Input placeholder',
    validationStatus: 'initial',
    showValidationIcon: true,
    type: 'text',
    disabled: false,
    readonly: false,
    focused: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ leadingIcon: leading, trailingIcon: trailing, ...args }) => {
    // @ts-expect-error - This is a playground
    const leadingIcon = leading === 'none' ? undefined : Icons[leading];
    // @ts-expect-error - This is a playground
    const trailingIcon = trailing === 'none' ? undefined : Icons[trailing];
    return <Input {...args} leadingIcon={leadingIcon} trailingIcon={trailingIcon} />;
  },
};

export const Variants: Story = {
  parameters: {
    controls: { include: [] },
  },
  render: () => {
    return (
      <VStack space="lg">
        <VariantTitle title="Default">
          <Input />
        </VariantTitle>
        <VariantTitle title="With icon">
          <Input leadingIcon={EmailMediumIcon} />
        </VariantTitle>
        <VariantTitle title="With placeholder">
          <Input leadingIcon={EmailMediumIcon} placeholder="Input placeholder" />
        </VariantTitle>
        <VariantTitle title="With value">
          <Input
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
            value="filling the value"
          />
        </VariantTitle>
        <VariantTitle title="Focused">
          <Input
            focused
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
            value="filling the value"
          />
        </VariantTitle>
        <VariantTitle title="Type password">
          <Input
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
            value="filling the value"
            type="password"
          />
        </VariantTitle>
        <VariantTitle title="Valid">
          <Input
            leadingIcon={EmailMediumIcon}
            validationStatus="valid"
            placeholder="Input placeholder"
          />
        </VariantTitle>
        <VariantTitle title="Valid focused">
          <Input
            validationStatus="valid"
            focused
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
          />
        </VariantTitle>
        <VariantTitle title="Invalid">
          <Input
            validationStatus="invalid"
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
          />
        </VariantTitle>
        <VariantTitle title="Invalid focused">
          <Input
            validationStatus="invalid"
            focused
            leadingIcon={EmailMediumIcon}
            placeholder="Input placeholder"
          />
        </VariantTitle>
        <VariantTitle title="Disabled">
          <Input disabled leadingIcon={EmailMediumIcon} placeholder="Input placeholder" />
        </VariantTitle>
        <VariantTitle title="Readonly">
          <Input readonly leadingIcon={EmailMediumIcon} placeholder="Input placeholder" readOnly />
        </VariantTitle>
      </VStack>
    );
  },
};
