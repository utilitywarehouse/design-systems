import React, { ComponentProps } from 'react';
import { VStack } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { StoryFn } from '@storybook/react';

const VStackReversed: StoryFn<{
  space: ComponentProps<typeof VStack>['space'];
}> = ({ space, ...props }) => {
  return (
    <Box mt="$5">
      <VStack space={space} {...props} reversed>
        <Box w={100} h={100} bg="$cyan300" />
        <Box w={100} h={100} bg="$cyan400" />
        <Box w={100} h={100} bg="$cyan500" />
        <Box w={100} h={100} bg="$cyan600" />
      </VStack>
    </Box>
  );
};

export default VStackReversed;
