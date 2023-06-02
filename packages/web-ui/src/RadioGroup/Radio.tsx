import { forwardRef, useContext } from 'react';
import type { RefObject, ReactNode } from 'react';
import { Box, BoxProps } from '../Box';
import { useFocusRing, useRadio, useLabel, useId } from 'react-aria';
import { RadioGroupContext } from './RadioGroup';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transition } from '../tokens';
import type { AriaRadioProps } from 'react-aria';
import { styled } from '../theme';

/**
 * RadioInput is an internal component used in the Radio & RadioTile
 * components. It is not intended for public use.
 *
 * The RadioInput renders the HTML `input` element, but visually hiding it.
 * https://moderncss.dev/pure-css-custom-styled-radio-buttons/
 *
 * It then renders the internal filled circle shown when the radio is checked,
 * as well as the larger containing circle to support hover & focus styles.
 */
// export const RadioInput = props => <Box component="input" />;

export const RadioInput: any = styled('input')(() => {
  return {
    // visually hidden styles
    appearance: 'none',
    backgroundColor: 'transparent',
    margin: 0,
    // radio styles
    cursor: 'pointer',
    outline: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.cyan500,
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

export interface RadioProps extends Omit<AriaRadioProps, 'isDisabled'> {
  disabled?: AriaRadioProps['isDisabled'];
  sx?: BoxProps['sx'];
  helperText?: ReactNode;
}

/**
 * The `Radio` should be used within a `RadioGroup` component.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
      if (isSelected || isFocusVisible) return colors.cyan500;
      return colors.grey500;
    };
    const outerRingColor = getOuterRingColor();

    return (
      <Box
        {...focusProps}
        display="flex"
        sx={{ cursor: isDisabled ? undefined : 'pointer', ...sx }}
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
          bgcolor={isFocusVisible ? colors.cyan100 : undefined}
          sx={{
            transition,
            transitionProperty: 'background-color, color',
            '&:hover': {
              backgroundColor: isDisabled
                ? 'transparent'
                : isFocusVisible
                ? colors.cyan100
                : colors.cyan75,
              color: isDisabled ? colors.grey300 : colors.cyan500,
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
              <Label {...labelProps} disabled={isDisabled} nested>
                {children}
              </Label>
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

Radio.displayName = 'Radio';
