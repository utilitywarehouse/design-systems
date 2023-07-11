import { type RadioGroupItemProps, Item, Indicator } from '@radix-ui/react-radio-group';
import { BoxProps } from '../Box';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';
import { forwardRef, useContext, type ReactNode } from 'react';
import { Stack } from '../Stack';
import { styled } from '../theme';
import { keyframes } from '@emotion/react';
import { useFormControl } from '../FormControl';
import { useIds } from '../hooks';
import { RadioGroupContext } from './RadioGroup';

const StyledRadioItem = styled(Item)({
  all: 'unset',
  cursor: 'pointer',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  '&:focus-visible': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 2px ${colors.cyan700}`,
  },
  '&[data-state="checked"]': {
    borderColor: colors.cyan500,
  },
  '&:hover:enabled': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 8px ${colors.cyan75}`,
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${colors.cyan700}, 0 0 0 8px ${colors.cyan75}`,
    },
  },
  '&[data-disabled]': {
    cursor: 'auto',
    borderColor: colors.grey300,
  },
});

const appear = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const disappear = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

const StyledRadioIndicator = styled(Indicator)({
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

const StyledRadioContainer = styled('div')({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: -8,
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
    const { id, labelId, helperTextId } = useIds({
      providedId,
      providedLabelId,
      providedHelperTextId,
    });
    const { hasGroupHelperText } = useContext(RadioGroupContext);

    return (
      <Stack direction="row" spacing={1} sx={sx}>
        <StyledRadioContainer>
          <StyledRadioItem
            ref={ref}
            {...props}
            id={id}
            disabled={disabled}
            aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
          >
            <StyledRadioIndicator />
          </StyledRadioItem>
        </StyledRadioContainer>
        {hasGroupHelperText || !helperText ? (
          <Label id={labelId} htmlFor={id} nested>
            {label}
          </Label>
        ) : (
          <Stack>
            <Label htmlFor={id} nested>
              {label}
            </Label>
            <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
          </Stack>
        )}
      </Stack>
    );
  }
);
