import { StoryFn } from '@storybook/react';
import { HStack } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import React, { ComponentProps } from 'react';

const HStackReversed: StoryFn<{
  space: ComponentProps<typeof HStack>['space'];
  reversed: boolean;
}> = ({ space, ...props }) => {
  return (
    <HStack space={space} {...props} reversed>
      <Box w={100} h={100} bg="$cyan300" />
      <Box w={100} h={100} bg="$cyan400" />
      <Box w={100} h={100} bg="$cyan500" />
      <Box w={100} h={100} bg="$cyan600" />
    </HStack>
  );
};

export default HStackReversed;
