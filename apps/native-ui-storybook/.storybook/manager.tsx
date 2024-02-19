import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { version } from '../package.json';
// @ts-ignore
import img from './static/monogram.svg';

import './addons/devices/register';

const theme = create({
  brandTitle: `UW Native UI v${version}`,
  fontBase: '"Work Sans", "Open Sans", sans-serif',
  brandImage: img,
  base: 'dark',
});

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  theme,
});
