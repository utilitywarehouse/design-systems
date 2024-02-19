import React from 'react';

import { IconButton, WithTooltip, TooltipLinkList, Icons } from '@storybook/components';
import { useGlobals } from '@storybook/manager-api';

export default () => {
  const [globals, updateGlobals] = useGlobals();

  return (
    <WithTooltip
      closeOnOutsideClick
      placement="top"
      trigger="click"
      tooltip={props => (
        <TooltipLinkList
          links={[
            {
              id: 'web',
              title: `Web`,
              onClick: () => updateGlobals({ device: 'web' }),
              active: globals.device === 'web',
            },
            {
              id: 'ios',
              title: `iOS`,
              onClick: () => updateGlobals({ device: 'ios' }),
              active: globals.device === 'ios',
            },
            {
              id: 'android',
              title: `Android`,
              onClick: () => updateGlobals({ device: 'android' }),
              active: globals.device === 'android',
            },
          ]}
        />
      )}
    >
      <IconButton title="Select device" placeholder="">
        <Icons icon="tablet" />
      </IconButton>
    </WithTooltip>
  );
};
