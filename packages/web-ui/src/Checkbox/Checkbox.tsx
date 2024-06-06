import * as React from 'react';
import { px, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { CheckboxProps } from './Checkbox.props';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import { styled } from '../theme';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { PropsWithSx } from '../types';

const componentName = 'Checkbox';
const componentClassName = withGlobalPrefix(componentName);

const StyledRoot = styled(Root)({
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
  '--checkbox-border-width': px(2),
  '--checkbox-border-color-unchecked': colors.grey500,
  '--checkbox-border-color-checked': colors.cyan500,
  '--checkbox-border-color-hover': colors.cyan500,
  '--checkbox-border-color-focus': colors.cyan500,
  '--checkbox-outline-color': 'transparent',
  '--checkbox-outline-color-focus': colors.cyan700,
  color: colors.cyan1000,
  outline: 'none',
  ['&::before']: {
    content: '""',
    display: 'block',
    height: 24,
    width: 24,
    borderRadius: px(3),
    backgroundColor: 'inherit',
    boxShadow: 'inset 0 0 0 var(--checkbox-border-width) var(--checkbox-border-color)',
    outline: `2px solid var(--checkbox-outline-color)`,
  },
  [':where([data-state="unchecked"])']: {
    backgroundColor: colorsCommon.brandWhite,
    '--checkbox-border-color': 'var(--checkbox-border-color-unchecked)',
  },
  [':where([data-state="checked"])']: {
    backgroundColor: colors.cyan500,
    '--checkbox-border-color': 'var(--checkbox-border-color-checked)',
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      boxShadow: `0 0 0 8px ${colors.cyan75}`,
      '--checkbox-border-color': 'var(--checkbox-border-color-hover)',
    },
  },
  ':where(:focus-visible)': {
    '--checkbox-border-color': 'var(--checkbox-border-color-focus)',
    '--checkbox-outline-color': 'var(--checkbox-outline-color-focus)',
  },
});

const StyledIndicator = styled(Indicator)({
  position: 'absolute',
});

/**
 * Checkbox
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, PropsWithSx<CheckboxProps>>(
  ({ className, ...props }, ref) => {
    return (
      <StyledRoot ref={ref} {...props} className={clsx(componentClassName, className)}>
        <StyledIndicator>
          <TickMediumIcon />
        </StyledIndicator>
      </StyledRoot>
    );
  }
);

Checkbox.displayName = componentName;
