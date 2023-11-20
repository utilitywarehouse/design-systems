import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { classSelector, dataAttributes, getPrefixedName, pxToRem } from '../utils';
import { PropsWithSx } from '../types';
import { Typography } from '../Typography';
import { HelperTextProps } from './HelperText.props';
import clsx from 'clsx';
import { styled } from '../theme';

const componentName = 'HelperText';
const componentClassName = getPrefixedName(componentName);

const classNames = {
  status: {
    valid: getPrefixedName('status-valid'),
    invalid: getPrefixedName('status-invalid'),
  },
};

const classSelectors = {
  status: {
    valid: classSelector(classNames.status.valid),
    invalid: classSelector(classNames.status.invalid),
  },
};

const StyledTypography = styled(Typography)<HelperTextProps>({
  '--helper-text-color-default': colors.grey800,
  '--helper-text-color-disabled': colors.grey400,
  '--helper-text-color-valid': colors.green600,
  '--helper-text-color-invalid': colors.red600,
  '--helper-text-color': 'var(--helper-text-color-default)',
  color: 'var(--helper-text-color)',
  [dataAttributes.disabled]: {
    '--helper-text-color': 'var(--helper-text-color-disabled)',
  },
  [classSelectors.status.valid]: {
    '--helper-text-color': 'var(--helper-text-color-valid)',
  },
  [classSelectors.status.invalid]: {
    '--helper-text-color': 'var(--helper-text-color-invalid)',
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
>(({ disabled, validationStatus = 'default', className, ...props }, ref) => {
  return (
    <StyledTypography
      ref={ref}
      component="span"
      className={clsx(
        componentClassName,
        validationStatus && validationStatus !== 'default' && classNames.status[validationStatus],
        className
      )}
      fontFamily="secondary"
      weight="regular"
      fontSize={pxToRem(13)}
      lineHeight={pxToRem(16)}
      data-disabled={disabled || undefined}
      {...props}
    />
  );
});

HelperText.displayName = componentName;
