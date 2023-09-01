import type { Meta, StoryObj } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Web UI / Layout / Spacer',
  component: Spacer,
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Workshop: Story = {
  render: args => {
    const isVertical = args.axis === 'vertical';
    const sx = {
      backgroundColor: colorsCommon.brandPrimaryPurple,
      width: isVertical ? 400 : 100,
      height: isVertical ? 100 : 400,
      border: `1px solid ${colorsCommon.brandPrimaryPurple}`,
      borderRadius: '8px',
    };
    return (
      <Box
        padding={4}
        display="flex"
        flexDirection={isVertical ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      >
        <Box {...sx} />
        <Spacer {...args} />
        <Box {...sx} />
      </Box>
    );
  },
  argTypes: {
    axis: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    inline: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    axis: 'vertical',
    size: 2,
    inline: false,
  },
};
