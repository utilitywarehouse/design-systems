import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Fieldset } from './Fieldset';
import { FieldsetLegend } from '../FieldsetLegend/FieldsetLegend';
import { Box } from '../Box/Box';

const meta: Meta<typeof Fieldset> = {
  title: 'Stories / Fieldset',
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Workshop: Story = {
  render: args => {
    return (
      <Fieldset {...args}>
        <FieldsetLegend>Fieldset legend</FieldsetLegend>
        <Box className="uwp-sb-Placeholder" height="100px" width="300px" />
      </Fieldset>
    );
  },
};
