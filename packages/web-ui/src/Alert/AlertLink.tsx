import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { TextLink } from '../lab/TextLink';
import type { TextLinkProps } from '../lab/TextLink';
import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { COLORSCHEME_SELECTORS, withGlobalPrefix } from '../utils';
import { PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'AlertLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(TextLink)({
  fontWeight: fontWeights.secondary.semibold,
  color: 'var(--alert-link-color)',
  textDecorationColor: 'var(--alert-link-color)',
  alignSelf: 'flex-start',
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
