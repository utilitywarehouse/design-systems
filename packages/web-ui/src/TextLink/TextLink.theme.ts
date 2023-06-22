import { Components } from '@mui/material/styles';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transitions } from '../tokens';
import { dataAttributes } from '../utils';

const { inverse, bgcolorBrand, heading } = dataAttributes;

export const textLinkThemeOverrides: Partial<Components> = {
  MuiLink: {
    styleOverrides: {
      root: {
        transition: `${transitions.duration}ms ${transitions.easingFunction}`,
        transitionProperty: 'text-decoration, color, opacity',
        opacity: 1,
        cursor: 'pointer',
        color: colorsCommon.brandMidnight,
        textDecoration: 'underline',
        textDecorationThickness: 2,
        textUnderlineOffset: 4,
        textDecorationColor: colors.cyan400,
        '&:hover': {
          opacity: 0.5,
        },
        [`&[data-${heading}=true]`]: {
          color: colorsCommon.brandPrimaryPurple,
        },
        [`[data-${bgcolorBrand}=true] &`]: {
          color: colorsCommon.brandWhite,
        },
        // TODO: remove when `Background` removed.
        [`[data-${inverse}=true] &`]: {
          color: colorsCommon.brandWhite,
        },
        '&.MuiTypography-inherit': {
          color: 'inherit',
          textTransform: 'inherit',
        },
      },
    },
  },
};
