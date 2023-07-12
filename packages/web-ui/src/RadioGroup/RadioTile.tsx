import { forwardRef, useContext } from 'react';
import { type RadioGroupItemProps, Item, Indicator } from '@radix-ui/react-radio-group';
import type { RefObject } from 'react';
import { Box } from '../Box';
import { useFocusRing } from '@react-aria/focus';
import { useRadio } from '@react-aria/radio';
import { useLabel } from '@react-aria/label';
import { useId } from '@react-aria/utils';
import { RadioGroupContext } from './RadioGroup';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transition } from '../tokens';
import { RadioInput, RadioProps } from './Radio';
import { styled } from '../theme';
import { keyframes } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import { uwWebUiPrefix } from '../utils';
import { Stack } from '../Stack';
import { useIds } from '../hooks';

export interface RadioTileProps extends RadioProps {}

const StyledRadio = emotionStyled('div')({
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
  '[data-state="checked"] &': {
    borderColor: colors.cyan500,
  },
  '[data-disabled] &': {
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

const StyledRadioItem = styled(Item)(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  minWidth: 80,
  borderRadius: '8px',
  padding: theme.spacing(2),
  flex: 1,
  display: 'flex',
  backgroundColor: colorsCommon.brandWhite,
  boxShadow: `inset 0 0 0 2px ${colors.grey400}`,
  '&:focus-visible': {
    backgroundColor: colors.cyan100,
    boxShadow: `inset 0 0 0 2px ${colors.cyan500}`,
    outline: `4px solid ${colors.cyan700}`,
  },
  '&:hover:enabled': {
    backgroundColor: colors.cyan75,
    boxShadow: `inset 0 0 0 2px ${colors.cyan500}`,
    [`& ${StyledRadio}`]: {
      borderColor: colors.cyan500,
    },
  },
  '&[data-disabled]': {
    cursor: 'auto',
    boxShadow: `inset 0 0 0 2px ${colors.grey300}`,
  },
}));

/**
 * The `RadioTile` should be used within a `RadioGroup` component.
 */
export const RadioTile = forwardRef<HTMLButtonElement, RadioTileProps>(
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
      <StyledRadioItem
        ref={ref}
        {...props}
        id={id}
        disabled={disabled}
        aria-describedby={ariaDescribedby || !!helperText ? helperTextId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      >
        <Stack direction="row" spacing={1}>
          <StyledRadio>
            <StyledRadioIndicator />
          </StyledRadio>
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
      </StyledRadioItem>
    );
  }
);

RadioTile.displayName = 'RadioTile';
