import { Alert as GSAlert, AlertIcon, AlertText, VStack } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import { AlertTitle } from './AlertTitle';
import { AlertLink, AlertLinkChevron, AlertLinkText } from './AlertLink';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
  CrossMediumContainedIcon,
  InformationMediumContainedIcon,
  ChevronRightMediumIcon,
  ChevronRightSmallIcon,
  CloseSmallIcon,
} from '@utilitywarehouse/react-native-icons';
import { AlertIconButton, AlertIconButtonChevron } from './AlertIconButton';
import { AlertCloseButton, AlertCloseButtonIcon } from './AlertCloseButton';
import type { AlertProps } from './Alert.props';

const getIcon = (colorScheme: string) => {
  switch (colorScheme) {
    case 'info':
      return InformationMediumContainedIcon;
    case 'success':
      return TickMediumContainedIcon;
    case 'warning':
      return WarningMediumContainedIcon;
    case 'error':
      return CrossMediumContainedIcon;
    default:
      return InformationMediumContainedIcon;
  }
};

const Alert: React.FC<AlertProps> = ({
  text,
  title,
  linkText,
  onPressLink,
  colorScheme = 'info',
  onPressIconButton,
  onClose,
  children,
  ...props
}) => {
  if (children) {
    return (
      <GSAlert colorScheme={colorScheme} {...props}>
        {children}
      </GSAlert>
    );
  }

  useEffect(() => {
    if (__DEV__) {
      if (onPressIconButton && linkText) {
        console.warn(
          'You cannot use both onPressIconButton and linkText props at the same time. Please choose one or the other.'
        );
      }
    }
  }, [onPressIconButton, linkText]);

  return (
    <GSAlert colorScheme={colorScheme} {...props}>
      <>
        <AlertIcon as={getIcon(colorScheme)} />
        <VStack flex={1} gap={4}>
          {!!title && <AlertTitle>{title}</AlertTitle>}
          <AlertText>{text}</AlertText>
          {!!linkText && (
            <AlertLink onPress={onPressLink}>
              <AlertLinkText>{linkText}</AlertLinkText>
              <AlertLinkChevron as={ChevronRightSmallIcon} />
            </AlertLink>
          )}
        </VStack>
        {!!onPressIconButton && !linkText && (
          <AlertIconButton onPress={onPressIconButton}>
            <AlertIconButtonChevron as={ChevronRightMediumIcon} />
          </AlertIconButton>
        )}
        {!!onClose && (
          <AlertCloseButton onPress={onClose}>
            <AlertCloseButtonIcon as={CloseSmallIcon} />
          </AlertCloseButton>
        )}
      </>
    </GSAlert>
  );
};

export default Alert;
