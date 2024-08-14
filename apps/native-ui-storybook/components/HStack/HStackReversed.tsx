import { StoryFn } from '@storybook/react';
import { HStack, Box } from '@utilitywarehouse/native-ui';
import React, { ComponentProps } from 'react';

const HStackReversed: StoryFn<{
  space: ComponentProps<typeof HStack>['space'];
  reversed: boolean;
}> = ({ space, ...props }) => {
  return (
    <HStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan600' }} />
    </HStack>
  );
};

export default HStackReversed;
