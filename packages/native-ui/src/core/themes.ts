import { colors, colorsCommon, colorsDark } from '@utilitywarehouse/colour-system';
import { DimensionValue, Platform } from 'react-native';
import {
  borderRadius,
  borderWidth,
  color,
  font,
  layout,
  letterSpacing,
  lineHeight,
  shadow,
  space,
  typography,
} from '../tokens';
import { breakpoints } from './breakpoints';
const { light, dark, ...restOfColors } = color;

const shared = {
  platform: Platform.OS,
  space: {
    ...space,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    full: '100%' as DimensionValue,
    none: 0 as DimensionValue,
    '2xs': {
      base: layout.mobile.spacing['2xs'],
      md: layout.tablet.spacing['2xs'],
      lg: layout.desktop.spacing['2xs'],
    },
    xs: {
      base: layout.mobile.spacing.xs,
      md: layout.tablet.spacing.xs,
      lg: layout.desktop.spacing.xs,
    },
    sm: {
      base: layout.mobile.spacing.sm,
      md: layout.tablet.spacing.sm,
      lg: layout.desktop.spacing.sm,
    },
    md: {
      base: layout.mobile.spacing.md,
      md: layout.tablet.spacing.md,
      lg: layout.desktop.spacing.md,
    },
    lg: {
      base: layout.mobile.spacing.lg,
      md: layout.tablet.spacing.lg,
      lg: layout.desktop.spacing.lg,
    },
    xl: {
      base: layout.mobile.spacing.xl,
      md: layout.tablet.spacing.xl,
      lg: layout.desktop.spacing.xl,
    },
    '2xl': {
      base: layout.mobile.spacing['2xl'],
      md: layout.tablet.spacing['2xl'],
      lg: layout.desktop.spacing['2xl'],
    },
  },
  borderWidth,
  borderRadius,
  breakpoints,
  letterSpacing,
  lineHeight,
  font,
  fontWeight: font.weight,
  fontFamily: font.family,
  fontSize: font.size,
  typography,
  layout,
  shadow,
  opacity: {
    disabled: 0.5,
  },
  helpers: {},
  globalStyle: {
    variants: {
      hardShadow: {
        '1': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: -2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '2': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '3': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '4': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '5': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
      },
      softShadow: {
        '1': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: colors.grey900,
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
        '2': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
          elevation: 3,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: colors.grey900,
            elevation: 10,
            shadowOpacity: 0.1,
          },
        },
        '3': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 30,
          shadowOpacity: 0.1,
          elevation: 4,
          _android: {
            shadowColor: colors.grey900,
            elevation: 15,
            shadowOpacity: 0.15,
          },
        },
        '4': {
          shadowColor: colors.grey900,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 40,
          shadowOpacity: 0.1,
          elevation: 10,
          _android: {
            shadowColor: colors.grey900,
            elevation: 20,
            shadowOpacity: 0.2,
          },
        },
      },
      space: {
        none: {},
        xs: {
          gap: {
            base: layout.mobile.spacing.xs,
            md: layout.tablet.spacing.xs,
            lg: layout.desktop.spacing.xs,
          },
        },
        sm: {
          gap: {
            base: layout.mobile.spacing.sm,
            md: layout.tablet.spacing.sm,
            lg: layout.desktop.spacing.sm,
          },
        },
        md: {
          gap: {
            base: layout.mobile.spacing.md,
            md: layout.tablet.spacing.md,
            lg: layout.desktop.spacing.md,
          },
        },
        lg: {
          gap: {
            base: layout.mobile.spacing.lg,
            md: layout.tablet.spacing.lg,
            lg: layout.desktop.spacing.lg,
          },
        },
        xl: {
          gap: {
            base: layout.mobile.spacing.xl,
            md: layout.tablet.spacing.xl,
            lg: layout.desktop.spacing.xl,
          },
        },
      },
    },
  },
} as const;

export const lightTheme = {
  colorMode: 'light',
  isLight: true,
  isDark: false,
  colors: {
    ...colors,
    ...colorsCommon,
    white: '#ffffff',
    black: '#000000',
  },
  color: {
    ...restOfColors,
    ...light,
    white: '#ffffff',
    black: '#000000',
  } as const,
  ...shared,
} as const;

export const darkTheme = {
  colorMode: 'dark',
  isLight: false,
  isDark: true,
  colors: {
    ...colorsDark,
    ...colorsCommon,
    white: '#ffffff',
    black: '#000000',
  },
  color: {
    ...restOfColors,
    ...dark,
    white: '#ffffff',
    black: '#000000',
  },
  ...shared,
} as const;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;
