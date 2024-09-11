import * as React from 'react';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';

import { useBaseCheckboxGroup } from '../BaseCheckboxGroup';
import { BaseCheckboxProps } from './BaseCheckbox.props';

import { styled } from '../theme';
import { px } from '../utils';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

const componentName = 'BaseCheckbox';

export const StyledIndicator = styled(RadixCheckbox.Indicator)({
  position: 'absolute',
});

const StyledCheckboxRoot = styled(RadixCheckbox.Root)({
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
  ':where(:focus-visible)': {
    '--checkbox-border-color': 'var(--checkbox-border-color-focus)',
  },
});

export const BaseCheckbox = React.forwardRef<HTMLButtonElement, BaseCheckboxProps>(
  ({ onCheckedChange, value = 'on', ...props }, ref) => {
    const context = useBaseCheckboxGroup();
    const checked = context?.value?.includes(value);

    return (
      <StyledCheckboxRoot
        ref={ref}
        name={context?.name}
        disabled={context?.disabled}
        required={context?.required}
        checked={checked}
        value={value}
        {...props}
        onCheckedChange={(checked: boolean) => {
          if (context) {
            if (checked) {
              context?.onItemCheck(value);
            } else {
              context?.onItemUncheck(value);
            }
          }
          if (onCheckedChange) {
            onCheckedChange(checked);
          }
        }}
      >
        <StyledIndicator asChild>
          <TickMediumIcon />
        </StyledIndicator>
      </StyledCheckboxRoot>
    );
  }
);

BaseCheckbox.displayName = componentName;
