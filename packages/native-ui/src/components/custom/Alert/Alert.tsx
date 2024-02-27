import { Alert as GSAlert, AlertIcon, AlertText, VStack } from '@gluestack-ui/themed';
import React, { PropsWithChildren, ComponentProps, useEffect } from 'react';
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

interface AlertProps {
  text: string;
  title?: string;
  linkText?: string;
  icon?: boolean;
  colorScheme?: 'info' | 'success' | 'warning' | 'error';
  onPressIconButton?: () => void;
  onPressLink?: () => void;
  onClose?: () => void;
}

interface AlertWithChildrenProps extends PropsWithChildren, Omit<AlertProps, 'text'> {
  text?: string;
}

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

type IAlertProps = ComponentProps<typeof GSAlert>;

const Alert: React.FC<(AlertProps | AlertWithChildrenProps) & IAlertProps> = ({
  text,
  title,
  linkText,
  onPressLink,
  colorScheme = 'info',
  onPressIconButton,
  icon = true,
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
        {icon && <AlertIcon as={getIcon(colorScheme)} />}
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
