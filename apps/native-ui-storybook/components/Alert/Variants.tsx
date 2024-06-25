import React from 'react';

import { Alert, Text, VStack } from '@utilitywarehouse/native-ui';

const AlertVariants = () => {
  return (
    <VStack gap={8}>
      <Text>Info - Cyan</Text>
      <Alert
        colorScheme="cyan"
        text="Unlock the power of knowledge with the following information."
      />

      <Text>Success - Green</Text>
      <Alert
        colorScheme="green"
        text="Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!"
      />
      <Text>Error - Red</Text>
      <Alert
        colorScheme="red"
        text="Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas are already on the
          case. Please hold tight while we fix the issue"
      />
      <Text>Warning - Gold</Text>
      <Alert
        colorScheme="gold"
        text="Warning: Reading the following content may cause spontaneous outbursts of 'aha!' moments"
      />
    </VStack>
  );
};

AlertVariants.argTypes = {};

export default AlertVariants;
export { Alert };
