import { createStyled } from '@mui/system';
import { theme as defaultTheme, Theme } from './theme';

/**
 * Utility for creating styled components.
 *
 * This internal `styled` function enables us to create components
 * with responsive values which use our custom breakpoints, without
 * having to be wrapped in a `ThemeProvider`.
 */
const styled = createStyled<Theme>({ defaultTheme });

export default styled;
