import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Spacer, Box, SpacerProps } from '../../src';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

export default {
  title: 'Layout/Spacer',
  argTypes: {
    forwardedRef: { table: { disable: true } },
    axis: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal'],
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
    size: 1,
    axis: 'vertical',
    inline: false,
  },
} as Meta;

export const SpacerStory: Story<SpacerProps> = args => {
  const isVertical = args.axis === 'vertical';
  const sx = {
    width: isVertical ? 400 : 100,
    height: isVertical ? 100 : 400,
    backgroundColor: colors.purple,
    border: `1px solid ${colors.purple}`,
    borderRadius: '8px',
  };
  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component='span' sx={sx} />
      <Spacer {...args} />
      <Box component='span' sx={sx} />
    </Box>
  );
};

SpacerStory.storyName = 'Spacer';
