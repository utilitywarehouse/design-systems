import {
  colors,
  fonts,
  fontWeights,
  transitions,
} from '@utilitywarehouse/customer-ui-design-tokens';
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
        color: colors.midnight,
        '&.Mui-focused': {
          color: colors.midnight,
        },
        '&.Mui-disabled': {
          color: colors.codGray70,
        },
        '&.Mui-error': {
          color: colors.midnight,
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
        color: colors.midnight,
        '&.Mui-error': {
          color: colors.maroonFlush,
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
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: colors.codGray10,
        borderBottomColor: colors.purple,
        borderWidth: 2,
        transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        ':hover': {
          backgroundColor: colors.white,
          borderBottomColor: colors.blueRibbon,
          '&:not(.Mui-disabled)': {
            '&:before': {
              borderWidth: 2,
              transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
              borderBottomColor: colors.blueRibbon,
            },
          },
        },
        '&:before': {
          borderColor: colors.purple,
          borderWidth: 2,
          transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        },
        '&:after': {
          borderColor: colors.blueRibbon,
          borderWidth: 2,
          transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        },
        '&.Mui-focused': {
          backgroundColor: colors.white,
          borderColor: colors.blueRibbon,
        },
        '&.Mui-disabled': {
          color: colors.midnight,
          backgroundColor: '#F3F2F5', // TODO: this colour is not documented in figma UI Foundation Library
          borderColor: colors.codGray10,
          borderBottomColor: colors.codGray60,
          transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
          '&:before': {
            borderColor: colors.codGray60,
            borderBottomStyle: 'solid',
          },
          '&:after': {
            borderColor: colors.codGray60,
          },
        },
        '&.Mui-error': {
          '&.Mui-focused': {
            borderColor: colors.maroonFlush,
          },
          '&:not(.Mui-disabled)': {
            '&:after': {
              borderColor: colors.maroonFlush,
            },
          },
        },
        [`&[data-${success}=true]`]: {
          ':before': {
            borderBottomColor: colors.jewel,
          },
          '&:after': {
            borderBottomColor: colors.jewel,
          },
          ':hover': {
            '&:not(.Mui-disabled)': {
              '&:before': {
                borderColor: colors.jewel,
              },
            },
          },
          '&.Mui-focused': {
            borderColor: colors.jewel,
          },
          '&:not(.Mui-disabled)': {
            borderBottomColor: colors.jewel,
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
