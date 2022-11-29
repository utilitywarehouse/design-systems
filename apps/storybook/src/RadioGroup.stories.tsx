import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton from '../../src/components/RadioButton';
import RadioGroup, { RadioGroupProps } from '../../src/components/RadioGroup';
import Box from '../../src/components/Box';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      control: { type: 'radio', options: ['column', 'row'] },
    },
  },
  args: {
    defaultValue: 'one',
    direction: 'column',
    spacing: 2,
    hideTile: false,
  },
} as Meta;

export const RadioGroupStory: Story<RadioGroupProps> = args => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
      <RadioGroup {...args}>
        {['one', 'two'].map(v => (
          <RadioButton key={v} label={`Radio label ${v}`} value={v} />
        ))}
        <RadioButton label="Radio label disabled" disabled />
      </RadioGroup>
    </Box>
  );
};
RadioGroupStory.storyName = 'RadioGroup';
