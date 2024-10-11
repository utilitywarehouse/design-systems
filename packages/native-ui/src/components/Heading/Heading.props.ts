import type { TextProps, TextStyle } from 'react-native';
import type { ColorValue } from '../../types';

interface HeadingProps extends TextProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  strikeThrough?: boolean;
  underline?: boolean;
  truncated?: boolean;
  color?: ColorValue;
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
  textAlignVertical?: TextStyle['textAlignVertical'];
}

export default HeadingProps;
