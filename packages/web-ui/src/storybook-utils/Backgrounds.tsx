import * as React from 'react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Background } from '../Background';
import { backgroundColors } from '../types';
import { Flex } from '../Flex';

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

export const LegacyBackgrounds = (props: BackgroundsProps) => (
  <Flex direction="column">
    {backgroundColors.map(bg => (
      <Background
        key={bg}
        backgroundColor={bg}
        display="flex"
        justifyContent="center"
        padding={4}
        {...props}
      />
    ))}
  </Flex>
);
