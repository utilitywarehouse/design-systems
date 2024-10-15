import * as React from 'react';

import { colorsCommon } from '@utilitywarehouse/colour-system';

import { Box, Flex } from '../components';

interface BackgroundsProps {
  children: React.ReactNode;
}

export const Backgrounds = (props: BackgroundsProps) => (
  <Flex direction="column">
    {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
      bg => (
        <Box
          key={bg}
          background={bg}
          display="flex"
          justifyContent="center"
          padding={4}
          {...props}
        />
      )
    )}
  </Flex>
);
