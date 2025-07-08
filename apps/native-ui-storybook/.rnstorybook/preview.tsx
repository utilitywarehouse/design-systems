import { colorsCommon, colorsDark } from '@utilitywarehouse/colour-system';
import React, { useEffect, useState } from 'react';
import { Appearance, ScrollView, View } from 'react-native';
import { UnistylesRuntime } from 'react-native-unistyles';

/** @type{import("@storybook/react-vite").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters, args }) => {
      // const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
      // const { colorMode } = useTheme();
      // const [args, updateArgs] = useArgs();
      // const [themeColourMode, setColourMode] = useState<'dark' | 'light'>(theme);

      // useEffect(() => {
      //   Linking.addEventListener('url', event => {
      //     const url = new URL(event.url ?? '');
      //     const params = new URLSearchParams(url.search);
      //     const { colourMode, storyId, ...rest } = Object.fromEntries(params.entries());

      //     // Convert "true" and "false" strings in args to boolean values
      //     const convertedArgs = Object.fromEntries(
      //       Object.entries(rest).map(([key, value]) => [
      //         key,
      //         value === 'true' ? true : value === 'false' ? false : value,
      //       ])
      //     );

      //     navigate({ storyId });
      //     updateArgs({
      //       ...args,
      //       ...convertedArgs,
      //     });
      //     // if (colourMode) {
      //     //   setColourMode(colourMode as 'dark' | 'light');
      //     //   UnistylesRuntime.setTheme(colourMode as 'dark' | 'light');
      //     // }
      //   });
      //   return () => Linking.removeAllListeners('url');
      // }, []);

      const [colorMode, setColorMode] = useState<'dark' | 'light'>(() => {
        const scheme = Appearance.getColorScheme();
        return scheme === 'dark' ? 'dark' : 'light';
      });

      console.log('Color mode:', colorMode);
      console.log('Appearance:', Appearance.getColorScheme());

      useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        const theme = colorScheme === 'dark' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(theme);
        setColorMode(theme);

        const listener = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
          console.log('Color scheme changed:', newColorScheme);
          const newTheme = newColorScheme === 'dark' ? 'dark' : 'light';
          UnistylesRuntime.setTheme(newTheme);
          setColorMode(newTheme);
        });
        return () => {
          listener.remove();
        };
      }, []);

      const bg = (() => {
        if (parameters.noBackground === true) {
          return undefined;
        }
        if (args.inverted) {
          return colorsCommon.brandMidnight;
        }
        return colorMode === 'dark' ? colorsDark.grey100 : colorsCommon.brandWhite;
      })();

      console.log(bg);

      // console.log(colorMode)

      return parameters.noScroll ? (
        <View
          style={{
            flex: 1,
            backgroundColor: bg,
          }}
        >
          <Story />
        </View>
      ) : (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: bg,
          }}
          contentContainerStyle={{ padding: 8 }}
        >
          <Story />
        </ScrollView>
      );
    },
  ],
};

export default preview;
