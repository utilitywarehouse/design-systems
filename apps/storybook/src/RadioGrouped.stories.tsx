import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { BackgroundStack } from '../utils';
import RadioButton from '../../src/components/RadioButton';
import RadioGroup from '../../src/components/RadioGroup';
import { Box, styled, Typography } from '@mui/material';
import { useDeviceSize } from '../../src';

enum RadioValues {
  YES = 'Yes',
  NO = 'No',
  MAYBE = 'Maybe',
}

export default {
  title: 'Components/RadioGrouped',
  component: RadioGroup,
  argTypes: {
    inline: { control: 'boolean' },
    'disabled check': {
      control: {
        type: 'radio',
        options: {
          Yes: RadioValues.YES,
          No: RadioValues.NO,
          Maybe: RadioValues.MAYBE,
        },
      },
    },
  },
  args: {
    inline: true,
    'disabled check': RadioValues.YES,
  },
} as Meta;

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'inline' && prop !== 'isMobile',
})<{ inline: boolean; isMobile: boolean }>(({ inline, isMobile }) => ({
  display: 'inline-flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: inline ? 'center' : 'start',
  flexDirection: isMobile ? 'column' : 'row',
}));

const StyledHeader = styled(Typography)(() => ({
  margin: '12px 12px 12px 0px',
}));

export const RadioGroupedStory: Story = args => {
  const { isMobile } = useDeviceSize();

  return (
    <BackgroundStack>
      <Box>
        <StyledBox inline={args.inline} sx={{ marginBottom: '24px' }} isMobile={isMobile}>
          <StyledHeader>Enabled Group</StyledHeader>
          <RadioGroup direction={args.inline ? 'row' : 'column'}>
            <RadioButton label="Yes" value={RadioValues.YES} color="secondary" />
            <RadioButton label="No" value={RadioValues.NO} color="secondary" />
            <RadioButton label="Maybe" value={RadioValues.MAYBE} color="secondary" />
          </RadioGroup>
        </StyledBox>
        <StyledBox inline={args.inline} isMobile={isMobile}>
          <StyledHeader>Disabled Group</StyledHeader>
          <RadioGroup direction={args.inline ? 'row' : 'column'} value={args['disabled check']}>
            <RadioButton label="Yes" value={RadioValues.YES} color="secondary" disabled />
            <RadioButton label="No" value={RadioValues.NO} color="secondary" disabled />
            <RadioButton label="Maybe" value={RadioValues.MAYBE} color="secondary" disabled />
          </RadioGroup>
        </StyledBox>
      </Box>
    </BackgroundStack>
  );
};
RadioGroupedStory.storyName = 'RadioGrouped';
