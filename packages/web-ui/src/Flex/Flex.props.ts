import {
  BoxProps as MuiBoxProps,
  ResponsiveStyleValue,
  BoxTypeMap as MuiBoxTypeMap,
} from '@mui/system';
import { OverrideProps } from '@mui/types';
import { Theme } from '../theme';

export interface FlexOwnProps extends Omit<MuiBoxProps, 'display'> {
  display?: ResponsiveStyleValue<'none' | 'flex' | 'inline-flex'>;
  direction?: MuiBoxProps['flexDirection'];
  align?: MuiBoxProps['alignItems'];
  justify?: MuiBoxProps['justifyContent'];
  wrap?: MuiBoxProps['flexWrap'];
  basis?: MuiBoxProps['flexBasis'];
  grow?: MuiBoxProps['flexGrow'];
  shrink?: MuiBoxProps['flexShrink'];
}

export type FlexProps<
  RootComponent extends React.ElementType<any> = MuiBoxTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<
  MuiBoxTypeMap<FlexOwnProps & AdditionalProps, RootComponent, Theme>,
  RootComponent
>;
