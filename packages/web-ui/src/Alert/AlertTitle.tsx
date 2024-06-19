import { styled } from '../theme';
import { fontWeights } from '../tokens';
import { pxToRem } from '../utils';

const componentName = 'AlertTitle';

/**
 * An `AlertTitle` is a component that is used to display the title of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertTitle = styled('span')({
  fontSize: pxToRem(16),
  fontWeight: fontWeights.secondary.semibold,
  lineHeight: pxToRem(24),
  color: 'var(--alert-text-color)',
});

AlertTitle.displayName = componentName;
