import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@utilitywarehouse/colour-system';

import { Fieldset } from './Fieldset';

import { Box } from '../Box';
import { FieldsetLegend } from '../FieldsetLegend';
import { Text } from '../Text';

const meta: Meta<typeof Fieldset> = {
  title: 'Web UI / Components / Fieldset',
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Workshop: Story = {
  render: args => {
    return (
      <Fieldset {...args}>
        <FieldsetLegend>Fieldset legend</FieldsetLegend>
        <Box bgcolor={colors.grey75} padding={6}>
          <Text component="p" variant="body">
            A form input, such as a RadioGroup
          </Text>
        </Box>
      </Fieldset>
    );
  },
};
