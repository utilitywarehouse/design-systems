import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';
import { backgroundColors } from '../types';
import { Heading } from '../Typography';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    background: {
      options: backgroundColors,
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const BoxStory: Story = {
  name: 'Box',
  render: args => {
    const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
    return (
      <Box {...args}>
        <Heading component="h2" variant="h2">
          {args.background} ({hexValue})
        </Heading>
      </Box>
    );
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
