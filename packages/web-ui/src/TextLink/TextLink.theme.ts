import { Components } from '@mui/material/styles';
import { colors } from '@utilitywarehouse/design-tokens';
import { transitions } from '../tokens';
import { dataAttributes } from '../utils';

const { inverse, heading } = dataAttributes;

export const textLinkThemeOverrides: Partial<Components> = {
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
