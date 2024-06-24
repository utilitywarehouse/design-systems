import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { Text } from '../Text';
import type { TextProps } from '../Text';
import { styled } from '../theme';
import { colorSchemeParentSelector, withGlobalPrefix } from '../utils';
import { COLOR_SCHEME, PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'AlertText';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Text)({
  color: 'var(--alert-text-color)',
  [colorSchemeParentSelector(COLOR_SCHEME.cyan)]: {
    '--alert-text-color': colors.cyan900,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.green)]: {
    '--alert-text-color': colors.green900,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.gold)]: {
    '--alert-text-color': colors.gold900,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.red)]: {
    '--alert-text-color': colors.red900,
  },
});

/**
 * An `AlertText` is a component that is used to display the text of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertText = React.forwardRef<
  React.ElementRef<'div'>,
  React.PropsWithChildren<PropsWithSx<TextProps>>
>(({ className, ...props }, ref) => (
  <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />
));

AlertText.displayName = componentName;
