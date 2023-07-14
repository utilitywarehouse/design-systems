import { createStyled } from '@mui/system';
import { theme as defaultTheme, Theme } from './theme';

// NOTE: this exists for external consumers, internally we will use the `styled` function from `@mui/material`.

const styled = createStyled<Theme>({ defaultTheme });

export default styled;
