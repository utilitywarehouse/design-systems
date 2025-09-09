import { addons } from 'storybook/manager-api';

// import './addons/devices/register';
import { themeLight } from './themes';

addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  theme: themeLight,
});
