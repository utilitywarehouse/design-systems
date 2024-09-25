import { useMediaQuery as useMuiMediaQuery } from '@mui/system';
import { Theme, theme } from '../theme';

// https://github.com/mui/material-ui/issues/16859#issuecomment-832560383

/** @deprecated Please use `useMediaQueries` instead */
export const useMediaQuery = (queryInput: string | ((theme: Theme) => string)) => {
  const query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  return useMuiMediaQuery<Theme>(query);
};
