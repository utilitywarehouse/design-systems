import * as React from 'react';
import styled from '../theme/styled';
import clsx from 'clsx';
import { px, spacing, withGlobalPrefix } from '../utils';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { PropsWithSx } from '../types';
import { CheckboxTileProps } from './CheckboxTile.props';
import { useIds } from '../hooks';
import { CheckboxGroupContext } from './CheckboxGroupAlt.context';
import { Indicator, Item } from './CheckboxPrimitive';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';

const componentName = 'CheckboxTile';
const componentClassName = withGlobalPrefix(componentName);

const StyledTile = styled('label')({
  display: 'flex',
  gap: spacing(1),
  padding: spacing(2),
  borderRadius: px(8),
  '--checkbox-tile-border-width': px(2),
  '--checkbox-tile-box-shadow-color': colors.grey400,
  '--checkbox-tile-box-shadow-color-hover': colors.cyan500,
  '--checkbox-tile-box-shadow-color-focus': colors.cyan500,
  '--checkbox-tile-box-shadow-color-disabled': colors.grey300,
  boxShadow: 'inset 0 0 0 var(--checkbox-tile-border-width) var(--checkbox-tile-box-shadow-color)',
  ':where(:has(:focus-visible))': {
    backgroundColor: colors.cyan75,
    outline: `4px solid ${colors.cyan700}`,
    '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-focus)',
    '& button::before': {
      boxShadow:
        'inset 0 0 0 var(--checkbox-tile-border-width) var(--checkbox-tile-box-shadow-color-focus)',
    },
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      backgroundColor: colors.cyan75,
      '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-hover)',
    },
  },
  ':where([data-disabled])': {
    '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-disabled)',
  },
});

export const StyledIndicator = styled(Indicator)({
  position: 'absolute',
});

export const StyledBaseCheckbox = styled(Item)({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'top',
  flexShrink: 0,
  padding: 0,
  height: 24,
  width: 24,
  border: 'none',
  borderRadius: '50%',
  '--checkbox-color': colors.cyan1000,
  '--checkbox-color-disabled': colors.grey400,
  '--checkbox-background-color-unchecked': colorsCommon.brandWhite,
  '--checkbox-background-color-checked': colors.cyan500,
  '--checkbox-background-color-unchecked-disabled': colorsCommon.brandWhite,
  '--checkbox-background-color-checked-disabled': colors.grey150,
  '--checkbox-border-width': px(2),
  '--checkbox-border-color-unchecked': colors.grey500,
  '--checkbox-border-color-checked': colors.cyan500,
  '--checkbox-border-color-hover': colors.cyan500,
  '--checkbox-border-color-focus': colors.cyan500,
  '--checkbox-border-color-unchecked-disabled': colors.grey300,
  '--checkbox-border-color-checked-disabled': colors.grey150,
  '--checkbox-outline-color': 'transparent',
  '--checkbox-outline-color-focus': colors.cyan700,
  color: 'var(--checkbox-color)',
  backgroundColor: 'var(--checkbox-background-color)',
  outline: 'none',
  '&::before': {
    content: '""',
    display: 'block',
    height: 24,
    width: 24,
    borderRadius: px(3),
    backgroundColor: 'inherit',
    boxShadow: 'inset 0 0 0 var(--checkbox-border-width) var(--checkbox-border-color)',
    outline: `2px solid var(--checkbox-outline-color)`,
  },
  ':where([data-state="unchecked"])': {
    '--checkbox-background-color': 'var(--checkbox-background-color-unchecked)',
    '--checkbox-border-color': 'var(--checkbox-border-color-unchecked)',
    '--checkbox-border-color-disabled': 'var(--checkbox-border-color-unchecked-disabled)',
    '--checkbox-background-color-disabled': 'var(--checkbox-background-color-unchecked-disabled)',
  },
  ':where([data-state="checked"])': {
    '--checkbox-background-color': 'var(--checkbox-background-color-checked)',
    '--checkbox-border-color': 'var(--checkbox-border-color-checked)',
    '--checkbox-border-color-disabled': 'var(--checkbox-border-color-checked-disabled)',
    '--checkbox-background-color-disabled': 'var(--checkbox-background-color-checked-disabled)',
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      boxShadow: `0 0 0 8px ${colors.cyan75}`,
      '--checkbox-border-color': 'var(--checkbox-border-color-hover)',
    },
  },
  ':where([data-disabled],[data-disabled] &)': {
    '--checkbox-color': 'var(--checkbox-color-disabled)',
    '--checkbox-border-color': 'var(--checkbox-border-color-disabled)',
    '--checkbox-background-color': 'var(--checkbox-background-color-disabled)',
  },
});

export const CheckboxTile = React.forwardRef<HTMLButtonElement, PropsWithSx<CheckboxTileProps>>(
  (
    {
      id: providedId,
      label,
      helperText,
      className,
      disabled,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'checkboxtile' });
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } =
      React.useContext(CheckboxGroupContext);
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;
    return (
      <StyledTile>
        <StyledBaseCheckbox
          ref={ref}
          {...props}
          id={id}
          className={clsx(componentClassName, className)}
          disabled={disabled}
          aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
          aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        >
          <StyledIndicator>
            <TickMediumIcon />
          </StyledIndicator>
        </StyledBaseCheckbox>
        {showLabel ? (
          <Flex direction="column" gap={0.5}>
            <Label component="span" id={labelId} htmlFor={id} nested>
              {label}
            </Label>
            {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
          </Flex>
        ) : null}
      </StyledTile>
    );
  }
);

CheckboxTile.displayName = componentName;
