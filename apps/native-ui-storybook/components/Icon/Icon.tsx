import React, { ComponentType } from 'react';

import { Icon, createIcon, HStack } from '@utilitywarehouse/native-ui';
import * as Icons from '@utilitywarehouse/react-native-icons';
import Svg, { Path, Rect } from 'react-native-svg';
import { colors } from '@utilitywarehouse/colour-system';
import { StoryFn } from '@storybook/react';

const IconBasic: StoryFn<{ as: string; color: string }> = ({ as: icon, color }) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const as: ComponentType | undefined = icon === 'none' ? undefined : Icons[icon];
  return (
    <HStack space="lg">
      {/* @ts-expect-error - This is a playground */}
      <Icon as={as} color={colors[color]} />
    </HStack>
  );
};

IconBasic.argTypes = {
  as: {
    control: 'select',
    options: [...Object.keys(Icons)],
    description: 'The Icon that should render in as the component',
    defaultValue: 'Helper text icon',
  },
  color: {
    options: [...Object.keys(colors)],
    control: 'select',
    description: 'Background color of the Icon. Use the color name from the theme.',
  },
};

IconBasic.args = {
  as: Object.keys(Icons)[0],
  color: 'grey1000',
};

export const GluestackIcon = createIcon({
  Root: Svg,
  viewBox: '0 0 32 32',
  path: (
    <>
      <Rect width="32" height="32" rx="2" fill="currentColor" />
      <Path d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z" fill="white" />
      <Path d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z" fill="white" />
      <Path d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z" fill="white" />
      <Path d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z" fill="white" />
    </>
  ),
});

export default IconBasic;
