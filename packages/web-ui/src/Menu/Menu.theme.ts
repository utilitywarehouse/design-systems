import { Components } from '@mui/material/styles';
import { spacing } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';

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
          borderColor: colors.cyan400,
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
