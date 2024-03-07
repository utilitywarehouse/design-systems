import React from 'react';
import { HStack, Box } from '@utilitywarehouse/native-ui';

const HStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" reversed={reversed} {...props}>
      <Box sx={{ w: 100, h: 100, bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan600' }} />
    </HStack>
  );
};

HStackBasic.description =
  'This is a basic HStack component example. HStack is a primitive component.';

export default HStackBasic;

export { Box, HStack };
