import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { colorSchemeParentSelector, px, spacing, withGlobalPrefix } from '../utils';
import { COLOR_SCHEME, PropsWithSx } from '../types';
import clsx from 'clsx';
import { UnstyledButton } from '../UnstyledButton';
import type { UnstyledButtonProps } from '../UnstyledButton';

const componentName = 'AlertButton';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(UnstyledButton)({
  fontWeight: fontWeights.secondary.semibold,
  borderRadius: px(9999),
  padding: spacing(0.5),
  color: 'var(--alert-button-color)',
  [colorSchemeParentSelector(COLOR_SCHEME.cyan)]: {
    '--alert-button-color': colors.cyan700,
    '--alert-button-color-hover': colors.cyan900,
    '--alert-button-background-color': colors.cyan100,
    '--alert-button-background-color-hover': colors.cyan200,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.green)]: {
    '--alert-button-color': colors.green700,
    '--alert-button-color-hover': colors.green900,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.gold)]: {
    '--alert-button-color': colors.gold700,
    '--alert-button-color-hover': colors.gold900,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.red)]: {
    '--alert-button-color': colors.red700,
    '--alert-button-color-hover': colors.red900,
  },
  '@media (hover: hover)': {
    ':where(:hover)': {
      '--alert-button-color': 'var(--alert-button-color-hover)',
      '--alert-button-background-color': 'var(--alert-button-background-color-hover)',
    },
  },
});

/**
 * An `AlertLink` is a component that is used to display the link of an `Alert`.
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
