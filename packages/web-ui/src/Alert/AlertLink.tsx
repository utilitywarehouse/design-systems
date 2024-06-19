import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { pxToRem } from '../utils';

const componentName = 'AlertLink';

/**
 * An `AlertLink` is a component that is used to display the link of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertLink = styled('a')({
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  fontWeight: fontWeights.secondary.semibold,
  color: 'var(--alert-link-color)',
});

AlertLink.displayName = componentName;
