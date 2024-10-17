/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
/* eslint-disable  react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { Spinner } from '../Spinner';
import type { SpinnerProps } from '../Spinner';
import { useStyles } from 'react-native-unistyles';
import { useIconButtonContext } from './IconButton.context';

const IconButtonSpinner: React.FC<SpinnerProps> = ({ color = '', ...props }) => {
  const { colorScheme, variant, disabled, inverted } = useIconButtonContext();
  const {
    theme: { colors, colorMode },
  } = useStyles();

  const colorProp = useMemo(() => {
    let colorProp = '';
    const light = colorMode === 'light';
    if (colorScheme) {
      if (variant === 'solid') {
        colorProp = light
          ? colors[colorScheme === 'cyan' ? 'cyan1000' : 'white']
          : colors[`${colorScheme}50`];
        if (disabled) {
          colorProp = light ? colors[`${colorScheme}300`] : colors.grey400;
        }
        if (inverted && light && disabled) {
          colorProp = colors[`${colorScheme}100`];
        }
      }
      if (variant === 'outline') {
        colorProp = light
          ? // @ts-expect-error - TS doesn't like the dynamic key here
            colors[`${colorScheme}${colorScheme === 'cyan' ? 1000 : 900}`]
          : colors[`${colorScheme}900`];
        if (disabled) {
          colorProp = light ? colors[`${colorScheme}300`] : colors.grey400;
        }
        if (inverted && light) {
          colorProp = colors[`${colorScheme}100`];
        }
        if (inverted && light && disabled) {
          colorProp = colors[`${colorScheme}600`];
        }
      }

      if (variant === 'ghost') {
        colorProp = light
          ? colors[`${colorScheme}${['red', 'cyan'].includes(colorScheme) ? 600 : 700}`]
          : colors[`${colorScheme}600`];
        if (disabled) {
          colorProp = light ? colors[`${colorScheme}300`] : colors.grey400;
        }
        if (inverted && light) {
          colorProp = colors[`${colorScheme}400`];
        }
        if (inverted && light && disabled) {
          colorProp = colors[`${colorScheme}600`];
        }
      }
    }
    return colorProp;
  }, [color, colorMode, variant, disabled, inverted, colorScheme]);

  return <Spinner {...props} size="xs" color={colorProp} />;
};

export default IconButtonSpinner;
