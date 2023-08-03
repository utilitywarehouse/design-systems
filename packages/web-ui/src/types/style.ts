import { SystemProps as MuiSystemProps, SxProps as MuiSxProps } from '@mui/system';
import { Theme } from '../theme';

export type SystemProps = keyof MuiSystemProps<Theme>;

export interface SxProps {
  sx?: MuiSxProps<Theme>;
}
