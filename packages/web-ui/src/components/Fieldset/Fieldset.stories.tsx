import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Fieldset } from './Fieldset';

import { FieldsetLegend } from '../FieldsetLegend';

import { Placeholder } from '../../storybook-components';

const meta: Meta<typeof Fieldset> = {
  title: 'Web UI / Stories / Fieldset',
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Workshop: Story = {
  render: args => {
    return (
      <Fieldset {...args}>
        <FieldsetLegend>Fieldset legend</FieldsetLegend>
        <Placeholder height={100} width={300} />
      </Fieldset>
    );
  },
};
