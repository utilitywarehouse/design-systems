import React from 'react';

import { Alert, AlertIcon, AlertText, Text, VStack } from '@utilitywarehouse/native-ui';

const AlertVariants = () => {
  return (
    <VStack gap={8}>
      <Text>Info - Cyan</Text>
      <Alert colorScheme="cyan">
        <AlertIcon />
        <AlertText>Unlock the power of knowledge with the following information.</AlertText>
      </Alert>
      <Text>Success - Green</Text>
      <Alert colorScheme="green">
        <AlertIcon />
        <AlertText>
          Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!
        </AlertText>
      </Alert>
      <Text>Error - Red</Text>
      <Alert colorScheme="red">
        <AlertIcon />
        <AlertText>
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas are already on the
          case. Please hold tight while we fix the issue
        </AlertText>
      </Alert>
      <Text>Warning - Gold</Text>
      <Alert colorScheme="gold">
        <AlertIcon />
        <AlertText>
          Warning: Reading the following content may cause spontaneous outbursts of 'aha!' moments
        </AlertText>
      </Alert>
    </VStack>
  );
};

AlertVariants.argTypes = {};

export default AlertVariants;
export { Alert };
