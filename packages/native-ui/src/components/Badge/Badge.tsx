import React from 'react';
import BadgeProps from './Badge.props';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import { BadgeContext } from './Badge.context';
import BadgeText from './BadgeText';

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  const {
    colorScheme = 'cyan',
    size = 'large',
    strong = false,
    borderless = false,
    style,
    ...rest
  } = props;

  const value = React.useMemo(
    () => ({ colorScheme, size, borderless, strong }),
    [colorScheme, size, borderless, strong]
  );

  const { styles } = useStyles(stylesheet, { colorScheme, strong, size, borderless });

  const childIsText = typeof children === 'string' || typeof children === 'number';

  return (
    <BadgeContext.Provider value={value}>
      <View {...rest} style={[styles.container, styles.extraStyles(colorScheme, strong), style]}>
        {childIsText ? <BadgeText>{children}</BadgeText> : children}
      </View>
    </BadgeContext.Provider>
  );
};

Badge.displayName = 'Badge';

const stylesheet = createStyleSheet(({ colorMode, colors, space, radii }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: space[2],
    borderRadius: radii.sm,
    paddingVertical: space[1],
    alignSelf: 'flex-start',
    gap: space[1],
    variants: {
      colorScheme: {
        cyan: {
          backgroundColor: colorMode === 'dark' ? colors.cyan700 : colors.cyan200,
        },
        red: {
          backgroundColor: colorMode === 'dark' ? colors.red700 : colors.red200,
        },
        green: {
          backgroundColor: colorMode === 'dark' ? colors.green700 : colors.green200,
        },
        gold: {
          backgroundColor: colorMode === 'dark' ? colors.gold700 : colors.gold200,
        },
        grey: {
          backgroundColor: colorMode === 'dark' ? colors.grey700 : colors.grey200,
        },
      },
      borderless: {
        true: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        false: {},
      },
      strong: {
        true: {},
        false: {},
      },
      size: {
        small: {
          paddingVertical: space[0.5],
        },
        large: {
          paddingVertical: space[1],
        },
      },
    },
  },
  extraStyles: (colorScheme: BadgeProps['colorScheme'], strong: BadgeProps['strong']) => {
    if (colorScheme === 'cyan' && strong) {
      return {
        backgroundColor: colorMode === 'dark' ? colors.cyan700 : colors.cyan600,
      };
    }
    if (colorScheme === 'red' && strong) {
      return {
        backgroundColor: colorMode === 'dark' ? colors.red700 : colors.red600,
      };
    }
    if (colorScheme === 'green' && strong) {
      return {
        backgroundColor: colorMode === 'dark' ? colors.green700 : colors.green600,
      };
    }
    if (colorScheme === 'gold' && strong) {
      return {
        backgroundColor: colorMode === 'dark' ? colors.gold700 : colors.gold300,
      };
    }
    if (colorScheme === 'grey' && strong) {
      return {
        backgroundColor: colorMode === 'dark' ? colors.grey700 : colors.grey600,
      };
    }
    return {};
  },
}));

export default Badge;
