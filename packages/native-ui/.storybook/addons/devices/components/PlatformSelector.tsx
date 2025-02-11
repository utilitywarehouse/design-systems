import React from 'react';

import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { useGlobals } from '@storybook/manager-api';
import { DEVICES } from '../constants';
import { TabletIcon } from '@storybook/icons';

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
              id: DEVICES.WEB,
              title: `Web`,
              onClick: () => {
                updateGlobals({ device: DEVICES.WEB });
                props.onHide();
              },
              active: globals.device === DEVICES.WEB,
            },
            {
              id: DEVICES.IOS,
              title: `iOS`,
              onClick: () => {
                updateGlobals({ device: DEVICES.IOS });
                props.onHide();
              },
              active: globals.device === DEVICES.IOS,
            },
            {
              id: DEVICES.ANDROID,
              title: `Android`,
              onClick: () => {
                updateGlobals({ device: DEVICES.ANDROID });
                props.onHide();
              },
              active: globals.device === DEVICES.ANDROID,
            },
          ]}
        />
      )}
    >
      <IconButton title="Select device">
        <TabletIcon />
      </IconButton>
    </WithTooltip>
  );
};
