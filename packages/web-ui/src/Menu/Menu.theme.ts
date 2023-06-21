import { Components } from '@mui/material/styles';
import { classNamePrefix, spacing } from '../utils';
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
        [`& .${classNamePrefix}Paper-root`]: {
          marginTop: spacing(1),
          borderColor: colors.cyan400,
          borderRadius: spacing(1),
          borderStyle: 'solid',
          borderWidth: '2px',
          padding: '0',
          boxShadow: 'none',
          [`& .${classNamePrefix}Menu-list`]: {
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
