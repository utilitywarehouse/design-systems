import { Box, Spinner, Text, VStack } from '@utilitywarehouse/native-ui';
import React from 'react';

const SpinnerVariants: any = ({ color }: any) => {
  return (
    <VStack space="md">
      <Box>
        <Text>xs</Text>
        <Spinner color={color} size="xs" />
      </Box>
      <Box>
        <Text>sm</Text>
        <Spinner color={color} size="sm" />
      </Box>
      <Box>
        <Text>md</Text>
        <Spinner color={color} size="md" />
      </Box>
      <Box>
        <Text>lg</Text>
        <Spinner color={color} size="lg" />
      </Box>
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
