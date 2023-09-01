import { BoxProps as MuiBoxProps, ResponsiveStyleValue } from '@mui/system';
import { BoxOwnProps } from '../Box/Box.props';

export interface FlexProps extends Omit<MuiBoxProps, 'display' | keyof BoxOwnProps> {
  display?: ResponsiveStyleValue<'none' | 'flex' | 'inline-flex'>;
  direction?: MuiBoxProps['flexDirection'];
  align?: MuiBoxProps['alignItems'];
  justify?: MuiBoxProps['justifyContent'];
  wrap?: MuiBoxProps['flexWrap'];
  basis?: MuiBoxProps['flexBasis'];
  grow?: MuiBoxProps['flexGrow'];
  shrink?: MuiBoxProps['flexShrink'];
}
