import { styled } from '../theme';
import { pxToRem } from '../utils';

const componentName = 'AlertText';

/**
 * An `AlertText` is a component that is used to display the text of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertText = styled('span')({
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  color: 'var(--alert-text-color)',
});

AlertText.displayName = componentName;
