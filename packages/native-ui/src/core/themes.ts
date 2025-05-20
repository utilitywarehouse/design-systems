import { colorsDark, colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { DimensionValue, Platform, TextStyle } from 'react-native';
import { breakpoints } from './breakpoints';
import { components } from '@utilitywarehouse/design-tokens';
import {
  borderWidth,
  borderRadius,
  font,
  letterSpacing,
  lineHeight,
  space,
  layout,
} from '../tokens';

const shared = {
  platform: Platform.OS,
  space: {
    /**
     * @deprecated Use `space['25']` instead.
     */
    '0.5': 2,
    /**
     * @deprecated Use `space['50']` instead.
     */
    '1': 4,
    /**
     * @deprecated Use `space['75']` instead.
     */
    '1.5': 6,
    /**
     * @deprecated Use `space['100']` instead.
     */
    '2': 8,
    /**
     * @deprecated Use `100` scale instead.
     */
    '2.5': 10,
    /**
     * @deprecated Use `space['150']` instead.
     */
    '3': 12,
    /**
     * @deprecated Use `space['175']` instead.
     */
    '3.5': 14,
    /**
     * @deprecated Use `space['200']` instead.
     */
    '4': 16,
    /**
     * @deprecated Use `100` scale instead.
     */
    '4.5': 18,
    /**
     * @deprecated Use `space['250']` instead.
     */
    '5': 20,
    /**
     * @deprecated Use `space['300']` instead.
     */
    '6': 24,
    /**
     * @deprecated Use `space['350']` instead.
     */
    '7': 28,
    /**
     * @deprecated Use `space['400']` instead.
     */
    '8': 32,
    /**
     * @deprecated Use `100` scale instead.
     */
    '9': 36,
    /**
     * @deprecated Use `space['500']` instead.
     */
    '10': 40,
    /**
     * @deprecated Use `100` scale instead.
     */
    '11': 44,
    /**
     * @deprecated Use `space['600']` instead.
     */
    '12': 48,
    /**
     * @deprecated Use `space['700']` instead.
     */
    '14': 56,
    /**
     * @deprecated Use `space['800']` instead.
     */
    '16': 64,
    /**
     * @deprecated Use `space['1000']` instead.
     */
    '20': 80,
    /**
     * @deprecated Use `100` scale instead.
     */
    '24': 96,
    /**
     * @deprecated Use `100` scale instead.
     */
    '32': 128,
    /**
     * @deprecated Use `100` scale instead.
     */
    '40': 160,
    /**
     * @deprecated Use `100` scale instead.
     */
    '48': 192,
    /**
     * @deprecated Use `100` scale instead.
     */
    '56': 224,
    /**
     * @deprecated Use `100` scale instead.
     */
    '64': 256,
    /**
     * @deprecated Use `100` scale instead.
     */
    '72': 288,
    /**
     * @deprecated Use `100` scale instead.
     */
    '80': 320,
    /**
     * @deprecated Use `100` scale instead.
     */
    '96': 384,
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
  },
  /**
   * @deprecated Use `borderWidth` instead.
   */
  borderWidths: {
    /**
     * @deprecated Use `borderWidth` instead.
     */
    '0': 0,
    /**
     * @deprecated Use `borderWidth[1]` instead.
     */
    '1': 1,
    /**
     * @deprecated Use `borderWidth[2]` instead.
     */
    '2': 2,
    /**
     * @deprecated Use `borderWidth` instead.
     */
    '4': 4,
    /**
     * @deprecated Use `borderWidth` instead.
     */
    '8': 8,
  },
  /**
   * @deprecated Use `borderRadius` instead.
   */
  radii: {
    /**
     * @deprecated Use `borderRadius.none` instead.
     */
    none: 0,
    /**
     * @deprecated Use `borderRadius` instead.
     */
    xs: 2,
    /**
     * @deprecated Use `borderRadius.xs` instead.
     */
    sm: 4,
    /**
     * @deprecated Use `borderRadius.sm` instead.
     */
    md: 6,
    /**
     * @deprecated Use `borderRadius.md` instead.
     */
    lg: 8,
    /**
     * @deprecated Use `borderRadius.lg` instead.
     */
    xl: 12,
    /**
     * @deprecated Use `borderRadius.xl` instead.
     */
    '2xl': 16,
    /**
     * @deprecated Use `borderRadius` instead.
     */
    '3xl': 24,
    /**
     * @deprecated Use `borderRadius` instead.
     */
    '4xl': 32,
    /**
     * @deprecated Use `borderRadius.full` instead.
     */
    full: 9999,
  },
  breakpoints,
  /**
   * @deprecated Use `letterSpacing` instead.
   */
  letterSpacings: {
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    xs: -0.4,
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    sm: -0.2,
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    md: 0,
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    lg: 0.2,
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    xl: 0.4,
    /**
     * @deprecated Use `letterSpacing` instead.
     */
    '2xl': 1.6,
  },
  /**
   * @deprecated Use `lineHeight` instead.
   */
  lineHeights: {
    /**
     * @deprecated Use `lineHeight['100']` instead.
     */
    '2xs': 16,
    /**
     * @deprecated Use `lineHeight['200']` instead.
     */
    xs: 18,
    /**
     * @deprecated Use `lineHeight['300']` instead.
     */
    sm: 20,
    /**
     * @deprecated Use `lineHeight['400']` instead.
     */
    md: 22,
    /**
     * @deprecated Use `lineHeight['500']` instead.
     */
    lg: 24,
    /**
     * @deprecated Use `lineHeight['600']` instead.
     */
    xl: 28,
    /**
     * @deprecated Use `lineHeight['700']` instead.
     */
    '2xl': 32,
    /**
     * @deprecated Use `lineHeight['900']` instead.
     */
    '3xl': 40,
    /**
     * @deprecated Use `lineHeight['1000']` instead.
     */
    '4xl': 48,
    /**
     * @deprecated Use `lineHeight['1100']` instead.
     */
    '5xl': 56,
    /**
     * @deprecated Use `lineHeight` instead.
     */
    '6xl': 72,
    /**
     * @deprecated Use `lineHeight` instead.
     */
    '7xl': 90,
  },
  /**
   * @deprecated Use `fontWeight` instead.
   */
  fontWeights: {
    /**
     * @deprecated Use `fontWeight` instead.
     */
    thin: '100' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight` instead.
     */
    extralight: '200' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight` instead.
     */
    light: '300' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight.regular` instead.
     */
    normal: '400' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight.medium` instead.
     */
    medium: '500' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight.semibold` instead.
     */
    semibold: '600' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight.bold` instead.
     */
    bold: '700' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight` instead.
     */
    extrabold: '800' as TextStyle['fontWeight'],
    /**
     * @deprecated Use `fontWeight.heavy` instead.
     */
    black: '900' as TextStyle['fontWeight'],
  },
  /**
   * @deprecated Use `fontFamily` instead.
   */
  fonts: {
    /**
     * @deprecated Use `fontFamily.heading` instead.
     */
    heading: 'Aeonik',
    /**
     * @deprecated Use `fontFamily.body` instead.
     */
    body: 'Work Sans',
    /**
     * @deprecated Use `font` instead.
     */
    mono: undefined,
  },
  /**
   * @deprecated Use `fontSize` instead.
   */
  fontSizes: {
    /**
     * @deprecated Use `fontSize['50']` instead.
     */
    '2xs': 10,
    /**
     * @deprecated Use `fontSize['75']` instead.
     */
    xs: 12,
    /**
     * @deprecated Use `fontSize['90']` instead.
     */
    sm: 14,
    /**
     * @deprecated Use `fontSize['100']` instead.
     */
    md: 16,
    /**
     * @deprecated Use `fontSize['150']` instead.
     */
    lg: 18,
    /**
     * @deprecated Use `fontSize['200']` instead.
     */
    xl: 20,
    /**
     * @deprecated Use `fontSize['300']` instead.
     */
    '2xl': 24,
    /**
     * @deprecated Use `fontSize['400']` instead.
     */
    '3xl': 28,
    /**
     * @deprecated Use `fontSize['500']` instead.
     */ '4xl': 32,
    /**
     * @deprecated Use `fontSize['550']` instead.
     */
    '5xl': 36,
    /**
     * @deprecated Use `fontSize['600']` instead.
     */
    '6xl': 40,
    /**
     * @deprecated Use `fontSize['700']` instead.
     */
    '7xl': 48,
    /**
     * @deprecated Use `fontSize['800']` instead.
     */
    '8xl': 56,
    /**
     * @deprecated Use `fontSize['900']` instead.
     */
    '9xl': 64,
  },
  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  },
  borderWidth,
  borderRadius,
  letterSpacing,
  lineHeight,
  fontWeight: font.weight,
  fontFamily: font.family,
  fontSize: font.size,
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
  tokens: {
    ...components.light,
  },
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
  tokens: {
    ...components.dark,
  },
  ...shared,
} as const;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;
