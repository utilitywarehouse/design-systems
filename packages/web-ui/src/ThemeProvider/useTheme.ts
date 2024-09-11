import { useTheme as useMuiTheme } from '@mui/system';
import { Theme } from '../theme';

export function useTheme<T = Theme>(defaultTheme?: T) {
  return useMuiTheme<T>(defaultTheme);
}
