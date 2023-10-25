import * as React from 'react';
import {
  type RadioGroupItemProps,
  Item,
  Indicator,
  RadioGroupIndicatorProps,
} from '@radix-ui/react-radio-group';
import { Box, createBox } from '../Box';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { forwardRef, useContext } from 'react';
import { useIds } from '../hooks';
import { PropsWithSx } from '../types';
import { RadioProps } from './Radio.props';
import { RadioGroupContext } from '../RadioGroup/RadioGroup.context';
import { styled } from '../theme';

const componentClassName = 'Radio';
const BaseBox = createBox({ componentClassName });

const StyledRadioItem = styled(Item)({
  all: 'unset',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: 'var(--radio-border-color)',
  '--radio-border-color-default': colors.grey500,
  '--radio-border-color-hover': colors.cyan500,
  '--radio-border-color-focus': colors.cyan500,
  '--radio-border-color-checked': colors.cyan500,
  '--radio-border-color-disabled': colors.grey300,
  '--radio-border-color': 'var(--radio-border-color-default)',
  '&:focus-visible': {
    '--radio-border-color': 'var(--radio-border-color-focus)',
    outline: `2px solid ${colors.cyan700}`,
  },
  '&[data-state="checked"]': {
    '--radio-border-color': 'var(--radio-border-color-checked)',
  },
  '&:hover:enabled': {
    '--radio-border-color': 'var(--radio-border-color-hover)',
    boxShadow: `0 0 0 8px ${colors.cyan75}`,
  },
  '&[data-disabled]': {
    '--radio-border-color': 'var(--radio-border-color-disabled)',
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

/**
 * Radios can be used to choose between a set of more than two options.
 *
 * Radios should always be used with a `RadioGroup` to handle the state control and
 * layout.
 */
export const Radio = forwardRef<HTMLButtonElement, PropsWithSx<RadioProps>>(
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
      <BaseBox display="flex" sx={sx} gap={1}>
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
            {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
          </Box>
        ) : null}
      </BaseBox>
    );
  }
);
