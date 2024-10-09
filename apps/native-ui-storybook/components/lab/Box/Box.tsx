import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Text, useStyles } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import React from 'react';

const BoxBasic: StoryFn<{
  bg: ComponentProps<typeof Box>['bg'];
  w: ComponentProps<typeof Box>['w'];
  h: ComponentProps<typeof Box>['h'];
}> = ({ bg = 'red500', w = '100', h = '100', ...props }) => {
  const {
    theme: { colors },
  } = useStyles();
  return (
    <>
      <Box
        {...props}
        // @ts-expect-error - This is a playground
        bg={colors[bg]}
        h={Number(h)}
        w={Number(w)}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$white">BOX</Text>
      </Box>
    </>
  );
};

export default BoxBasic;

export { Text, Box };
