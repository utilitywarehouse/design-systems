import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import type { RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { Box, BoxProps } from '../Box';
import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { keyframes } from '@mui/material';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';
import { forwardRef, type ReactNode } from 'react';
import { useFormControl } from '../hooks';

const RadioItem = styled(RadixRadioGroup.Item)({
  all: 'unset',
  cursor: 'pointer',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  '&:focus, &[data-state="checked"]': {
    borderColor: colors.cyan500,
  },
  '&:hover:enabled': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 8px ${colors.cyan75}`,
  },
  '&[data-disabled]': {
    cursor: 'auto',
    borderColor: colors.grey300,
  },
});

const appear = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const disappear = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

const RadioIndicator = styled(RadixRadioGroup.Indicator)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  animation: `${disappear.toString()} 120ms ease-in`,
  '&[data-state="checked"]': {
    animation: `${appear.toString()} 120ms ease-out`,
  },
  '&::after': {
    content: '""',
    display: 'block',
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: colors.cyan500,
  },
  '&[data-disabled]': {
    '&::after': {
      backgroundColor: colors.grey300,
    },
  },
});

export interface RadioProps extends Omit<RadioGroupItemProps, 'children'> {
  sx?: BoxProps['sx'];
  label?: ReactNode;
  labelId?: string;
  helperText?: ReactNode;
  helperTextId?: string;
}

/**
 * Radios can be used to choose between a set of more than two options.
 *
 * Radios should always be used with a `RadioGroup` to handle the state control and
 * layout.
 */
export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      sx,
      id: providedId,
      label,
      labelId: providedLabelId,
      helperText,
      helperTextId: providedHelperTextId,
      disabled,
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useFormControl({
      providedId,
      providedLabelId,
      providedHelperTextId,
    });

    return (
      <Box display="flex" alignItems="flex-start" marginBottom={!helperText ? 0 : 1}>
        <Box
          width={40}
          height={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          top={-8}
        >
          <RadioItem
            ref={ref}
            {...props}
            id={id}
            disabled={disabled}
            aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
          >
            <RadioIndicator />
          </RadioItem>
        </Box>
        {!helperText ? (
          <Label id={labelId} htmlFor={id} nested disabled={disabled}>
            {label}
          </Label>
        ) : (
          <Box display="flex" flexDirection="column">
            <Label htmlFor={id} nested disabled={disabled}>
              {label}
            </Label>
            <FormHelperText id={helperTextId} disabled={disabled}>
              {helperText}
            </FormHelperText>
          </Box>
        )}
      </Box>
    );
  }
);

Radio.displayName = 'Radio';
