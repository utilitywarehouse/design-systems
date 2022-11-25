import * as React from 'react';
import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { BackgroundStack } from '../utils';
import RadioButton from '../../src/components/RadioButton';
import { Box, styled } from '@mui/material';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

enum RadioValues {
  YES = 'Yes',
  NO = 'No',
  DISABLED = 'Disabled',
}

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
}));

export const RadioButtonStory: Story = () => {
  const [checked, setChecked] = useState(false);

  return (
    <BackgroundStack>
      <StyledBox>
        <RadioButton
          label="Enabled"
          value={RadioValues.YES}
          color="secondary"
          checked={checked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
            setChecked(checked);
          }}
        />
        <RadioButton label="Disabled" value={RadioValues.DISABLED} color="secondary" disabled />
        <RadioButton
          label="Disabled selected"
          value={RadioValues.DISABLED}
          color="secondary"
          checked={true}
          disabled
        />
      </StyledBox>
    </BackgroundStack>
  );
};
RadioButtonStory.storyName = 'RadioButton';
