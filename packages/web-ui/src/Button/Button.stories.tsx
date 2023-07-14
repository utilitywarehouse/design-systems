import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Backgrounds } from '../storybook-utils';
import { Button } from './Button';

const sizes = ['small', 'medium', 'large'] as const;
const variants = ['primary', 'secondary'] as const;

const meta: Meta<typeof Button> = {
  title: 'Web UI / Components / Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonKitchenSink: Story = {
  name: 'Kitchen Sink',
  parameters: { layout: 'fullscreen' },
  render: () => {
    return (
      <Stack>
        {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
          bg => (
            <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4}>
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
            </Box>
          )
        )}
      </Stack>
    );
  },
};

export const ButtonWorkshop: Story = {
  name: 'Workshop',
  parameters: { layout: 'fullscreen' },
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
    fullWidth: {
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
    href: '',
  },
};

export const ButtonVariants: Story = {
  name: 'Variants',
  parameters: { layout: 'centered' },
  render: () => {
    return (
      <Stack spacing={3} direction="row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
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
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>
    );
  },
};

export const ButtonLegacyColour: Story = {
  name: 'On legacy Background',
  parameters: {
    layout: 'fullscreen',
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
                    Button
                  </Button>
                ))}
                {sizes.map(size => (
                  <Button key={size} size={size} variant={variant} disabled={true}>
                    Button
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
