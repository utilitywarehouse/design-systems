import { forwardRef, useContext } from 'react';
import type { RefObject } from 'react';
import { Box } from '../Box';
import { useFocusRing, useRadio, useLabel, useId } from 'react-aria';
import { RadioGroupContext } from './RadioGroup';
import { FieldLabel } from '../FieldLabel';
import { FormHelperText } from '../FormHelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transition } from '../tokens';
import { RadioInput, RadioItemProps } from './RadioItem';

export interface RadioTileProps extends RadioItemProps {}

/**
 * The `RadioTile` should be used within a `RadioGroup` component.
 */
export const RadioTile = forwardRef<HTMLInputElement, RadioTileProps>(
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

    return (
      <Box
        component="label"
        {...focusProps}
        border="2px solid"
        borderColor={isDisabled ? colors.grey300 : isFocusVisible ? colors.cyan400 : colors.grey400}
        borderRadius="8px"
        padding={2}
        flex={1}
        display="flex"
        color={
          isDisabled
            ? colors.grey300
            : isSelected || isFocusVisible
            ? colors.cyan400
            : colors.grey500
        }
        bgcolor={isFocusVisible ? colors.cyan100 : colorsCommon.brandWhite}
        sx={{
          transition,
          transitionProperty: 'background-color, border-color, color',
          cursor: isDisabled ? undefined : 'pointer',
          '&:hover':
            isDisabled || isFocusVisible
              ? {}
              : {
                  color: isSelected ? colors.cyan200 : colors.cyan500,
                  borderColor: colors.cyan200,
                  backgroundColor: colors.cyan75,
                },
          ...sx,
        }}
      >
        <Box width={24} height={24} marginRight={1}>
          <Box
            position="relative"
            marginBottom={helperText ? 0 : -1}
            borderRadius="50%"
            color="currentColor"
            height="100%"
            width="100%"
            sx={{
              transition,
              transitionProperty: 'color',
            }}
          >
            <RadioInput
              ref={ref}
              {...fieldProps}
              {...inputProps}
              aria-describedby={descriptionId}
            />
            <Box
              component="span"
              position="absolute"
              bgcolor={colorsCommon.brandWhite}
              height="100%"
              width="100%"
              border="2px solid"
              borderColor="currentColor"
              borderRadius="50%"
            />
          </Box>
        </Box>
        <Box>
          {children ? (
            <Box height={24} display="flex" alignItems="center">
              <FieldLabel component="span" {...labelProps} disabled={isDisabled}>
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

RadioTile.displayName = 'RadioTile';
