import { SystemProps as MuiSystemProps } from '@mui/system';
import { SxProps as MuiSxProps } from '@mui/material/styles';
import { Theme } from '../theme';

export type SystemProps = keyof MuiSystemProps<Theme>;

export interface SxProps {
  sx?: MuiSxProps<Theme>;
}
