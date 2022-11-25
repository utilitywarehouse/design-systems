import { Components, Theme } from '@mui/material/styles';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

export const menuThemeOverrides = (theme: Theme): Components => {
  return {
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom',
        },
      },
      styleOverrides: {
        root: {
          transform: `translateY(${theme.spacing(1)})`,
          '& .MuiPaper-root': {
            borderColor: colors.cyan,
            borderRadius: theme.spacing(1),
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
          padding: theme.spacing(2),
        },
      },
    },
  };
};
