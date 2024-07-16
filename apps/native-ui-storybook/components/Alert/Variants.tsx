import React from 'react';

import { Alert, Text, VStack } from '@utilitywarehouse/native-ui';
import { VariantTitle } from '../../docs/components';

const AlertVariants = () => {
  return (
    <VStack gap={8}>
      <VariantTitle title="Info - Cyan">
        <Alert
          colorScheme="cyan"
          text="Unlock the power of knowledge with the following information."
        />
      </VariantTitle>
      <VariantTitle title="Success - Green">
        <Alert
          colorScheme="green"
          text="Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!"
        />
      </VariantTitle>
      <VariantTitle title="Error - Red">
        <Alert
          colorScheme="red"
          text="Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas are already on the
          case. Please hold tight while we fix the issue"
        />
      </VariantTitle>
      <VariantTitle title="Warning - Gold">
        <Alert
          colorScheme="gold"
          text="Warning: Reading the following content may cause spontaneous outbursts of 'aha!' moments"
        />
      </VariantTitle>
    </VStack>
  );
};

AlertVariants.argTypes = {};

export default AlertVariants;
export { Alert };
