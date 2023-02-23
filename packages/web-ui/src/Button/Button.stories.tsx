import type { Meta, StoryObj } from '@storybook/react';
import Stack from '../Stack';
import { Backgrounds } from '../storybook-utils';
import Button from './Button';

const sizes = ['small', 'medium', 'large'] as const;
const variants = ['primary', 'secondary'] as const;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonKitchenSink: Story = {
  name: 'Kitchen Sink',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI---MASTER?node-id=6%3A139&t=nzEeo2X7lGLW2Y93-1',
    },
  },
  render: () => {
    return (
      <Backgrounds>
        <Stack spacing={4}>
          {variants.map(variant => (
            <Stack key={variant} direction="row" spacing={2} alignItems="center">
              <>
                {sizes.map(size => (
                  <Button key={size} size={size} variant={variant}>
                    button
                  </Button>
                ))}
                {sizes.map(size => (
                  <Button key={size} size={size} variant={variant} disabled={true}>
                    button
                  </Button>
                ))}
              </>
            </Stack>
          ))}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="tertiary">button</Button>
            <Button variant="tertiary" disabled={true}>
              button
            </Button>
          </Stack>
        </Stack>
      </Backgrounds>
    );
  },
};

export const ButtonWorkshop: Story = {
  name: 'Workshop',
  render: args => {
    return (
      <Backgrounds>
        <Button {...args}>
          {args.children ? args.children : `${args.size} ${args.variant} button`}
        </Button>
      </Backgrounds>
    );
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: [...variants, 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
  },
  args: {
    children: '',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    disableCapitalizeFirstLetter: false,
    href: '',
  },
};

export const ButtonVariants: Story = {
  name: 'Variants',
  parameters: { layout: 'centered' },
  render: () => {
    return (
      <Stack spacing={3} direction="row">
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="tertiary">tertiary</Button>
      </Stack>
    );
  },
};

export const ButtonSizes: Story = {
  name: 'Sizes',
  parameters: { layout: 'centered' },
  render: () => {
    return (
      <Stack spacing={3} direction="row">
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </Stack>
    );
  },
};
