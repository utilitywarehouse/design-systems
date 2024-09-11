import clsx from 'clsx';
import * as React from 'react';

import { colors } from '@utilitywarehouse/colour-system';
import {
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  WarningMediumContainedIcon,
} from '@utilitywarehouse/react-icons';

import { HelperTextProps } from './HelperText.props';

import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import {
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  pxToRem,
  spacing,
  withGlobalPrefix,
} from '../utils';

const componentName = 'HelperText';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  valid: withGlobalPrefix('valid'),
  invalid: withGlobalPrefix('invalid'),
};

const classSelectors = {
  valid: classSelector(classNames.valid),
  invalid: classSelector(classNames.invalid),
};

const StyledElement = styled('span')({
  display: 'inline-flex',
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  gap: spacing(1),
  alignItems: 'center',
  '--helper-text-color': colors.grey700,
  '--helper-text-color-disabled': colors.grey400,
  '--helper-text-color-valid': colors.green600,
  '--helper-text-color-invalid': colors.red600,
  color: 'var(--helper-text-color)',
  '> :where(svg), [data-icon]': {
    // as UW icons use currentColor by default, this will fallback to the
    // Button's color property if not set.
    color: 'var(--helper-text-color)',
  },
  ':where([data-disabled],[data-disabled] &)': {
    '--helper-text-color': 'var(--helper-text-color-disabled)',
  },
  [classSelectors.valid]: {
    '--helper-text-color': 'var(--helper-text-color-valid)',
  },
  [classSelectors.invalid]: {
    '--helper-text-color': 'var(--helper-text-color-invalid)',
  },
  [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
    userSelect: 'none',
  },
});

/**
 * This component should be used with form field components to display helper
 * text or error text.
 */
export const HelperText = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<HelperTextProps>>
>(
  (
    { showIcon, validationStatus, disabled, children, className, disableUserSelect, ...props },
    ref
  ) => {
    const icons: { [key: string]: typeof TickMediumContainedIcon } = {
      valid: TickMediumContainedIcon,
      invalid: WarningMediumContainedIcon,
    };
    const Icon = validationStatus
      ? (icons[validationStatus] as JSX.ElementType)
      : (InformationMediumContainedIcon as JSX.ElementType);

    return (
      <StyledElement
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        data-disable-user-select={disableUserSelect ? '' : undefined}
        className={clsx(
          componentClassName,
          validationStatus && classNames[validationStatus],
          className
        )}
        {...props}
      >
        {showIcon ? <Icon /> : null}
        {children}
      </StyledElement>
    );
  }
);

HelperText.displayName = componentName;
