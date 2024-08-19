import React, { ComponentProps } from 'react';

import { VStack, Box } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const VStackBasic: StoryFn<{
  space: ComponentProps<typeof VStack>['space'];
  reversed: boolean;
}> = ({ space, reversed, ...props }) => {
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
export default VStackBasic;
