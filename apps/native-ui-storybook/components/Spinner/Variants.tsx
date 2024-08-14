import { Spinner, VStack } from '@utilitywarehouse/native-ui';
import React from 'react';
import { VariantTitle } from '../../docs/components';
import { StoryFn } from '@storybook/react';

const SpinnerVariants: StoryFn<{
  color: string;
}> = ({ color }) => {
  return (
    <VStack space="md">
      <VariantTitle title="x-small - xs">
        <Spinner color={color} size="xs" />
      </VariantTitle>
      <VariantTitle title="small - sm">
        <Spinner color={color} size="sm" />
      </VariantTitle>
      <VariantTitle title="medium - md">
        <Spinner color={color} size="md" />
      </VariantTitle>
      <VariantTitle title="large - lg">
        <Spinner color={color} size="lg" />
      </VariantTitle>
    </VStack>
  );
};

SpinnerVariants.argTypes = {
  color: {
    control: {
      type: 'color',
    },
    description: 'Color of the spinner',
  },
};

export default SpinnerVariants;

export { Spinner };
