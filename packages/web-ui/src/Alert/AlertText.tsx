import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { Text } from '../Text';
import type { TextProps } from '../Text';
import { styled } from '../theme';
import { COLORSCHEME_SELECTORS, withGlobalPrefix } from '../utils';
import { PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'AlertText';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Text)({
  color: 'var(--alert-text-color)',
  [`${COLORSCHEME_SELECTORS.info} &`]: {
    '--alert-link-color': colors.cyan700,
  },
  [`${COLORSCHEME_SELECTORS.success} &`]: {
    '--alert-link-color': colors.green700,
  },
  [`${COLORSCHEME_SELECTORS.warning} &`]: {
    '--alert-link-color': colors.gold700,
  },
  [`${COLORSCHEME_SELECTORS.error} &`]: {
    '--alert-link-color': colors.red700,
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
