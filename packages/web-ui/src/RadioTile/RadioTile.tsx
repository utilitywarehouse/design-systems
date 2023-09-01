import { forwardRef, useContext } from 'react';
import { Item, type RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { styled } from '@mui/material';
import { useIds } from '../hooks';
import { Box } from '../Box';
import { globalPrefix, spacing } from '../utils';
import { PropsWithSx } from '../types';
import { StyledRadioIndicator } from '../Radio/Radio';
import { RadioGroupContext } from '../RadioGroup/RadioGroup.context';
import clsx from 'clsx';
import { RadioTileProps } from './RadioTile.props';

const displayName = 'Radio';
const componentClassName = `${globalPrefix}-${displayName}`;

const StyledRadio = styled('div')({
  height: 24,
  width: 24,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  '&:focus': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 2px ${colors.cyan700}`,
  },
  '[data-state="checked"] &': {
    borderColor: colors.cyan500,
  },
  '[data-disabled] &': {
    borderColor: colors.grey300,
  },
});

const StyledRadioItem = styled(Item)({
  all: 'unset',
  borderRadius: '8px',
  padding: spacing(2),
  display: 'flex',
  backgroundColor: colorsCommon.brandWhite,
  boxShadow: `inset 0 0 0 2px ${colors.grey400}`,
  '&:focus': {
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
    boxShadow: `inset 0 0 0 2px ${colors.grey300}`,
  },
}) as React.FC<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * The `RadioTile` should be used within a `RadioGroup` component.
 */
export const RadioTile = forwardRef<HTMLButtonElement, PropsWithSx<RadioTileProps>>(
  (
    {
      id: providedId,
      label,
      helperText,
      disabled,
      'aria-labelledby': ariaLabelledby,
      className,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'radiotile' });
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } =
      useContext(RadioGroupContext);
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <StyledRadioItem
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        id={id}
        disabled={disabled}
        aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      >
        <Box component="label" display="flex" gap={1}>
          <StyledRadio>
            <StyledRadioIndicator />
          </StyledRadio>
          {showLabel ? (
            <Box display="flex" flexDirection="column" gap={0.5}>
              <Label component="span" id={labelId} htmlFor={id} nested>
                {label}
              </Label>
              {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
            </Box>
          ) : null}
        </Box>
      </StyledRadioItem>
    );
  }
);

RadioTile.displayName = displayName;
