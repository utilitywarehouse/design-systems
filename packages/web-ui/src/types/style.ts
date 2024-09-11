import { Theme } from '../theme';
import { SxProps as MuiSxProps, SystemProps as MuiSystemProps } from '@mui/system';

export type SystemProps = keyof MuiSystemProps<Theme>;

export type PropsWithSx<P = unknown> = P & {
  sx?: MuiSxProps<Theme>;
};
