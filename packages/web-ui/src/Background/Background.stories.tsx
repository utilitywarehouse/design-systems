import type { Meta, StoryObj } from '@storybook/react';
import { backgroundColors } from '../types';
import { Typography } from '../Typography';
import { Stack } from '../Stack';
import { Heading } from '../Heading';
import { Background, backgroundColorsMapping } from './Background';

const meta: Meta<typeof Background> = {
  title: 'Web UI / Components / Background',
  component: Background,
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Workshop: Story = {
  render: args => {
    const hexValue = args.backgroundColor ? backgroundColorsMapping[args.backgroundColor] : '';
    return (
      <Background {...args}>
        {args.children ? (
          args.children
        ) : (
          <Heading component="h2" variant="h2">
            {args.backgroundColor} ({hexValue})
          </Heading>
        )}
      </Background>
    );
  },
  argTypes: {
    backgroundColor: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
  },
  args: {
    component: 'div',
    children: '',
    backgroundColor: 'white',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
  },
};

export const Backgrounds = {
  name: 'Background colours',
  render: () => (
    <Stack spacing={0}>
      <Background backgroundColor="white" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background backgroundColor="whiteOwl" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background backgroundColor="lightTint" padding={2}>
        <Typography variant="body" component="span">
          Typography on neutral background
        </Typography>
      </Background>
      <Background backgroundColor="purple" padding={2}>
        <Typography variant="body" component="span">
          Typography on inverse background
        </Typography>
      </Background>
      <Background backgroundColor="midnight" padding={2}>
        <Typography variant="body" component="span">
          Typography on inverse background
        </Typography>
      </Background>
    </Stack>
  ),
};
