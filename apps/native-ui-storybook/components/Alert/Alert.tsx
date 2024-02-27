import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertText,
  AlertTitle,
  AlertLink,
  CheckCircleIcon,
  CloseCircleIcon,
  AlertCircleIcon,
  VStack,
  Icon,
  AlertLinkText,
  AlertLinkChevron,
  AlertIconButton,
} from '@utilitywarehouse/native-ui';

import {
  InformationMediumContainedIcon,
  ChevronRightMediumIcon,
  ChevronRightSmallIcon,
} from '@utilitywarehouse/react-native-icons';

const AlertBasic = ({ text = 'Selection successfully moved!', ...props }: any) => {
  return (
    <Alert {...props}>
      <AlertIcon as={InformationMediumContainedIcon} />
      <VStack flex={1} gap={4}>
        <AlertTitle>Success</AlertTitle>
        <AlertText>{text}</AlertText>
        <AlertLink>
          <AlertLinkText>View details</AlertLinkText>
          <AlertLinkChevron as={ChevronRightSmallIcon} />
        </AlertLink>
      </VStack>
      <AlertIconButton>
        <Icon as={ChevronRightMediumIcon} />
      </AlertIconButton>
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
  CheckCircleIcon,
  CloseCircleIcon,
  AlertCircleIcon,
  Icon,
  VStack,
};
