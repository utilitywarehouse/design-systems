import { Components } from '@mui/material/styles';
import { colors, transitions } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes } from '../utils';

export const textLinkThemeOverrides = (): Components => {
  const { inverse, heading } = dataAttributes;
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          transition: `${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: 'text-decoration, color, opacity',
          opacity: 1,
          cursor: 'pointer',
          color: colors.midnight,
          textDecoration: 'underline',
          textDecorationThickness: 2,
          textUnderlineOffset: 4,
          textDecorationColor: colors.cyan,
          '&:hover': {
            opacity: 0.5,
          },
          [`&[data-${heading}=true]`]: {
            color: colors.purple,
          },
          [`[data-${inverse}=true] &`]: {
            color: colors.white,
          },
          '&.MuiTypography-inherit': {
            color: 'inherit',
            textTransform: 'inherit',
          },
        },
      },
    },
  };
};
