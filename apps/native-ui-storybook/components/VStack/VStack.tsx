import React, { ComponentProps } from 'react';

import { VStack } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { StoryFn } from '@storybook/react';

const VStackBasic: StoryFn<{
  space: ComponentProps<typeof VStack>['space'];
  reversed: boolean;
}> = ({ space, reversed, ...props }) => {
  return (
    <VStack
      space={space}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      reversed={reversed}
      {...props}
    >
      <Box w={100} h={100} bg="$cyan300" />
      <Box w={100} h={100} bg="$cyan400" />
      <Box w={100} h={100} bg="$cyan500" />
      <Box w={100} h={100} bg="$cyan600" />
    </VStack>
  );
};
export default VStackBasic;
