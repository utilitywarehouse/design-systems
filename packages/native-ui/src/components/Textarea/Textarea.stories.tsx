import React from 'react';
import { Textarea, TextareaField, TextareaIcon, TextareaSlot } from '.';
import { Meta, StoryObj } from '@storybook/react-vite';
import { VStack } from '../VStack';
import { VariantTitle } from '../../../docs/components';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';
import { ScrollView } from 'react-native';

const meta = {
  title: 'Stories / Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  },
  args: {
    placeholder: 'Textarea placeholder',
    validationStatus: 'initial',
    showValidationIcon: true,
    disabled: false,
    readonly: false,
    focused: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ leadingIcon: leading, trailingIcon: trailing, ...args }) => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    // @ts-expect-error - This is a playground
    const leadingIcon = leading === 'none' ? undefined : Icons[leading];
    // @ts-expect-error - This is a playground
    const trailingIcon = trailing === 'none' ? undefined : Icons[trailing];
    return <Textarea {...args} leadingIcon={leadingIcon} trailingIcon={trailingIcon} />;
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <ScrollView>
        <VStack space="lg">
          <VariantTitle title="Default">
            <Textarea>
              <TextareaField />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="With icon">
            <Textarea>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="With placeholder">
            <Textarea>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="With value">
            <Textarea>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" value="filling the value" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Focused">
            <Textarea focused>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" value="filling the value" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Valid">
            <Textarea validationStatus="valid">
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Valid focused">
            <Textarea validationStatus="valid" focused>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Invalid">
            <Textarea validationStatus="invalid">
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Invalid focused">
            <Textarea validationStatus="invalid" focused>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Disabled">
            <Textarea disabled>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" />
            </Textarea>
          </VariantTitle>
          <VariantTitle title="Readonly">
            <Textarea readonly>
              <TextareaSlot>
                <TextareaIcon as={EmailMediumIcon} />
              </TextareaSlot>
              <TextareaField placeholder="Textarea placeholder" readOnly />
            </Textarea>
          </VariantTitle>
        </VStack>
      </ScrollView>
    );
  },
};
