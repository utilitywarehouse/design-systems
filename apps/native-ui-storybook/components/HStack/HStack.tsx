import React, { ComponentProps } from 'react';
import { HStack } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { StoryFn } from '@storybook/react';

const HStackBasic: StoryFn<{
  space: ComponentProps<typeof HStack>['space'];
  reversed: boolean;
}> = ({ space, reversed, ...props }) => {
  return (
    <HStack space={space} reversed={reversed} {...props}>
      <Box w={100} h={100} bg="$cyan300" />
      <Box w={100} h={100} bg="$cyan400" />
      <Box w={100} h={100} bg="$cyan500" />
      <Box w={100} h={100} bg="$cyan600" />
    </HStack>
  );
};

export default HStackBasic;
