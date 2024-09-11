import { createStyled } from '@mui/system';
import { Theme, theme as defaultTheme } from './theme';

/**
 * Utility for creating styled components.
 *
 * This internal `styled` function enables us to create components
 * with responsive values which use our custom breakpoints, without
 * having to be wrapped in a `ThemeProvider`.
 *
 * Unfortunately when using this we are not able to make use of the
 * [component selectors API](https://mui.com/system/styled/#how-to-use-components-selector-api).
 */
const styled = createStyled<Theme>({ defaultTheme });

export default styled;
