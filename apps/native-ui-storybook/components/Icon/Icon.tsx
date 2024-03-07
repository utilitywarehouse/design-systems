import React from 'react';

import { Icon, createIcon, HStack } from '@utilitywarehouse/native-ui';
import {
  ElectricityMediumIcon,
  MobileMediumIcon,
  BroadbandMediumIcon,
  InsuranceMediumIcon,
} from '@utilitywarehouse/react-native-icons';
import { Path, Rect } from 'react-native-svg';

const IconBasic = (props: any) => {
  return (
    <HStack gap={10}>
      <Icon {...props} as={ElectricityMediumIcon} sx={{ color: '$serviceElectricity' }} />
      <Icon {...props} as={MobileMediumIcon} sx={{ color: '$serviceMobile' }} />
      <Icon {...props} as={BroadbandMediumIcon} sx={{ color: '$serviceLandline' }} />
      <Icon {...props} as={InsuranceMediumIcon} sx={{ color: '$serviceInsurance' }} />
    </HStack>
  );
};

export const GluestackIcon = createIcon({
  // createIcon function is imported from '@utilitywarehouse/native-ui'
  viewBox: '0 0 32 32',
  path: (
    <>
      {/* Rect, Path is imported from 'react-native-svg' */}
      <Rect width="32" height="32" rx="2" fill="currentColor" />
      <Path d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z" fill="white" />
      <Path d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z" fill="white" />
      <Path d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z" fill="white" />
      <Path d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z" fill="white" />
    </>
  ),
});

IconBasic.description =
  'This is a basic Icon component example. Icons are used to communicate a state that affects a system, feature or page';

export default IconBasic;

export { Icon, createIcon };
