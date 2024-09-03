import type { ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  style?: ViewStyle;
}

export default IconProps;
