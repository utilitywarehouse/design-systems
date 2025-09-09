/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createIcon } from '@gluestack-ui/icon';
import { useMemo } from 'react';
import { Svg } from 'react-native-svg';
import { withUnistyles } from 'react-native-unistyles';
import { useTheme } from '../../hooks';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import type IconProps from './Icon.props';

const PrimitiveIcon = withUnistyles(
  ({ height, width, fill, color, size, stroke, as: AsComp, ...props }: IconProps) => {
    const sizeProps = useMemo(() => {
      if (size) return { size };
      if (height && width) return { height, width };
      if (height) return { height };
      if (width) return { width };
      return {};
    }, [size, height, width]);

    const { colors, colorMode } = useTheme();
    const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);

    let colorProps = {};
    if (color) {
      colorProps = { ...colorProps, color: colorValue };
    }
    if (stroke) {
      colorProps = { ...colorProps, stroke };
    }
    if (fill) {
      colorProps = { ...colorProps, fill: fill };
    }
    if (AsComp) {
      return <AsComp {...sizeProps} {...colorProps} strokeWidth={0} {...props} />;
    }
    return <Svg height={height} width={width} strokeWidth={0} {...colorProps} {...props} />;
  }
);

PrimitiveIcon.displayName = 'PrimitiveIcon';

export const Icon = createIcon({
  Root: PrimitiveIcon,
});

export default Icon;
