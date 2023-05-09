import type { Meta, StoryObj } from '@storybook/react';
import { colors, borderRadius } from '@utilitywarehouse/design-tokens';
import { backgroundColors } from '../types';
import { Typography } from '../Typography';
import { Stack } from '../Stack';
import { Heading } from '../Heading';
import { Background } from './Background';

const meta: Meta<typeof Background> = {
  title: 'Web UI / Components / Background',
  component: Background,
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Workshop: Story = {
  render: args => {
    const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
    return (
      <Background {...args}>
        {args.children ? (
          args.children
        ) : (
          <Heading component="h2" variant="h2">
            {args.background} ({hexValue})
          </Heading>
        )}
      </Background>
    );
  },
  argTypes: {
    background: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
  },
  args: {
    component: 'div',
    children: '',
    background: 'white',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
  },
};

export const Backgrounds = {
  name: 'Background colours',
  render: () => (
    <Stack spacing={0}>
      <Background background="white" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background background="whiteOwl" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background background="lightTint" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background background="purple" padding={2}>
        <Typography variant="body" component="span">
          Typography on inverse background
        </Typography>
      </Background>
      <Background background="midnight" padding={2}>
        <Typography variant="body" component="span">
          Typography on inverse background
        </Typography>
      </Background>
    </Stack>
  ),
};
