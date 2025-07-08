import { addons } from '@storybook/addons';
import { create } from 'storybook/theming';
import { version } from '../package.json';

const theme = create({
  brandTitle: `UW Web UI v${version}`,
  brandImage: 'monogram.svg',
});

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  theme,
});
