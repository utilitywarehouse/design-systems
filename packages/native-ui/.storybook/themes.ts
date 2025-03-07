import { create, ThemeVars } from '@storybook/theming';
import { version } from '../package.json';
//  @ts-ignore
import img from './static/monogram.svg';
import { colors, colorsDark, colorsCommon } from '@utilitywarehouse/colour-system';

const shared: Partial<Omit<ThemeVars, 'base'>> = {
  brandTitle: `UW Native UI v${version}`,
  brandUrl: 'http://www.uw.co.uk',
  brandImage: img,
  appBorderRadius: 0,
  fontBase: '"Work Sans", "Open Sans", sans-serif',
};

export const themeLight = create({
  base: 'light',
  ...shared,
  appBg: colorsCommon.brandWhite,
  barBg: colorsCommon.brandWhite,
  appContentBg: colorsCommon.brandWhite,
  textColor: colors.grey1000,
  textMutedColor: colors.grey700,
  colorPrimary: colors.cyan600,
  appBorderColor: colors.grey75,
});

export const themeDark = create({
  base: 'dark',
  ...shared,
  appBg: colorsDark.grey100,
  barBg: colorsDark.grey100,
  appContentBg: colorsDark.grey100,
  textColor: colorsDark.grey1000,
  textMutedColor: colorsDark.grey700,
  colorPrimary: colors.cyan700,
  appBorderColor: colorsDark.grey200,
});
