import React from 'react';

import { VStack, Box } from '@utilitywarehouse/native-ui';

const VStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <VStack
      space={space}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      reversed={reversed}
      {...props}
    >
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan600' }} />
    </VStack>
  );
};

VStackBasic.description =
  'This is a basic VStack component example. VStack is a primitive component to layout its children vertically.';

export default VStackBasic;

export { Box, VStack };
