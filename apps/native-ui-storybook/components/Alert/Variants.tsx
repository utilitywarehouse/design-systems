import React from 'react';
import { Center, Alert, AlertIcon, AlertText } from '@utilitywarehouse/native-ui';

import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
  CrossMediumContainedIcon,
  InformationMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';

const AlertVariants = () => {
  return (
    <Center>
      <Alert colorScheme="info" mb={4} gap="$3">
        <AlertIcon as={InformationMediumContainedIcon} />
        <AlertText>Unlock the power of knowledge with the following information.</AlertText>
      </Alert>
      <Alert colorScheme="success" mb={4} gap="$3">
        <AlertIcon as={TickMediumContainedIcon} />
        <AlertText>
          Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!
          Boom! You did it! Please take a moment to pat yourself on the back. You've earned it!
        </AlertText>
      </Alert>
      <Alert colorScheme="error" mb={4} gap="$3">
        <AlertIcon as={CrossMediumContainedIcon} />
        <AlertText>
          Uh-oh! It looks like the matrix has glitched. Our team of tech ninjas are already on the
          case. Please hold tight while we fix the issue
        </AlertText>
      </Alert>
      <Alert colorScheme="warning" mb={4} gap="$3">
        <AlertIcon as={WarningMediumContainedIcon} />

        <AlertText>
          Warning: Reading the following content may cause spontaneous outbursts of 'aha!' moments
        </AlertText>
      </Alert>
    </Center>
  );
};

export default AlertVariants;
export { Alert };
