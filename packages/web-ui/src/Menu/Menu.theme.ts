import { Components } from '@mui/material/styles';
import { colors } from '@utilitywarehouse/design-tokens';
import { spacing } from '../utils';

export const menuThemeOverrides: Components = {
  MuiMenu: {
    defaultProps: {
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
    },
    styleOverrides: {
      root: {
        '& .MuiPaper-root': {
          marginTop: spacing(1),
          borderColor: colors.cyan,
          borderRadius: spacing(1),
          borderStyle: 'solid',
          borderWidth: '2px',
          padding: '0',
          boxShadow: 'none',
          '& .MuiMenu-list': {
            padding: 0,
          },
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: spacing(2),
      },
    },
  },
};
