import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FieldsetLegend } from '../FieldsetLegend';
import { Fieldset } from './Fieldset';
import { Box } from '../Box';
import { Text } from '../Text';
import { colors } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof Fieldset> = {
  title: 'Web UI / Components / Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
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
