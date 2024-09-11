import { Theme } from '../theme';
import { useTheme as useMuiTheme } from '@mui/system';

export function useTheme<T = Theme>(defaultTheme?: T) {
  return useMuiTheme<T>(defaultTheme);
}
