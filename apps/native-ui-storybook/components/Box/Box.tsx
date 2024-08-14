import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Text, Box } from '@utilitywarehouse/native-ui';
import React from 'react';

const BoxBasic: StoryFn<{
  bg: ComponentProps<typeof Box>['bg'];
  w: ComponentProps<typeof Box>['w'];
  h: ComponentProps<typeof Box>['h'];
}> = ({ bg = 'red500', w = '100', h = '100', ...props }) => {
  return (
    // @ts-expect-error - This is a playground
    <Box {...props} bg={`$${bg}`} h={h} w={w} justifyContent="center" alignItems="center">
      <Text color="white" fontWeight="$bold">
        BOX
      </Text>
    </Box>
  );
};

export default BoxBasic;

export { Text, Box };
