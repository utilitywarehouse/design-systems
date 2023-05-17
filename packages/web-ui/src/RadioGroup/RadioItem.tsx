import { forwardRef, useContext } from 'react';
import type { RefObject, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { useFocusRing, useRadio, useLabel, useId } from 'react-aria';
import type { AriaRadioProps } from 'react-aria';
import { RadioGroupContext } from './RadioGroup';
import styled from '@emotion/styled';
import { FieldLabel } from '../FieldLabel';
import { FormHelperText } from '../FormHelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transition } from '../tokens';

export interface RadioItemProps extends Omit<AriaRadioProps, 'isDisabled'> {
  disabled?: AriaRadioProps['isDisabled'];
  sx?: BoxProps['sx'];
  helperText?: ReactNode;
}

const RadioInput = styled('input')(() => {
  return {
    // Visually hidden styles
    // https://moderncss.dev/pure-css-custom-styled-radio-buttons/
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
    color: colors.cyan400,
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
      color: colors.grey300,
    },
  };
});

/**
 * The `RadioItem` should be used within a `RadioGroup` component.
 */
export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ sx, children, helperText, disabled, ...props }, ref) => {
    const { hasGroupHelperText, ...state } = useContext(RadioGroupContext);

    const { isFocusVisible, focusProps } = useFocusRing({ within: true });
    const { inputProps, isSelected, isDisabled } = useRadio(
      { ...props, children, isDisabled: disabled },
      state,
      ref as RefObject<HTMLInputElement>
    );
    const { labelProps, fieldProps } = useLabel({
      'aria-label': props['aria-label'],
      label: children,
    });
    const helperTextId = useId();
    const descriptionId = helperText ? helperTextId : inputProps['aria-describedby'];

    const getOuterRingColor = () => {
      if (isDisabled) return colors.grey300;
      if (isSelected || isFocusVisible) return colors.cyan400;
      return colors.grey500;
    };
    const outerRingColor = getOuterRingColor();

    return (
      <Box {...focusProps} display="flex" alignItems="flex-start" sx={{ cursor: 'pointer', ...sx }}>
        <Box
          position="relative"
          width={40}
          height={40}
          marginLeft={-1}
          marginTop={-1}
          marginBottom={helperText ? 0 : -1}
          borderRadius="50%"
          color={outerRingColor}
          bgcolor={isFocusVisible ? colors.cyan75 : undefined}
          sx={{
            transition,
            transitionProperty: 'background-color, color',
            '&:hover': {
              backgroundColor: isDisabled ? 'transparent' : colors.cyan100,
              color: isDisabled ? colors.grey300 : colors.cyan400,
            },
          }}
        >
          <RadioInput ref={ref} {...fieldProps} {...inputProps} aria-describedby={descriptionId} />

          <Box
            component="span"
            position="absolute"
            top={8}
            left={8}
            bgcolor={colorsCommon.brandWhite}
            height={24}
            width={24}
            border="2px solid"
            borderColor="currentColor"
            borderRadius="50%"
          />
        </Box>
        <Box>
          {children ? (
            <Box height={24} display="flex" alignItems="center">
              <FieldLabel {...labelProps} disabled={isDisabled}>
                {children}
              </FieldLabel>
            </Box>
          ) : null}
          {!hasGroupHelperText && helperText ? (
            <FormHelperText id={helperTextId} disabled={isDisabled}>
              {helperText}
            </FormHelperText>
          ) : null}
        </Box>
      </Box>
    );
  }
);

RadioItem.displayName = 'RadioItem';
