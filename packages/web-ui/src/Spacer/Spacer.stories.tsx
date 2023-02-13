import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spacer from './Spacer';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import Box from '../Box';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Workshop: Story = {
  render: args => {
    const isVertical = args.axis === 'vertical';
    const props = {
      width: isVertical ? 400 : 100,
      height: isVertical ? 100 : 400,
      border: `1px solid ${colors.purple}`,
      borderRadius: '8px',
      background: 'purple' as const,
    };
    return (
      <Box
        padding={4}
        display="flex"
        flexDirection={isVertical ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      >
        <Box {...props} />
        <Spacer {...args} />
        <Box {...props} />
      </Box>
    );
  },
  args: {
    axis: 'vertical',
    size: 4,
    inline: false,
  },
};
