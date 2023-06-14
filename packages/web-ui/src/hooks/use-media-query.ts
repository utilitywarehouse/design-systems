import { Theme, useTheme } from '../theme';
import { useMediaQuery as useMuiMediaQuery } from '@mui/material';

// https://github.com/mui/material-ui/issues/16859#issuecomment-832560383
export const useMediaQuery = (queryInput: string | ((theme: Theme) => string)) => {
  const theme = useTheme();
  const query = typeof queryInput === 'function' ? queryInput(theme as Theme) : queryInput;
  return useMuiMediaQuery<Theme>(query);
};
