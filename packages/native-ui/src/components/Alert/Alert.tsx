import React, { forwardRef, useEffect, useMemo } from 'react';
import AlertTitle from './AlertTitle';
import AlertLink, { AlertLinkChevron, AlertLinkText } from './AlertLink';
import AlertIconButton, { AlertIconButtonChevron } from './AlertIconButton';
import AlertCloseButton, { AlertCloseButtonIcon } from './AlertCloseButton';
import type { AlertProps } from './Alert.props';
import { AlertContext } from './Alert.context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
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

    const { styles } = useStyles(stylesheet, { colorScheme });

    return (
      <AlertContext.Provider value={value}>
        <View ref={ref} {...props} style={[styles.container, style]}>
          {children ? (
            children
          ) : (
            <>
              <AlertIcon />
              <View style={styles.content}>
                {!!title && <AlertTitle>{title}</AlertTitle>}
                <AlertText>{text}</AlertText>
                {!!link && (
                  <AlertLink onPress={onPressLink}>
                    <AlertLinkText>{link}</AlertLinkText>
                    <AlertLinkChevron />
                  </AlertLink>
                )}
              </View>
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
          )}
        </View>
      </AlertContext.Provider>
    );
  }
);

Alert.displayName = 'Alert';

const stylesheet = createStyleSheet(({ colors, space, borderWidths, radii }) => ({
  container: {
    alignItems: 'center',
    padding: space[3],
    flexDirection: 'row',
    borderRadius: radii.lg,
    gap: space[2],
    borderWidth: borderWidths[1],
    variants: {
      colorScheme: {
        cyan: {
          borderColor: colors.cyan500,
          backgroundColor: colors.cyan50,
        },
        green: {
          borderColor: colors.green500,
          backgroundColor: colors.green50,
        },
        gold: {
          borderColor: colors.gold500,
          backgroundColor: colors.gold50,
        },
        red: {
          borderColor: colors.red500,
          backgroundColor: colors.red50,
        },
      },
    },
  },
  content: {
    flex: 1,
    gap: space[1],
  },
}));

export default Alert;
