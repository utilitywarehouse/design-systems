import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

export const radioGroupThemeOverrides = {
  MuiRadio: {
    styleOverrides: {
      root: {
        color: colors.codGray20,
        '& .Mui-focusVisible, &.Mui-checked': {
          color: colors.cyan,
        },
      },
    },
  },
};
