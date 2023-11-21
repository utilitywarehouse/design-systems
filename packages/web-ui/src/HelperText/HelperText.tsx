import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { classSelector, dataAttributes, getPrefixedName, pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';
import { HelperTextProps } from './HelperText.props';
import clsx from 'clsx';
import { styled } from '../theme';
import { Flex } from '../Flex';
import {
  Information01SmallContainedIcon,
  Warning01SmallContainedIcon,
  Tick01SmallContainedIcon,
} from '@utilitywarehouse/react-icons';

const componentName = 'HelperText';
const componentClassName = getPrefixedName(componentName);

const classNames = {
  valid: getPrefixedName('valid'),
  invalid: getPrefixedName('invalid'),
};

const classSelectors = {
  valid: classSelector(classNames.valid),
  invalid: classSelector(classNames.invalid),
};

const StyledFlex = styled(Flex)({
  '--helper-text-color-initial': colors.grey800,
  '--helper-text-color-disabled': colors.grey400,
  '--helper-text-color-valid': colors.green600,
  '--helper-text-color-invalid': colors.red600,
  '--helper-text-color': 'var(--helper-text-color-initial)',
  '--helper-text-icon-color-initial': colors.grey700,
  '--helper-text-icon-color-disabled': colors.grey300,
  '--helper-text-icon-color-valid': colors.green500,
  '--helper-text-icon-color-invalid': colors.red500,
  '--helper-text-icon-color': 'var(--helper-text-icon-color-initial)',
  '> :where(svg)': {
    // as UW icons use currentColor by default, this will fallback to the
    // Button's color property if not set.
    color: 'var(--helper-text-icon-color)',
  },
  color: 'var(--helper-text-color)',
  [dataAttributes.disabled]: {
    '--helper-text-color': 'var(--helper-text-color-disabled)',
    '--helper-text-icon-color': 'var(--helper-text-icon-color-disabled)',
  },
  [classSelectors.valid]: {
    '--helper-text-color': 'var(--helper-text-color-valid)',
    '--helper-text-icon-color': 'var(--helper-text-icon-color-valid)',
  },
  [classSelectors.invalid]: {
    '--helper-text-color': 'var(--helper-text-color-invalid)',
    '--helper-text-icon-color': 'var(--helper-text-icon-color-invalid)',
  },
});

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * This component should be used with form field components to display helper
 * text.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be
 * > used standalone with other component libraries.
 */
export const HelperText = forwardRef<
  ElementRef<'span'>,
  PropsWithChildren<PropsWithSx<HelperTextProps>>
>(({ showIcon, validationStatus = 'initial', disabled, className, ...props }, ref) => {
  const icons: { [key: string]: any } = {
    initial: Information01SmallContainedIcon,
    valid: Tick01SmallContainedIcon,
    invalid: Warning01SmallContainedIcon,
  };
  const Icon = icons[validationStatus];
  return (
    <StyledFlex
      ref={ref}
      component="span"
      direction="row"
      gap={1}
      className={clsx(
        componentClassName,
        validationStatus && validationStatus !== 'initial' && classNames[validationStatus],
        className
      )}
      data-disabled={disabled || undefined}
    >
      {showIcon ? <Icon /> : null}
      <Typography
        ref={ref}
        component="span"
        fontFamily="secondary"
        weight="regular"
        fontSize={pxToRem(13)}
        lineHeight={pxToRem(16)}
        {...props}
      />
    </StyledFlex>
  );
});

HelperText.displayName = componentName;
