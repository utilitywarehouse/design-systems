import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertChevron,
  AlertText,
  AlertTitle,
  CheckCircleIcon,
  CloseCircleIcon,
  AlertCircleIcon,
  VStack,
  Icon,
} from '@utilitywarehouse/native-ui';

import {
  InformationMediumContainedIcon,
  ChevronRight01MediumIcon,
} from '@utilitywarehouse/react-native-icons';

const AlertBasic = ({ text = 'Selection successfully moved!', ...props }: any) => {
  return (
    <Alert {...props} si>
      <AlertIcon as={InformationMediumContainedIcon} />
      <VStack flex={1}>
        <AlertTitle>Success</AlertTitle>
        <AlertText>{text}</AlertText>
      </VStack>
      <AlertChevron as={ChevronRight01MediumIcon} />
    </Alert>
  );
};

AlertBasic.description =
  'This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page';

export default AlertBasic;

export {
  Alert,
  AlertIcon,
  AlertText,
  AlertChevron,
  CheckCircleIcon,
  CloseCircleIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
