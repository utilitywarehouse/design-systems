import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { TextLink } from '../lab/TextLink';
import type { TextLinkProps } from '../lab/TextLink';
import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { colorSchemeParentSelector, px, withGlobalPrefix } from '../utils';
import { COLOR_SCHEME, PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'AlertLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(TextLink)({
  fontWeight: fontWeights.secondary.semibold,
  color: 'var(--alert-link-color)',
  textDecorationColor: 'var(--alert-link-color)',
  ':where(:focus-visible)': {
    outline: 'none',
    borderRadius: px(4),
    boxShadow: '0 0 0 2px var(--alert-focus-color)',
  },
  [colorSchemeParentSelector(COLOR_SCHEME.cyan)]: {
    '--alert-link-color': colors.cyan700,
    '--alert-focus-color': colors.cyan700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.green)]: {
    '--alert-link-color': colors.green700,
    '--alert-focus-color': colors.green700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.gold)]: {
    '--alert-link-color': colors.gold700,
    '--alert-focus-color': colors.gold700,
  },
  [colorSchemeParentSelector(COLOR_SCHEME.red)]: {
    '--alert-link-color': colors.red700,
    '--alert-focus-color': colors.red700,
  },
});

/**
 * An `AlertLink` is a component that is used to display the link of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.PropsWithChildren<PropsWithSx<TextLinkProps>>
>(({ className, ...props }, ref) => (
  <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />
));

AlertLink.displayName = componentName;
