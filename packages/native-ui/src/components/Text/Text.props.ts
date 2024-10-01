import type { TextProps as RNTextProps, TextStyle } from 'react-native';
import type { ColorValue } from '../../core/types';

interface TextProps extends RNTextProps {
  size?: 'xs' | 'sm' | 'md';
  highlight?: boolean;
  strikeThrough?: boolean;
  underline?: boolean;
  truncated?: boolean;
  bold?: boolean;
  italic?: boolean;
  color?: ColorValue;
  textTransform?: TextStyle['textTransform'];
}

export default TextProps;
