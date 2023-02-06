import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { Box, Spacer, SpacerProps } from '@utilitywarehouse/web-ui';

export default {
  title: 'Layout/Spacer',
  component: Spacer,
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
} as Meta;

export const SpacerStory: Story<SpacerProps> = args => {
  const isVertical = args.axis === 'vertical';
  const baseStyles = {
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
      <Box {...baseStyles} />
      <Spacer {...args} />
      <Box {...baseStyles} />
    </Box>
  );
};

SpacerStory.storyName = 'Spacer';
SpacerStory.args = {
  axis: 'vertical',
};
