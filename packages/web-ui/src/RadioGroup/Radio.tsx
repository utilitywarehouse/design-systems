import {
  type RadioGroupItemProps,
  Item,
  Indicator,
  RadioGroupIndicatorProps,
} from '@radix-ui/react-radio-group';
import { Box } from '../Box';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';
import { forwardRef, useContext, type ReactNode } from 'react';
import { styled } from '@mui/material';
import { useIds } from '../hooks';
import { RadioGroupContext } from './RadioGroupFormControl';
import { SxProps } from '../types';

const StyledRadioItem = styled(Item)({
  all: 'unset',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  '&:focus': {
    borderColor: colors.cyan500,
    outline: `2px solid ${colors.cyan700}`,
  },
  '&[data-state="checked"]': {
    borderColor: colors.cyan500,
  },
  '&:hover:enabled': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 8px ${colors.cyan75}`,
  },
  '&[data-disabled]': {
    borderColor: colors.grey300,
  },
}) as React.FC<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

export const StyledRadioIndicator = styled(Indicator)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
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
}) as React.FC<RadioGroupIndicatorProps & React.RefAttributes<HTMLButtonElement>>;

const StyledRadioContainer = styled('div')({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: -8,
});

export interface RadioProps extends SxProps, Omit<RadioGroupItemProps, 'children'> {
  /**
   * The label for the Radio. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Radio. Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
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
      helperText,
      disabled,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'radio' });
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } =
      useContext(RadioGroupContext);
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <Box display="flex" sx={sx} gap={1}>
        <StyledRadioContainer>
          <StyledRadioItem
            ref={ref}
            {...props}
            id={id}
            disabled={disabled}
            aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
          >
            <StyledRadioIndicator />
          </StyledRadioItem>
        </StyledRadioContainer>
        {showLabel ? (
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Label
              id={labelId}
              htmlFor={id}
              nested
              // we do this so that the gap between the radio & label is clickable
              sx={{
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: -8,
                },
              }}
            >
              {label}
            </Label>
            {showHelperText ? (
              <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
            ) : null}
          </Box>
        ) : null}
      </Box>
    );
  }
);
