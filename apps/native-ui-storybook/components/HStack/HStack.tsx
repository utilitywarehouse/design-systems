import React, { ComponentProps } from 'react';
import { HStack, Box } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const HStackBasic: StoryFn<{
  space: ComponentProps<typeof HStack>['space'];
  reversed: boolean;
}> = ({ space, reversed, ...props }) => {
  return (
    <HStack space={space} mt="$5" reversed={reversed} {...props}>
      <Box sx={{ w: 100, h: 100, bg: '$cyan300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$cyan600' }} />
    </HStack>
  );
};

export default HStackBasic;
