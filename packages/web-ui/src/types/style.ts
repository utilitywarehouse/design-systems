import {
  SystemProps as MuiSystemProps,
  SxProps as MuiSxProps,
  BoxProps as MuiBoxProps,
} from '@mui/system';
import { Theme } from '../theme';

export type SystemProps = keyof MuiSystemProps<Theme>;

export interface SxProps {
  sx?: MuiSxProps<Theme>;
}

export interface ClassNameProps {
  className?: MuiBoxProps['className'];
}

export type PropsWithSx<P = unknown> = P & SxProps;
export type PropsWithStyleOverrides<P = unknown> = P & SxProps & ClassNameProps;
