import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Box, Text } from '@utilitywarehouse/native-ui';
import React from 'react';
import { colors } from '@utilitywarehouse/colour-system';

const BoxBasic: StoryFn<{
  bg: ComponentProps<typeof Box>['bg'];
  w: ComponentProps<typeof Box>['w'];
  h: ComponentProps<typeof Box>['h'];
}> = ({ bg = 'red500', w = '100', h = '100', ...props }) => {
  return (
    // @ts-expect-error - This is a playground */}
    <Box {...props} bg={`$${bg}`} h={h} w={w} justifyContent="center" alignItems="center">
      <Text color="$white" bold>
        BOX
      </Text>
    </Box>
  );
};

BoxBasic.argTypes = {
  bg: {
    options: [...Object.keys(colors)],
    control: 'select',
    description: 'Background color of the box. Use the color name from the theme.',
  },
  w: { control: 'number' },
  h: { control: 'number' },
};

BoxBasic.args = { bg: 'red500', w: 100, h: 100 };

export default BoxBasic;

export { Text, Box };
