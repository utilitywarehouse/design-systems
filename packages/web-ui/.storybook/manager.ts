import { version } from '../package.json';
import { addons } from 'storybook/manager-api';
import { create, themes } from 'storybook/theming';

const theme = create({
  ...themes.light,
  brandTitle: `UW Web UI v${version}`,
  brandImage: 'monogram.svg',
});

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  theme,
});
