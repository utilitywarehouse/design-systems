import React, { forwardRef, useEffect, useMemo } from 'react';
import AlertTitle from './AlertTitle';
import AlertLink, { AlertLinkChevron, AlertLinkText } from './AlertLink';
import AlertIconButton, { AlertIconButtonChevron } from './AlertIconButton';
import AlertCloseButton, { AlertCloseButtonIcon } from './AlertCloseButton';
import type { AlertProps } from './Alert.props';
import { AlertContext } from './Alert.context';
import { StyleSheet } from 'react-native-unistyles';
import { View, Pressable } from 'react-native';
import AlertText from './AlertText';
import AlertIcon from './AlertIcon';

const Alert = forwardRef<View, AlertProps>(
  (
    {
      text,
      title,
      link,
      onPressLink,
      colorScheme = 'cyan',
      onPressIconButton,
      onClose,
      children,
      onPress,
      iconButtonTestID,
      linkTestID,
      style,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (__DEV__) {
        if (onPressIconButton && link) {
          console.warn(
            'You cannot use both onPressIconButton and link props at the same time. Please choose one or the other.'
          );
        }
      }
    }, [onPressIconButton, link]);

    const value = useMemo(() => ({ colorScheme }), [colorScheme]);

    styles.useVariants({ colorScheme });

    return (
      <AlertContext.Provider value={value}>
        <Pressable
          ref={ref}
          {...props}
          style={[styles.container, style as ViewStyle]}
          onPress={onPress}
          disabled={!onPress}
        >
          {children ? (
            children
          ) : (
            <>
              <AlertIcon />
              <View style={styles.content}>
                {!!title && <AlertTitle>{title}</AlertTitle>}
                <AlertText>{text}</AlertText>
                {!!link && (
                  <AlertLink onPress={onPressLink} testID={linkTestID}>
                    <AlertLinkText>{link}</AlertLinkText>
                    <AlertLinkChevron />
                  </AlertLink>
                )}
              </View>
              {(!!onPressIconButton || !!onPress) && !link && (
                <AlertIconButton onPress={onPressIconButton || onPress} testID={iconButtonTestID}>
                  <AlertIconButtonChevron />
                </AlertIconButton>
              )}
              {!!onClose && (
                <AlertCloseButton onPress={onClose}>
                  <AlertCloseButtonIcon />
                </AlertCloseButton>
              )}
            </>
          )}
        </Pressable>
      </AlertContext.Provider>
    );
  }
);

Alert.displayName = 'Alert';

const styles = StyleSheet.create(theme => ({
  container: {
    alignItems: 'center',
    padding: theme.space[3],
    flexDirection: 'row',
    borderRadius: theme.radii.lg,
    gap: theme.space[2],
    borderWidth: theme.borderWidths[1],
    variants: {
      colorScheme: {
        cyan: {
          borderColor: theme.colors.cyan500,
          backgroundColor: theme.colors.cyan50,
        },
        green: {
          borderColor: theme.colors.green500,
          backgroundColor: theme.colors.green50,
        },
        gold: {
          borderColor: theme.colors.gold500,
          backgroundColor: theme.colors.gold50,
        },
        red: {
          borderColor: theme.colors.red500,
          backgroundColor: theme.colors.red50,
        },
      },
    },
  },
  content: {
    flex: 1,
    gap: theme.space[1],
  },
}));

export default Alert;
