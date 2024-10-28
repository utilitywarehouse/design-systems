import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Skeleton, Text } from '@utilitywarehouse/native-ui';
import React from 'react';
import { colors } from '@utilitywarehouse/colour-system';

const SkeletonBasic: StoryFn<{
  backgroundColor: ComponentProps<typeof Skeleton>['backgroundColor'];
  width: ComponentProps<typeof Skeleton>['width'];
  height: ComponentProps<typeof Skeleton>['height'];
  borderRadius: ComponentProps<typeof Skeleton>['borderRadius'];
}> = ({ backgroundColor, width, height, borderRadius, ...props }) => {
  return (
    <Skeleton
      {...props}
      // @ts-expect-error - This is a playground
      backgroundColor={`$${backgroundColor}`}
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

SkeletonBasic.argTypes = {
  backgroundColor: {
    options: [...Object.keys(colors)],
    control: 'select',
    description: 'Background color of the skeleton. Use the color name from the theme.',
  },
  width: { control: 'number' },
  height: { control: 'number' },
  borderRadius: { control: 'number' },
};

SkeletonBasic.args = {
  // @ts-expect-error - This is a playground
  backgroundColor: 'grey75',
  width: 200,
  height: 16,
};

export default SkeletonBasic;

export { Text, Skeleton };
