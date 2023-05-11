import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights, transitions } from '../tokens';
import { Components } from '@mui/material/styles';
import { dataAttributes, pxToRem, spacing } from '../utils';

const { success, multiline } = dataAttributes;

export const textFieldThemeOverrides: Components = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        transition: `${transitions.duration}ms ${transitions.easingFunction}`,
        transitionProperty: 'color',
        position: 'relative',
        transform: 'none',
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.secondary.semibold,
        fontSize: pxToRem(16),
        lineHeight: 1,
        marginBottom: spacing(1),
        color: colorsCommon.brandMidnight,
        '&.Mui-focused': {
          color: colorsCommon.brandMidnight,
        },
        '&.Mui-disabled': {
          color: colors.grey700,
        },
        '&.Mui-error': {
          color: colorsCommon.brandMidnight,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.secondary.regular,
        fontSize: pxToRem(13),
        lineHeight: pxToRem(16),
        margin: 0,
        marginTop: spacing(1),
        color: colorsCommon.brandMidnight,
        '&.Mui-error': {
          color: colors.red600,
        },
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      hiddenLabel: true,
    },
    styleOverrides: {
      root: {
        fontFamily: fonts.secondary,
        fontSize: pxToRem(18),
        fontWeight: fontWeights.secondary.regular,
        height: 58,
        borderRadius: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderStyle: 'solid',
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        borderBottom: 0,
        color: colorsCommon.brandMidnight,
        backgroundColor: colorsCommon.brandWhite,
        borderColor: colors.grey100,
        borderBottomColor: colorsCommon.brandPrimaryPurple,
        borderWidth: 2,
        transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        ':hover': {
          backgroundColor: colorsCommon.brandWhite,
          borderBottomColor: colors.cyan600,
          '&:not(.Mui-disabled)': {
            '&:before': {
              borderWidth: 2,
              transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
              borderBottomColor: colors.cyan600,
            },
          },
        },
        '&:before': {
          borderColor: colorsCommon.brandPrimaryPurple,
          borderWidth: 2,
          transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        },
        '&:after': {
          borderColor: colors.cyan600,
          borderWidth: 2,
          transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        },
        '&.Mui-focused': {
          backgroundColor: colorsCommon.brandWhite,
          borderColor: colors.cyan600,
        },
        '&.Mui-disabled': {
          color: colorsCommon.brandMidnight,
          backgroundColor: colors.grey25,
          borderColor: colors.grey100,
          borderBottomColor: colors.grey600,
          transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
          '&:before': {
            borderColor: colors.grey600,
            borderBottomStyle: 'solid',
          },
          '&:after': {
            borderColor: colors.grey600,
          },
        },
        '&.Mui-error': {
          '&.Mui-focused': {
            borderColor: colors.red600,
          },
          '&:not(.Mui-disabled)': {
            '&:after': {
              borderColor: colors.red600,
            },
          },
        },
        [`&[data-${success}=true]`]: {
          ':before': {
            borderBottomColor: colors.green700,
          },
          '&:after': {
            borderBottomColor: colors.green700,
          },
          ':hover': {
            '&:not(.Mui-disabled)': {
              '&:before': {
                borderColor: colors.green700,
              },
            },
          },
          '&.Mui-focused': {
            borderColor: colors.green700,
          },
          '&:not(.Mui-disabled)': {
            borderBottomColor: colors.green700,
          },
        },
        [`&[data-${multiline}=true]`]: {
          // padding values differ slightly from non-multiline since a `textarea` is rendered rather than an `input`.
          paddingTop: 15,
          paddingBottom: 14,
          // height is overridden to allow the input to expand with any number of lines
          height: 'auto',
          minHeight: 58,
        },
      },
      input: {
        padding: 0,
      },
    },
  },
};
