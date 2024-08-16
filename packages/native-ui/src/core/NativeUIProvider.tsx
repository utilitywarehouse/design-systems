import React, { ComponentProps, useEffect } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../config';
import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import {
  // createStyleSheet,
  UnistylesRegistry,
  // useStyles,
  UnistylesRuntime,
} from 'react-native-unistyles';
// import { Text, View } from 'react-native';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });

const NativeUIProvider: React.FC<Omit<ComponentProps<typeof GluestackUIProvider>, 'config'>> = ({
  children,
  ...props
}) => {
  // const { styles, theme } = useStyles(stylesheet, {
  //   colorScheme: 'secondary',
  //   size: 'large',
  // });
  useEffect(() => {
    UnistylesRuntime.setTheme(props.colorMode === 'dark' ? 'dark' : 'light');
  }, [props.colorMode]);
  return (
    <GluestackUIProvider config={config} {...props}>
      {/* <View style={[styles.container, styles.extraStyle('secondary', 'large')]}>
        <Text style={styles.text}>{theme.colorMode}</Text>
      </View> */}
      {children}
    </GluestackUIProvider>
  );
};

// const stylesheet = createStyleSheet(
//   ({ colors, colorMode, fontWeights, fonts, space, fontSizes }) => ({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: colorMode === 'dark' ? colors.apple700 : colors.cyan300,

//       variants: {
//         colorScheme: {
//           primary: {
//             backgroundColor: colors.red300,
//           },
//           secondary: {
//             backgroundColor: colors.cyan500,
//           },
//         },
//         size: {
//           large: {
//             paddingVertical: space[4],
//             paddingHorizontal: space[6],
//           },
//           small: {
//             paddingVertical: space[2],
//             paddingHorizontal: space[4],
//           },
//         },
//         otherGroupName: {},
//       },
//     },
//     extraStyle: (colorScheme: 'primary' | 'secondary', size: 'small' | 'large') => {
//       if (colorScheme === 'primary' && size === 'large') {
//         return {
//           backgroundColor: colors.purple300,
//         };
//       }
//       return {};
//     },
//     text: {
//       fontFamily: fonts.body,
//       fontSize: fontSizes.md,
//       fontWeight: fontWeights.normal,
//       color: colorMode === 'dark' ? colors.cyan1000 : colors.cyan1000,
//     },
//   })
// );

export default NativeUIProvider;
