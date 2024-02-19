import { addons, types, useGlobals } from '@storybook/addons';
import React from 'react';

import { Icons, IconButton } from '@storybook/components';
import { ADDON_ID } from './constants';
import PlatformSelector from './components/PlatformSelector';

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/device-selector`, {
    title: 'Device Selector',
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: () => <PlatformSelector />,
  });
});
