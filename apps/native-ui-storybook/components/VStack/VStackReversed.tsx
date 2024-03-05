import React from 'react';
import { Box, VStack } from '@utilitywarehouse/native-ui';

const VStackReversed = ({ space, ...props }: any) => {
  return (
    <VStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$cyan600' }} />
    </VStack>
  );
};

export default VStackReversed;
