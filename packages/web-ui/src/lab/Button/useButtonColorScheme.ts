import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

export const useSolidButtonColorScheme = () => {
  const commonFocusStyles = {
    cyan: { outlineColor: colors.cyan700 },
    red: { outlineColor: colors.red700 },
    green: { outlineColor: colors.green700 },
  };
  return {
    cyan: {
      default: { color: colors.cyan1000, backgroundColor: colors.cyan400 },
      hover: { backgroundColor: colors.cyan500 },
      focus: commonFocusStyles.cyan,
    },
    red: {
      default: { color: colorsCommon.brandWhite, backgroundColor: colors.red500 },
      hover: { backgroundColor: colors.red600 },
      focus: commonFocusStyles.red,
    },
    green: {
      default: { color: colorsCommon.brandWhite, backgroundColor: colors.green500 },
      hover: { backgroundColor: colors.green600 },
      focus: commonFocusStyles.green,
    },
  };
  // const outlineColorSchemes = {
  //   cyan: {
  //     solid: {
  //       default: { color: colors.cyan1000, backgroundColor: colors.cyan400 },
  //       hover: { backgroundColor: colors.cyan500 },
  //     },
  //     outline: {
  //       default: { color: colors.cyan1000, borderColor: colors.cyan400 },
  //       hover: { backgroundColor: colors.cyan75 },
  //     },
  //     common: {
  //       focus: { outlineColor: colors.cyan700 },
  //     },
  //   },
  //   grey: {
  //     outline: {
  //       default: { color: colors.grey1000, borderColor: colors.grey500 },
  //       hover: { backgroundColor: colors.grey100 },
  //     },
  //     common: {
  //       focus: { outlineColor: colors.grey700 },
  //     },
  //   },
  //   red: {
  //     solid: {
  //       default: { color: colorsCommon.brandWhite, backgroundColor: colors.red500 },
  //       hover: { backgroundColor: colors.red600 },
  //     },
  //     outline: {
  //       default: { color: colors.red900, borderColor: colors.red500 },
  //       hover: { backgroundColor: colors.red100 },
  //     },
  //     common: {
  //       focus: { outlineColor: colors.red700 },
  //     },
  //   },
  //   green: {
  //     solid: {
  //       default: { color: colorsCommon.brandWhite, backgroundColor: colors.green500 },
  //       hover: { backgroundColor: colors.green600 },
  //     },
  //     outline: {
  //       default: { color: colors.green900, borderColor: colors.green600 },
  //       hover: { backgroundColor: colors.green100 },
  //     },
  //     common: {
  //       focus: { outlineColor: colors.green700 },
  //     },
  //   },
  //   gold: {
  //     outline: {
  //       default: { color: colors.gold900, borderColor: colors.gold500 },
  //       hover: { backgroundColor: colors.gold100 },
  //     },
  //     common: {
  //       focus: { outlineColor: colors.gold700 },
  //     },
  //   },
  // };
};
