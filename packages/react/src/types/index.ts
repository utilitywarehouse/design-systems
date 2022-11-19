import { SystemProps as MuiSystemProps } from '@mui/system';
import { Theme } from '../theme';

export type Breakpoint = 'desktop' | 'tablet' | 'mobile';
export type SystemProps = keyof MuiSystemProps<Theme>;
