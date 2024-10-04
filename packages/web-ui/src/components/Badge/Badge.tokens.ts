import { colors } from '@utilitywarehouse/colour-system';

import { fontWeights, fonts } from '../../tokens';
import { px, pxToRem } from '../../utils';

export const tokens = {
  badge: {
    gap: px(4),
    fontSize: pxToRem(14),
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    lineHeight: 16 / 14,
    padding: {
      inline: {
        regular: px(16),
        compact: px(8),
      },
      block: px(4),
    },
    borderRadius: {
      bottom: {
        left: { default: px(4), zero: 0 },
        right: { default: px(4), zero: 0 },
      },
      top: {
        left: { default: px(4), zero: 0 },
        right: { default: px(4), zero: 0 },
      },
    },
    soft: {
      cyan: { color: colors.cyan900, backgroundColor: colors.cyan200 },
      green: { color: colors.green900, backgroundColor: colors.green200 },
      red: { color: colors.red900, backgroundColor: colors.red200 },
      gold: { color: colors.gold900, backgroundColor: colors.gold200 },
      grey: { color: colors.grey900, backgroundColor: colors.grey100 },
    },
    strong: {
      cyan: { color: colors.cyan50, backgroundColor: colors.cyan600 },
      green: { color: colors.green50, backgroundColor: colors.green600 },
      red: { color: colors.red50, backgroundColor: colors.red600 },
      gold: { color: colors.gold900, backgroundColor: colors.gold300 },
      grey: { color: colors.grey900, backgroundColor: colors.grey200 },
    },
    outline: {
      cyan: {
        color: { default: colors.cyan900, inverted: colors.cyan50 },
        borderColor: { default: colors.cyan600, inverted: colors.cyan500 },
      },
      green: {
        color: { default: colors.green900, inverted: colors.green50 },
        borderColor: { default: colors.green600, inverted: colors.green400 },
      },
      red: {
        color: { default: colors.red900, inverted: colors.red50 },
        borderColor: { default: colors.red600, inverted: colors.red500 },
      },
      gold: {
        color: { default: colors.gold900, inverted: colors.gold50 },
        borderColor: { default: colors.gold500, inverted: colors.gold300 },
      },
      grey: {
        color: { default: colors.grey900, inverted: colors.grey50 },
        borderColor: { default: colors.grey500, inverted: colors.grey300 },
      },
    },
  },
};
