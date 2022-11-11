import * as React from 'react';
import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { BackgroundStack } from '../utils';
import RadioButton from '../../src/components/RadioButton';
import RadioGroup from '../../src/components/RadioGroup';
import { Button } from '../../src';
import { Box } from '@mui/material';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

enum RadioValues {
  YES = 'Yes',
  NO = 'No',
  DISABLED = 'Disabled',
}

export const RadioButtonStory: Story = () => {
  const [radioValue, setRadioValue] = useState<RadioValues>(RadioValues.YES);
  const [isInline, setIsInline] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value as RadioValues);
  };

  const onToggleInline = () => {
    setIsInline(!isInline);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="primary" sx={{ width: 240, margin: 2 }} onClick={onToggleInline}>
          {isInline ? 'not inline' : 'inline'}
        </Button>
      </Box>
      <BackgroundStack>
        <RadioGroup value={radioValue} onChange={handleChange} inline={isInline}>
          <RadioButton
            label="Yes"
            value={RadioValues.YES}
            color="secondary"
            selected={radioValue === RadioValues.YES}
          />
          <RadioButton
            label="No"
            value={RadioValues.NO}
            color="secondary"
            selected={radioValue === RadioValues.NO}
          />
          <RadioButton
            label="Disabled"
            value={RadioValues.DISABLED}
            color="secondary"
            selected={true}
            disabled
          />
          <RadioButton
            label="Disabled"
            value={RadioValues.DISABLED}
            color="secondary"
            selected={false}
            disabled
          />
        </RadioGroup>
      </BackgroundStack>
    </>
  );
};
RadioButtonStory.storyName = 'RadioButton';
