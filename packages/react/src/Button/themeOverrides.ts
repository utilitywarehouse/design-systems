import { Components } from '@mui/material/styles';
import {
  transitions,
  fonts,
  fontWeights,
  colors,
} from '@utilitywarehouse/customer-ui-design-tokens';
import { px } from '../utils';
import { buttonClasses } from './Button';

export const buttonThemeOverrides = (): Components => {
  const borderWidth = 2;
  return {
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
          color: colors.midnight,
          '&:disabled': {
            opacity: 0.5,
          },
          // size
          [`&.${buttonClasses.small}`]: {
            height: px(32),
          },
          [`&.${buttonClasses.medium}`]: {
            height: px(40),
          },
          [`&.${buttonClasses.large}`]: {
            height: px(48),
          },
          [`&.${buttonClasses.primary}`]: {
            color: colors.midnight,
            backgroundColor: colors.cyan,
            border: 'none',
            paddingLeft: px(32),
            paddingRight: px(32),
            '&:hover': {
              backgroundColor: colors.cyan30,
            },
          },
          [`&.${buttonClasses.secondary}`]: {
            color: colors.midnight,
            backgroundColor: colors.transparent,
            borderColor: colors.cyan,
            '&:hover': {
              borderColor: colors.midnight,
              borderWidth,
            },
            '&:disabled': {
              opacity: 0.5,
              borderWidth,
            },
            [`&.${buttonClasses.inverse}`]: {
              color: colors.white,
              '&:hover': {
                borderColor: colors.white,
              },
            },
          },
          [`&.${buttonClasses.tertiary}`]: {
            color: colors.midnight,
            backgroundColor: colors.transparent,
            borderColor: colors.cyan,
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
            [`&.${buttonClasses.inverse}`]: {
              color: colors.white,
            },
          },
          [`&.${buttonClasses.primary},&.${buttonClasses.secondary},&.${buttonClasses.tertiary}`]: {
            '&:disabled': {
              opacity: 0.5,
            },
            [`&.${buttonClasses.inverse}`]: {
              '&:disabled': {
                opacity: 0.6,
              },
            },
          },
        },
      },
    },
  };
};
