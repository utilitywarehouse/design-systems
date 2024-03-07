import { HStack, Box } from '@utilitywarehouse/native-ui';
import React from 'react';

const HStackReversed = ({ space, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan600' }} />
    </HStack>
  );
};

HStackReversed.description =
  'This is a basic HStack component example. HStack is a primitive component to layout its children horizontally.';

export default HStackReversed;
