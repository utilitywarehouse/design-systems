import { addons, types } from '@storybook/addons';
import React from 'react';

import { ADDON_ID } from './constants';
import PlatformSelector from './components/PlatformSelector';

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/device-selector`, {
    title: 'Device Selector',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: () => <PlatformSelector />,
  });
});
