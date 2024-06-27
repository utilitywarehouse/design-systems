import { Alert as GSAlert, AlertIcon, AlertText, VStack } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import { AlertTitle } from './AlertTitle';
import { AlertLink, AlertLinkChevron, AlertLinkText } from './AlertLink';

import { AlertIconButton, AlertIconButtonChevron } from './AlertIconButton';
import { AlertCloseButton, AlertCloseButtonIcon } from './AlertCloseButton';
import type { AlertProps } from './Alert.props';

const Alert: React.FC<AlertProps> = ({
  text,
  title,
  link,
  onPressLink,
  colorScheme = 'cyan',
  onPressIconButton,
  onClose,
  children,
  ...props
}) => {
  useEffect(() => {
    if (__DEV__) {
      if (onPressIconButton && link) {
        console.warn(
          'You cannot use both onPressIconButton and link props at the same time. Please choose one or the other.'
        );
      }
    }
  }, [onPressIconButton, link]);

  if (children) {
    return (
      <GSAlert colorScheme={colorScheme} {...props}>
        {children}
      </GSAlert>
    );
  }

  return (
    <GSAlert colorScheme={colorScheme} {...props}>
      <>
        <AlertIcon />
        <VStack flex={1} gap={4}>
          {!!title && <AlertTitle>{title}</AlertTitle>}
          <AlertText>{text}</AlertText>
          {!!link && (
            <AlertLink onPress={onPressLink}>
              <AlertLinkText>{link}</AlertLinkText>
              <AlertLinkChevron />
            </AlertLink>
          )}
        </VStack>
        {!!onPressIconButton && !link && (
          <AlertIconButton onPress={onPressIconButton}>
            <AlertIconButtonChevron />
          </AlertIconButton>
        )}
        {!!onClose && (
          <AlertCloseButton onPress={onClose}>
            <AlertCloseButtonIcon />
          </AlertCloseButton>
        )}
      </>
    </GSAlert>
  );
};

export default Alert;
