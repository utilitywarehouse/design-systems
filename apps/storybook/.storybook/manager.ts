import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  brandTitle: `UW Design Systems`,
  brandImage: 'monogram.svg',
});

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  theme,
});
