import { createStyled } from '@mui/system';
import { themeWithoutComponents as defaultTheme, Theme } from './theme';

const styled = createStyled<Theme>({ defaultTheme });

export default styled;
