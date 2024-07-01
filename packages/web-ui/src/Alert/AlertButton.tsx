import * as React from 'react';
import { styled } from '../theme';
import { colorSchemeParentSelector, px, withGlobalPrefix } from '../utils';
import { COLOR_SCHEME, PropsWithSx } from '../types';
import clsx from 'clsx';
import { UnstyledButton } from '../UnstyledButton';
import type { UnstyledButtonProps } from '../UnstyledButton';
import { colors } from '@utilitywarehouse/colour-system';

const componentName = 'AlertButton';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(UnstyledButton)({
  color: 'var(--alert-button-color)',
  alignSelf: 'center',
  '@media (hover: hover)': {
    ':where(:hover)': {
      color: 'var(--alert-button-color-hover)',
    },
  },
  ':where(:focus-visible)': {
    outline: 'none',
    borderRadius: px(4),
    boxShadow: '0 0 0 2px var(--alert-focus-color)',
  },
  [colorSchemeParentSelector(COLOR_SCHEME.cyan)]: {
    '--alert-button-color': colors.cyan700,
    '--alert-button-color-hover': colors.cyan900,
    '--alert-focus-color': colors.cyan700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.green)]: {
    '--alert-button-color': colors.green700,
    '--alert-button-color-hover': colors.green900,
    '--alert-focus-color': colors.green700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.gold)]: {
    '--alert-button-color': colors.gold700,
    '--alert-button-color-hover': colors.gold900,
    '--alert-focus-color': colors.gold700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.red)]: {
    '--alert-button-color': colors.red700,
    '--alert-button-color-hover': colors.red900,
    '--alert-focus-color': colors.red700,
  },
});

/**
 * An `AlertButton` is a component that is used to display a clickable element of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<UnstyledButtonProps>>
>(({ className, ...props }, ref) => (
  <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />
));

AlertButton.displayName = componentName;
