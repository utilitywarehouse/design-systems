import { dataAttributes, px } from '../utils';
import { Components } from '@mui/material/styles';
import { fonts, fontWeights, transitions } from '../tokens';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const borderWidth = 2;
const { inverse, bgcolorBrand, size, variant } = dataAttributes;

export const buttonThemeOverrides: Partial<Components> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        transition: `${transitions.duration}ms ${transitions.easingFunction}`,
        transitionProperty: 'background-color, border-color, color, opacity',
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.secondary.semibold,
        fontSize: 18,
        lineHeight: 1,
        letterSpacing: '0.02857em',
        textTransform: 'none',
        opacity: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: px(32 - borderWidth),
        paddingRight: px(32 - borderWidth),
        borderStyle: 'solid',
        borderRadius: px(32),
        borderWidth,
        color: colorsCommon.brandMidnight,
        '&:disabled': {
          opacity: 0.5,
        },
        '&:first-letter': {
          textTransform: 'uppercase',
        },
        [`&[data-${bgcolorBrand}=true]`]: {
          '&:disabled': {
            opacity: 0.6,
          },
        },
        // TODO: remove when `Background` component removed.
        [`[data-${inverse}=true] &`]: {
          '&:disabled': {
            opacity: 0.6,
          },
        },
        // size
        [`&[data-${size}=small]`]: {
          height: px(32),
        },
        [`&[data-${size}=medium]`]: {
          height: px(40),
        },
        [`&[data-${size}=large]`]: {
          height: px(48),
        },
        [`&[data-${variant}=primary]`]: {
          color: colorsCommon.brandMidnight,
          backgroundColor: colors.cyan400,
          border: 'none',
          paddingLeft: px(32),
          paddingRight: px(32),
          '&:hover': {
            backgroundColor: colors.cyan200,
          },
        },
        [`&[data-${variant}=secondary]`]: {
          color: colorsCommon.brandMidnight,
          backgroundColor: 'transparent',
          borderColor: colors.cyan400,
          '&:hover': {
            borderColor: colorsCommon.brandMidnight,
            borderWidth,
          },
          '&:disabled': {
            opacity: 0.5,
            borderWidth,
          },
          [`&[data-${bgcolorBrand}=true]`]: {
            color: colorsCommon.brandWhite,
            '&:hover': {
              borderColor: colorsCommon.brandWhite,
            },
          },
          // TODO: remove when `Background` component removed.
          [`[data-${inverse}=true] &`]: {
            color: colorsCommon.brandWhite,
            '&:hover': {
              borderColor: colorsCommon.brandWhite,
            },
          },
        },
        [`&[data-${variant}=tertiary]`]: {
          color: colorsCommon.brandMidnight,
          backgroundColor: 'transparent',
          borderColor: colors.cyan400,
          height: 'auto',
          paddingBottom: 2,
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: 0,
          borderBottomWidth: 2,
          borderRadius: 0,
          lineHeight: 1.333,
          '&:hover': {
            opacity: 0.5,
          },
          [`&[data-${bgcolorBrand}=true]`]: {
            color: colorsCommon.brandWhite,
          },
          // TODO: remove when `Background` component removed.
          [`[data-${inverse}=true] &`]: {
            color: colorsCommon.brandWhite,
          },
        },
      },
    },
  },
};
