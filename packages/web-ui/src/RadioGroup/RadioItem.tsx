import { forwardRef, useContext, useState } from 'react';
import type { RefObject, ReactNode } from 'react';
import { colors } from '@utilitywarehouse/design-tokens';
import { Box, BoxProps } from '../Box';
import { useFocusWithin, useRadio, useLabel } from 'react-aria';
import type { AriaRadioProps } from 'react-aria';
import { RadioContext } from './RadioGroup';
import styled from '@emotion/styled';
import { Stack } from '../Stack';
import { FieldLabel } from '../FieldLabel';
import { FormHelperText } from '../FormHelperText';

export interface RadioItemProps extends Omit<AriaRadioProps, 'isDisabled'> {
  disabled?: AriaRadioProps['isDisabled'];
  sx?: BoxProps['sx'];
  helperText?: ReactNode;
  helperTextId?: string;
}

const RadioInput = styled('input')(() => {
  return {
    appearance: 'none',
    backgroundColor: 'transparent',
    margin: 0,
    cursor: 'pointer',
    outline: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    color: colors.cyan40,
    '&:before': {
      content: '""',
      width: 14,
      height: 14,
      borderRadius: '50%',
      transform: 'scale(0)',
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      boxShadow: `inset 1em 1em currentColor`,
    },
    '&:checked:before': {
      transform: 'scale(1)',
    },
    '&:disabled': {
      cursor: 'auto',
      color: colors.codGray10,
    },
  };
});

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ sx, children, helperText, helperTextId, ...props }, ref) => {
    let [isFocusWithin, setFocusWithin] = useState(false);
    const state = useContext(RadioContext);
    const { focusWithinProps } = useFocusWithin({
      isDisabled: props.disabled,
      onFocusWithinChange: fw => setFocusWithin(fw),
    });

    const { inputProps, isSelected, isDisabled } = useRadio(
      { ...props, children, isDisabled: props.disabled },
      state,
      ref as RefObject<HTMLInputElement>
    );
    const { labelProps, fieldProps } = useLabel({ label: children });

    const getOuterRingColor = () => {
      if (isDisabled) return colors.codGray10;
      if (isSelected || isFocusWithin) return colors.cyan40;
      return colors.codGray20;
    };
    const outerRingColor = getOuterRingColor();
    return (
      <Box
        {...focusWithinProps}
        display="flex"
        alignItems="flex-start"
        sx={{ cursor: 'pointer', ...sx }}
      >
        <Box
          position="relative"
          width={40}
          height={40}
          marginLeft={-1}
          marginTop={-1}
          marginBottom={helperText ? 0 : -1}
          borderRadius="50%"
          color={outerRingColor}
          bgcolor={isFocusWithin ? colors.cyan20 : undefined}
          sx={{
            '&:hover': {
              backgroundColor: isDisabled ? 'transparent' : colors.cyan10,
              color: isDisabled ? colors.codGray10 : colors.cyan30,
            },
          }}
        >
          <RadioInput ref={ref} {...fieldProps} {...inputProps} />

          <Box
            component="span"
            position="absolute"
            top={8}
            left={8}
            bgcolor={colors.white}
            height={24}
            width={24}
            border="2px solid"
            borderColor="currentColor"
            borderRadius="50%"
          />
        </Box>
        <Stack>
          <Box height={24} display="flex" alignItems="center">
            <FieldLabel {...labelProps} disabled={isDisabled}>
              {children}
            </FieldLabel>
          </Box>
          {helperText ? (
            <FormHelperText id={inputProps['aria-describedby']} disabled={isDisabled}>
              {helperText}
            </FormHelperText>
          ) : null}
        </Stack>
      </Box>
    );
  }
);

RadioItem.displayName = 'RadioItem';
