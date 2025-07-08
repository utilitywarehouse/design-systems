import { forwardRef, useMemo } from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { AlertContext } from './Alert.context';
import type { AlertProps } from './Alert.props';
import AlertCloseButton, { AlertCloseButtonIcon } from './AlertCloseButton';
import AlertIcon from './AlertIcon';
import AlertIconButton, { AlertIconButtonChevron } from './AlertIconButton';
import AlertLink, { AlertLinkChevron, AlertLinkText } from './AlertLink';
import AlertText from './AlertText';
import AlertTitle from './AlertTitle';

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
    const value = useMemo(() => ({ colorScheme }), [colorScheme]);

    styles.useVariants({ colorScheme });

    return (
      <AlertContext.Provider value={value}>
        <Pressable
          ref={ref}
          {...props}
          style={[styles.container, style as ViewProps['style']]}
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
    padding: theme.space['150'],
    flexDirection: 'row',
    borderRadius: theme.borderRadius.md,
    gap: theme.space['100'],
    borderWidth: theme.borderWidth[1],
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
    gap: theme.space['50'],
  },
}));

export default Alert;
