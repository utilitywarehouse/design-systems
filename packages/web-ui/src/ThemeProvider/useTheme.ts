import { useTheme as useMuiTheme } from '@mui/system';
import { Theme } from '../theme';

export const useTheme = (defaultTheme?: Theme) => {
  return useMuiTheme<Theme>(defaultTheme);
};
