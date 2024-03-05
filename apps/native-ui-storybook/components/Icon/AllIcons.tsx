import React from 'react';

import { Icon, VStack, HStack, createIcon } from '@utilitywarehouse/native-ui';

import { Path, Rect, Defs, Stop, LinearGradient } from 'react-native-svg';

const AdIcon = createIcon({
  viewBox: '0 0 32 32',
  path: (
    <>
      <Rect width="32" height="32" rx="2" fill="url(#paint0_linear_7965_77032)" />
      <Rect width="32" height="32" rx="2" fill="url(#paint1_linear_7965_77032)" />
      <Path d="M8 14.3559L15.9998 8.46325V11.2441L8 17.1368V14.3559Z" fill="currentColor" />
      <Path
        d="M23.9995 14.356L15.9998 8.46332V11.2442L23.9995 17.1368V14.356Z"
        fill="currentColor"
      />
      <Path d="M8 20.7558L15.9998 14.8632V17.6441L8 23.5367V20.7558Z" fill="currentColor" />
      <Path
        d="M23.9995 20.7559L15.9998 14.8632V17.6441L23.9995 23.5367V20.7559Z"
        fill="currentColor"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_7965_77032"
          x1="16"
          y1="0"
          x2="36.4235"
          y2="33.8824"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#4AA9FF" />
          <Stop offset="1" stop-color="#004282" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_7965_77032"
          x1="16"
          y1="0"
          x2="36.4235"
          y2="33.8824"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#4AA9FF" />
          <Stop offset="1" stop-color="#004282" />
        </LinearGradient>
      </Defs>
    </>
  ),
});

const AllIcons = ({ size }: any) => {
  return <HStack flexWrap="wrap"></HStack>;
};

export default AllIcons;

export { VStack, HStack, Icon };
