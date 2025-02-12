import React, { ComponentType } from 'react';
import { Button, ButtonGroup } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';
import * as Icons from '@utilitywarehouse/react-native-icons';

const meta = {
  title: 'Stories / Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
      description: 'The size of the button.',
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: 'select',
      description: 'The variant of the button.',
    },
    colorScheme: {
      options: ['cyan', 'red', 'green', 'grey', 'gold'],
      control: 'select',
      description: 'The color scheme of the button.',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: 'To manually set disable to the button.',
    },
    inverted: {
      type: 'boolean',
      control: 'boolean',
      description:
        'To set the button to be inverted. (To only be used on `midnight` or `purple` backgrounds)',
    },
    icon: {
      options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Small'))],
      control: 'select',
      description: 'The icon component for the button.',
    },
    iconPosition: {
      options: ['left', 'right'],
      control: 'select',
      description: 'The position of the icon component in the button.',
    },
    loading: {
      type: 'boolean',
      control: 'boolean',
      description: 'To show or hide the loading spinner component for the button.',
    },
  },
  args: {
    children: 'Press me',
    size: 'medium',
    variant: 'solid',
    colorScheme: 'cyan',
    disabled: false,
    inverted: false,
    loading: false,
    icon: undefined,
    iconPosition: 'left',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ icon: _icon, children = '', ...args }) => {
    // @ts-expect-error - This is a playground
    const icon: ComponentType | undefined = _icon === 'none' ? undefined : Icons[_icon];
    return (
      // @ts-expect-error - This is a playground
      <Button {...args} icon={icon}>
        {children}
      </Button>
    );
  },
};

export const Variants: Story = {
  parameters: {
    controls: { exclude: ['variant'] },
  },
  render: ({ children, ...args }) => (
    <ButtonGroup flexDirection="column" space="md">
      <VariantTitle title="Solid">
        {/* @ts-expect-error - This is a playground */}
        <Button {...args} variant="solid">
          {children}
        </Button>
      </VariantTitle>
      <VariantTitle title="Outline">
        {/* @ts-expect-error - This is a playground */}
        <Button {...args} variant="outline">
          {children}
        </Button>
      </VariantTitle>
      <VariantTitle title="Ghost">
        {/* @ts-expect-error - This is a playground */}
        <Button {...args} variant="ghost">
          {children}
        </Button>
      </VariantTitle>
    </ButtonGroup>
  ),
};
