import { forwardRef, useContext } from 'react';
import type { RefObject } from 'react';
import { Box } from '../Box';
import { useFocusRing, useRadio, useLabel, useId } from 'react-aria';
import { RadioGroupContext } from './RadioGroup';
import { FieldLabel } from '../FieldLabel';
import { FormHelperText } from '../FormHelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transition } from '../tokens';
import { RadioInput, RadioItemProps } from './Radio';

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
      <Box
        {...focusProps}
        display="flex"
        alignItems="flex-start"
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
          bgcolor={isFocusVisible ? colors.cyan75 : undefined}
          sx={{
            transition,
            transitionProperty: 'background-color, color',
            '&:hover': {
              backgroundColor: isDisabled ? 'transparent' : colors.cyan100,
              color: isDisabled ? colors.grey300 : isSelected ? colors.cyan200 : colors.cyan500,
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
