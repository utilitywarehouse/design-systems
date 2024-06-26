import { Theme } from '../theme';
import { useMediaQuery as useMuiMediaQuery } from '@mui/system';
import { useTheme } from '../ThemeProvider';

// https://github.com/mui/material-ui/issues/16859#issuecomment-832560383
export const useMediaQuery = (queryInput: string | ((theme: Theme) => string)) => {
  const theme = useTheme();
  const query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  return useMuiMediaQuery<Theme>(query);
};
