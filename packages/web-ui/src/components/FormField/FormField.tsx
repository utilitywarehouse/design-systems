import * as React from 'react';

import clsx from 'clsx';

import { FormFieldProps } from './FormField.props';

import {
  COLORSCHEME_SELECTORS,
  classSelector,
  responsiveClassSelector,
  withBreakpoints,
} from '../../helpers';
import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { mediaQueries, withGlobalPrefix } from '../../utils';

const componentName = 'FormField';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  size: {
    small: withGlobalPrefix('size-small'),
    medium: withGlobalPrefix('size-medium'),
  },
};

const classSelectors = {
  size: {
    small: classSelector(classNames.size.small),
    medium: classSelector(classNames.size.medium),
    tablet: {
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
      medium: responsiveClassSelector(classNames.size.medium, 'tablet'),
    },
    desktop: {
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
      medium: responsiveClassSelector(classNames.size.medium, 'desktop'),
    },
    wide: {
      small: responsiveClassSelector(classNames.size.small, 'wide'),
      medium: responsiveClassSelector(classNames.size.medium, 'wide'),
    },
  },
};

const StyledElement = styled('span')(() => {
  const sizeStyles = {
    small: {},
    medium: {},
  };
  return {
    [classSelectors.size.small]: { ...sizeStyles.small },
    [classSelectors.size.medium]: { ...sizeStyles.medium },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
      [classSelectors.size.tablet.medium]: { ...sizeStyles.medium },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
      [classSelectors.size.desktop.medium]: { ...sizeStyles.medium },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
      [classSelectors.size.wide.medium]: { ...sizeStyles.medium },
    },
    [COLORSCHEME_SELECTORS.cyan]: {},
    [COLORSCHEME_SELECTORS.green]: {},
    [COLORSCHEME_SELECTORS.red]: {},
    [COLORSCHEME_SELECTORS.gold]: {},
    [COLORSCHEME_SELECTORS.grey]: {},
  };
});

/**
 * TODO: Document the FormField component.
 */
export const FormField = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<FormFieldProps>>
>(({ size = 'medium', className, ...props }, ref) => {
  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
      {...props}
    />
  );
});

FormField.displayName = componentName;
