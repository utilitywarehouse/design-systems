import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { px, pxToRem } from '../utils';

const componentName = 'AlertLink';

/**
 * An `AlertLink` is a component that is used to display the link of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertLink = styled('a')({
  display: 'inline',
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  fontWeight: fontWeights.secondary.semibold,
  color: 'var(--alert-link-color)',
  '&:focus-visible': {
    outline: 'none',
    borderRadius: px(4),
    boxShadow: '0 0 0 2px var(--alert-focus-color)',
  },
  '&:hover': {
    textDecoration: 'none',
  },
});

AlertLink.displayName = componentName;
