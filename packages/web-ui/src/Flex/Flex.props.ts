import { ResponsiveStyleValue } from '@mui/system';
import { BoxOwnProps, BoxProps } from '../Box/Box.props';

export interface FlexOwnProps {
  display?: ResponsiveStyleValue<'none' | 'flex' | 'inline-flex'>;
  direction?: BoxProps['flexDirection'];
  align?: BoxProps['alignItems'];
  justify?: BoxProps['justifyContent'];
  wrap?: BoxProps['flexWrap'];
  basis?: BoxProps['flexBasis'];
  grow?: BoxProps['flexGrow'];
  shrink?: BoxProps['flexShrink'];
}

export interface FlexProps extends FlexOwnProps, Omit<BoxProps, 'display' | keyof BoxOwnProps> {}
